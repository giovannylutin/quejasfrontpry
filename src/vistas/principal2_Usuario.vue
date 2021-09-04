<template>
    <div class="informacion">
        <div class="informacion_detalle">
            <h4 class="informacion_detalle-titulo">Recepcion de Quejas Online</h4>
            <p>Para facilitar de mejor manera una queja ante la Diaco y manteniendo tu anonimato,
                se ha habilitado esta opcion on line si tienes dudas de los pasos a seguir 
                y usuarlo de la mejor manera consultando el documento<b> AQUI ABAJO</b>.
            </p>
            <span>Ver Informacion </span>
            <a href="">
                <img src="http://drive.google.com/uc?export=view&id=1lAHKP0AHY5SZNZOCSBDQybNN7KgST1pO" 
                width="30px" height="30px" alt="">
            </a>
        </div>

        <div class="informacion_consultar">
            <label for="form control"> ID Consulta</label>
            <input class="form-control" v-model="tkconsultar" type="text" placeholder="" aria-label="default input">
            <br>
            <button type="button" class="btn btn-success" v v-on:click="Irconsulta">Consultar</button>
                <br>
        </div>
            <div v-if="mostrarerror==1" v-on:click="ocultar" class="alert alert-warning" role="alert">
                {{errorconsulta}}
            </div>
    </div>
</template>
<style scoped>
.informacion{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    justify-content: center;
    margin-left: 20px;
}
.informacion_detalle h4{
    font-weight: bold;
}
.informacion_detalle p{
    margin-left: 10px;
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
                    alert(this.tkconsultar.length)
                }
            // this.$router.push('/'+this.tkconsultar+'/Consulta')
            }
            //'BFbZuo0821'
            // alert(this.tkconsultar);
        },
        ocultar(){
         this.mostrarerror=0
        
        }
    }
})
</script>
