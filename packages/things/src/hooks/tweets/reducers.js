import { set } from '@redux-things/dumb'
import { omit } from 'lodash-es'

const getID = ({ id }) => id
const reduceEntitie = (acc, el) => ({
    ...acc,
    [el.id]: el
})

export const fulfilled = (state, { payload, hash }) => {
    const ids = payload.map(getID)
    const newEntities = payload.reduce(
        reduceEntitie,
        Object.create(null)
    )
    const oldEntities = state?.data?.entities || {}
    const stateWithIDs = set(state, `data.requests.${hash}`, ids)
    return set(
        stateWithIDs,
        'data.entities',
        {
            ...oldEntities,
            ...newEntities
        }
    )
}

export const deleteFulfilled = (state, { options: id }) => set(state, 'data.entities', omit(state?.data?.entities || {}, [id]))
