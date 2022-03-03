<template>
  <div>
    <highcharts
      ref="chart"
      :constructorType="type"
      :options="chartOptions"
      class="full-width"
    ></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import stockInit from "highcharts/modules/stock";
import indicators from "highcharts/indicators/indicators";
import { mapState } from "vuex";
stockInit(Highcharts);
indicators(Highcharts);

export default {
  name: "CandleChart",
  data() {
    return {
      stockData: [],
      type: "stockChart",
      chart: {
        styledMode: true,
      },
      chartOptions: {
        rangeSelector: {
          selected: 1,
        },

        title: {
          text: '',
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          style: {
            color: '#F0F0F0'
          },
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          sma: {
            dashStyle: 'shortDot',
            marker: {
              radius: 1,
              lineColor: '#f6f6f6'
            }
          },
          candlestick: {
            color: 'red',
            upColor: 'green',
            lineColor: 'red',
            upLineColor: 'green'
        }
        },
        yAxis: {
          lineWidth: 1,
          title: {
            text: 'Price ($)'
          },
          opposite: false,
        },
        series: [
          {
            type: "candlestick",
            name: '',
            id: 'candlestick',
            data: [],
            dataGrouping: {
              units: [
                [
                  "day",
                ],
                ["month", [1, 2, 3, 4, 6]],
              ],
            },
          },
          {
            type: 'sma',
            linkedTo: 'candlestick',
            params: {
                period: 50
            }
        }
        ],
      },
    };
  },
  computed: {
    ...mapState(['stockCandleDetails', 'selectedStockName']),
  },
  created() {
    this.chartOptions.series[0].data = this.stockCandleDetails;
  },
  watch: {
    stockCandleDetails() {
      this.chartOptions.series[0].data = this.stockCandleDetails;
      this.chartOptions.series[0].name = this.selectedStockName;
      this.chartOptions.title.text = this.selectedStockName;
    },
  },
};
</script>

