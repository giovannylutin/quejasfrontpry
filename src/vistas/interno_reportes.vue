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
        
        </div>
        <div class="Reportes_graficas"></div>
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
}
.Reportes_datos-campos{
    padding-right: 8px;
    padding-left: 8px;

}

</style>