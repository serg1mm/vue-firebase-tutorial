// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyAVCbaBzeDNBUsnrCBJU7SQaYmMKSvBtpo",
  authDomain: "vue-firebase-tutorial-5c745.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-5c745.firebaseio.com",
  projectId: "vue-firebase-tutorial-5c745",
  storageBucket: "",
  messagingSenderId: "688574252540"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {

    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
