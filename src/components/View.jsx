import React, { Component } from 'react';



import First from './First.jsx';

import Second from './Second.jsx';

import Total from './Total.jsx';

import store from '../actions/Store.jsx';

import Actions from '../actions/Actions.jsx';

import Play from './PubsubUsePlay.jsx';

import Player from "./Player.jsx";


class View extends Component{
    constructor(props) {
        super(props);
        this.adds = this.adds.bind(this);
        this.updates = this.updates.bind(this);
        this.state = {
            name: 'rexhang'
        }
    }
    onAdd(){
        store.dispatch(Actions.add('First'));
    }
    adds(){
        this.setState({
            name: this.state.name + 1
        })
    }
    updates(){
        // this.setState({});
        this.forceUpdate();
    }
    childSend(data){
        console.log(data);
    }
    render(){
        console.log('view Component render again')
        return (
            <div>
                <First onAdd={this.onAdd} nameFunc={{name: this.state.name}} childFunc={this.childSend} />
                <Second />
                <Total />
                <button onClick={this.adds}>Click Me(send props)</button>
                <button onClick={this.updates}>Click Me(Father Component Update)</button>
                <br /><br /><br /><br /><br />
                <Play />
                <br /><br />
                <Player />
            </div>
        )
    }
}

export const Container = {
    View: View
};

