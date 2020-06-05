import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
const config = {
  apikey: 'AIzaSyC2ulRPxvjbu2I6BD6GedSBG_xUMfE0lrk ',
  projectId: 'test-69b6b',
  authDomain: 'test-69b6b.firebaseapp.com',
  databaseURL: 'https://test-69b6b.firebaseio.com',
  storageBucket: 'test-69b6b.appspot.com',
}

firebase.initializeApp(config);

export default firebase;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
