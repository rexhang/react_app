import React, { Component } from 'react';

import Pubsub from 'pubsub-js';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '你好'
        }
    }
    componentDidMount(){
        var vm = this;
        // 订阅 监听 PLAY 事件
        Pubsub.subscribe('PLAY', function(eventName, data){
            console.log(eventName);
            console.log(data.name)
            vm.setState({
                name: data.name
            })
        });
    }
    componentWillUnmount(){
        // 解绑订阅 监听
        Pubsub.unsubscribe('PLAY');
    }
    render() {
        return (
            <div>
                <span>{this.state.name}</span>
            </div>
        );
    }
}


export default Player;