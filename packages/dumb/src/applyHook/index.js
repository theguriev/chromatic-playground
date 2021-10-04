import { createElement } from 'react'
import { useThingContext } from '@redux-things/core'

export const applyHook = (
    Component,
    hook,
    displayName
) => {
    const Applied = props => {
        const hookResult = hook(props)
        const mergedProps = { ...hookResult, ...props }
        return createElement(
            Component,
            mergedProps,
            mergedProps.children
        )
    }

    if (typeof Component === 'function') {
        Applied.displayName = Component.name.replace('Representation', '')
    }

    Applied.displayName = displayName || Applied.displayName

    return Applied
}
