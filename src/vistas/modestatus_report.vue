<template>
    <div class="contenedor">
        <div class="modificarestatus col">
            <div class="modificarestatus_opciones row ">
                
                <div class="form-row modificarestatus_opciones-campos">
    
                            <div class="">
                               <input type="text" v-model="campos.Idlistar" class="form-control" placeholder="codigo">
                            </div>
                            <button type="button" v-on:click="buscarqueja" class="btn btn-success btn-sm" >BUSCAR</button>
                        <button type="button" v-on:click="Salir" class="btn btn-success btn-sm" >Retornar</button>
                </div>

            </div>
            <div class="modificarestatus_informacion row">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Queja No</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Empresa</th>
                   <th scope="col">Direccion</th>
                  <th scope="col">Id Consulta</th>
                  <th scope="col">Fecha recibido</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="(datactualiza,index) in registro" v-bind:key ="index++">
                    <!-- <tr> -->
                    <td>{{datactualiza.ID_QUEJA}}</td>
                    <td>{{datactualiza.ESTADO}}</td>
                    <td>{{datactualiza.EMPRESA}}</td>
                    <td>{{datactualiza.DIRECCION}}</td>
                    <td>{{datactualiza.ZONA}}</td>
                    <td>{{datactualiza.DEPARTAMENTO}}</td>
                    <td>{{datactualiza.MUNICIPIO}}</td>
                  </tr>
               </tbody>
              </table>
            </div>
            <div class="modificarestatus_form ">
                <div class="modificarestatus_form-campos">
                    <div class="form-row">
                        <div class="col">
                        <select type="select" v-model="campos.estadoquejaop" class="form-control" placeholder="First name">
                            <option value="0">seleccionar un estado</option>
                            <option value="recibido">Recibido</option>
                            <option value="enproceso">En proceso</option>
                            <option value="finalizado">Finalizado</option>
                            <option value="rechazado">Rechazado</option>
                        </select>
                        </div>
                        <div class="col">
                            <button type="button" v-on:click="actualizaestado" class="btn btn-success " >Actualizar</button>
                        </div>
                    </div>
                    
                </div>
                <div class="modificarestatus_form-disponibles">
                     <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Empresa</th>
                   <th scope="col">Direccion</th>
                  <th scope="col">Zona</th>
                  <th scope="col">IDconsulta</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="(datainformacion,index) in registrosdispo" v-bind:key ="index++">
                    <!-- <tr> -->
                    <td>{{datainformacion.ID_QUEJA}}</td>
                    <td>{{datainformacion.ESTADO}}</td>
                    <td>{{datainformacion.EMPRESA}}</td>
                    <td>{{datainformacion.DIRECCION}}</td>
                    <td>{{datainformacion.ZONA}}</td>
                    <td class="color">{{datainformacion.QUEJA_CONSULTA}}</td>
                 
                  </tr>
               </tbody>
              </table>
                </div>
            </div>
        </div>
        <!-- <div class="traking">
             <div class="col">
                    <label for="exampleInputEmail1">Empresa:</label>
                    <select id="emptext" class="form-control form-control-sm" v-model="nemp" v-on:change="mostrarcampos" >
                            <option value="" disabled selected hidden>Seleccione Empresa</option>
                            <option v-for="(emptotal) in empresast" v-bind:key ="emptotal.NIT" :value="emptotal.NIT">{{emptotal.EMPRESA}}</option>
                    </select>   
                    </div>
                    <div class="col">
                    <label for="exampleInputEmail1">Fecha Desde:</label>
                    <input type="date" v-model="fechadesdef"  v-on:change="mostrarcampos" class="form-control form-control-sm" id="fechadesde" placeholder="Nit Empresa" >
                    </div>
                    <div class="col">
                    <label for="exampleInputEmail1">Fecha Hasta:</label>
                    <input type="date" v-model="fechahastaf" v-on:change="mostrarcampos" class="form-control form-control-sm" id="fechahasta" placeholder="Nit Empresa" >
                    </div>
        </div> -->
        <FlashMessage :position="'right bottom'"></FlashMessage>
    </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import axios from "axios";
