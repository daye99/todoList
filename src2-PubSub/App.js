/*
 * @Author: wenzhenjin
 * @Date: 2022-04-07 11:57:20
 * @LastEditTime: 2022-04-07 18:57:33
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/App.js
 */
import React, { Component } from 'react'
import AddTask from './AddTask'
import List from './List'
import Handle from './Handle'

import PubSub from 'pubsub-js'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{ name: 'awdawd', status: 'todo' }],
            tag: 'all',
        }
    }
    render() {
        const newArr = this.state.list.filter((item) => this.state.tag === 'all' || item.status === this.state.tag)

        return (
            // <>
            //     <AddTask onAdd={this.handleAddEvent.bind(this)} />
            //     <List list={newArr} onFinshed={this.handleFinishEvent.bind(this)} />
            //     <Handle onChange={this.handleTagChange.bind(this)} val={this.state.tag} />
            // </>
            <>
                <AddTask />
                <List />
                <Handle onChange={this.handleTagChange.bind(this)} val={this.state.tag} />
            </>
        )
    }
    componentDidMount() {
        PubSub.publish('list', this.state.list)

        this.addToken = PubSub.subscribe('add', (msg, taskVal) => {
            this.setState({
                list: [
                    {
                        name: taskVal,
                        status: 'todo',
                    },
                    ...this.state.list,
                ],
            })
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.addToken)
    }
    // handleAddEvent(taskVal) {
    //     this.setState({
    //         list: [{ name: taskVal, status: 'todo' }, ...this.state.list],
    //     })
    // }
    // 完成
    // handleFinishEvent(index) {
    //     this.setState({
    //         list: this.state.list.map((value, i) =>
    //             index === i
    //                 ? {
    //                       ...value,
    //                       status: 'finished',
    //                   }
    //                 : value
    //         ),
    //     })
    // }
    handleTagChange(val) {
        this.setState({
            tag: val,
        })
    }
}
