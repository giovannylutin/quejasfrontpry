<template>
    <div class="paneldash">
   
    <div class="paneldash_nav">
         <button type="button" class="btn btn-warning btn-sm" v-on:click="salir">Salir</button>
    </div>
    <div class="paneldash_info">
        <div class="paneldash_detalle">

            <div class="paneldash_detalle-infodiarias">
                <img src="http://drive.google.com/uc?export=view&id=1G3zSoCYRkq-36Zs15KhvnWV0O7FGl0tz" width="60px" height="60px" alt="">
                 <div>
                    <h5>Quejas Ingresadas Hoy</h5>
                    <h3>{{this.resumen.diatotal}}</h3>
                </div>
            </div>
            <div class="paneldash_detalle-infodiaantes">
                <img src="http://drive.google.com/uc?export=view&id=1G3zSoCYRkq-36Zs15KhvnWV0O7FGl0tz" width="60px" height="60px" alt="">
                 <div>
                    <h5>Quejas Ingresadas Ayer</h5>
                    <h3>{{this.resumen.diaantes}}</h3>
                </div>
            </div>
             <div class="paneldash_detalle-infomes">
                <img src="http://drive.google.com/uc?export=view&id=1aaqg5YRmkasCezdCooP49qSNEeL95mO8" width="60px" height="60px" alt="">
                 <div>
                    <h5>Quejas de este mes</h5>
                    <h3>{{this.resumen.mestotal}}</h3>
                </div>
            </div>
             <div class="paneldash_detalle-infomes">
                <img src="http://drive.google.com/uc?export=view&id=1aaqg5YRmkasCezdCooP49qSNEeL95mO8" width="60px" height="60px" alt="">
                 <div>
                    <h5>Quejas Durante el año</h5>
                    <h3>{{this.resumen.anual}}</h3>
                </div>
            </div>

        </div>
        <div class="paneldash_grafica"></div>
    </div>
    </div>
</template>
<script>
import axios from "axios";

export default ({
    
    data() {
        return{
            estado:"",
            resumen:[]
        }
    },
    mounted(){

        if(localStorage.getItem('tk_sesion')){
            // console.log("hola")
            this.cargaresumen();
        }else{
            this.$router.push('/Ingreso')
        }
    },
    methods:{
        salir(){
            localStorage.removeItem('tk_sesion')
            this.$router.push('/Ingreso')
        },
        cargaresumen(){
            axios.get ("http://localhost/Quejas_api/ingreso.php") .then (res => { 
                this.resumen = res.data; 
                console.log(this.resumen)
            })
        }
    }
})
</script>

<style scoped>
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
.paneldash_info{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
.paneldash_detalle{
    /* outline: 2px solid green; */
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* padding: 5px; */
}
.paneldash_detalle-infodiarias{
    /* outline:2px solid blueviolet; */
    height:20%;
    width: 100%;
    background: #12ba38;
    border-radius: 15px;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 15px;
}
.paneldash_detalle-infomes{
    /* outline:2px solid blueviolet; */
    height:20%;
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
    height:20%;
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
    outline: 2px solid red;
    width: 70%;
    height: 100%;
}
</style>