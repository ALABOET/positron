import { createApp } from 'vue'
import App from './App.vue'
import store from "./containers/Positron/stores/store";

createApp(App).use(store).mount('#app')
