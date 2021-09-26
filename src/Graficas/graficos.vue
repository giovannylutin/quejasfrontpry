<template>

    <div class="graf">
    <h5>Resumen Por Tipo</h5>
    <LineChart v-bind:chartData="datacollection" :height="200"></LineChart>

  </div>
 
</template>

<script>

import LineChart from './LineChart.js'
import axios from "axios";

export default {
  components: {
    LineChart
  },
  data(){
    return {
      datacollection: [],
     
    }
  },
  mounted () {
    this.cargarinformacion()
    
  },
  methods: {
    cargarinformacion(){
          axios.get (this.GLOBAL.serverSrc+"/Quejas_api/dash.php?id="+0) .then (res => { 
          //  this.opciones = res.data; 
          //   this.qa =this.opciones[0].TOTALQ
          //   this.qb =this.opciones[1].TOTALQ
          console.log(res.data[0].TOTALQ)
      this.datacollection = {
        labels: ['Anonimas','No Anonimas'],
        datasets: [
          {
            label: ['Comparacion'],
            backgroundColor: '#007bff',
            data: [res.data[0].TOTALQ,res.data[1].TOTALQ,0]
          }
          
        ]}
            })//hh
    }
  }
}
</script>

<style>

.graf{
    margin: 0;
    margin-right: 15px;
}
.graf h5{
    font-weight: bold;
    text-align: center;
  /* max-width: 800px; */
  /* max-height: 500px; */
  /* margin:  50px auto; */
    /* margin: 0px; */
}
</style>