export default({
    mounted(){
        if(localStorage.getItem('tk_sesion')){
            
            this.listar_listarquejas()
        }
        else{
            this.$router.push('/Ingreso')
        }
        
    },
    data() {
        return{
            // Idlistar:"",
            registro:[],
            registrosdispo:[],
            campos:{
                Idlistar:"",
                estadoquejaop:""
            }
            
            // rutaactual:this.$router
        }
    },
    methods:{
        listar_listarquejas(){
              
        axios.get (this.GLOBAL.serverSrc+"/Quejas_api/alta.php") .then (res => {
                     this.registrosdispo = res.data;
         console.log(this.registrosdispo)
        })

        },
        buscarqueja(){
            if(this.campos.Idlistar!=""){
                  axios.get (this.GLOBAL.serverSrc+"/Quejas_api/actualizarestado.php?id="+this.campos.Idlistar) .then (res => {
                if(res.data!=0){
                this.registro = res.data; 
                console.log(this.registro);
                // console.log(this.mirutahost);
                this.flashMessage.show({status:'success',title:'Listo',message:'Tus datos fueron cargados',time: 5000});

                        }else{
                            this.flashMessage.show({status:'warning',title:'Listo',message:'OOOOPS no hay registros con ese id',time: 5000});
                        }
                                // this.flashMessage.show({status:'success',title:'Listo',message:'Estos son los Detalles de tu queja ingresada',time: 5000});

                        
                    })
            }else{
                this.flashMessage.show({status:'warning',title:'!!OOPSS',message:'Debes Ingresar un IdConsulta ',time: 5000});
            }
            // alert(this.registro)
        },
        actualizaestado(){
           if(this.campos.Idlistar!=""){
                 axios.put(this.GLOBAL.serverSrc+"/Quejas_api/actualizarestado.php",this.campos)
                    .then(data => {
                        if(data.status==200){ 
                            if(data.request.statusText!="OK"){
                                this.flashMessage.show({status:'success',title:'Listo',message:'El estado fue actualizado con exito',time: 5000});
                                axios.get (this.GLOBAL.serverSrc+"/Quejas_api/actualizarestado.php?id="+this.campos.Idlistar) .then (res => {
                                this.registro = res.data;  
                                })

                            }else{
                                console.log(data)
                                this.flashMessage.show({status:'warning',title:'!!OOPSS',message:'El estado no se actualizo',time: 5000});
                            }
                    }
                })
           }else{
               this.flashMessage.show({status:'warning',title:'!!OOPSS',message:'Debes Ingresar un IdConsulta para Realizar Esta Accion',time: 5000});
           }
            //  console.log(this.campos)
        },
        Salir(){
           this.$router.push('/Ingreso') 
        }

    }
})
</script>

<style scoped>
.contenedor{
    /* outline: 2px solid red; */
    width: 100%;
    height: 100%;
}
.modificarestatus{
    /* outline: 2px solid pink; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
}
.modificarestatus_opciones{
     /* outline: 2px solid blue; */
    width: auto;
    height: 15em;
    background-color: lightgray;
    flex-direction: column;
    justify-content: center;
}
.modificarestatus_opciones-campos{
    padding: 8px;
    margin-left: 1px;
}
.modificarestatus_opciones-campos button{
    margin-left: 15px;
}
.modificarestatus_informacion{
     /* outline: 2px solid green; */
    width: auto;
    height: 20rem;
}
.modificarestatus_form{
     /* outline: 2px solid red; */
    width: auto;
    height: 55rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* align-items: center; */
}
.modificarestatus_form-campos{
  /* outline: 2px solid green;  */
  width: 20rem;
  height: 14rem;
  /* width: 5rem;
  height: 50rem;   */
}
.modificarestatus_form-disponibles{
  /* outline: 2px solid green;  */
  width: 50rem;
  height: 14rem;
   overflow-y: scroll;
    overflow-x: scroll;
  /* width: 5rem;
  height: 50rem;   */
}
::-webkit-scrollbar {
    display: none;
}
.color{
    background: lightseagreen;
    color: black;
    font-weight: bold;
}
</style>