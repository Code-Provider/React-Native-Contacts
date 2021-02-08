import { fb } from './fire.js'
import * as db from './db'


export const doCreateUserWithEmailAndPassword = (name, email, password, phone) => {
  fb.auth().createUserWithEmailAndPassword(email, password).then((user) => {
     db.doCreateUser(user.user.uid, name,email, phone)
   })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}


export const doSignInWithEmailAndPassword = (email, password) =>
  fb.auth().signInWithEmailAndPassword(email, password);


export const doSignOut = () => fb.auth().signOut();


export const doPasswordReset = email => auth.sendPasswordResetEmail(email);


export const doPasswordChange = password =>
  auth.currentUser.updatePassword(password);


  