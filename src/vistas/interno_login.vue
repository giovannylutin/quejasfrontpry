<template>
<div class="login">
    <div class="login_titulo">
        <h1>Ingreso</h1>
    </div>
    
    <div class="login_cuerpo">
        <div class="row">
            <label for="staticEmail" class="col-sm-3">Correo:</label>
            <div class="col-lg">
            <input type="Email" class="form-control" v-model="campos.usuariop" required>
            </div>
        </div>
        <div class="row">
            <label for="inputPassword" class="col-sm-3 ">Contraseña:</label>
            <div class="col-lg">
            <input type="password" class="form-control" v-model="campos.passp">
            </div>
        </div>
    </div>
    
    <div class="login_botones">
        <FlashMessage :position="'right top'"></FlashMessage>
        <button type="button" class="btn btn-success" v-on:click="autenticar" id="inputPassword">Ingresar</button>
    </div>
</div>
</template>
<script>
import axios from "axios";
export default ({
    
    data() {
        return{
            // usuariop:"",
            // passp:"",
            campos:{
                usuariop:"",
                passp:""
            }
        }
    },
    mounted(){
        if(localStorage.getItem('tk_sesion')){
             this.$router.push('/Principal')
        }else{
            // alert("por favor inicie sesion")
        //    this.$router.push('/Principal')
            
        }
    }
    ,
      methods:{
    autenticar(){
        // console.log("HOLA")
        if(this.campos.usuariop==""||this.campos.passp==""){
             this.flashMessage.show({status:'error',title:'!!OOPSS',message:'Recuerda que los campos USUARIO Y CONTRASEÑA son obligatorios',time: 5000});
        }else{
            axios.post(this.GLOBAL.serverSrc+"/Quejas_api/ingreso.php",this.campos)
            .then(data => {
                if(data.status==200){ 
                    if(data.request.statusText!="Usuario no encontrado"){
                        
                             // console.log()
                             localStorage.setItem('tk_sesion',data.data[0].TOK)
                             // localStorage.setItem()
                             this.$router.push('/Principal')
                        // console.log(this.campos)
                    }else{
                        this.flashMessage.show({status:'warning',title:'!!OOPSS',message:'Alparecer tu USUARIO Y CONTRASEÑA SON INCORRECTOS ',time: 5000});
                    }
             }
           })
        }
        // if(this.campos.usuariop!="" || this.campos.passp!=""){
        //     axios.post(this.GLOBAL.serverSrc+"/Quejas_api/ingreso.php",this.campos)
        //     .then(data => {
        //           if(data.status==200){ 
        //               if(data.request.statusText!="Usuario no encontrado"){
                        
        //                     // console.log()
        //                     localStorage.setItem('tk_sesion',data.data[0].TOK)
        //                     // localStorage.setItem()
        //                     this.$router.push('/Principal')
        //                 // console.log(this.campos)
        //               }else{
        //                    this.flashMessage.show({status:'error',title:'!!OOPSS',message:'Debes iniciar sesion',time: 5000});
        //               }        
        //             // var valortk = data.statusText;
        //             //   alert("se inserto correctamente"+valortk);
        //             // this.$router.push('/'+valortk +'/Consulta')
        //           }else{
        //                alert("Oops ingresa campos")
        //           }
        //    })
        //       }else{
        //           this.flashMessage.show({status:'error',title:'!!OOPSS',message:'Debes ingresar tu USUARIO Y PASSWORD',time: 5000});
        //       }

          },
          ingresar(){
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