import React, { Component } from 'react';

import store from '../actions/Store.jsx';

class Total extends Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
        this.onChange = this.onChange.bind(this);
    }

    initState() {
        let total = 0;
        const state = store.getState();
        for(const key in state){
            if (state[key]){
                total += state[key].num
            }
        }
        return {
            total: total
        };
    }
    onChange() {
        console.log('change total')
        this.setState(this.initState());
    }
    componentDidMount() {
        store.subscribe(this.onChange);
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if ((nextState.total !== this.state.total)) {
            console.log('Total 更新');
        }
        // return (nextProps.caption !== this.props.caption) ||
        //     (nextState.value !== this.state.value);
        // 2次状态值不相等的时候渲染 true = 渲染Components
        return (nextState.total !== this.state.total);
    }

    render() {
        const { total } = this.state;
        return (
            <div>
                <strong>
                    <div className="total">
                        Total: {total}
                    </div>
                </strong>
            </div>
        )
    }
}

export default Total;