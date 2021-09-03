import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import axios from 'axios'
import {G_API_URL} from "../constants/constants"

var token;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyDSNNTnfrPIKCqfomXSc9iRZ1I6z_GIxUE",
    authDomain: "styleon-a86d8.firebaseapp.com",
    projectId: "styleon-a86d8",
    storageBucket: "styleon-a86d8.appspot.com",
    messagingSenderId: "809179869790",
    appId: "1:809179869790:web:5ab5212736b5a98ec03acf",
    measurementId: "G-BHF54JXT3L"
  };
firebase.initializeApp(config);


export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
    auth
        .signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            console.log(result);
            token = result.credential.idToken;
            saveLoginDetails(result)
        })
        .catch(function (error) {
            // Handle Errors here.
            console.log(error.message);
        });

const saveLoginDetails = async (userDetails)=>{
    const data = {
        name: userDetails.user.displayName,
        image: userDetails.user.photoURL,
        uid: userDetails.user.uid,
        email: userDetails.user.email
    }

    await axios.post(G_API_URL + "/user/create", data)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default firebase;