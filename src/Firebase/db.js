//this is going to store Firebase realtime database API code
import { fb } from "./fire";


//##########3 user API

//create a user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = (id, name, email, phone) => {

  fb.database().ref('/users/' + id).set({
    name : name,
    email : email,
    phone: phone
  }).then(() => console.log('Data set.'));

}

export const doCreateContact = (userid, contactid, contact) => {
  fb.database().ref('/contacts/' + userid).child(contactid).set(contact) ; 
}

export const doUpdateContact = (userid, contactid, contact) => {
  fb.database().ref('/contacts/' + userid).child(contactid).update(contact) ; 
}



export const doGetContacts = (userid) => {
  fb.database().ref('/contacts/' + userid).once("value").then((snapshot) => {
    let contacts = snapshot.val()

  })

}


  //returns all users from firebase realtime db
export const onceGetUsers = () => db.ref("users").once("value");

export const doGetAnUnser = uid => db.ref(`users/${uid}`).once("value");



