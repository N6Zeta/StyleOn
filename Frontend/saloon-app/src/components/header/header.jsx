import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import './header.css'


export default function Header() {
    const history = useHistory()
    const user = useSelector(state=>state.user.name)
    const [userOptions,setUserOptions] = useState(false)
    const logout = ()=>{
        setUserOptions(false)
        auth.signOut()
        history.push('/home')
    }

    const redirectToOrder = ()=>{
        history.push('/order')
    }

    return (
        <div className='header-main'>
        <div className='header-contents'>   
         <Link to='/home'>   
        <p className='brand-name'>StyleOn</p>
        </Link>
        {!user?
        <Link to='/login'>
        <p className='login-link'>Login</p>            
        </Link>:
        <p className='username'>Hi, {user} <span onClick={()=>setUserOptions(!userOptions)} className='user-arrow'>&#62;</span></p> }
        </div> 
        {userOptions?
        <div className='user-options'>
            <p>My Profile</p>
            <p onClick={()=>redirectToOrder()} className='logout-button'>Orders</p>
            <p onClick={()=>logout()} className='logout-button'>Logout</p>

        </div>:null}
        </div>

    )
}
