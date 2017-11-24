import React, { Component } from 'react';

import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;


class CheckboxGroups2 extends Component{
    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    render() {
        const plainOptions = ['Apple2', 'Pear2', 'Orange2'];
        const mp3Src = [
            "http://dl.stream.qqmusic.qq.com/C400004InPKZ0BA2ad.m4a?vkey=7FFF6E3F9F6CAC758620742371ED9CF2B845A996E474E4082C03CD59AE7D4C9D2A52FEC9F3F10994E8F98B4488B4BD58D96B7C030419DDBB&guid=8512433225&uin=1134916452&fromtag=66"
        ];
        return (
            <div>
                <CheckboxGroup options={plainOptions} defaultValue={['Apple2']} onChange={this.onChange} />
                <audio controls src={mp3Src[0]}></audio>
            </div>
        );
    }
}


export default CheckboxGroups2;