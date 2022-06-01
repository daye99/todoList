/*
 * @Author: wenzhenjin
 * @Date: 2022-05-30 10:56:48
 * @LastEditTime: 2022-05-30 10:59:39
 * @LastEditors: wenzhenjin
 * @Description: 
 * @FilePath: /todo-list/src/index.js
 */
import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.js'

createRoot(document.getElementById('root')).render(
    <App />
)