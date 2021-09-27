<template>
  <div class="graf">
      <h5>Quejas en los ultimos 7 dias</h5>
    <line-chart :chart-data="datacollection" :height="200"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChartd.js'
  import axios from "axios";

  export default {
    
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
                  axios.get (this.GLOBAL.serverSrc+"/Quejas_api/dash.php?id="+1) .then (res => { 
     
              console.log(res.data[0].total)
                      this.datacollection = {
          labels: ['Hoy','1','2','3','4','5','6'],
          datasets: [
            {
              label: 'Quejas durante los ultimos dias',
              backgroundColor: '#f87979',
              data: [res.data[0].total,res.data[1].total,res.data[2].total,res.data[3].total,res.data[4].total,res.data[5].total,res.data[6].total]
            }
          ]
        }
            })//hh
      }
    }
  }
</script>
<style scoped>
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

