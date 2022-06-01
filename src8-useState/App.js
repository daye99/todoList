/*
 * @Author: wenzhenjin
 * @Date: 2022-05-30 10:56:44
 * @LastEditTime: 2022-05-30 12:01:20
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/App.js
 */
import React, { Component } from 'react'
import One from './components/One'
import Two from './components/Two'


export default class App extends Component {
    render() {
        return <div>
            <One />
            <hr />
            <Two />
        </div>
    }
}
