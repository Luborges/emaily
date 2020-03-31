import { FETCH_SURVEYS } from '../actions/types';

export default function (state = [], action) {
    const actions = {
        [FETCH_SURVEYS]: () => {
            return action.payload;
        },
    }
    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}