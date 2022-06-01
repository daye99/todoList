/*
 * @Author: wenzhenjin
 * @Date: 2022-05-06 16:27:20
 * @LastEditTime: 2022-05-07 15:49:15
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/store/userReducer.js
 */

import { MODIFY_ID } from './types'
const initialState = {
    likes: [],
    userId: '',
}
const reducer = (state = initialState, action) => {
    console.log('userReducer start')
    switch (action.type) {
        case MODIFY_ID:
            return {
                ...state,
                userId: action.value,
            }
        default:
            return state
    }
}
export default reducer
