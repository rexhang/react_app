import { createStore } from 'redux';

// import reducer from './Reducer.jsx';

import reducers from './Reducers.jsx';

const initValues = {
    First: {
        num: 100
    },
    Second: {
        num: 200
    }
};

const store = createStore(reducers, initValues);

export default store;


