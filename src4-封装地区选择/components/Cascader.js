/*
 * @Author: wenzhenjin
 * @Date: 2022-04-13 17:54:53
 * @LastEditTime: 2022-04-14 12:18:25
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/components/Cascader.js
 */
import React, { Component, createRef } from 'react'
import './cascader.css'

export default class Cascader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectId: null,
        }
        this.childCascader = createRef()
    }
    render() {
        const {
            data: { name, values },
        } = this.props
        const { selectId } = this.state
        return (
            <>
                <div className='box'>
                    <h3>{name}</h3>
                    <ul>
                        {Object.entries(values).map(([key, value]) => {
                            return (
                                <li
                                    key={key}
                                    className={selectId === key ? 'active' : ''}
                                    onClick={this.selectIdAction(key)}
                                >
                                    {value.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {selectId 
                && values[selectId] 
                && values[selectId].values 
                && (
                    <Cascader data={values[selectId]} ref={this.childCascader} />
                )}
            </>
        )
    }
    // 获取ref有两种方式
    // 1. 在constructor中创建ref        this.childCascader = createRef()    ref={this.childCascader}
    // 2. 组件作为ref的参数传入           ref(c => {this.child = c})          console.log(this.child)
    selectIdAction = (id) => () => {
        this.setState(
            {
                selectId: id,
            },
            // setState回调是在组件重新渲染之后执行的，即在componentDidUpdate之后执行
            // <Cascader data={values[selectId]} ref={(c) => (this.childCascader = c)} />
            // 
            () => {
                
                console.log(this.childCascader.current)
                this.childCascader.current && this.childCascader.current.setState({
                    selectId: null,
                })
            }
        )
    }
}
