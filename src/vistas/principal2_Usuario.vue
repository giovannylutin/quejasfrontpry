<template>
    <div class="informacion">
        <div class="informacion_detalle">
            <h4 class="informacion_detalle-titulo"></h4>
            <p>Consulta Tu Queja<b> AQUI ABAJO</b>.
            </p>
            <!-- <span>Ver Informacion </span>
            <a href="">
                <img src="http://drive.google.com/uc?export=view&id=1lAHKP0AHY5SZNZOCSBDQybNN7KgST1pO" 
                width="30px" height="30px" alt="">
            </a> -->
        </div>

        <div class="informacion_consultar">
            <label for="form control"> ID Consulta</label>
            <input class="form-control" v-model="tkconsultar" type="text" placeholder="" aria-label="default input">
            <br>
            <button type="button" class="btn btn-success" v-on:click="Irconsulta">Consultar</button>
                <br>
        </div>
            <div v-if="mostrarerror==1" v-on:click="ocultar" class="alert alert-warning" role="alert">
                {{errorconsulta}}
            </div>
    </div>
</template>
<style scoped>
.informacion{
    /* outline: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    justify-content: center;
    margin-left: 20px;
     box-shadow: 0px 5px 8px lightgray;
}
.informacion_detalle h4{
    font-weight: bold;
}
.informacion_detalle p{
    margin-left: 10px;
    text-align: center;
    font-stretch: semi-condensed;
}
.informacion_detalle span{
    margin-left: 10px;
    font-weight: bold;
   
}
.informacion_consultar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
    /* outline: 2px solid blue; */
}
.informacion_consultar label{
    font-weight: bold;
}

</style>
<script>

export default({
    data() {
        return{
           tkconsultar:"",
           errorconsulta:"",
           mostrarerror:0
        }
    },
    methods:{
        Irconsulta(){
            // var tkrecibido = this.tkconsultar.length;
            
            if(this.tkconsultar=="" ){
                this.errorconsulta="Porfavor Ingrese su ID Consulta"
                this.mostrarerror=1
 
            }else{
                if(this.tkconsultar.length != 10){
                    this.errorconsulta="Porfavor Ingrese ID Consulta Valido"
                    this.mostrarerror=1

                }else {
                    // alert(this.tkconsultar.length)
                    this.$router.push('/'+this.tkconsultar+'/Consulta')
                }
            // this.$router.push('/'+this.tkconsultar+'/Consulta')
            }
            //'BFbZuo0821'
            //AKe8tE0921
            // alert(this.tkconsultar);
        },
        ocultar(){
         this.mostrarerror=0
        
        }
    }
})
</script>
