/*
 * @Author: wenzhenjin
 * @Date: 2022-05-06 11:51:12
 * @LastEditTime: 2022-05-07 15:50:06
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/components/User.js
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MODIFY_ID } from '../store/types'

class User extends Component {
    render() {
        return <div className='box'>User</div>
    }
}

export default connect(
    (state, props) => {
        console.log('最新的state', state)
        return {}
    },
    (dispatch, props) => ({
        modifyId() {
            dispatch({
                type: MODIFY_ID,
                value: 1000,
            })
        },
    })
)(User)
