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
            <div class="hello">
              <h3 class="headline">Hello {{ name }}!</h3>
            </div>
            <p>This is your personal panel. Here you can edit your profile and also see your activity timeline.</p>
          </v-card-title>
          <v-card-text>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="cyan" v-on:click="editprofile">Edit Profile</v-btn>
            <v-btn flat color="cyan" v-on:click="logout">Logout</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
     </v-app>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Hello',
  data () {
    return {
      email: firebase.auth().currentUser.email,
      name: firebase.auth().currentUser.displayName
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    editprofile: function() {
      this.$router.replace('editprofile')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uprofile {
  height: 64px !important;
  width: 64px !important;
  position: absolute !important;
  top: 170px !important;
  right: 20px !important;
}
</style>
