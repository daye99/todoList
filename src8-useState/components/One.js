/*
 * @Author: wenzhenjin
 * @Date: 2022-05-30 11:55:55
 * @LastEditTime: 2022-05-30 12:00:16
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/components/One.js
 */
import React, { Component } from 'react'

export default class One extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1,
        }
    }
    render() {
        return (
            <>
                <h1>One</h1>
                <div>{this.state.value}</div>
                <br />
                <button
                    onClick={() => {
                        this.setState({ value: this.state.value + 1 })
                    }}
                >按钮</button>
            </>
        )
    }
}
