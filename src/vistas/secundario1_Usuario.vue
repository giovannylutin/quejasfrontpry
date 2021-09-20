<template>
<div class="datospersonales">
        <form>
        <div v-show="vista==='noanonimo'">
                <div class="Titulo">
                <h4><span class="indicador">A</span> Datos Personales</h4>
            </div>

            <div class="formulario1" >
                <div class="form-row">
                    <div class="col">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input type="text" v-model="form.nombre" class="form-control" id="nombre" placeholder="Nombre completo">
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">No. CUI</label>
                        <input type="text" v-model="form.cui" class="form-control" id="cui" placeholder="CUI" >
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <label for="exampleInputEmail1">Telefono</label>
                        <input type="text" v-model="form.telefono" class="form-control" id="telefono" placeholder="Telefono">
                    </div>
                    <div class="col">
                            <label for="exampleInputEmail1">Celular</label>
                            <input type="text" v-model="form.celular" class="form-control" id="celular" placeholder="Celular" >
                    </div>
                    <div class="col">
                            <label for="exampleInputEmail1">Correo</label>
                            <input type="email" v-model="form.correo" class="form-control" id="correo" placeholder="Correo">
                    </div>
                </div>
            </div>
        </div>   
        

        <div class="Titulo">
            <h4><span class="indicador" v-if="vista==='noanonimo'">B</span>
            <span class="indicador" v-else>A</span>
            Informacion de la Empresa</h4>
        </div>
        <div class="formulario1">
            <!-- nivel 1 empresa -->
            <div class="form-row">
                <div class="col">
                    <label for="exampleInputEmail1">Empresa</label>
                    <input type="text" v-model="form.nemp"  class="form-control" id="empresa" placeholder="Nombre de la empresa" >
                </div>
                <!-- <div class="col">
                    <label for="exampleInputEmail1">Razon Social</label>
                    <input type="text" class="form-control" id="razon" placeholder="Razon Social Empresa" >
                </div> -->
                <div class="col">
                    <label for="exampleInputEmail1">Nit</label>
                    <input type="text" v-model="form.nit" class="form-control" id="nit" maxlength="7" placeholder="Nit de la Empresa" >
                </div>
            </div>
            <!-- nivel 2 empresa -->
            <div class="form-row">
                <div class="col">
                    <label for="exampleInputEmail1">Direccion</label>
                    <input type="text" v-model="form.direccionemp" class="form-control" id="direccion" placeholder="Direccion de la empresa">
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Zona</label>
                    <input type="text" v-model="form.zona" class="form-control" id="zona" placeholder="Zona Social Empresa" maxlength="2">
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Telefono</label>
                    <input type="text" v-model="form.telefonoemp" class="form-control" id="telefonoe" placeholder="Telefono de la Empresa" maxlength="9" >
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="selectexample">Departamento</label>
                    <select v-model="form.departamento" class="form-control"  v-on:change="cambiarmun" required>
                         <option value="" disabled selected hidden>Seleccione Departamento</option>
                        <option v-for="(depa) in departamento" v-bind:key ="depa.ID_DEP" :value="depa.ID_DEP">{{depa.DEPARTAMENTO}}</option>
                    </select>
                    <!-- <input type="text" v-model="form.departamento" class="form-control" id="departamento" placeholder="Departamento de la empresa" > -->
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Municipio</label>
                    <select v-model="form.municipio" class="form-control" aria-label="selectexample">
                        <option value="" disabled selected hidden>Seleccione Municipio</option>
                        <option v-for="(muni) in municipio" v-bind:key ="muni.ID_MUN" :value="muni.ID_MUN">{{muni.MUNICIPIO}}</option>
                    </select>
                    <!-- <input type="text" v-model="form.municipio" class="form-control" id="municipio" placeholder="Municipio Social Empresa" > -->
                </div>
            </div>
        </div>
        

            <div class="Titulo">
                <h4><span class="indicador" v-if="vista==='noanonimo'">C</span>
                <span class="indicador" v-else>B</span>
                Detalles de la Queja</h4>
            </div>
            <div class="formulario1">
                    <div class="form-row">
                        <div class="col">
                            <label for="exampleInputEmail1">No. Factura</label>
                            <input type="text" v-model="form.factemp" class="form-control" id="factura" placeholder="No. Factura" >
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Fecha Emision</label>
                            <input type="date" v-model="form.facfechatemp" class="form-control" id="fecha" value="" placeholder="Fecha Emision" >
                        </div>

                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label for="exampleInputEmail1">Detalle de lo sucedido</label>
                            <textarea type="text" v-model="form.quejaemp" class="form-control" id="detalle1" placeholder="" ></textarea>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Que solicita </label>
                            <textarea type="text" v-model="form.requiereemp" class="form-control" id="detalle2" placeholder="" ></textarea>
                        </div>

                    </div>
                    <!-- <div class="form-row">
                    
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Seleccione un Pdf de la factura</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1">
                        </div>
                    </div> -->
            </div>
                  <FlashMessage :position="'right bottom'"></FlashMessage>       
    </form> 
    <div class="botonesf">
        <infomodal v-if="mostrarinfo==true" @okcerrar="cambiocerarrar" />
            <button type="submit"  class="btn btn-success" v-on:click="alta_queja">Enviar Queja</button>
            <button type="submit"  class="btn btn-info"  v-on:click="retornar">Salir</button>  
    </div>      
