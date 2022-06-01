
import React, { Component } from 'react'
import Notify from './utils/Notify'

export default class App extends Component {
    render() {
        return (
            <div>
                <button onClick={this.btnAction}>提示</button>
            </div>
        )
    }
    btnAction() {
        Notify('常规提示')
    }
}
