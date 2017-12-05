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
                            <router-link to="sign-up">create one here</router-link>!</p>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn block depressed class="fb-signin-button" color="error" v-on:click="signGup">Login with Google</v-btn>
                    <v-btn block depressed class="g-signin-button" color="primary" v-on:click="signFup">Login with Facebook</v-btn>
                </v-card-actions>
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
var gprovider = new firebase.auth.GoogleAuthProvider();
var fprovider = new firebase.auth.FacebookAuthProvider();
var promptUserForPassword = function() {
    var pwd = prompt("Please enter your password");
    if (pwd != null) {
        return pwd;
    }
};
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
                    console.log('Oops. ' + err.message)
                }
            );
        },
        signGup: function() {
            firebase.auth().signInWithPopup(gprovider).then(
                (user) => {
                    this.$router.replace('hello')
                    console.log(user.displayName, "is here.")
                }, (error) => {
                    console.log('Oops. ' + error.code)
                    console.log('Oops. ' + error.message)
                    console.log('Oops. ' + error.email)
                    console.log('Oops. ' + error.credential)
                }
            );
        },
        signFup: function() {
            firebase.auth().signInWithPopup(fprovider).then(
                (user) => {
                    this.$router.replace('hello')
                    console.log(user.displayName, "is here.")
                }, (error) => {
                    console.log('Oops. ' + error.code)
                    console.log('Oops. ' + error.message)
                    console.log('Oops. ' + error.email)
                    console.log('Oops. ' + error.credential)
                    if (error.code === 'auth/account-exists-with-different-credential') {
                        console.log('The account already exists')
                        var pendingCred = error.credential;
                        var email = error.email;
                        firebase.auth().fetchProvidersForEmail(email).then(function(providers) {
                            if (providers[0] === 'password') {
                                console.log('The account already exists on mail/password')
                                var password = promptUserForPassword(); // implement promptUserForPassword.
                                firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
                                    console.log('Here we link your FB to your mail')
                                    return user.link(pendingCred);
                                }).then(function() {
                                    goToApp();
                                });
                                return;
                            }
                            var provider = getProviderForProviderId(providers[0]);
                            firebase.auth().signInWithPopup(provider).then(function(result) {
                                result.user.link(pendingCred).then(function() {
                                    goToApp();
                                });
                            });
                        });
                    }
                }
            );
        }
    }
}

</script>
