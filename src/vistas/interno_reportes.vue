<template>
    <div class="Reportes">
        <div class="Reportes_datos">
             <div class="Reportes_datos-titulo">
                <h5>Empresa</h5>
            </div>
            <div class="Reportes_datos-campos">
                <div class="form-row">
                    <div class="col">
                    <label for="exampleInputEmail1">Nit Empresa:</label>
                    <!-- <select name="empresas" id=""></select> -->
                    <!-- <input type="text" v-model="nemp" v-on:keypress="busquedaemp" class="form-control form-control-sm" id="direccion" placeholder="Nit Empresa" > -->
                    
                    <select class="form-control form-control-sm" v-model="nemp" v-on:change="mostrarcampos" >
                            <option value="" disabled selected hidden>Seleccione Region</option>
                            <option v-for="(emptotal) in empresast" v-bind:key ="emptotal.NIT" :value="emptotal.NIT">{{emptotal.EMPRESA}}</option>
                    </select>
                        
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                    <label for="exampleInputEmail1">Fecha:</label>
                    <input type="date" class="form-control form-control-sm" id="direccion" placeholder="Nit Empresa" >
                    </div>
                    <div class="col">
                    <label for="exampleInputEmail1">Fecha:</label>
                    <input type="date" class="form-control form-control-sm" id="direccion" placeholder="Nit Empresa" >
                    </div>
                    
                </div>
                
            </div>
