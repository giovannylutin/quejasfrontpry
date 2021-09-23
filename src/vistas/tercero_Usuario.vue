<template>
   <div class="Consulta">
       <div class="Consulta_estados">
           <!-- <span class="badge badge-pill badge-success">Entregado</span> -->
            <div class="col-10 align-self-start">
           <h3>Queja de la Factura No.{{miqueja[0].NOFACTURA}}</h3>
           <h4>
           <span v-if="this.miqueja[0].ESTADO=='recibido'" :class="estadosmodificar">{{this.miqueja[0].ESTADO}}</span>
           <!-- <span v-if="this.miqueja[0].ESTADO=='revisando'" :class="estadosmodificar">Evaluando</span>
           <span v-if="this.miqueja[0].ESTADO=='investigando'" :class="estadosmodificar">En proceso</span>
           <span v-if="this.miqueja[0].ESTADO=='finalizado'" :class="estadosmodificar">Finalizado</span> -->
           <span v-if="this.miqueja[0].ESTADO=='rechazado'" :class="estadosmodificar">Rechazado</span>
           <span v-if="this.miqueja[0].ESTADO=='enproceso'" :class="estadosmodificar">En Proceso</span>
           </h4>
            </div>
           
           <div class="col-3 align-self-end btnaccion">
                <button type="button" v-on:click="imprimirconst" class="btn btn-danger btn-sm btn" >Imprimir</button>
                <button type="button" v-on:click="retornar" class="btn btn-warning btn-sm btn" >Salir</button>   
            </div>
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
        <div class="Consulta_detalle-titulo">
               <h5>Detalles Relevantes</h5>
        </div>
       <div class="Consulta_detallesqueja">
           <div class="Consulta_detallesqueja-detalle">
                <h6>Queja:</h6>
                <p>{{miqueja[0].QUEJA}}</p>
           </div>
           <div class="Consulta_detallesqueja-solicita">
             <h6>Solicitado:</h6>
             <P>{{miqueja[0].REQUEIRE}}</P>
           </div>
           <div class="Consulta_detallesqueja-notificacion">
               <h6>Informacion:</h6>
               <p>{{Nota}}</p>
           </div>
       </div>
       <FlashMessage :position="'right top'"></FlashMessage>
       <!-- {{miqueja}} -->

       
   </div>
