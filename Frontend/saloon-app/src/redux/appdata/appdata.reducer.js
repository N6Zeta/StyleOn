import {ActionTypes} from './appdata.actiontypes'

const INITIAL_STATE = {
    products:[],
    services:[],
    salons:[]
}

const AppDataReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products:action.payload

            }
        case ActionTypes.SET_SERVICES:
            return {
                ...state,
                services:action.payload

            }
        case ActionTypes.SET_SALONS:
            return {
                ...state,
                salons:action.payload

            }
            
           
    
        default:
            return state
            
    }
}

export default AppDataReducer;