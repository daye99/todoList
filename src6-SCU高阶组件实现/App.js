import React, { Component } from 'react'
import One from './components/One'
import Two from './components/Two'

export default class App extends Component {
    render() {
        return (
            <div>
                App
                <One />
                <Two />
            </div>
        )
    }
}
