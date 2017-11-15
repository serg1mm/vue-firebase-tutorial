<template>
  <div class="login">
    <h3>Edit your profile</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password"  placeholder="Password"><br>
    <button v-on:click="logout">Logout</button>
    <p>
      You don't have an account? You can <router-link to="/sign-up">create one</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    }
  }
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    padding: 15px;
  }
  button {
    padding: 10px 20px;
    background: #42b983;
    color: white;
    font-weight: bold;
    border: none;
    outline: 0;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
