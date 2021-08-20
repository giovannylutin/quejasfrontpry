import inivueq from './components/Usuario_vista1.vue'
import formulario from './components/Usuario_vista2.vue'
import rutanoencontrada from './components/Usuario_vistaError.vue'
// import ObtenerCodigo from './components/Obtener_codigo.vue'
// import Panel_principal from './components/Ingreso_principal.vue'
export default [
 
    {path: '/', component: inivueq},
    {path: '/Ingresso_Formulario', component: formulario},
    {path: '*', component: rutanoencontrada}
    // {path: '/panel',component:Panel_principal}
]