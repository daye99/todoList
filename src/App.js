import React, { Component } from 'react'
import ColorContext from './context/ColorContext'
import BorderContext from './context/BorderContext'

import Box from './components/Box'
export default class App extends Component {
    render() {
        return (
            <ColorContext.Provider value={'#913'}>
                <BorderContext.Provider value={'2px solid blue'}>
                    <Box />
                </BorderContext.Provider>
            </ColorContext.Provider>
        )
    }
}