<div class="dropdown-divider"></div>
            <div class="Reportes_datos-titulo">
                <h5>Ubicacion</h5>
            </div>
            <div class="Reportes_datos-campos">

                <div class="form-row">
                    <div class="col-sm">
                        <label for="selectexample">Region:</label>
                        <select class="form-control form-control-sm" v-model="idreg" v-on:change="departamentover" >
                                <option value="" disabled selected hidden>Seleccione Region</option>
                                <option v-for="(regioncollect) in region" v-bind:key ="regioncollect.ID_REGION" :value="regioncollect.ID_REGION">{{regioncollect.REGION}}</option>
                        </select>
                                <!-- <input type="text" v-model="form.departamento" class="form-control" id="departamento" placeholder="Departamento de la empresa" > -->
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-sm">
                        <label for="selectexample">Departamento:</label>
                        <select class="form-control form-control-sm" v v-model="iddep" v-on:change="municipiover">
                                <option value="" disabled selected hidden>Seleccione Departamento</option>
                                <option v-for="(depcolect) in dep" v-bind:key ="depcolect.ID_DEP" :value="depcolect.ID_DEP">{{depcolect.DEPARTAMENTO}}</option>
                        </select>
                                <!-- <input type="text" v-model="form.departamento" class="form-control" id="departamento" placeholder="Departamento de la empresa" > -->
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-sm">
                        <label for="selectexample">Municipio:</label>
                        <select class="form-control form-control-sm">
                                <option value="" disabled selected hidden>Seleccione Departamento</option>
                                <option v-for="(muncollect) in mun" v-bind:key ="muncollect.ID_MUN" :value="muncollect.ID_MUN">{{muncollect.MUNICIPIO}}</option>
                        </select>
                                <!-- <input type="text" v-model="form.departamento" class="form-control" id="departamento" placeholder="Departamento de la empresa" > -->
                    </div>
                </div>
            </div>
            <div class="dropdown-divider"></div>
            <button type="button"  class="btn btn-success btn-sm" >Consultar</button>
            <button type="button"  class="btn btn-danger btn-sm" >Imprimir</button>
           
        </div>

        <div class="Reportes_graficas">
            <div class="Reportes_datos-titulo">
                <h4>datos</h4>
            </div>
            <div class="Reportes_graficas-informacion">
               <!-- <div>
                    <h6>Fecha Hasta: </h6>
                    Pollo
                </div> -->
                <div>
                    <h6>Nit Empresa:</h6>
                    {{this.nemp}}
                </div>
                <div>
                    <h6>Quejas Recibidas:</h6>
                    {{totalquejas}}
                    
                </div>   
                <div>
                    <h6>Fecha Desde: </h6>
                    2021-01-01
                </div>
                <div>
                    <h6>Fecha Hasta: </h6>
                    2021-09-09
                </div>
                <!-- <div>
                    <h6>Fecha Hasta: </h6>
                    2021-09-09
                </div> -->
            </div>
            <div class="Reportes_graficas-detalles">
                
                <div>
                    <table class="table table-striped table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">region</th>
      <th scope="col">departamento</th>
      <th scope="col">empresa</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(resempresas) in datosrep" v-bind:key ="resempresas.legth">
      <th scope="row">1</th>
      <td>{{resempresas.REGION}}</td>
      <td>{{resempresas.DEPARTAMENTO}}</td>
      <td>{{resempresas.EMPRESA}}</td>
    </tr>
  </tbody>
                    </table>
                </div>
            
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default({
    data() {
        return{
            region:[],
            dep:[],
            mun:[],
            idreg:"",
            iddep:"",
            nemp:"",
            empresast:[],
            datosrep:[],
            totalquejas:""
        }
    },
    mounted(){
        this.regionver(),
        this.busquedaemp()
    },
    methods: {
        regionver(){
                 axios.get ("http://localhost/Quejas_api/reportes.php") .then (res => {
                 this.region = res.data;
            //    console.log('success');
            //    console.log(this.departamento);
            })
        },
        departamentover(){
               axios.get ("http://localhost/Quejas_api/reportes.php?id="+this.idreg+"&verop=1") .then (res => {// Aquí está la escritura de ES6. La dirección de la solicitud de obtención es el archivo php que el propio editor almacena en el sitio web. Introduce su escritura, también puedes definir la tuya
                 this.dep = res.data; // Obtener datos
                //  console.log(this.dep);
           
      })
        },
        municipiover(){
                 axios.get ("http://localhost/Quejas_api/reportes.php?id="+this.iddep+"&verop=2") .then (res => {// Aquí está la escritura de ES6. La dirección de la solicitud de obtención es el archivo php que el propio editor almacena en el sitio web. Introduce su escritura, también puedes definir la tuya
                 this.mun = res.data; // Obtener datos
                //  console.log(this.mun);
                 })
        },
        busquedaemp(){
            axios.get ("http://localhost/Quejas_api/reportes.php?id="+0+"&verop=3") .then (res => {// Aquí está la escritura de ES6. La dirección de la solicitud de obtención es el archivo php que el propio editor almacena en el sitio web. Introduce su escritura, también puedes definir la tuya
                 this.empresast = res.data; // Obtener datos
                //  console.log(this.empresast);
                 })
        },
        mostrarcampos(){
             axios.get ("http://localhost/Quejas_api/reportes.php?id="+this.idreg+"&verop=4") .then (res => {
                 this.datosrep = res.data; // Obtener datos
                //  console.log(this.empresast);
                 console.log(this.nemp)
                 this.totalquejas= this.datosrep.length
                 
                 })
            //SELECT * FROM `tb_region` JOIN `tb_departamento`on `tb_region`.`ID_REGION`=`tb_departamento`.`ID_REGION`join `tb_quejas`on `tb_departamento`.`ID_DEP`=`tb_quejas`.`ID_DEP` JOIN `tb_quejas_proveedor`on `tb_quejas`.`ID_QUEJA`=`tb_quejas_proveedor`.`ID_QUEJA`JOIN `tb_quejas_empresas`on `tb_quejas_proveedor`.`NIT`= `tb_quejas_empresas`.`NIT` WHERE (`tb_quejas`.`FECHA_ALTA`) BETWEEN '2021-09-01' AND '2021-09-20'
           
            //SELECT REGION,DEPARTAMENTO,EMPRESA,DIRECCION FROM `tb_region` JOIN `tb_departamento`on `tb_region`.`ID_REGION`=`tb_departamento`.`ID_REGION`join `tb_quejas`on `tb_departamento`.`ID_DEP`=`tb_quejas`.`ID_DEP` JOIN `tb_quejas_proveedor`on `tb_quejas`.`ID_QUEJA`=`tb_quejas_proveedor`.`ID_QUEJA`JOIN `tb_quejas_empresas`on `tb_quejas_proveedor`.`NIT`= `tb_quejas_empresas`.`NIT` WHERE (`tb_quejas`.`FECHA_ALTA`) BETWEEN '2021-09-01' AND '2021-09-20'
 
        }
    }
})
</script>

<style scoped>
.Reportes{
    /* outline: 2px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
}
.Reportes label{
    margin-bottom: 0;
}
.Reportes_datos{
    /* outline: 2px solid blue; */
    width: 25%;
    height: 100%;
    background-color: lightgray;
    border-radius: 10px;
}
.Reportes_datos-titulo h5,h4{
    text-align: center;
    padding-top: 3px;
    margin-bottom: 0;
}
.Reportes_graficas{
    /* outline: 2px solid black; */
    width: 75%;
    height: 100%;
    padding-left: 10px;
}
.Reportes_datos-campos{
    padding-right: 8px;
    padding-left: 8px;

}
button{
    margin-left: 8px;
}
.Reportes_graficas-informacion{
    outline: 2px solid red;
    height: 17%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Reportes_graficas-informacion div{
    margin: 8px;
    width: 150px;
    text-align: center;
    border-radius: 10px;
    padding: 3px;
    border: 3px solid grey;
}
.Reportes_graficas-detalles{
    /* outline: 2px solid red; */
    height: 40%;
     overflow-y: scroll;
}

</style>