<template>
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
import { auth } from '../firebase'
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default {
  methods: {
    signIn() {
      // get the values of email and password
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // console.log('signin msg');
  
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
  }
}
</script>

<style>

</style>