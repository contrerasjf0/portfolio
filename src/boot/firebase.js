 // Your web app's Firebase configuration
 import firebase from 'firebase';
import firebaseConfig from '../config/firebase';


const fire = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();


export default {
    auth,
    provider,
    fire
};