import {
    SET_AIRLINES
} from '../types'
const initialState = {
    airlineData: []
};


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AIRLINES:
            return { ...state, airlineData: action.payload };
        default:
            return state;
    }
}
