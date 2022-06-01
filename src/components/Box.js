import React, { Component, useContext } from 'react'

import ColorContext from '../context/ColorContext'
import BorderContext from '../context/BorderContext'

export default function Box() {
    // return (
    //     <ColorContext.Consumer>
    //         {(color) => (
    //             <BorderContext.Consumer>
    //                 {(border) => (
    //                     <div
    //                         style={{
    //                             color: color,
    //                             border: border,
    //                             width: '100px',
    //                             height: '100px',
    //                             backgroundColor: 'red',
    //                         }}
    //                     ></div>
    //                 )}
    //             </BorderContext.Consumer>
    //         )}
    //     </ColorContext.Consumer>
    // )

    const color = useContext(ColorContext)
    const border = useContext(BorderContext)

    return <div style={{ 
                        color: color,
                        border: border,
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'red'
                    }}></div>
}
