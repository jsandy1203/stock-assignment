<template>
  <div class="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8">
    <div class="bg-gray-700 px-5 py-2 mb-3">
      <h1 class=" text-2xl font-bold text-white">{{ selectedStockName }}</h1>
    </div>
    <div class="md:ml-2 mb-3">
      <button class="w-36 flex flex-col justify-center rounded bg-blue-500 hover:bg-blue-700 py-4 px-5 text-white">
        <span class="text-sm">Current Price</span>
        <p class="text-xl font-bold">$ {{stockQuote.c}}</p>
      </button>
    </div>
    <div class="md:ml-2 mb-3">
      <button class="w-36 flex flex-col justofy-center rounded bg-blue-500 hover:bg-blue-700 py-4 px-5 text-white">
        <span class="text-sm">Open Price</span>
        <p class="text-xl font-bold">$ {{stockQuote.o}}</p>
      </button>
    </div>
    <div class="md:ml-2 mb-3">
      <button class="w-36 flex flex-col justofy-center rounded bg-blue-500 hover:bg-blue-700 py-4 px-5 text-white">
        <span class="text-sm">Day's High</span>
        <p class="text-xl font-bold">$ {{stockQuote.h}}</p>
      </button>
    </div>
    <div class="md:ml-2 mb-3">
      <button class="w-36 flex flex-col justofy-center rounded bg-blue-500 hover:bg-blue-700 py-4 px-5 text-white">
        <span class="text-sm">Day's Low</span>
        <p class="text-xl font-bold">$ {{stockQuote.l}}</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'PriceDetails',
  computed: {
    ...mapState(['stockQuote', 'selectedStockName'])
  },

}
</script>
