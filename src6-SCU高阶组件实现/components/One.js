/*
 * @Author: wenzhenjin
 * @Date: 2022-05-19 17:31:55
 * @LastEditTime: 2022-05-20 14:08:40
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/components/One.js
 */
import React, { Component } from 'react'
import One1 from './One1'
import One2 from './One2'

export default class One extends Component {
    state = {
        count: 0,
    }
    render() {
        console.log('One render')
        return (
            <div className='box'>
                One
                <button
                    onClick={() => {
                        this.setState({ count: this.state.count + 2 })
                    }}
                >
                    {this.state.count}
                </button>
                <One1 />
                <One2 />
            </div>
        )
    }
}
