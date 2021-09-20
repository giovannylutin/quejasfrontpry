<template>
  <div class="graf">
    <h4>Quejas durante la Semana</h4>
    <line-chart v-bind:chart-data="datacollection" :height="100"></line-chart>
  </div>
</template>

<script>

import LineChart from './LineChart.js'

export default {
  components: {
    LineChart
  },
  data(){
    return {
      datacollection: [{}],
      opciones:[ 3, 3, 3, 2, 1, 4, 3,0]
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {

    fillData ()
    {
      this.datacollection = {
        labels: ['Lunes','Martes','Miercoles','Jueves','Viernes', 'Sabado' , 'Domingo'],
        datasets: [
          {
            label: 'Quejas',
            backgroundColor: '#007bff',
            data: this.opciones
          }
          
        ]}
    
      
    }
  }
}
</script>

<style>
.graf{
    margin: 0;
    margin-right: 15px;
}
.graf h4{
    font-weight: bold;
    text-align: center;
  /* max-width: 800px; */
  /* max-height: 500px; */
  /* margin:  50px auto; */
    /* margin: 0px; */
}
</style>
