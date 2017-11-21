<style scoped>



</style>

<template>

<v-app>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3 mt-5>
            <v-card hover>
                <v-card-media src="https://www.cigionline.org/sites/default/files/styles/affiliate_landscape/public/images/CIGIonline_ipsos-slider.jpeg" height="200px">
                </v-card-media>
                <v-card-title cyan-title>
                    <div>
                        <h3 class="headline">Who are you?</h3>
                        <p>You don't have an account? You can
                            <router-link to="/sign-up">create one here</router-link>!</p>
                    </div>
                </v-card-title>
                <v-card-text>
                    <div class="login">
                      <input id="email" style="display:none" type="text" name="fakeusernameremembered">
                      <input id="password" style="display:none" type="password" name="fakepasswordremembered">
                        <v-text-field label="E-mail" v-model="email" :rules="emailRules" required color="cyan"></v-text-field>
                        <v-text-field label="Password" v-model="password" required color="cyan" type="password"></v-text-field>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn flat color="cyan" v-on:click="signIn">Login</v-btn>
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
            email: '',
            password: '',
            emailRules: [
                (v) => !!v || 'E-mail is required', (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
        }
    },
    methods: {
        signIn: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    console.log(user.displayName, "is here.")
                    this.$router.replace('hello')
                }, (err) => {
                    alert('Oops. ' + err.message)
                }
            );
        }
    }
}

</script>
