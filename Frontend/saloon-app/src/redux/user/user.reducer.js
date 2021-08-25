import {ActionTypes} from './user.actiontypes'

const INITIAL_STATE = {
    name :null,
    email:null
}

const UserReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case ActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                displayName:action.payload.displayName,
                email:action.payload.email

            }
            
           
    
        default:
            return state
            
    }
}

export default UserReducer;