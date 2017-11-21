import * as ActionTypes from './ActionTypes.jsx';

/**
 * Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
 * Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
 */

const reducer = (state, action) => {
    // console.log(action)
    const { who } = action;

    const { type } = action;

    switch (type) {
        case ActionTypes.ADD:
            return { ...state, [who]: state[who] + 1 };
        case ActionTypes.CUT:
            // var stateThis = state;
            // stateThis[who] = state[who] - 1;
            // return stateThis;
            return { ...state, [who]: state[who] - 1 };
        default:
            return state
    }

}

export default reducer;


