<template>
<div class="modalh">
  <div class="modalh_cuerpo">
    <div class="modalh_cuerpo-texto">
    <img src="http://drive.google.com/uc?export=view&id=1bl7fgvo8xnKG6BSbpdKcj53quURwayF8" alt="">
      <p> Al momento de enviar tua quja ya no podras modificar la informacion que estas
         colocando asi que asegurate
        que la informacion que estas colocando sea la correcta 
      </p>
    </div>
    <div class="modalh_cuerpo-boton">
      <button type="submit"  class="btn btn-success" v-on:click="cerrar">cerrar</button>
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
  background-color: white;
  width: 600px;
  height: 300px;
  border-radius: 15px;
  padding: 30px;
}
.modalh_cuerpo-texto{
  display: flex;
  flex-direction:row;
}
.modalh_cuerpo-texto p{
  text-align: justify;
  margin-top: 96px;
}.modalh_cuerpo-texto img{
  width: 100px;
  height: 100px;
}
</style>