import { legacy_createStore as createStore, compose } from 'redux'

const initialState = {
    number: 100,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'modify':
            return {
                ...state,
                number: action.value,
            }
        default:
            return state
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducer, composeEnhancers())
