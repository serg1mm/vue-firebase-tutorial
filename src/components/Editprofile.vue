<template>
  <v-app>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 mt-5>
        <v-card hover>
          <v-card-media src="https://www.cigionline.org/sites/default/files/styles/affiliate_landscape/public/images/CIGIonline_ipsos-slider.jpeg" height="200px">
          </v-card-media>
          <v-card-title cyan-title>
              <v-avatar class="uprofile">
                <img src="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" alt="avatar">
              </v-avatar>
              <h3 class="headline">Edit your profile</h3>
              <p>Here you can change your profile details.</p>
            </v-card-title>
            <v-card-text>
  <div class="editprofile">
    <v-text-field
      v-model="name"
      required
      color="cyan"
      placeholder="Name"
      id="name"
      autocomplete="off"
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      color="cyan"
      disabled
    ></v-text-field>
  </div>
</v-card-text>
<v-card-actions>
  <router-link to="/user/sign-up"><v-btn flat color="cyan" v-on:click="save" >Save</v-btn></router-link>
  <router-link to="/user/sign-up"><v-btn flat color="cyan" >Cancel</v-btn></router-link>
</v-card-actions>
</v-card>
</v-flex>
</v-layout>
</v-app>
</template>

<script>
import firebase from 'firebase'

  export default {
    name: 'login',
    data: function() {
      return {
        email: firebase.auth().currentUser.email,
        name: firebase.auth().currentUser.displayName,
        photoURL: firebase.auth().currentUser.photoURL,
      }
    },
    methods: {
      save: function() {
        firebase.auth().currentUser.updateProfile({
          displayName: document.getElementById("name").value
        }).then(function() {
          console.log('Profile saved as', document.getElementById("name").value)
        }).catch(function(error) {
          console.log('Oops. ' + err.message)
        });

      }
    }
  }
</script>

<style scoped>
.uprofile {
  height: 64px !important;
  width: 64px !important;
  position: absolute !important;
  top: 170px !important;
  right: 20px !important;
}
</style>
