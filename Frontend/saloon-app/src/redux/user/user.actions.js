import {ActionTypes} from './user.actiontypes'

export const setCurrentUser = user =>(
    {
        type:ActionTypes.SET_CURRENT_USER,
        payload:user
    }
)