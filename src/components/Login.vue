<template>
<div>
  <p>Logged in as: ...<br> {{currentUser}}</p>
</div>
    <form>
      <div class="m-3 form-group row">
        <label for="email" class="form-label">Email adress</label>
        <input type="email" class="form-control" id="email" placeholder='Enter email'>
     </div>

      <div class="m-3 form-group row">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder='Enter password'>
      </div>

  <button type="button" class="btn btn-success" @click='signIn'>Sign in</button>
  <button type="button" class="btn btn-danger" @click='signOut'>Sign out</button>

    </form>
</template>

<script>
// import data from store - should be right under the script before importing firebase
import {useServiceStore} from '../stores/ServiceStore';
import { auth } from '../firebase'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// import { getAuth, onAuthStateChanged } from "firebase/auth";



// Define the return of the useServiceStore.js as serviceStore == ERROR
// const serviceStore = useServiceStore();

// const authen = getAuth();
// console: () => console;
window.console.log('this line');
onAuthStateChanged(auth, (user) => {
  window.console.log('hi');
  // TODO: dispatch action with FB Auth
  console.log(user);
//   if (user) {
// //     // User is signed in, see docs for a list of available properties
// //     // https://firebase.google.com/docs/reference/js/firebase.User
// //     // const uid = user.uid;
//     // access user from store
//     const serviceStore = useServiceStore();
//     serviceStore.setUser(user);
//     console.log('here', serviceStore);
//   } else {
//     // User is signed out
//     serviceStore.setUser(null)
//   }
});

export default {
  methods: {
    log(msg){
    console.log(msg); 
 },
    setup() {
     const serviceStore = useServiceStore();

    return { serviceStore }
  },
    signIn() {
      // get the values of email and password
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // FIXME: console.log(email, password);
  
      // Call method for sign in
       signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
       // Signed in 
       console.log('User signed in!');
       alert('user has successfully signed in')
       })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        if(errorCode === 'auth/wrong-password') {
          alert('Wrong password')
        } else {
          alert(errorMessage);
        }
  });
    },
    signOut() {
      // console.log('signout msg');
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log('User signed out!');
        alert('user signed out')
      }).catch((error) => {
        // An error happened.
        console.log(error);
        alert(error);
      });
    }
  }, // method
  computed: {
    console: () => console,
  window: () => window,
    currentUser() {
      const serviceStore = useServiceStore();
      console.log(serviceStore);
      console.log(serviceStore.currentUser);
      return serviceStore.currentUser;
    }
  }
  
}
</script>
