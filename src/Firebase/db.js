//this is going to store Firebase realtime database API code
import { fb } from "./fire";


//##########3 user API

//create a user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = (id, name, email) => {

  fb.database().ref('/users/' + id).set({
    name : name,
    email : email 
  }).then(() => console.log('Data set.'));

}


  //returns all users from firebase realtime db
export const onceGetUsers = () => db.ref("users").once("value");

export const doGetAnUnser = uid => db.ref(`users/${uid}`).once("value");



