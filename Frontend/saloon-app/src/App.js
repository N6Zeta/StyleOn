import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/header/header';
import HomePage from './pages/HomePage/HomePage';
import {Switch,Route, Redirect} from 'react-router-dom'
import ProductMarketPlace from './pages/ProductMarketPlace/ProductMarketPlace';
import Login from './pages/Login/Login';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import ServicesAndSalons from './pages/ServicesAndSalons/ServicesAndSalons';


function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    const logOutUser=auth.onAuthStateChanged(async (user)=>{
      if(user){
      

      const { displayName, email }  = user;
        dispatch(setCurrentUser({name:displayName,email:email}))

    
  
      }else{
        dispatch(setCurrentUser({name:null,email:null}))
      }

      return ()=>{
        logOutUser()
      }
    })
  },[])

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/home'>
          <HomePage/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

        <Route exact path='/services'>
          <ServicesAndSalons/>
        </Route>

      <Route path='/'>
        <Redirect to='/home'/>
        </Route>    
      </Switch>

      <Footer/>
          </div>
  );
}

export default App;
