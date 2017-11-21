import React, { Component } from 'react';



import First from './First.jsx';

import Second from './Second.jsx';

import Total from './Total.jsx';

import store from '../actions/Store.jsx';

import Actions from '../actions/Actions.jsx';


class View extends Component{
    constructor(props) {
        super(props);
        this.adds = this.adds.bind(this);
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
    render(){
        return (
            <div>
                <First onAdd={this.onAdd} nameFunc={{name: this.state.name}} />
                <Second />
                <Total />
                <button onClick={this.adds}>Click Me(send props)</button>
            </div>
        )
    }
}

export const Container = {
    View: View
};

