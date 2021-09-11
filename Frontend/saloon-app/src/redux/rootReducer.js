import {combineReducers} from 'redux'
import AppDataReducer from './appdata/appdata.reducer'
import CartReducer from './cart/cart.reducer'
import UserReducer from './user/user.reducer'


export default combineReducers({
    user:UserReducer,
    appdata:AppDataReducer,
    cart:CartReducer
})