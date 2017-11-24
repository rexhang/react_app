import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import './index.scss';

import registerServiceWorker from './registerServiceWorker.jsx';


import * as UI from './components/View.jsx';

import CheckboxGroups from './components/CheckboxGroups.jsx';

import {$$} from './tools';



import Routers from './Routers.jsx';

registerServiceWorker();

const mppx = {
    width: '100%',
    height: '30px'
}

const wrapCSS = {
    margin: "16px auto 16px 16px"
}

ReactDOM.render(
    <UI.Container.View />,
    $$('root')
);

ReactDOM.render(
    <div style={wrapCSS}>
        <div style={mppx}></div>
        <div className="smallWrap">
            <CheckboxGroups />
        </div>
    </div>,
    $$('antComponent')
);

ReactDOM.render(
    <Routers />,
    $$('router')
)






// const state = {
//     age: 23,
//     name: 'rex'
// }


// const state2 = {
//     ...state,
//     sex: 'nan'
// } // 扩展Object

// console.log(state2);

// const {age, ...state3} = state; // 删除Object的age属性

// console.log(state3)

// const actions = [
//     1,2,3,4,5
// ];

// const detailActions = actions.reduce(function(prevMethod, obj){
//     console.log(prevMethod)
//     console.log(obj)
//     return prevMethod+obj;
    
// });
// console.warn(detailActions)


const time = 119;
function formatTime(time){
    time = Math.floor(time);
    let miniutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${miniutes}分${seconds}秒`
}
const times = formatTime(time);
console.log(times);