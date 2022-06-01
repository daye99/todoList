/*
 * @Author: wenzhenjin
 * @Date: 2022-04-11 18:22:57
 * @LastEditTime: 2022-04-12 14:31:37
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/App.js
 */
import React, { Component } from 'react'
import Radio from './components/Radio'

export default class App extends Component {
    render() {
        return (
            <div>
                <Radio.Group onChange={this.handleSizeChange}>
                    <Radio.Button value='large'>Large</Radio.Button>
                    <Radio.Button value='default'>
                        Default
                    </Radio.Button>
                    <Radio.Button value='small'>Small</Radio.Button>
                </Radio.Group>
            </div>
        )
    }
    handleSizeChange = () => {
        console.log('handleSizeChange start...')
    }
}
