<template>
<div>
  <div >
      <HeaderComponent />
      <div class="md:h-screen md:grid md:grid-cols-6">
        <SideBar/>
        <main class="lg:ml-3 mt-12 md:col-span-4">
          <SpinnerComponent v-if="stockCandleDetails.length === 0"/>
          <StockDetails v-if="stockCandleDetails.length >= 1"/>
        </main>
      </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent.vue';
import SideBar from '../components/Sidebar/Sidebar.vue';
import StockDetails from '../components/StockDetails/StockDetails.vue'
import SpinnerComponent from '../components/Spinner/SpinnerComponent.vue';

export default {
    name: 'HomePage',
    components: {
      SideBar,
      StockDetails,
      SpinnerComponent,
      HeaderComponent,
    },
    created() {
    this.getStocksList();
    this.getStockQuote('TSLA');
    this.setState({
        stateName: 'selectedStockName',
        value: 'TESLA INC',
    });
  },
  computed: {
    ...mapState(['stockCandleDetails']),
  },
  methods: {
    ...mapActions(['getStocksList', 'getStockQuote', 'setState']),
  },
};
</script>
