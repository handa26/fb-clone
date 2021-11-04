import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDM8EKkq_w88XtHodNDZeWR6voInXqL5bQ",
  authDomain: "facebook-clone-7b2c4.firebaseapp.com",
  projectId: "facebook-clone-7b2c4",
  storageBucket: "facebook-clone-7b2c4.appspot.com",
  messagingSenderId: "706223891878",
  appId: "1:706223891878:web:f2eec529a0863926a85b67",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
