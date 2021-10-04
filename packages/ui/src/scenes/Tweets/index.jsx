import React from 'react'
import PropTypes from 'prop-types'
import { applyHook } from '@react-twitter/dumb'
import { useTweetsThing } from '@react-twitter/things'
import { useThingContext } from '@redux-things/core'

import './style.scoped.css'
import { Tweet } from '@/components'

export const useTweets = () => {
    const {
        data, post, del, refetch
    } = useTweetsThing({
        options: {
            limit: 10, page: 1
        }
    })
    return {
        tweets: []
    }
}

export const TweetsRepresentation = ({
    tweets
}) => {
    console.log('tweets', useTweetsThing({
        options: {
            limit: 10, page: 1
        }
    }))
    return (
        <div>Hello</div>
    )
}

TweetsRepresentation.defaultProps = {
    tweets: []
}

TweetsRepresentation.propTypes = {
    tweets: PropTypes.arrayOf(PropTypes.shape({
        tweet: PropTypes.string,
        avatar: PropTypes.string,
        displayName: PropTypes.string,
        username: PropTypes.string,
        isLoading: PropTypes.bool
    }))
}

export const Tweets = TweetsRepresentation
