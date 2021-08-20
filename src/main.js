import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import "./assets/app.css"
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import vueRouter from 'vue-router'
import Routes from './Mis_rutas'

Vue.use(vueRouter)
Vue.config.productionTip = false
const rutas = new vueRouter({
  routes: Routes
})

new Vue({
  render: h => h(App),
  router: rutas
}).$mount('#app')
