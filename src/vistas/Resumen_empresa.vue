<template>
    <div class="reportesdetallereg">
        <div class="reportesdetallereg_nav">
            <button type="button" class="btn btn-success btn-sm" v-on:click="regresar">Regresar</button>
            <button type="button" class="btn btn-danger btn-sm" v-on:click="generarrepo">Imprimir</button>
      <!-- <button type="button" class="btn btn-success btn-sm" v-on:click="modestadtus">Modificar Estatus</button> -->
        </div>
        <div class="reportesdetallereg_cuerpo">
            <div class="reportesdetallereg_cuerpo_campos">
                <div class="reportesdetallereg_cuerpo_imputs">
                        <div class="form-row">
                        <div class="col">
                        <label for="exampleInputEmail1">Empresa:</label>
                        <!-- <select name="empresas" id=""></select> -->
                        <!-- <input type="text" v-model="nemp" v-on:keypress="busquedaemp" class="form-control form-control-sm" id="direccion" placeholder="Nit Empresa" > -->
                        
                        <select id="emptext" class="form-control form-control-sm" v-model="nemp" v-on:change="listardatosemp" >
                                <option value="" disabled selected hidden>Seleccione Empresa</option>
                                <option v-for="(emptotal) in empresast" v-bind:key ="emptotal.NIT" :value="emptotal.NIT">{{emptotal.EMPRESA}}</option>
                        </select>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="reportesdetallereg_cuerpo_resultados">
                <h5>Total Empresa por Region</h5>
                <div class="detalles">
                    <h6>Total: <p>{{this.totalresumen1}}</p></h6>
                </div>
                
                    <div class="totaldetalle">
                    <table class="table table-striped table-sm" id="tba">
                        <thead>
                        <tr>
                            <th scope="col">Region</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                    <tr v-for="(resreg,index) in informacionresumen" v-bind:key ="index++">
                    <td>{{resreg.REGION}}</td>
                    <td>{{resreg.DEPARTAMENTO}}</td>
                    <td>{{resreg.total}}</td>
                    </tr>
                        </tbody>
                    </table>
                    </div>
                    <!-- <h5>Total Empresa por Departamento</h5> -->
                    <!-- <div class="totaldetalle">
                    <table class="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th scope="col">Departamento</th>
                            <th scope="col">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                    <tr v-for="(resreg,index) in informacionresumen1" v-bind:key ="index++">
                    <td>{{resreg.DEPARTAMENTO}}</td>
                    <td>{{resreg.total}}</td>
                    </tr>
                        </tbody>
                    </table>
                    </div> -->
                    <h5>Total Empresa por Municipio</h5>
                    <div class="detalles">
                    <h6>Total: <p>{{this.totalresumen1}}</p></h6>
                    </div>
                    <div class="totaldetalle">
                    <table class="table table-striped table-sm" id="tbaa">
                        <thead>
                        <tr>
                            <th scope="col">Departamento</th>
                            <th scope="col">Municipio</th>
                            <th scope="col">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                    <tr v-for="(resreg,index) in informacionresumen2" v-bind:key ="index++">
                    <td>{{resreg.DEPARTAMENTO}}</td>
                    <td>{{resreg.MUNICIPIO}}</td>
                    <td>{{resreg.total}}</td>
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
import jsPDF from 'jspdf' ;
// import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
export default ({
    data() {
        return{
            Tituloform:"Empresa",
             empresast:[],
             nemp:"",
             informacionresumen:[],
             informacionresumen1:[],
             informacionresumen2:[],
             totalresumen1:0
             
        }
    },
    mounted(){
        
        if(localStorage.getItem('tk_sesion')){
        
           this. mostrarcampos()
          
        }else{
            this.$router.push('/Ingreso')
        }
        
    },
    methods:{
        regresar(){
            this.$router.push('/Principal')
        },
        generarrepo(){
 var tit="Reporte General ";
 
  var combo = document.getElementById("emptext");
var selected = combo.options[combo.selectedIndex].text;
 var empynit="Empresa : "+selected+" Nit : "+this.nemp
  const doc = new jsPDF()
doc.setFontSize(22);
doc.text("DETALLE DE QUEJAS", 10, 10);
doc.setFontSize(16);
doc.text(20,20,tit);	
doc.setFontSize(16);
doc.text(20, 30, empynit);
doc.setFontSize(16);
// doc.text(20, 40, 'This belongs to: ');


autoTable(doc, { html: '#tba',margin: {top: 50},
didDrawPage: function (data) {
data.settings.margin.top = 10; }
});
autoTable(doc, { html: '#tbaa',margin: {top: 50},
didDrawPage: function (data) {
data.settings.margin.top = 10; }
});

doc.save('table.pdf')

        },
         mostrarcampos(){
                 axios.get (this.GLOBAL.serverSrc+"/Quejas_api/reportes.php?id="+0+"&verop=3"+"&fechaini="+this.fechadesdef+"&fechafin="+this.fechahastaf) .then (res => {
                 this.empresast = res.data;
                //   console.log(this.empresast);
                 })
        },
        listardatosemp(){
             axios.get (this.GLOBAL.serverSrc+"/Quejas_api/reporteind.php?id="+this.nemp) 
             .then (res => {
                 this.informacionresumen1 = res.data.empdep[0];
                 this.informacionresumen = res.data.empregion[0];
                 this.informacionresumen2 = res.data.empmun[0];    
                //  this.empresast = res.data;
                console.log(res.data)
                // data_water_tot = [{"amount":"500"},{"amount":"750"},{"amount":"250"}];
                    // console.log(data_water_tot);
                 var total = 0;
               
                 
                    this.informacionresumen.forEach(function (obj) {
                        total += parseInt(obj.total);
                    });
               
                    this.totalresumen1=total;
                    
                 })
        }
    }
})
</script>

<style scoped>
.reportesdetallereg{
    /* outline: 2px solid red; */
    width: 100%;
    height: 600px;
    height: max-content;
}
.reportesdetallereg_nav{
    /* outline: 2px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    /* height: 50px; */
}
.reportesdetallereg_nav button{
    margin-left: 15px;
}
.reportesdetallereg_cuerpo{
    display: flex;
    flex-direction: row;
}
.reportesdetallereg_cuerpo_campos{
   /* outline: 2px solid red; */
    width: 30%;
    height: 400px;
    border-radius: 15px;
    background-color: lightgray;    
}
.reportesdetallereg_cuerpo_imputs{
    padding: 10px;
}
.reportesdetallereg_cuerpo_resultados{
   /* outline: 2px solid green; */
    width: 70%;
    height: 400px;
    overflow-y: scroll;  
}
.reportesdetallereg_cuerpo_resultados h5{
    font-weight: bold;
    text-align: center;
    
}
.totaldetalle{
  width: 90%;
  border-radius: 10px;
  height: 150px;
   border: 2px solid lightgray;
    box-shadow: 0px 5px 8px lightgray;
   margin: auto;
   margin-bottom: 10px;
   overflow-y: scroll;
   /* overflow-x: scroll; */
  
}
.detalles{
    text-align: center;
}
::-webkit-scrollbar {
    display: none;
}
</style>