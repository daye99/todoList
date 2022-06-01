/*
 * @Author: wenzhenjin
 * @Date: 2022-05-30 11:56:21
 * @LastEditTime: 2022-05-31 10:55:03
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/components/Two.js
 */
import React, { useState, useEffect, useRef } from 'react'

const arr = []
export default function Two() {
    const [value, setValue] = useState(0)
    // useEffect(() => {
    //     console.log('useEffect start')

    //     return () => {
    //         console.log('useEffect return')
    //     }
    // }, [])
    const btnAction = () => {
        setValue(value + 1)
    }
    arr.push(btnAction)
    console.log(arr)
    console.log(arr[1] === arr[2])

    return (
        <>
            <h1>Two</h1>
            <div>{value}</div>
            <button onClick={btnAction}>按钮</button>
        </>
    )
}
