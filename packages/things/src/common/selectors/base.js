import { createSelector } from 'reselect'

export const thingSelector = (state, { key }) => state?.[key]

export const dataSelector = createSelector(
    thingSelector,
    state => state?.data
)

export const hashSelector = (_, { hash }) => hash

export const requestsSelector = createSelector(
    dataSelector,
    state => state?.requests
)

export const requestSelector = createSelector(
    requestsSelector,
    hashSelector,
    (requests, hash) => requests?.[hash]
)
