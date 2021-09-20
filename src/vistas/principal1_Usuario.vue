<template>
    <div class="alerta">
        <div class="alerta_info">
            
            <div class="alert alert-primary" role="alert">
                
            <h4 class="alert-heading">Importante!!!!</h4>
            <p>
                Recuerda que si desesas que tu consulta sea anonima debes Seleccionar 
                la opcion <b> "ANONIMA" </b> que tus Denuncia en Diaco sea Confidencial.
            </p>
            </div>
            <div class="custom-control custom-switch op">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" value="NO" v-on:change="seleccionar" >
                <label class="custom-control-label" for="customSwitch1"><span id="TEXTO">NO ANONIMA</span></label>
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
   margin-left: auto;
   text-align: center;
}
.alerta_info{
  width: 95%;
  font-size: medium;
  /* outline: 2px solid blue; */
}
.op span{
    font-weight: bold;
}
.alerta{
   
    /* height: 80%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 15px; */
}
p{
    font-size: small;
    margin: 0px;
}
</style>
