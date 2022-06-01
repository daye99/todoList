/*
 * @Author: wenzhenjin
 * @Date: 2022-04-11 18:44:15
 * @LastEditTime: 2022-04-14 11:33:20
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src3/components/Radio.js
 */
import React, { Component, createContext, createRef } from 'react'
import PropTypes from 'prop-types'
import './Radio.css'

const { Provider, Consumer } = createContext()
const childCom = createRef()

export const Button = ({value, children}) => {
    return (
        <Consumer>
            {({ selectValue, handleChange }) => (
                <div className={`radio ${value === selectValue ? 'active' : ''}`} onClick={handleChange(value)} ref={childCom}>
                    {children}
                </div>
            )}
        </Consumer>
    )
}

export class Group extends Component {
    constructor(props) {
        super(props)
        console.log(props.children[0].props.value)
        this.state = {
            selectValue: this.props.children[0].props.value,
        }
    }
    render() {
        const { selectValue } = this.state
        return (
            <div className='radio-group'>
                <Provider value={{ selectValue, handleChange: this.handleChangeAction }}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props)
    }
    handleChangeAction = (val) => () => {
        this.setState({
            selectValue: val,
        })
    }
    static propTypes = {
        value: PropTypes.oneOf(['large', 'default', 'small']),
        onChange: PropTypes.func,
    }
    static defaultProps = {
        value: 'default',
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Button,
    Group,
}
