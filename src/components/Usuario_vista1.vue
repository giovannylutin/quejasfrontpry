<template>
    <div class="texto">
        <div class="alert alert-primary" role="alert">
            <h4 class="alert-heading">{{tituloalerta}}</h4>
            <p>
                {{alertacontenido}}
            </p>
        </div>
        <br>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" value="NO" v-on:change="cambio" >
            <label class="custom-control-label" for="customSwitch1"><span id="TEXTO">NO</span></label>
        </div>
        <br>
        
        <button type="button" class="btn btn-dark" onClick="parent.location='#/Ingresso_Formulario'">Siguiente</button>
    </div>
</template>
<script>

export default {
 data(){
   return{
        tituloalerta:'Importante!!!!',
        alertacontenido:"Si tu consulta es anonima favor de seleccionar la Opcion SI,en caso contrario pulsa el boton siguiente para continuar con tu denucia anonima."
   }
 },
  methods: {
    cambio() {
        var doc=document.getElementById('customSwitch1').value;
        if(doc==="NO")
            document.getElementById('TEXTO').innerHTML="SI",
            document.getElementById("customSwitch1").value = "SI";
        else
            document.getElementById('TEXTO').innerHTML="NO",
            document.getElementById("customSwitch1").value = "NO"; 
        
    }
  }
}
</script>

