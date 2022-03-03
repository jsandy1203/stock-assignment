import { createApp} from 'vue';
import App from './App.vue'
import store from './store/index'
import HighchartsVue from 'highcharts-vue';
import './styles/styles.css'


const app = createApp(App);

app.use(store);
app.use(HighchartsVue);

app.mount('#app');
