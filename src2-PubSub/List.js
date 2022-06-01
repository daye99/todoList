/*
 * @Author: wenzhenjin
 * @Date: 2022-04-07 15:57:18
 * @LastEditTime: 2022-04-07 18:59:52
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/List.js
 */
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {
    render() {
        return (
            <ul className='list'>
                {this.list.map((item, index) => (
                    <li key={index} style={{ textDecoration: item.status === 'finished' ? 'line-through' : '' }}>
                        {item.name}------{item.status}
                        <button onClick={this.finshAction.bind(this, index)}>完成</button>
                    </li>
                ))}
            </ul>
        )
    }
    componentDidMount() {
        this.listToken = PubSub.subscribe('list', (name, list) => {
            console.log(list)
            this.list = list || []
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.listToken)
    }
    finshAction(index) {
        this.props.onFinshed(index)
    }
}
