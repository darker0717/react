import React, { Component } from 'react'
import { Button } from 'antd'

interface Props {

}
interface State {

}

export default class index extends Component<Props, State> {
    state = {
        arrList: [
            { id: 1, name: 'dhz', age: 12 },
            { id: 2, name: 'bubai', age: 5 },
            { id: 3, name: 'denghuazhang', age: 20 },
        ]
    }

    handleClick = () => {
        const { arrList } = this.state;
        arrList[1].name = 'deng0717'
        this.setState({ arrList }, () => {
            console.log(arrList, 'arrList');
            console.log(this.state.arrList, 'this.state.arrList')
        })
    }

    render() {
        return (
            <div>
                <Button type='primary' onClick={this.handleClick}>修改数据值</Button>
            </div>
        )
    }
}
