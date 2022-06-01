/*
 * @Author: wenzhenjin
 * @Date: 2022-05-27 17:35:08
 * @LastEditTime: 2022-05-27 17:54:59
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/utils/Notify.js
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line import/no-anonymous-default-export
// export default (message) => {
//     console.log('Notify事件之行了')
//     console.log(message)

//     const modalEle = createRoot(document.querySelector('#modal'))
//     modalEle.render(
//         <div>123123</div>
//     )
// }

class Modal extends React.Component {
    render() {
        return <div>{this.props.messgae}</div>
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (message) => {
    console.log('Notify事件执行了')

    createRoot(document.querySelector('#modal')).render(<Modal messgae={message} />)
}
