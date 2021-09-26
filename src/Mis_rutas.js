import inivueq from './components/Usuario_vista1.vue'
import sininformacion from './components/Usuario_noinformacion.vue'
import formulario from './vistas/secundario1_Usuario.vue'
import consultar from './vistas/tercero_Usuario.vue'
import reportes from './vistas/interno_reportes.vue'
import rutanoencontrada from './components/Usuario_vistaError.vue'
import reportesdash from './vistas/interno_dash.vue'
import ingresoreportes from './vistas/interno_login.vue'
import estatusreporte from './vistas/modestatus_report.vue'
import reporteporempresa from './vistas/Resumen_empresa.vue'

// import ObtenerCodigo from './components/Obtener_codigo.vue'
// import Panel_principal from './components/Ingreso_principal.vue'
export default [
 
    {path: '/', component: inivueq},
    {path: '/Ingresso_Formulario/:opcion', component: formulario},
    {path: '/:tk/Consulta', component: consultar},
    {path: '/Reportes', component: reportes},
    {path: '/Principal', component: reportesdash},
    {path: '/Ingreso', component: ingresoreportes},
    {path: '/opps', component: sininformacion},
    {path: '/Estatus', component: estatusreporte},
    {path: '/Reporte_empresa', component: reporteporempresa},
    {path: '*', component: rutanoencontrada}

    // {path: '/panel',component:Panel_principal}
]