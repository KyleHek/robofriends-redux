import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from "./constants.js";


const initialStateSearch = {
    searchField: ''
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

// reducer
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            // using the object spread operator we can also do this:
            // return { ...state, { searchField: action.payload }}
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    } 
};