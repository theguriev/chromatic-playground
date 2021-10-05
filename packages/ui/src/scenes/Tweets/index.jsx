import React from 'react'
import PropTypes from 'prop-types'
import { applyHook } from '@react-twitter/dumb'
import { useTweetsThing } from '@react-twitter/things'

import './style.scoped.css'
import { Tweet } from '@/components'

export const useTweets = () => {
    const {
        data, post, del, refetch
    } = useTweetsThing({
        options: {
            limit: 10,
            page: 1
        },
        initialData: useTweetsThing.initialData
    })
    return {
        tweets: data,
        post,
        del,
        refetch
    }
}

export const TweetsRepresentation = ({
    tweets
}) => tweets.map(
    tweet => <Tweet key={tweet.username + tweet.id} {...tweet} />
)

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

export const Tweets = applyHook(TweetsRepresentation, useTweets)
