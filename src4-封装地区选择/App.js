/*
 * @Author: wenzhenjin
 * @Date: 2022-04-13 11:27:41
 * @LastEditTime: 2022-04-14 11:08:23
 * @LastEditors: wenzhenjin
 * @Description:
 * @FilePath: /todo-list/src/App.js
 */
import React, { Component } from 'react'
import { areaList } from './data/area'
import Cascader from './components/Cascader'

const { city_list, county_list, province_list } = areaList

const provinceMap = {}
Object.entries(province_list).forEach(([key, value]) => {
    const newKey = key.substring(0, 2)
    provinceMap[newKey] = {
        name: value,
        values: {},
    }
})
Object.entries(city_list).forEach(([key, value]) => {
    const provinceKey = key.substring(0, 2)
    const cityKey = key.substring(2, 4)
    if (provinceMap[provinceKey]) {
        provinceMap[provinceKey].values[cityKey] = {
            name: value,
            values: {},
        }
    }
})
Object.entries(county_list).forEach(([key, value]) => {
    const provinceKey = key.substring(0, 2)
    const cityKey = key.substring(2, 4)
    const countyKey = key.substring(4, 6)
    provinceMap[provinceKey].values[cityKey].values[countyKey] = {
        name: value,
    }
})
export default class App extends Component {
    render() {
        return <Cascader data={{name: '', values: provinceMap}} />
    }
}
