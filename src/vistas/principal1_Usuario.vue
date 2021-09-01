<template>
    <div class="alerta">
        <div class="alerta_info">
            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Importante!!!!</h4>
            <p>
                Si tu consulta es anonima favor de seleccionar la Opcion SI,en caso contrario pulsa el boton siguiente para continuar con tu denucia anonima.
                
            </p>
        </div>
        <div class="custom-control custom-switch op">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" value="NO" v-on:change="seleccionar" >
            <label class="custom-control-label" for="customSwitch1"><span id="TEXTO">NO</span></label>
        </div>
        </div>
        
        <!-- <button type="button" class="btn btn-dark" onClick="parent.location='#/Ingresso_Formulario'">Siguiente</button> -->
     <!-- <button type="button" class="btn btn-dark" v-on:click="navegar">Siguiente</button> -->
   </div>


        <!-- <br> -->
        <!-- <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" value="NO" v-on:change="cambio" >
            <label class="custom-control-label" for="customSwitch1"><span id="TEXTO">NO</span></label>
        </div> -->
        <!-- <br> -->
        
       
</template>
<script>
export default {
    props:{
        titulo:Number
    },
    methods:{
        seleccionar(){
            this.$emit("tipo_queja")
        },
         navegar(){
            this.$emit("tipo_navegar")
        }
    }
}
</script>
<style scoped>
.op{
   margin-left: 45%;
}
</style>
