import * as ActionTypes from './ActionTypes.jsx';


/**
 * Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
 * Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
 */

export default (state = {num: 0}, action) => {
    const { type } = action;
    switch (type) {
        case ActionTypes.CUT:
            return { ...state, num: state['num'] - 1 };
        default:
            return state
    }
}
