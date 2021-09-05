<template>
    <div class="Reportes">
        <div class="Reportes_datos">
             <div class="Reportes_datos-titulo">
                <h4>Empresa</h4>
            </div>
            <div class="Reportes_datos-campos">
                <div class="form-row">
                    <div class="col">
                    <label for="exampleInputEmail1">Nit Empresa:</label>
                    <input type="text" class="form-control form-control-sm" id="direccion" placeholder="Nit Empresa" >
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                    <label for="exampleInputEmail1">Fecha:</label>
                    <input type="date" class="form-control form-control-sm" id="direccion" placeholder="Nit Empresa" >
                    </div>
                </div>
                <div class="dropdown-divider"></div>
            </div>

            <div class="Reportes_datos-titulo">
                <h4>Ubicacion</h4>
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
                <div>
                    empresa
                </div>
                <div>
                    total quejas pais
                </div>   
                <div>
                    mes en curso quejas
                </div>
            </div>
            <div class="Reportes_graficas-detalles">
                
                <div>
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
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
            iddep:""
        }
    },
    mounted(){
        this.regionver()
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
                 console.log(this.mun);
           
      })
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
.Reportes_datos{
    /* outline: 2px solid blue; */
    width: 25%;
    height: 100%;
    background-color: lightgray;
    border-radius: 10px;
}
.Reportes_datos-titulo h4{
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
    /* outline: 2px solid red; */
    height: 25%;
}
.Reportes_graficas-detalles{
    /* outline: 2px solid red; */
    height: 65%;
     overflow-y: scroll;
}

</style>