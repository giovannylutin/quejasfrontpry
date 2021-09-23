<template>
<div class="modalh">
  <div class="modalh_cuerpo">
    <div class="modalh_cuerpo-texto">
    <img src="http://drive.google.com/uc?export=view&id=1bl7fgvo8xnKG6BSbpdKcj53quURwayF8" alt="">
      <p> RECUERDA que después de enviar tu queja, NO podrás modificar la información ingresada
         en este formulario, por eso te recordamos que debes revisar cuidadosamente la 
         información que coloques antes de emitir tu queja, cualquier duda o comentario 
         puedes avocarte a una agencia Diaco en tu región 
      </p>
    </div>
    <div class="modalh_cuerpo-boton">
      <button type="bottom"  class="btn btn-warning btn-sm" v-on:click="cerrar">cerrar</button>
    </div>
  </div>
<!-- <h1>hola</h1> -->

</div>
    
<!-- Button trigger modal -->
<!-- Modal -->

    
</template>
<script>
export default({
  methods:{
        cerrar(){
           this.$emit("okcerrar")
        }
      }
})
</script>

<style>
.modalh{
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}.modalh_cuerpo{
  background-color: whitesmoke;
  width: 600px;
  height: 300px;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border:2px solid lightgray;
}
.modalh_cuerpo-texto{
  
    background-color: white;
    display: flex;
  flex-direction:row;
  height: 90%;
  width: 95%;
  border:2px solid lightgray;
    border-radius: 15px;
   box-shadow: 0px 5px 8px gray;

}
.modalh_cuerpo-texto p{
  padding: 20px;
}.modalh_cuerpo-texto img{
  width: 80px;
  height: 80px;
  margin: 10px;
}
.modalh_cuerpo-boton{
  /* outline: 2px solid red; */
  width: 20%;
  display: flex;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
}
.modalh_cuerpo-boton button{
  font-weight: bold;
  width: 100%;
  font-size: medium;
}
</style>