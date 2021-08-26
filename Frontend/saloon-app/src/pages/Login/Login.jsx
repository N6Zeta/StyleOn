import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './Login.css'

export default function Login() {
const displayName = useSelector(state => state.user.name)    

return (
        <div className='login-main'>

            {!displayName?<>
            
            <p>Hi, Please Sign in with your google account</p>
            <button className='google-signin-button' onClick={signInWithGoogle}>Sign In With Google</button>
            </>:
            <Redirect to='/home'/>}
        </div>
    )
}
