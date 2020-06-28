import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDn6wdPP9VMpHzQImOCKs-DVDfI-WeAnxk",
    authDomain: "crwn-db-8ec9c.firebaseapp.com",
    databaseURL: "https://crwn-db-8ec9c.firebaseio.com",
    projectId: "crwn-db-8ec9c",
    storageBucket: "crwn-db-8ec9c.appspot.com",
    messagingSenderId: "749364412073",
    appId: "1:749364412073:web:61b73b26896391e2aff3b8",
    measurementId: "G-WSPBFLFVS9"
  };

  export const createUserProfileDocument = async (userAuth,  additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth; 
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  const providerTwitter = new firebase.auth.TwitterAuthProvider();
  providerTwitter.setCustomParameters({ prompt: 'select_account' });
  export const signInWithTwitter = () => auth.signInWithPopup(providerTwitter);


  export default firebase;

