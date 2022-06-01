/*
 * @Author: wenzhenjin
 * @Date: 2022-05-19 17:22:52
 * @LastEditTime: 2022-05-19 17:24:52
 * @LastEditors: wenzhenjin
 * @Description: 
 * @FilePath: /todo-list/src/index.js
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './style.css'


const root = createRoot(document.getElementById('root'))

root.render(
    <App />
)