<template>
    <div class="paneldash">
    <div class="paneldash_nav">
      <button type="button" class="btn btn-success btn-sm" v-on:click="paneldetalle">Resumen Empresa</button>
      <button type="button" class="btn btn-success btn-sm" v-on:click="modestadtus">Modificar Estatus</button>
         
          <button type="button" class="btn btn-success btn-sm" v-on:click="paneldetalle">Detalle</button>
          <button type="button" class="btn btn-warning btn-sm" v-on:click="salir">Salir</button>
    </div>
    <div class="paneldash_info">
        <div class="paneldash_detalle">

            <div class="paneldash_detalle-infodiarias">
                <img src="http://drive.google.com/uc?export=view&id=1G3zSoCYRkq-36Zs15KhvnWV0O7FGl0tz" width="60px" height="60px" alt="">
                 <div>
                    <h6>Quejas Ingresadas Hoy</h6>
                    <h4>{{this.resumen.diatotal}}</h4>
                </div>
            </div>
            <div class="paneldash_detalle-infodiaantes">
                <img src="http://drive.google.com/uc?export=view&id=1G3zSoCYRkq-36Zs15KhvnWV0O7FGl0tz" width="60px" height="60px" alt="">
                 <div>
                    <h6>Quejas Ingresadas Ayer</h6>
                    <h4>{{this.resumen.diaantes}}</h4>
                </div>
            </div>
             <div class="paneldash_detalle-infomes">
                <img src="http://drive.google.com/uc?export=view&id=1aaqg5YRmkasCezdCooP49qSNEeL95mO8" width="60px" height="60px" alt="">
                 <div>
                    <h6>Quejas de este mes</h6>
                    <h4>{{this.resumen.mestotal}}</h4>
                </div>
            </div>
             <div class="paneldash_detalle-infomes">
                <img src="http://drive.google.com/uc?export=view&id=1aaqg5YRmkasCezdCooP49qSNEeL95mO8" width="60px" height="60px" alt="">
                 <div>
                    <h6>Quejas Durante el año</h6>
                    <h4>{{this.resumen.anual}}</h4>
                </div>
            </div>

        </div>
        <div class="paneldash_grafica">
         <grafica-component />

         <div class="paneldash_resumentot">
        <div class="totaldetalle">
              <table class="table table-striped table-sm btable">
                <thead>
                  <tr>
                    <th scope="col">Region</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="(resreg,index) in informacionresumen.regionresumen[0]" v-bind:key ="index++">
                    <td>{{resreg.REGION}}</td>
                    <td>{{resreg.total}}</td>
                  </tr>
                </tbody>
            </table>
          </div>
            <div class="totaldetalle">
              <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Departamento</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="(resreg,index) in informacionresumen.departamentoresumen[0]" v-bind:key ="index++">
                    <td>{{resreg.DEPARTAMENTO}}</td>
                    <td>{{resreg.total}}</td>
                  </tr>
               </tbody>
              </table>
          </div>
        <div class="totaldetalle">
              <table class="table table-striped table-sm">
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
<tr v-for="(resreg,index) in informacionresumen.muncipioresumen[0]" v-bind:key ="index++">
<td>{{resreg.MUNICIPIO}}</td>
<td>{{resreg.total}}</td>
</tr>
  </tbody>
</table>
          </div>
        </div>
        </div>
        
    </div>
    </div>
</template>
<script>
import axios from "axios";
export default ({
    components: {
    },
    data() {
        return{
            estado:"",
            resumen:[],
            informacionresumen:[]            
        }
    },

    mounted(){

        if(localStorage.getItem('tk_sesion')){
        
            this.cargaresumen();
            this.resumenporlocalidad();
          
        }else{
            this.$router.push('/Ingreso')
        }
    },
    methods:{
        paneldetalle(){this.$router.push('/Reportes')},
        salir(){
            localStorage.removeItem('tk_sesion')
            this.$router.push('/Ingreso')
        },
        cargaresumen(){
            axios.get (this.GLOBAL.serverSrc+"/Quejas_api/ingreso.php") .then (res => { 
                this.resumen = res.data; 
                
            })
        },
        resumenporlocalidad(){
           axios.get (this.GLOBAL.serverSrc+"/Quejas_api/dash.php") .then (res => { 
                this.informacionresumen = res.data; 
                 console.log(this.informacionresumen.regionresumen)
            })
        },
        modestadtus(){
           this.$router.push('/Estatus')
        }
    
    
    }
})
</script>

<style scoped>
.small {
  max-width: 800px;
  /* max-height: 500px; */
  margin:  50px auto;
}
.paneldash{
    /* outline: 2px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.paneldash_nav{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    /* outline: 2px solid blueviolet; */
}
.paneldash_nav button{
    margin-left: 15px;
}
.paneldash_info{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
.paneldash_detalle{
    /* outline: 2px solid green; */
    margin: 14px;
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* padding: 5px; */
}
.paneldash_detalle-infodiarias{
    /* outline:2px solid blueviolet; */
    height:17%;
    padding: 5px;
    width: 100%;
    background: #12ba38;
    border-radius: 15px;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 15px;
;
}
.paneldash_detalle-infomes{
    /* outline:2px solid blueviolet; */
     height:17%;
    width: 100%;
    background: orange;
    border-radius: 15px;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    padding-left: 7px ;
    margin-bottom: 15px;
}
.paneldash_detalle-infodiaantes{
     height:17%;
    width: 100%;
    background: tan;
    border-radius: 15px;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    padding-left: 7px ;
    margin-bottom: 15px;
}
.paneldash_grafica{
    /* outline: 2px solid red; */
    padding-left: 15px;
    width: 70%;
    height: 95%;
    border: 2px solid lightgray;
    border-radius: 15px;
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
     box-shadow: 0px 5px 8px lightgray;
}
.paneldash_resumentot{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45%;
    
}
.totaldetalle{
  width: 190px;
  border-radius: 10px;
  height: 160px;
   border: 2px solid lightgray;
    box-shadow: 0px 5px 8px lightgray;
   margin: auto;
   overflow-y: scroll;
   overflow-x: scroll;
  
}
.btable{
 overflow-y: scroll;
}
::-webkit-scrollbar {
    display: none;
}

</style>