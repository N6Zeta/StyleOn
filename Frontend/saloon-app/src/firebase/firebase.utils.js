import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`Users/${userAuth.uid}`);//this returs a queryreference

  const snapShot = await userRef.get(); //this returs a querySnapshot

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        name:displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  console.log(result.credential.accessToken)
  token = result.credential.accessToken;
  }).catch(function(error) {
  // Handle Errors here.
  console.log(error.message)
});
export default firebase;