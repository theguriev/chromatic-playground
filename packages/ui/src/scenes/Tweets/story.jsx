import React from 'react'
import { Provider } from 'react-redux'
import { Tweets } from '.'

export default {
    title: 'Scenes/Tweets',
    component: Tweets
}

export const Primary = () => (
    <Tweets />
)
