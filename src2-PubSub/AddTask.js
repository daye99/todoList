/*
 * @Author: wenzhenjin
 * @Date: 2022-04-07 15:51:43
 * @LastEditTime: 2022-04-11 15:04:08
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/AddTask.js
 */
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskVal: '',
        }
    }
    render() {
        return (
            <header className='input'>
                <input
                    type='text'
                    placeholder='请输入任务'
                    value={this.state.taskVal}
                    onChange={this.handleTaskValChange.bind(this)}
                />
                <button onClick={this.addAction.bind(this)}>添加</button>
                
            </header>
        )
    }
    // 双向绑定
    handleTaskValChange(ev) {
        this.setState({
            taskVal: ev.target.value,
        })
    }
    addAction() {
        PubSub.publish('add', this.state.taskVal)
    }
}
