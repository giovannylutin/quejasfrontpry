import inivueq from './components/Usuario_vista1.vue'
import formulario from './vistas/secundario1_Usuario.vue'
import consultar from './vistas/tercero_Usuario.vue'
import reportes from './vistas/interno_reportes.vue'
import rutanoencontrada from './components/Usuario_vistaError.vue'

// import ObtenerCodigo from './components/Obtener_codigo.vue'
// import Panel_principal from './components/Ingreso_principal.vue'
export default [
 
    {path: '/', component: inivueq},
    {path: '/Ingresso_Formulario/:opcion', component: formulario},
    {path: '/:tk/Consulta', component: consultar},
    {path: '/Reportes', component: reportes},
    {path: '*', component: rutanoencontrada}
    // {path: '/panel',component:Panel_principal}
]