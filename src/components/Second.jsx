import React, { Component } from 'react';

import store from '../actions/Store.jsx';

import Actions from '../actions/Actions.jsx';

const ComponentsName = 'Second';

class Second extends Component {
    constructor(props){
        super(props);
        this.cut = this.cut.bind(this);
        this.state = {
            num: 10
        }

        this.onCut = this.onCut.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = this.getOwnState();
        
    }
    getOwnState() {
        return {
            val: store.getState()[ComponentsName]['num']
        };
    }
    cut () {
        const vm = this;
        const _num = this.state.num - 1;
        vm.setState( f => (
            { num: _num}
        ))
    }
    onCut() {
        store.dispatch(Actions.cut(ComponentsName));
    }
    onChange() {
        console.log('change second')
        this.setState(this.getOwnState());
    }
    componentDidMount() {
        store.subscribe(this.onChange);
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if ((nextState.val !== this.state.val)) {
            console.log('Second 更新');
        }
        // return (nextProps.caption !== this.props.caption) ||
        //     (nextState.value !== this.state.value);
        return (nextState.val !== this.state.val);
    }
    render () {
        const { val } = this.state;
        return (
            <div>
                <br />
                <hr />
                <div className="moduleAdd">
                <span className="tipNumber">number:</span>
                    <span className="tipNumber">{val}</span>
                    <button className="addBtn" onClick={this.onCut}>减</button>
                </div>
                <hr />
                <br />
            </div>
        )
    }
}


export default Second;