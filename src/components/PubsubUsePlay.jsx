import React, { Component } from 'react';

import Pubsub from 'pubsub-js';

class Play extends Component {
    sendMsg(event, data){
        event.stopPropagation;
        // console.log(data)
        Pubsub.publish('PLAY', data); // 发送事件 名称为 PLAY
    }
    render() {
        const data = {
            name: 'rexhang',
            age: 24
        };
        return (
            <div>
                <button onClick={(e) => { this.sendMsg(e, data) }}>点击发送pubsub事件</button>
            </div>
        );
    }
}


export default Play;