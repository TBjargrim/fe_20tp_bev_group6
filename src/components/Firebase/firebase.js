import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDLHt4MewPBEAcbAPMK-qTeSK8fEwvAglM",
  authDomain: "teamproject2-9c8e7.firebaseapp.com",
  databaseURL: "https://teamproject2-9c8e7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "teamproject2-9c8e7",
  storageBucket: "teamproject2-9c8e7.appspot.com",
  messagingSenderId: "512912249622",
  appId: "1:512912249622:web:79fe0f9f74acc37975f637",
  measurementId: "G-E4FS31R02K"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;