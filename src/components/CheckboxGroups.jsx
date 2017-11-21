import React, { Component } from 'react';

import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;


class CheckboxGroups extends Component{
    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    render() {
        const plainOptions = ['Apple', 'Pear', 'Orange'];
        return (
            <div>
                <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange} />
            </div>
        );
    }
}


export default CheckboxGroups;