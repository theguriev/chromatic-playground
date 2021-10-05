import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { applyHook } from '@react-twitter/dumb'
import { useTweetsThing } from '@react-twitter/things'

import './style.scoped.css'
import { Button, Textarea } from '@/components'
import { Tweets } from '@/scenes'

const useTwitter = () => {
    const { post, refetch } = useTweetsThing({
        options: {
            limit: 10,
            page: 1
        }
    })
    // const { mutate: sendDelRequest } = useTweetDelete()
    const [text, setText] = useState('')

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSend = useCallback(() => {
        post({
            displayName: 'Eugen Guriev',
            username: 'eugenguriev',
            email: 'cdeverock0@uol.com.br',
            tweet: text,
            avatar: 'https://avatars.dicebear.com/api/avataaars/eugenguriev.svg'
        }).then(
            () => refetch()
        )
    }, [text, post])

    return {
        text,
        handleChange,
        handleSend
    }
}

export const TwitterRepresentation = ({
    text,
    handleChange,
    handleSend
}) => (
    <div className="content">
        <Textarea onChange={handleChange} className="textarea-row" rows="5" value={text} />
        <Button onClick={handleSend} className="primary button-row">Send</Button>
        <Tweets />
    </div>
)

// TweetsRepresentation.defaultProps = {
//     tweets: []
// }

// TweetsRepresentation.propTypes = {
//     tweets: PropTypes.arrayOf(PropTypes.shape({
//         tweet: PropTypes.string,
//         avatar: PropTypes.string,
//         displayName: PropTypes.string,
//         username: PropTypes.string,
//         isLoading: PropTypes.bool
//     }))
// }

export const Twitter = applyHook(TwitterRepresentation, useTwitter)
