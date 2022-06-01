/*
 * @Author: wenzhenjin
 * @Date: 2022-04-11 18:21:10
 * @LastEditTime: 2022-05-06 16:27:03
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/index.js
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './style.css'

import { Provider } from 'react-redux'
import store from './store/store'

const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
