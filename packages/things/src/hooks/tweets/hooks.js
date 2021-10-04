import { useContext } from 'react'
import { useThing, useMutation, ThingContext } from '@redux-things/core'
import { fetchFn, postFn, deleteFn } from './services'
import { fulfilled, deleteFulfilled } from './reducers'
import { selector } from './selectors'

const KEY = 'TTweets'

export const useTweetPost = () => useMutation(
    postFn,
    {
        mutationKey: `${KEY}/post`
    }
)

export const useTweetDelete = () => useMutation(
    deleteFn,
    {
        mutationKey: `${KEY}/delete`
    }
)

export const useTweetsThing = (props = {}) => {
    const { mutate: post } = useTweetPost()
    const { mutate: del } = useTweetDelete()
    const ctx = useContext(ThingContext)
    console.log('ctx', ctx)
    return {
        post,
        del,
        ...useThing(
            KEY,
            fetchFn,
            {
                initialState: {
                    helo: 'world'
                },
                reducer: {
                    dictionary: {
                        fulfilled,
                        'delete/fulfilled': deleteFulfilled
                    }
                },
                selector,
                ...props
            }
        )
    }
}
