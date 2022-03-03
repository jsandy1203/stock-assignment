<template>
  <div>
    <PriceDetails />
    <CandleChart />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PriceDetails from '../PriceDetails/PriceDetails.vue';
import CandleChart from '../CandleChart/CandleChart.vue';

export default {
  name: 'StockDetails',
  components: {
    PriceDetails,
    CandleChart,
  },
  computed: {
    ...mapState(['stockCandleDetails']),
  },
};
</script>
