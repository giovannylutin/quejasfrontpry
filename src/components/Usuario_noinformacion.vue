<template>
    <div class="error-page">
        <header class="error-page__header">
            <!-- <img class="error-page__header-image" src="https://www.mirrorsbeautylounge.com/public/images/error-404.png" width="100" height="100" alt="Sad computer"> -->
            <h1 class="error-page__title nolinks">Opps algo a pasado :(</h1>
            </header>
            <p class="error-page__message">Al parecer No se encontro informacion para consultar.</p>
            <p class="error-page__message">Verifica Que el IDConsulta Ingresado sea el Correcto.</p>
            <button type="button" class="btn btn-success btn-sm" v-on:click="regresar">Regresar</button>
 
    </div>

</template>
<script>


export default ({
    methods:{
        regresar(){
            this.$router.push('/')
        },
    }
})
</script>
