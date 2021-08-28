<template>
<div class="texto">
  <div v-if="vistaopcion===2">
    <vistaprincipal v-bind:titulo="opcion" @tipo_queja="cambio" @tipo_navegar="iraform"/>
    <div v-if="opcion===1">
      <button type="button" class="btn btn-dark" onClick="parent.location='#/Ingresso_Formulario/noanonimo'">Siguiente</button>
    </div>
    <div v-else-if="opcion===0">
      <button type="button" class="btn btn-dark" onClick="parent.location='#/Ingresso_Formulario/anonimo'">Siguiente</button>
    </div>
    
  </div>
  <!-- <div v-else-if="vistaopcion===3">
     <vistaformulario v-bind:titulo="opcion" />
  </div>    -->
</div>
</template>
<script>
import vistaprincipal from '@/vistas/principal1_Usuario.vue';
// import vistaformulario from '@/vistas/secundario1_Usuario.vue';
export default {
components:{
  vistaprincipal
  // vistaformulario
},
 data(){
   return{
        opcion:1,
        vistaopcion:2,
        tituloalerta:'Importante!!!!',
        alertacontenido:"Si tu consulta es anonima favor de seleccionar la Opcion SI,en caso contrario pulsa el boton siguiente para continuar con tu denucia anonima.",
   }
 }
 ,
  methods: {
        cambio() {
          var valorone= this.opcion
          if (valorone == 0){
            console.log(valorone)
             this.opcion=1
          }
          else{
            console.log(valorone)
            this.opcion=0
          }
        // var doc=document.getElementById('customSwitch1').value;
        // var valorone= this.opcion
        // if(doc==="NO")
        // console.log(valorone),
        // this.vistaopcion=3,
        //     document.getElementById('TEXTO').innerHTML="SI",
        //     document.getElementById("customSwitch1").value = "SI";
        // else
        //  this.opcion=2,
        //     document.getElementById('TEXTO').innerHTML="NO",
        //     document.getElementById("customSwitch1").value = "NO"; 
        
    }
    ,
          iraform(){
            this.vistaopcion=3
          }
    // cambio() {
    //     var doc=document.getElementById('customSwitch1').value;
    //     if(doc==="NO")
    //         document.getElementById('TEXTO').innerHTML="SI",
    //         document.getElementById("customSwitch1").value = "SI";
    //     else
    //         document.getElementById('TEXTO').innerHTML="NO",
    //         document.getElementById("customSwitch1").value = "NO"; 
        
    // }
  }
}
</script>

