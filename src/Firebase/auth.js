import { auth } from './firebase'

export const doCreateUserWithEmailAndPassword = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password).then((user) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}


export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);


export const doSignOut = () => auth.signOut();


export const doPasswordReset = email => auth.sendPasswordResetEmail(email);


export const doPasswordChange = password =>
  auth.currentUser.updatePassword(password);


  