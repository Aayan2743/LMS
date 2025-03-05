// import './assets/main.css'

import './css/style.css';

// import './assets/css/style.css';
import './vendors/mdi/css/materialdesignicons.min.css';
import './vendors/ti-icons/css/themify-icons.css';
import './vendors/css/vendor.bundle.base.css';
import './vendors/font-awesome/css/font-awesome.min.css';
import './vendors/js/vendor.bundle.base.js';
import './js/off-canvas.js';
import './js/misc.js';
import './js/settings.js';
import './js/todolist.js';
import './js/jquery.cookie.js';


import { createApp } from 'vue'
import App from './App.vue'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
import router from './route';
import store from './store';





const app=createApp(App);






app.use(router);
app.use(store);
app.mount('#app');

// createApp(App).mount('#app')
