import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.css'


export default function Header() {
    const user = useSelector(state=>state.user.displayName)
    const [userOptions,setUserOptions] = useState(false)


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
            <p className='logout-button'>Logout</p>

        </div>:null}
        </div>

    )
}
