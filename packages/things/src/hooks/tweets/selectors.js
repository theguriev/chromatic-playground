import { createSelector } from 'reselect'
import { requestSelector, dataSelector } from '@/common/selectors'

const extractEntities = entities => (acc, id) => ([
    ...acc,
    ...(entities[id] ? [entities[id]] : [])
])

const entitiesSelector = createSelector(
    dataSelector,
    state => state?.entities
)

export const selector = createSelector(
    requestSelector,
    entitiesSelector,
    (request, entities) => request?.reduce(
        extractEntities(entities),
        []
    )
)
