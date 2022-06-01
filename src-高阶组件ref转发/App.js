/*
 * @Author: wenzhenjin
 * @Date: 2022-05-06 11:49:58
 * @LastEditTime: 2022-05-19 14:49:44
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/App.js
 */
import React, { Component } from 'react'

import Box from './components/Box'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.box = React.createRef()
        this.box.current = 'test'
    }
    render() {
        return (
            <div className='app'>
                <Box ref={this.box} />
            </div>
        )
    }
    componentDidMount() {
        console.log(this.box)
    }
}
