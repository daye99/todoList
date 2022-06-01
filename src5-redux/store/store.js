/*
 * @Author: wenzhenjin
 * @Date: 2022-05-06 15:20:34
 * @LastEditTime: 2022-05-06 17:06:04
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/store/store.js
 */
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './userReducer'
import cartReducer from './cartReducer'

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// }
const reducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
})

export default createStore(reducer, applyMiddleware(thunk))
