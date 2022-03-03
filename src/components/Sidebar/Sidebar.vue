<template>
  <div class="md:col-span-1 rounded-r-3xl">
    <div class="fixed top-25 z-40 transition-all duration-300">
      <button
      @click="toggleSidebar()"
        :class="{
          'hover:bg-gray-700': !sidebarOpen,
          'hover:bg-black': sidebarOpen,
        }"
        class="transition-all duration-300 w-8 p-1 mx-3 my-2 rounded-full focus:outline-none"
      >
        <svg
          viewBox="0 0 20 20"
          class="w-6 h-6 fill-current"
          :class="{
            'text-gray-600': !sidebarOpen,
            'text-white': sidebarOpen,
          }"
        >
          <path
            v-if="!sidebarOpen"
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
          <path
            v-if="sidebarOpen"
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div v-if="sidebarOpen"
      id="sidebar"
      class="bg-gray-700 pt-8 min-h-full flex flex-col">
      <div class="pt-4 flex flex-col w-4/5">
        <input type="text" class="ml-2 px-2 py-2 border rounded" placeholder="Search..."
          v-model="inputText" @keyup="searchNames()">
        <ul class="bg-gray-50 ml-2">
          <li v-for="item in searchItems" :key="item.symbol" class="px-2 py-2">
            <a href="" @click.prevent="getStockCandleDetails(item.symbol, item.description)" class="h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-stone-900 hover:text-red-400">
              <span class="text-sm font-bold">{{item.description}}</span>
            </a>
          </li>
        </ul>
      </div>
      <span class="px-2 mt-8 mb-2 bg-red-200">Select a Stock..</span>
      <ul class="flex flex-col">
        <li v-for="stock in getStocksList" :key="stock.symbol" class="px-2 py-1 mb-0">
            <a href="" @click.prevent="getStockCandleDetails(stock.symbol, stock.description)" class="h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-100 hover:text-red-400">
              <span class="text-sm font-bold">{{stock.symbol}}</span>
            </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "SideBar",
  data() {
    return {
      sidebarOpen: false,
      inputText: '',
    };
  },
  computed: {
    ...mapState(['stockList', 'searchItems']),
    getStocksList() {
      const list =  ['GOOGL','FB', 'TSLA', 'NFLX', 'MSFT','AMZN'];
      const returnList = this.stockList.filter((el) => {
        return list.some((f) => {
          return f === el.symbol;
      });
    });
    return returnList
    },
  },
  methods: {
    ...mapActions(['getStockData', 'searchStocks', 'getStockQuote', 'setState']),
    toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    },
    getStockCandleDetails(symbol, name) {
      this.getStockQuote(symbol);
      if(this.searchItems.length > 0) {
        this.setState({
          stateName: 'searchItems',
          value: [],
        });
        this.inputText = '';
      }
      this.sidebarOpen = false;
      this.setState({
        stateName: 'selectedStockName',
        value: name,
      });
    },
    searchNames() {
      this.searchStocks(this.inputText);
    },
  },
};
</script>
