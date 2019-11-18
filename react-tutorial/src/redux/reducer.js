/**
 * reducer helps decide the new state
 * (currentState, action) => newState
 */

 export default function reducer(state, action) {
    switch(action.type) {
        case 'SET_MESSAGE': 
            return {...state, message: action.payload};
        default:
            return state;
    }
 }