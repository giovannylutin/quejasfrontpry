<template>
   <div class="Consulta">
       <div class="Consulta_estados" v-if="this.miqueja[0].ESTADO=='recibido'">
           <span class="badge badge-pill badge-success">Entregado</span>
           <span class="badge badge-pill badge-secondary">Evaluando</span>
           <span class="badge badge-pill badge-secondary">En proceso</span>
           <span class="badge badge-pill badge-secondary">Finalizado</span>
       </div>
       <div class="Consulta_detalle" >
           <div  class="titulo">
               <h6>Queja Tipo: 
                   <br>
                   <span v-if="this.miqueja[0].TIPO=='Queja no anonima'">No Anonima</span>
                   <span v-else>Anonima</span>
               </h6>
           </div>
           <div  class="titulo">
               <h6>Fechas Recibido:
                   <br> 
                   <span v-if="this.miqueja[0].TIPO=='Queja no anonima'">{{miqueja[0].FECHA_ALTA}}</span>
                   <span v-else>{{miqueja[0].FECHA_ALTA}}</span>
               </h6>
           </div>
           <div  class="titulo">
               <h6>Para Consultar:
                   <br> 
                   <span v-if="this.miqueja[0].TIPO=='Queja no anonima'">{{miqueja[0].QUEJA_CONSULTA}}</span>
                   <span v-else>{{miqueja[0].QUEJA_CONSULTA}}</span>
               </h6>
           </div>
       </div>
       {{miqueja}}

       
   </div>
</template>
<script>
import axios from "axios";
//http://192.168.1.7:8080/#/BFbZuo0821/Consulta
export default ({
    data() {
        return{
            miqueja:[],
            estatusproceso:1
        }
    },
    mounted(){
        this.consultardenuncia()
    },
    methods:{
         consultardenuncia(){
          console.log(this.$route.params.tk)
           axios.get ("http://localhost/Quejas_api/cliente.php?id="+this.$route.params.tk) .then (res => {// Aquí está la escritura de ES6. La dirección de la solicitud de obtención es el archivo php que el propio editor almacena en el sitio web. Introduce su escritura, también puedes definir la tuya
                 this.miqueja = res.data; // Obtener datos
                 console.log(this.miqueja);
           
      })
      }
    }
})
</script>

<style scoped>
.Consulta{
    /* outline: 2px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.Consulta_estados{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* outline: 2px solid green; */
}
.Consulta_detalle{
    height: 15%;
    display: flex;
    flex-direction: row;
     justify-content: center;   
    /* outline: 2px solid green; */
    margin-top: 10px;
   
}
.titulo h6{
    margin: 0;
    padding: 0;
}
.titulo{
    width: 25%;
    height: 100%;
    border-radius: 10px;
    margin-left: 20px;
    
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: lightgray;
}

.Consulta_estados span{
    /* outline: 2px solid green; */
    margin-left: 20px;
    margin-right: 50px;
}
</style>
