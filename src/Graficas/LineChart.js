

import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options'],
 
    options: {
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
},
  mounted () {
    
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData,this.options)
  }
}
// import { Line } from 'vue-chartjs'

// export default {
//   extends: Line,
//   props:['chart'],
//   watch: {
//     chart () {
//       this.$data._chart.update()
//     }
//   },
//   mounted () {
//       this.renderChart({
//         labels: ['1','2','3','4','5','6','7'],
//         datasets: [
//           {
//             label: 'Data One',
//             backgroundColor: '#F64A32',
//             data: this.chart
//           }
//         ]
//       }, {responsive: true, maintainAspectRatio: false})
//     }
// }



