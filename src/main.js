 /*=========================================================================================
     File Name: main.js
     Description: main vue(js) file
     ----------------------------------------------------------------------------------------
     Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
     Author: Pixinvent
     Author URL: http://www.themeforest.net/user/pixinvent
   ==========================================================================================*/
 import Vue from "vue";
 import App from "./App.vue";


 // Vuesax Component Framework
 import Vuesax from 'vuesax'
 import 'material-icons/iconfont/material-icons.css' //Material Icons
 import 'vuesax/dist/vuesax.css' // Vuesax
 Vue.use(Vuesax);


 import router from "./router";
 import Argon from "./plugins/argon-kit";


 import store from './store/store';

 // Globally Registered Components
 import './globalComponents.js'


 // axios
 import axios from 'axios'
 Vue.prototype.$http = axios

 // Implementacion del editor CK
 //import CKEditor from 'ckeditor5-vuejs';
 //Vue.use(CKEditor);


 // Clipboard
 import VueClipboard from 'vue-clipboard2'
 Vue.use(VueClipboard)


 // Tour
 import VueTour from 'vue-tour'
 Vue.use(VueTour)
 require('vue-tour/dist/vue-tour.css')


 // VeeValidate
 import VeeValidate from 'vee-validate'
 Vue.use(VeeValidate)


 // Google Maps
 import * as VueGoogleMaps from 'vue2-google-maps'
 Vue.use(VueGoogleMaps, {
     load: {
         // Add your API key here
         key: 'YOUR_KEY',
         libraries: 'places' // This is required if you use the Auto complete plug-in
     }
 })

 // Vuejs - Vue wrapper for hammerjs
 import { VueHammer } from 'vue2-hammer'
 Vue.use(VueHammer)


 // PrismJS
 import 'prismjs'
 import 'prismjs/themes/prism-tomorrow.css'

 // Feather font icon

 require('./assets/utils/iconfont.css')

 Vue.config.productionTip = false
 Vue.use(Argon);
 new Vue({
     router,
     store,
     render: h => h(App)
 }).$mount('#app')