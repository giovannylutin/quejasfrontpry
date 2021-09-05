<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="">
              <img src="./assets/logo.png" width="40" height="40" class="d-inline-block align-top" alt="">
              {{ titulo }}
            </a>
    </nav>
    <section class="panel">
      <div class="panel_vistas">
        <div class="panel_vistas-cabecera"></div>
        <div class="panel_vistas-informacion">
              <router-view />
             <!-- </router-view> -->
          <!-- <vista/> -->
        </div>
      </div>
    </section>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <footer class="pie">
           <h6>Proyecto De Privados: {{autor}}</h6>
        </footer>
  </div>
</template>

<script>
 

// import Vistaf1 from './components/Usuario_vistaform1.vue'

export default {
 data(){
   return{
        titulo:'Quejas Anonimas',
        autor:'Adam Giovannny Lutin Lutin.'
   }
 }

}
</script>

<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
   
   
  
  }
  .panel{
   
    /* outline: 2px solid red; */
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    height: 90%;
}
.panel_vistas{
    /* outline: 2px solid  blue; */
    width: 85%;
    max-width:1200px ;
    height: 90%;
    display: flex;
    flex-direction: column;
    /* border: 2px solid #001a57; */
    border-radius: 10px;
    box-shadow: 0px 5px 8px lightgray;
    margin: auto;
}
.panel_vistas-cabecera{
    /* outline: 2px solid  blue; */
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    background-color: #343a40;
    box-shadow: 0px 5px 8px lightgray;
    width: 100%;
    height: 5%;
}
.panel_vistas-informacion{
    /* outline: 2px solid  blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 92%;
    margin: auto;
    /* box-shadow: 0px 5px 8px lightgray; */
    /* padding: 20px; */
    /* text-align: center; */
}
.pie{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* outline: 2px solid red; */
    height: 6%;
    background-color: #343a40;
    color: white;  
}
.pie h6{
    margin: auto;
    font-weight: bold;
}
</style>
