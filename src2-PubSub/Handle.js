/*
 * @Author: wenzhenjin
 * @Date: 2022-04-07 17:55:51
 * @LastEditTime: 2022-04-07 18:02:48
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/Handle.js
 */

import React, { Component } from 'react'

export default class Handle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tag: [
                { val: 'all', name: '全部' },
                { val: 'todo', name: '未完成' },
                { val: 'finished', name: '完成' },
            ],
        }
    }
    render() {
        return (
            <>
                {this.state.tag.map((item) => (
                    <button key={item.val} onClick={this.handleClick.bind(this, item.val)}>
                        {item.name}
                    </button>
                ))}
            </>
        )
    }
    handleClick(val) {
        this.props.onChange(val)
    }
}