</div>
</template>
<script>
 import axios from "axios";
 
import infomodal from './modal_informativo.vue';
export default {
//   created() {
//     axios.get("http://localhost/Quejas_api/cliente.php?id=42").then((result) => {
//       console.log(result.data);
//     })
//   },
components:{
  infomodal
  // vistaformulario
},

  data(){
      return{
         opcionseleccionada:2,
         departamento:[],
         municipio:[],
         form:{},        
         vista:'noanonimo',
         mostrarinfo:true
      }
  },
  mounted(){
       this.opcionver(),
       this.llenarform(),
       this.llenarmunicipio()
       if(localStorage.getItem('tk_info')){
            this.mostrarinfo=false
       }
       
        
  },
  
  methods: {
    llenarform() {
        this.form = {opcion: this.opcionseleccionada,"departamento":"",
             "municipio":"",
             "estado":"recibido",
             "nombre":"",
             "cui":"",
             "telefono":"",
             "celular":"",
             "correo":"",
             "direccion":"",
             "nemp":"",
             "nit":"",
             "direccionemp":"",
             "zona":"",
             "telefonoemp":"",
             "correoemp":"",
             "factemp":"",
             "facfechatemp":"",
             "quejaemp":"",
             "requiereemp":""};
    //  console.log(this.departamento);
    },
    opcionver(){
       var vistaver = this.$route.params.opcion;
        //   console.log(vistaver)
          this.vista=vistaver;
          if(vistaver=='anonimo'){
               this.opcionseleccionada=1;
                // console.log(this.opcionseleccionada),
                 console.log(this.form);
          }
      },
      alta_queja(){
        //   console.log(this.form);
           console.log(this.form);
           if(this.form.nit==""){
               this.mensajes("El campo Nit es obligatorio")
           }
           else if(this.form.departamento=="" || this.form.municipio==""){
                this.mensajes("El campo Departamento y Muncipio es obligatorio")
           }else if(this.form.direccionemp==""){
               this.mensajes("El campo Direccion de la Empresa es obligatorio")
           }else if(this.form.factemp==""){
               this.mensajes("El campo No. factura es obligatorio")
           }else if(this.form.facfechatemp==""){
               this.mensajes("El campo Fecha de emision es obligatorio")
           }else if (this.form.quejaemp==""){
               this.mensajes("El campo Detalle de la queja es obligatorio")
           }else{
            axios.post("http://localhost/Quejas_api/cliente.php",this.form)
            .then(data => {
                  if(data.status==200){
                      if(data.statusText=='fail'){
                          console.log("no se inserto")
                          console.log(data.request)
                      }else{
                    var valortk = data.statusText;
                    //   alert("se inserto correctamente"+valortk);
                    console.log(data.request)
                    localStorage.removeItem('tk_sesion')
                    this.$router.push('/'+valortk +'/Consulta')
                      }
                  }
           })
           }
        
      },
      mensajes(mensaje){
          var tit = "CAMPOS VACIOS"
          this.flashMessage.show({status:'warning',title:tit,message:mensaje,time: 5000});
      },
      cambiarmun(){
          this.form.departamento;
           axios.get ("http://localhost/Quejas_api/elementos.php?id="+this.form.departamento) .then (res => {// Aquí está la escritura de ES6. La dirección de la solicitud de obtención es el archivo php que el propio editor almacena en el sitio web. Introduce su escritura, también puedes definir la tuya
                 this.municipio = res.data; // Obtener datos
                 console.log(this.municipio);
           
      })
      }

      ,llenarmunicipio(){
      
     axios.get ("http://localhost/Quejas_api/elementos.php") .then (res => {// Aquí está la escritura de ES6. La dirección de la solicitud de obtención es el archivo php que el propio editor almacena en el sitio web. Introduce su escritura, también puedes definir la tuya
                 this.departamento = res.data; // Obtener datos
            //    console.log('success');
            //   console.log(this.departamento);
      })
      },
      retornar(){
          localStorage.removeItem('tk_info')
          this.$router.push('/')
      },
      cambiocerarrar(){
          
          this.mostrarinfo=false
          localStorage.setItem('tk_info',this.mostrarinfo)
      }

  }
};
</script>

<style scoped>
.Titulo{
    margin-top: 5px;
    margin-bottom: 15px;
    height: 12%;
    border-bottom: 2px solid lightgray;
}
.Titulo span{
    font-weight: bold;
    font-size: medium;
}
.indicador{
    color: white;
    font-weight: bolder ;
    background-color: black;
    text-align: center;
    padding: 5px;
    border: 2px solid grey;
    border-radius: 100%;
}
.botonesf button{
    margin-top: 10px;
    margin-right: 15px;
}
::-webkit-scrollbar {
    display: none;
}
</style>