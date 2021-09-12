<template>
<div class="login">
    <div class="login_titulo">
        <h1>Ingreso</h1>
    </div>
    
    <div class="login_cuerpo">
        <div class="row">
            <label for="staticEmail" class="col-sm-3">Correo:</label>
            <div class="col-lg">
            <input type="Email" class="form-control" v-model="usuariop" required>
            </div>
        </div>
        <div class="row">
            <label for="inputPassword" class="col-sm-3 ">Contraseña:</label>
            <div class="col-lg">
            <input type="password" class="form-control" v-model="passp">
            </div>
        </div>
    </div>
    
    <div class="login_botones">
        
        <button type="button" class="btn btn-success" v-on:click="ingresar">Ingresar</button>
    </div>
</div>
</template>
<script>
import axios from "axios";
export default ({
    
    data() {
        return{
            usuariop:"",
            passp:""
        }
    },
      methods:{
          ingresar(){
              if(this.usuariop=="" || this.passp==""){
                  alert("al parecer hay campos vacios")
              }
              else{
                  axios.get ("http://localhost/Quejas_api/ingreso.php?user="+this.usuariop+"&pass="+this.passp) .then (res => {        
            if(res.data!=0){
                this.$router.push('Principal')
                // if(){}
                    // this.miqueja = res.data; 
                    // console.log(res.data[]);
                // alert("sip");
            }else{
                alert("al paraecer no tienes permisos para ingresar");
            }
            })
              }
          }
      }
})
</script>

<style scoped>
.login{
    /* outline: 2px solid red; */
    width: 30em;
    height: 20em;
    border: 2px solid lightgray;
    border-radius: 15px;
    box-shadow: 0px 5px 8px lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.login_titulo{
    margin-bottom: 15px;
}
.login_cuerpo{
    margin-bottom: 15px;
      /* outline: 2px solid red; */
      display: flex;
      flex-direction: column;
      justify-items: center;
      width: 90%;
}
.row{
    margin: 5px;
    /* outline: 2px solid red; */
}
.login_botones{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
}
</style>