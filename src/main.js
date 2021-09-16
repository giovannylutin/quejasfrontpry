import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import "./assets/app.css"
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import vueRouter from 'vue-router'
import Routes from './Mis_rutas'
Vue.component('grafica-component', require('./Graficas/graficos.vue').default);
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);
import global_ from './vistas/varausar.vue' // archivo de referencia
Vue.prototype.GLOBAL = global_ // Montar en la instancia de Vue

Vue.use(vueRouter)
Vue.config.productionTip = false
const rutas = new vueRouter({
  routes: Routes
})

new Vue({
  render: h => h(App),
  router: rutas
}).$mount('#app')
