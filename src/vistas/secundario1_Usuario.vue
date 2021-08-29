<template>
<div class="datospersonales">
    <form>
        <input id="prodId" name="prodId" type="text" style="" v-model="form.opcion2" value="1">
        <div v-show="vista==='noanonimo'">
                <div class="Titulo">
                <h4><span class="indicador">1</span> Datos Personales</h4>
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
        <br>

        <div class="Titulo">
            <h4><span class="indicador" v-if="vista==='noanonimo'">2</span>
            <span class="indicador" v-else>1</span>
            Datos Proveedor</h4>
        </div>
        <div class="formulario1">
            
            <div class="form-row">
                <div class="col">
                    <label for="exampleInputEmail1">Empresa</label>
                    <input type="text" v-model="form.empresa" class="form-control" id="empresa" placeholder="Nombre de la empresa" >
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Razon Social</label>
                    <input type="text" v-model="form.razon" class="form-control" id="razon" placeholder="Razon Social Empresa" >
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Nit</label>
                    <input type="text" v-model="form.nit" class="form-control" id="nit" placeholder="Nit de la Empresa" >
                </div>
            </div>

            <div class="form-row">
                <div class="col">
                    <label for="exampleInputEmail1">Direccion</label>
                    <input type="text" v-model="form.direccionemp" class="form-control" id="direccion" placeholder="Direccion de la empresa" >
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Zona</label>
                    <input type="text" v-model="form.zona" class="form-control" id="zona" placeholder="Zona Social Empresa" >
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Telefono</label>
                    <input type="text" v-model="form.telefonoemp" class="form-control" id="telefonoe" placeholder="Telefono de la Empresa" >
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="exampleInputEmail1">Departamento</label>
                    <input type="text" v-model="form.departamento" class="form-control" id="departamento" placeholder="Departamento de la empresa" >
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Municipio</label>
                    <input type="text" v-model="form.municipio" class="form-control" id="municipio" placeholder="Municipio Social Empresa" >
                </div>
            </div>
        </div>
        <br>

            <div class="Titulo">
                <h4><span class="indicador" v-if="vista==='noanonimo'">3</span>
                <span class="indicador" v-else>2</span>
                Detalle Queja</h4>
            </div>
            <div class="formulario1">
                    <div class="form-row">
                        <div class="col">
                            <label for="exampleInputEmail1">No. Factura</label>
                            <input type="text" class="form-control" id="factura" placeholder="No. Factura" >
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Fecha Emision</label>
                            <input type="date" class="form-control" id="fecha" placeholder="Fecha Emision" >
                        </div>

                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label for="exampleInputEmail1">Detalle de lo sucedido</label>
                            <textarea type="text" class="form-control" id="detalle1" placeholder="" ></textarea>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Que solicita </label>
                            <textarea type="" class="form-control" id="detalle2" placeholder="" ></textarea>
                        </div>

                    </div>
                    <div class="form-row">
                    
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Seleccione un Pdf de la factura</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1">
                        </div>
                    </div>
            </div>
            <br>
            
            <button type="button"  class="btn btn-secondary" v-on:click="alta_queja">Submit</button>        
    </form>
    
         {{vista}}    
    </div>
</template>
<script>
import axios from "axios";
export default {
//   created() {
//     axios.get("http://localhost/Quejas_api/cliente.php?id=42").then((result) => {
//       console.log(result.data);
//     })
//   },
  
  data:function(){
      return{
         opcionseleccionada:2,
         form:{
             "opcion2": "",
             "departamento":"",
             "municipio":"",
             "estado":"recibido",
             "nombre":"",
             "cui":"",
             "telefono":"",
             "celular":"",
             "correo":"",
             "direccion":"",
             "empresa":"",
             "nit":"",
             "direccionemp":"",
             "zona":"",
             "telefonoemp":"",
             "correoemp":""
         },
         vista:'noanonimo'
      }
  },
  mounted(){
       this.opcionver()
       
  },
  
  methods: {
      opcionver(){
          var vistaver = this.$route.params.opcion;
        //   console.log(vistaver)
          this.vista=vistaver;
          if(vistaver=='anonimo'){
               this.opcionseleccionada=1;
                console.log(this.opcionseleccionada)
                , console.log(this.form);
          }
      },
      alta_queja(){
          console.log(this.form);
           axios.post("http://localhost/Quejas_api/cliente.php",this.form)
           .then(data => {
                 console.log(data);
           })
        
      }
    // cambio2(){
    //     var valor= this.vista
    //     console.log(valor);
    // },
    // cambio() {

    //     var doc=document.getElementById('customSwitch1').value;
    //     var valorone= this.vista
    //     if(doc==="NO")
    //     console.log(valorone),
    //     this.vista=2,
    //         document.getElementById('TEXTO').innerHTML="SI",
    //         document.getElementById("customSwitch1").value = "SI";
            
    //     else
    //      this.vista=1,
    //         document.getElementById('TEXTO').innerHTML="NO",
    //         document.getElementById("customSwitch1").value = "NO"; 
        
    // }
  }
};
</script>

<style scoped>
.Titulo{
    margin-top: 15px;
    height: 12%;
     border-bottom: 2px solid lightgray;
}
.indicador{
    color: white;
    font-weight: bolder ;
    background-color: black;
    text-align: center;
    padding: 10px;
    border: 2px solid grey;
    border-radius: 100%;
}
</style>