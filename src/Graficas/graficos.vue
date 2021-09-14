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
      datacollection: [{}]
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
            data: [ 3, 8, 5, 1, 5, 4, 3]
          },
        ]
      }
      
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
