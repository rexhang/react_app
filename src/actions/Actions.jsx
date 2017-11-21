import * as ActionTypes from './ActionTypes.jsx';


// Action Creator

// export const add = (who) => (
//     {
//         type: ActionTypes.ADD,
//         who: who
//     }
// )

// export const cut = (who) => (
//     {
//         type: ActionTypes.CUT,
//         who: who
//     }
// )

// 等价于 ↓ ↓ ↓

const objs = {};

for (const key in ActionTypes){
    objs[ActionTypes[key]] = (who) => (
        {
            type: ActionTypes[key],
            who: who
        }
    )
}

export default objs;