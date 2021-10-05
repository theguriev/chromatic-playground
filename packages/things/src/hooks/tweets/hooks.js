import { useThing, useMutation } from '@redux-things/core'
import { objectHash } from '@redux-things/dumb'
import { omit } from 'lodash-es'
import { fetchFn, postFn, deleteFn } from './services'
import { fulfilled, deleteFulfilled } from './reducers'
import { selector } from './selectors'
import { initialData } from './data'

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
                objectToHashFn: object => objectHash(omit(object, ['isRefetch'])),
                ...props
            }
        )
    }
}

useTweetsThing.KEY = KEY
useTweetsThing.initialData = initialData
