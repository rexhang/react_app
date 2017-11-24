import React, { Component } from 'react';

import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;


class CheckboxGroups4 extends Component{
    constructor(props) {
        super(props)   
        console.log(this.props.fruit)
    }
    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    componentDidMount() {
        // console.log(this.props.match.params);
        // 获取路由参数
    }
    componentWillUnmount() {
        /*组件卸载函数*/
        console.log('CheckboxGroups4 组件被卸载咯~')
    }
    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.fruit !== this.props.fruit)
    }
    render() {
        const plainOptions = ['Apple4', 'Pear4', 'Orange4'];
        const {fruit} = this.props;
        return (
            <div>
                <CheckboxGroup options={plainOptions} defaultValue={[this.props.fruit]} onChange={this.onChange} />
            </div>
        );
    }
}

CheckboxGroups4.defaultProps = {
    fruit: 'Apple4'
};


export default CheckboxGroups4;