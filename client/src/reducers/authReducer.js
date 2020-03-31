import { FETCH_USER } from '../actions/types';

export default function (state = null, action) {
    const actions = {
        [FETCH_USER]: () => {
            return action.payload || false;
        },
    }
    if (actions[action.type]){
        return actions[action.type]();
    }
    return state;
}