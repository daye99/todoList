/*
 * @Author: wenzhenjin
 * @Date: 2022-05-06 11:49:58
 * @LastEditTime: 2022-05-06 11:59:22
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/App.js
 */
import React, { Component } from 'react'
import User from './components/User'
import Order from './components/Order'
import Cart from './components/Cart'
import Address from './components/Address'

export default class App extends Component {
    render() {
        return (
            <div>
                <User />
                <Order />
                <Cart />
                <Address />
            </div>
        )
    }
}
