import React from 'react'
import PropTypes from 'prop-types'
import './style.scoped.css'

export const Tweet = ({
    tweet,
    avatar,
    displayName,
    username,
    isLoading
}) => (
    <div className="tweet">
        <div className="author">
            <div className={`avatar ${isLoading ? 'isLoading' : ''}`}>
                <img src={avatar} alt={displayName} />
            </div>
            <div className="author-titile">
                <span className={`name ${isLoading ? 'isLoading' : ''}`}>{displayName}</span>
                <span className={`username ${isLoading ? 'isLoading' : ''}`}>{username}</span>
            </div>
        </div>
        <div className={`tweet-content ${isLoading ? 'isLoading' : ''}`}>{tweet}</div>
    </div>
)

Tweet.defaultProps = {
    tweet: '',
    avatar: '',
    displayName: '',
    username: '',
    isLoading: false
}

Tweet.propTypes = {
    tweet: PropTypes.string,
    avatar: PropTypes.string,
    displayName: PropTypes.string,
    username: PropTypes.string,
    isLoading: PropTypes.bool
}

export default Tweet
