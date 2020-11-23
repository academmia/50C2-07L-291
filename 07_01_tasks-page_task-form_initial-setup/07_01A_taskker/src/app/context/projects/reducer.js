import { GET_PROJECTS, SET_LOADING, NEW_PROJECT } from '../action-types';

export default (state, action) => {
    switch(action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false
            }
        case NEW_PROJECT:
            return {
                ...state,
                projects: [ ...state.projects, action.payload ],
                loading: true
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}
