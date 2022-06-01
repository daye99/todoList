/*
 * @Author: wenzhenjin
 * @Date: 2022-05-09 10:54:42
 * @LastEditTime: 2022-05-19 14:52:56
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/HOC/index.js
 */
import React from 'react'

let store = null

export class Provider extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.store)
        store = props.store
    }
    render() {
        return this.props.children
    }
}

const HOC = (Com) => {
    return React.forwardRef((props, ref) => {
        class HOC_COM extends React.Component {
            constructor(props) {
                super(props)
                this.state = store.getState()
            }
            render() {
                const props = {
                    ...this.state,
                    dispatch: store.dispatch,
                }
                // const dispatch = store && store.dispatch
                // const number = store && store.getState().number
                return <Com {...props} ref={ref} />
            }
            componentDidMount() {
                this.unsubscribe = store.subscribe(() => {
                    this.setState(store.getState())
                })
            }
            componentWillUnmount() {
                this.unsubscribe()
            }
        }
        return <HOC_COM />
    })
}

export const connect = HOC
