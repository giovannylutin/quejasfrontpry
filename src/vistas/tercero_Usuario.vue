<template>
   <div class="Consulta">
       <div class="Consulta_estados">
           <!-- <span class="badge badge-pill badge-success">Entregado</span> -->
           <h3>Queja de la Factura No.{{miqueja[0].NOFACTURA}}</h3>
           <h4>
           <span v-if="this.miqueja[0].ESTADO=='recibido'" :class="estadosmodificar">{{this.miqueja[0].ESTADO}}</span>
           <!-- <span v-if="this.miqueja[0].ESTADO=='revisando'" :class="estadosmodificar">Evaluando</span>
           <span v-if="this.miqueja[0].ESTADO=='investigando'" :class="estadosmodificar">En proceso</span>
           <span v-if="this.miqueja[0].ESTADO=='finalizado'" :class="estadosmodificar">Finalizado</span> -->
           <span v-if="this.miqueja[0].ESTADO=='rechazado'" :class="estadosmodificar">Rechazado</span>
           </h4>
       </div>
       <div class="Consulta_detalle" >
           <div class="Consulta_detalle-titulo">
               <h5> Detalles de tu Queja</h5>
           </div>
           <div class="Consulta_detalle-infobasica">
                <div  class="titulo">
                    <h6>Queja Tipo:</h6>
                    <span v-if="this.miqueja[0].TIPO=='Queja no anonima'">No Anonimo</span>
                    <span v-else>Anonimo</span>
                </div>
                <div  class="titulo">
                    <h6>Empresa:</h6>
                    <span v-if="this.miqueja.TIPO=='Queja no anonima'">{{miqueja[0].EMPRESA}}</span>
                    <span v-else>{{miqueja[0].EMPRESA}}</span>
                </div>
                <div  class="titulo">
                    <h6>Nit:</h6>
                    <span>{{miqueja[0].NIT}}</span>
                </div>
                <div  class="titulo">
                    <h6>Fechas Recibido:</h6>
                        <span v-if="this.miqueja[0].TIPO=='Queja no anonima'">{{miqueja[0].FECHA_ALTA}}</span>
                        <span v-else>{{miqueja[0].FECHA_ALTA}}</span>
                </div>
                <div  class="titulo">
                    <h6>Para Consultar:</h6>
                        <span v-if="this.miqueja[0].TIPO=='Queja no anonima'">{{miqueja[0].QUEJA_CONSULTA}}</span>
                        <span v-else>{{miqueja[0].QUEJA_CONSULTA}}</span>
                </div>
           </div>
       </div>
       <div class="Consulta_informacion">
            <div class="Consulta_detalle-titulo">
               <h5>Ubicacion de la Empresa</h5>
           </div>
           <div class= "Consulta_informacion-empresa">
                <div  class="titulo">
                    <h6>Departamento:</h6>
                    <span>{{miqueja[0].DEPARTAMENTO}}</span>
                </div> 
                <div  class="titulo">
                    <h6>Municipio:</h6>
                    <span>{{miqueja[0].MUNICIPIO}}</span>
                </div>   
                <div  class="titulo">
                    <h6>Direccion:</h6>
                    <span>{{miqueja[0].DIRECCION}}</span>
                </div> 
                <div  class="titulo">
                    <h6>Zona:</h6>
                    <span>{{miqueja[0].ZONA}}</span>
                </div> 
                <div  class="titulo">
                    <h6>Telefono:</h6>
                    <span>{{miqueja[0].TELEFONO}}</span>
                </div> 

           </div>
       </div>
       <!-- {{miqueja}} -->

       
   </div>
</template>
<script>
import axios from "axios";
//http://192.168.1.7:8080/#/BFbZuo0821/Consulta
export default ({
    data() {
        return{
            miqueja:[{ESTADO:''}],
            estatusproceso:1
        }
    },
    mounted(){
        this.consultardenuncia()
    },
    computed:{
        estadosmodificar:function(){
            return{
                'badge badge-pill badge-success':this.miqueja[0].ESTADO=='finalizado' || this.miqueja[0].ESTADO=='recibido',
                'badge badge-pill badge-secondary':this.miqueja[0].ESTADO=='rechazado'
            }
        }
    },
    methods:{
         consultardenuncia(){
          console.log(this.$route.params.tk)
           axios.get ("http://localhost/Quejas_api/cliente.php?id="+this.$route.params.tk) .then (res => {// Aquí está la escritura de ES6. La dirección de la solicitud de obtención es el archivo php que el propio editor almacena en el sitio web. Introduce su escritura, también puedes definir la tuya
                 
                
           if(res.data!=0){
                this.miqueja = res.data; 
                 console.log(this.miqueja);
           }else{
               alert("no trae datos");
           }
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
    height: 8%;
    display: flex;
    flex-direction: row;
    align-items: center; 
    border-width: 2px;
    border-bottom-width:2px;
    border-bottom-color:lightgray;
    border-bottom-style: solid;
    /* border-bottom-color: 1px solid red; */
    
    /* justify-content: center;
    align-items: center; */
    /* outline: 2px solid green; */
}
.Consulta_estados h3,h4{
    margin-bottom: 3px;
    font-weight: bold;
}
.Consulta_detalle{
    height: 20%;
    display: flex;
    flex-direction: column;
    /* outline: 2px solid green;  */
    /* 
    flex-direction: row;
     justify-content: center;    */
    /* outline: 2px solid green; */
    /* margin-top: 10px; */
}
.Consulta_detalle-titulo{
    text-align: center;
    margin: 5px;
}
.Consulta_detalle-titulo h5{
    font-weight: bolder;
}
.Consulta_detalle-infobasica{
    display: flex;
}
.titulo h6{
    margin: 0;
    padding: 0;
    font-weight: bold;
}
.titulo{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    height: 50px;
    width: 200px;
    border: 2px solid lightgray;
    box-shadow: 0px 5px 8px lightgray;
    border-radius: 10px;


    /* width: 25%;
    height: 100%;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: lightgray; */
}
.Consulta_estados span{
    /* outline: 2px solid green; */
    margin-left: 25px;
    /* margin-right: 50px; */
}
.Consulta_informacion{
    margin-top: 5px;
    height: 23%;
    /* outline: 2PX SOLID red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.Consulta_informacion-empresa{
    display: flex;
    flex-direction: row;
    /* outline: 2px SOLID blue; */
    /* width: 30%;
    
    background-color: lightgray;
    border-radius: 10px;
    border-color: lightslategray;
    padding: 10px;
    margin: 10px;
    text-align: center; */
}
/* .Consulta_informacion-empresa h6{
    font-size: medium;
}
.Consulta_informacion-empresa h5{
font-size: large;
font-weight: bold;
} */
</style>
