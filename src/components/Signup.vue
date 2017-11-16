<template>
  <v-app>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 mt-5>
        <v-card hover>
          <v-card-media src="https://www.cigionline.org/sites/default/files/styles/affiliate_landscape/public/images/CIGIonline_ipsos-slider.jpeg" height="200px">
          </v-card-media>
          <v-card-title cyan-title>
            <div>
              <h3 class="headline">Let's create a new account!</h3>
              <p>...or go back to <router-link to="/login">login</router-link>.</p>
            </div>
          </v-card-title>
          <v-card-text>
            <div class="sign-up">
              <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
                color="cyan"
              ></v-text-field>
              <v-text-field
              label="Password"
              v-model="password"
              required
              color="cyan"
              type="password" ></v-text-field>
            </div>
          </v-card-text>
          <v-card-actions>
              <v-btn flat color="cyan" v-on:click="signUp">Sign Up</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
     </v-app>
</template>

<script>
import firebase from 'firebase'

  export default {
    name: 'signUp',
    data: function(){
      return {
        email: '',
        password: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>
</style>
