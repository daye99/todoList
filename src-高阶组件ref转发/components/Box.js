/*
 * @Author: wenzhenjin
 * @Date: 2022-05-07 17:47:11
 * @LastEditTime: 2022-05-19 09:45:56
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/components/Box.js
 */
import React, { Component } from 'react'
import { connect } from '../HOC'

class Box extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <>
                <div className='box' >
                    Box
                </div>
                <h4>number:{this.props.number}</h4>
                <button
                    onClick={() => {
                        this.props.dispatch({ type: 'modify', value: '200' })
                    }}
                >
                    修改id
                </button>
            </>
        )
    }
    
}

export default connect(Box)
