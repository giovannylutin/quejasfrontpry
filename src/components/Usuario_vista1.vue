<template>
<div class="texto row">
  <vistados class="opciones col"/>
 
  <div v-if="vistaopcion===2" class="dat col">
     <h4 class="informacion_detalle-titulo">Recepcion de Quejas Online</h4>
    <vistaprincipal v-bind:titulo="opcion" @tipo_queja="cambio" @tipo_navegar="iraform"/>
    
    
    <br>
    <div v-if="opcion===1" class="btntama">
       <!-- <label for="form control"></label> -->
      <button type="button" class="btn btn-success " onClick="parent.location='#/Ingresso_Formulario/noanonimo'">{{botonmsg}}</button>
    </div>
    <div v-else-if="opcion===0" class="btntama">
      <button type="button" class="btn btn-success" onClick="parent.location='#/Ingresso_Formulario/anonimo'">{{botonmsg}}</button>
    </div>
    
  </div>
  
  <!-- <div v-else-if="vistaopcion===3">
     <vistaformulario v-bind:titulo="opcion" />
  </div>    -->
</div>
</template>
<script>
import vistaprincipal from '@/vistas/principal1_Usuario.vue';
import vistados from '@/vistas/principal2_Usuario.vue';
// import vistaformulario from '@/vistas/secundario1_Usuario.vue';
export default {
components:{
  vistaprincipal,vistados
  // vistaformulario
},
 data(){
   return{
        opcion:1,
        botonmsg: 'Emitir Queja',
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
            // console.log(valorone)
             this.opcion=1
             document.getElementById('TEXTO').innerHTML="NO ANONIMA"
          }
          else{
            // console.log(valorone)
            this.opcion=0
            document.getElementById('TEXTO').innerHTML="ANONIMA"
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
<style scoped>
.opciones{
  width: 100%;
  height: 80%;
  border-radius: 15px;
  /* outline:2px solid blue; */
}
.btntama button{
  width: 100%;
}
.btntama{
  /* outline:2px solid blue; */
  width: 50%;
  /* height: 39px; */
  /* margin: auto; */
  /* display: block; */
}
.informacion_detalle-titulo{
  font-weight: bold;
  margin-bottom: 15px;
}


</style>
