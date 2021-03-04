/////////////////////////////////////////////////////
//                                                 //
// IF CLONED OR FORKED MAKE SURE TO REPLACE CONFIG //
//                                                 //
/////////////////////////////////////////////////////


import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA56odVwAIr6Vvm0AzcAUVSRUZAbFibi88",
    authDomain: "shop-site-a174d.firebaseapp.com",
    projectId: "shop-site-a174d",
    storageBucket: "shop-site-a174d.appspot.com",
    messagingSenderId: "344231182225",
    appId: "1:344231182225:web:9661b3b22403a9f8f3e430",
    measurementId: "G-ZFELMV8TZ6"
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger google popup when google auth provider is used
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;