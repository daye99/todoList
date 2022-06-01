/*
 * @Author: wenzhenjin
 * @Date: 2022-04-07 15:57:18
 * @LastEditTime: 2022-04-07 17:23:22
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/List.js
 */
import React, { Component } from 'react'

export default class List extends Component {
    
    render() {
        return (
            <ul className='list'>
                {this.props.list.map((item, index) => (
                    <li key={index} style={{ textDecoration: item.status === 'finished' ? 'line-through' : '' }}>
                        {item.name}------{item.status}
                        <button onClick={this.finshAction.bind(this, index)}>完成</button>
                        {/* <button onClick={this.handleDeleteEvent.bind(this, index)}>删除</button> */}
                    </li>
                ))}
            </ul>
        )
    }
    finshAction(index) {
        this.props.onFinshed(index)
    }
}
