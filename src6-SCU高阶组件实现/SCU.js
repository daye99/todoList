/*
 * @Author: wenzhenjin
 * @Date: 2022-05-19 17:25:15
 * @LastEditTime: 2022-05-27 10:27:37
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/SCU.js
 */
import React, { Component } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (Com) => {
    return class SCU extends Component {
        render() {
            return <Com {...this.props} />
        }
        compareObject(newObj, oldObj) {
            const index = Object.keys(newObj).findIndex((key) => {
                return newObj[key] !== oldObj[key]
            })
            return index < 0
        }
        shouldComponentUpdate(props, state) {
            console.log(this.props /*旧值*/, props /*新值*/)
            console.log(this.state /*旧值*/, state /*新值*/)
            return !(this.compareObject(props, this.props) && this.compareObject(state, this.state))
        }
    }
}