</template>
<script>
import axios from "axios";
import jsPDF from 'jspdf' ;
//http://192.168.1.7:8080/#/BFbZuo0821/Consulta
export default ({
    data() {
        return{
            miqueja:[{ESTADO:''}],
            estatusproceso:1,
            mirutahost: this.GLOBAL.serverSrc,
            Nota:"Según la Constitución Política de Guatemala, usted tiene el derecho de proporcionar sus datos como garantía de confidencialidad para evitar su uso o publicación indebida."
        }
    },
    mounted(){
        this.consultardenuncia()
    },
    computed:{
        estadosmodificar:function(){
            return{
                'badge badge-pill badge-success':this.miqueja[0].ESTADO=='finalizado' || this.miqueja[0].ESTADO=='recibido',
                'badge badge-pill badge-secondary':this.miqueja[0].ESTADO=='rechazado',
                'badge badge-pill badge-warning':this.miqueja[0].ESTADO=='enproceso'
            }
        }
    },
    methods:{
         consultardenuncia(){
          console.log(this.$route.params.tk)
           axios.get (this.mirutahost+"/Quejas_api/cliente.php?id="+this.$route.params.tk) .then (res => {// Aquí está la escritura de ES6. La dirección de la solicitud de obtención es el archivo php que el propio editor almacena en el sitio web. Introduce su escritura, también puedes definir la tuya
                 
                
           if(res.data!=0){
                this.miqueja = res.data; 
                // console.log(this.miqueja)
                // console.log(this.mirutahost);
                this.flashMessage.show({status:'success',title:'Listo',message:'Estos son los Detalles de tu queja ingresada',time: 5000});

           }else{
               this.$router.push('/opps')
           }
      })
      },
      imprimirconst(){
          var nempresa="Empresa: "+this.miqueja[0].EMPRESA;
          var direccion="Dirección : "+this.miqueja[0].DIRECCION;
          var departamento="Departamento : "+this.miqueja[0].DEPARTAMENTO;
          var municipio="Municipio : "+this.miqueja[0].MUNICIPIO;
          var zona="Zona: "+this.miqueja[0].ZONA;
          var nit="Nit : "+this.miqueja[0].NIT;
          var telefono = "Teléfono : "+this.miqueja[0].NIT;
          var factura = "Factura : "+this.miqueja[0].NOFACTURA;
          var fecha = "Fecha de emisión : "+this.miqueja[0].FECHA_ALTA;
           var queja =this.miqueja[0].QUEJA;
           var solicita =this.miqueja[0].REQUEIRE;

             var estado ="Estatus."+this.miqueja[0].ESTADO;
           var tk ="Doc."+this.miqueja[0].QUEJA_CONSULTA;

          
          var pie = "NOTA: Según la Constitución Política de Guatemala, usted tiene el derecho de proporcionar";
          var pie1 ="sus datos como garantía de confidencialidad para evitar su uso o publicación indebida.";
          const doc = new jsPDF()
          doc.setFontSize(13);
           doc.text(estado,15,10);
           doc.text(tk,160,10);
          doc.setFontSize(22);
          doc.text("Constancia",100,30,'center');
          doc.setFontSize(16);
           doc.text("-Informacion Empresa",40,40,'center');
           doc.setFontSize(13);
           doc.text(nempresa,40,50,'center');
           doc.text(direccion,100,50,'center');
           doc.text(zona,160,50,'center');
           doc.setFontSize(13);
           doc.text(departamento,52,60,'center');
           doc.text(municipio,115,60,'center');
           doc.text(telefono,170,60,'center');

           doc.setFontSize(16);
           doc.text("-Informacion Queja",40,80,'center');
           doc.setFontSize(13);
           doc.text(nit,40,90,'center');
           doc.text(factura,80,90,'center');
           doc.text(fecha,150,90,'center');

           doc.setFontSize(13);
           doc.text("Información Queja : ",40,100,'center');
           doc.setFontSize(11);
           doc.text(queja,40,110);
           doc.setFontSize(13);
           doc.text("Se solicita : ",20,120);
           doc.setFontSize(11);
           doc.text(solicita,40,130);
        //    doc.text(factura,75,90,'center');
           
          
          //pienota
          doc.setFontSize(12);
          doc.text(pie,100,260,'center').setFontSize(8);
          doc.setFontSize(12);
          doc.text(pie1,100,270,'center').setFontSize(8);
          doc.save('Constancia_queja_ingresada.pdf')
          
      },
      retornar(){
          this.$router.push('/') 
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
    /* outline: 2px solid green; */
}
.btnaccion button{
    margin-left: 10px;
    margin-bottom: 3px;
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
/* .Consulta_estados span{ */
    /* outline: 2px solid green; */
    /* margin-left: 25px; */
    /* margin-right: 50px; */
/* } */
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
}.Consulta_detallesqueja{
    /* outline: 2px SOLID blue; */
    height: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.Consulta_detallesqueja-detalle, .Consulta_detallesqueja-solicita,.Consulta_detallesqueja-notificacion{
    /* outline: 2px SOLID red; */
    height: 130px;
    width: 320px;
    margin: 0 auto;
    padding: 10px;
    text-align: justify;
    font-size: 13px;
    border: 2px solid lightgray;
    box-shadow: 0px 5px 8px lightgray;
    border-radius: 10px;
    
}.Consulta_detallesqueja h6{
    font-weight: bold;
}
.Consulta_detallesqueja-notificacion{
    background-color: #b8daba;
}
/* .Consulta_informacion-empresa h6{
    font-size: medium;
}
.Consulta_informacion-empresa h5{
font-size: large;
font-weight: bold;
} */
</style>
