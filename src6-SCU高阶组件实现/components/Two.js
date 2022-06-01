/*
 * @Author: wenzhenjin
 * @Date: 2022-05-19 17:32:33
 * @LastEditTime: 2022-05-20 11:29:53
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/components/Two.js
 */
import React, { Component } from 'react'
import Two1 from './Two1'
import Two2 from './Two2'
import SCU from '../SCU'

class Two extends Component {
    state = {
        count: 0,
    }
    render() {
        console.log('Two render')
        return (
            <div className='box'>
                Two
                <button onClick={() => {this.setState({count: this.state.count + 1})}}>{this.state.count}</button>
                <Two1 />
                <Two2 />
            </div>
        )
    }
}
export default SCU(Two)
