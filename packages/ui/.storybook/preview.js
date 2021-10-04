import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addDecorator } from '@storybook/react'
import { ThingContext, MutationContext, setupAsyncReducers } from '@redux-things/core'
import '@/assets/css/global.css'
import '@/assets/css/reset.css'
import '@/assets/css/variables.css'

const store = setupAsyncReducers(
    createStore(
        (v) => v,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
    {} // Here will be your static reducers
)
/**
 * JUST FOR EXAMPLE
 * Of course, in real life, the logic would be more complicated than just adding a base url
 */
const apiClient = (url, options) => fetch(`http://localhost:3000/${url}`, options).then(res => res.json())

const namespace = '[things]'

const StoreDecorator = (StoryFn) => (
    <MutationContext.Provider value={{
        apiClient,
        namespace
    }}>
        <ThingContext.Provider value={{
            apiClient,
            namespace
        }}>
            <Provider store={store}>
                <StoryFn />
            </Provider>
        </ThingContext.Provider>
    </MutationContext.Provider>
)

addDecorator(StoreDecorator)
