import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import store from '../actions/Store.jsx';

// import Actions from '../actions/Actions.jsx';

const ComponentsName = 'First';


class First extends Component {
    constructor(props) {
        super(props);
        // console.log(this);
        this.add = this.add.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = this.initState();
    }
    initState() {
        return {
            val: store.getState()[ComponentsName]['num'],
            name: this.props.nameFunc.name
        };
    }
    add() {
        const vm = this;
        const _num = vm.state.num + 1;
        vm.setState( f => (
            { num: _num}
        ) )
    }
    onAdd() {
        //store.dispatch(Actions.add(ComponentsName));
        this.props.onAdd();

        /* refs 三种的使用 */
        const refsVal = this.refs.firstVal; // 获得的是虚拟DOM
        console.log(refsVal)

        const newDom = ReactDOM.findDOMNode(refsVal); // 获得的是实际DOM。
        console.log(newDom)

        console.log(this._child); // 回调(建议使用此方法)
    }
    
    onChange() {
        console.log('change first');
        this.setState(this.initState());
    }
    componentWillMount() {
        /*钩子在组件输出被渲染到 DOM 之前运行*/
        /*reder 之前*/
        console.log('0');
    }
    componentDidMount() {
        /*钩子在组件输出被渲染到 DOM 之后运行*/
        /*reder 之后*/
        store.subscribe(this.onChange);
        console.log('2');
    }
    componentWillReceiveProps(nextProps) {
        // 不一定是 props 父级传入更新触发的 要对比下这2个 真发生改变再是真的传入新值
        if (nextProps.nameFunc.name !== this.props.nameFunc.name){
            console.log('receiveSomeThings');
            // do somethings
            this.setState( () => (
                {
                    name: nextProps.nameFunc.name
                }
            ) )
        }
    }
    componentWillUnmount() {
        /*组件卸载函数*/
        store.unsubscribe(this.onChange);
    }
    shouldComponentUpdate(nextProps, nextState) {
        /*每次都重新渲染，可以在这里判断条件决定是否渲染 决定性能的一个钩子函数*/
        // return (nextProps.caption !== this.props.caption) ||
        //     (nextState.value !== this.state.value);
        // 2次状态值不相等的时候渲染 true = 渲染Components 只要有一个参数发生变化都需要渲染一下组件

        return ((nextState.val !== this.state.val) || (nextState.name !== this.state.name) )
    }
    render() {
        console.log('1');
        return (
            <div>
                <br/>
                <hr/>
                <div className="moduleAdd">
                    <span className="tipNumber" ref={child => this._child = child}>number:</span>
                    <span className="tipNumber" ref="firstVal">{this.state.val}({this.state.name})</span>
                    <button className="addBtn" onClick={this.onAdd}>加</button>
                </div>
                <hr/>
                <br/>
            </div>
        )
    }
}

/*开发使用，产品上线为了用户体验尽量不要进行检查*/
First.propTypes = {
    onAdd: PropTypes.func.isRequired
};

First.defaultProps = {
    onAdd: () => {
        console.error('need onAdd func')
    }
};

export default First;
