import React, { Component } from 'react';

import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;


class CheckboxGroups3 extends Component{
    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    render() {
        const plainOptions = ['Apple3', 'Pear3', 'Orange3'];
        return (
            <div>
                <CheckboxGroup options={plainOptions} defaultValue={['Apple3']} onChange={this.onChange} />
            </div>
        );
    }
}


export default CheckboxGroups3;