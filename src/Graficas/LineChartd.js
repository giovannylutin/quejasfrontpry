import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['chartData','options'],
 
//     options: {
//     scales: {
//         xAxes: [{
//             ticks: {
//                 beginAtZero: false
//             }
//         }]
//     }
// },
  mounted () {
    this.renderChart(this.chartData,this.options)
  }
}
