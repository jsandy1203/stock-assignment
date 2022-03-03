import axios from "axios";

export default {
  setState({ commit }, payload) {
    commit("SET_STATE", payload);
  },
  // gets list of stocks in US
  async getStocksList({ commit }) {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.VUE_APP_KEY}`
      );
      await commit("SET_STATE", {
        stateName: "stockList",
        value: response.data,
      });
      return response;
    } catch (err) {
      throw err.code;
    }
  },
  // gets stock candle data for plotting highcharts and store them in store
  async getStockData({ commit}, symbol) {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&from=1488436245&to=1646202645&token=${process.env.VUE_APP_KEY}`
      );
      const { t, o, h, l, c } = response.data;
      const modifiedResponse = [];
      for(let i=0; i<= t.length-1; i++) {
        let arr = [];
        arr.push(t[i] * 1000, o[i], h[i], l[i], c[i],)
        modifiedResponse.push(arr);
      }
      await commit("SET_STATE", {
        stateName: "stockCandleDetails",
        value: modifiedResponse,
      });
      return response;
    } catch (err) {
      throw err.code;
    }
  },
  // search the stocks based on name or symbol form search bar
  async searchStocks({ commit }, stock) {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/search?q=${stock}&token=${process.env.VUE_APP_KEY}`
      );
      await commit("SET_STATE", {
        stateName: "searchItems",
        value: response.data.result.slice(0,6),
      });
      return response;
    } catch (err) {
      throw err.code;
    }
  },
  // gets stock like open price, day high, day close etc.
  async getStockQuote({ dispatch, commit}, symbol) {
    try {
      await dispatch('getStockData', symbol)
      const response = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.VUE_APP_KEY}`
      );
      await commit("SET_STATE", {
        stateName: "stockQuote",
        value: response.data,
      });
    } catch (err) {
      throw err.code;
    }
  }
};
