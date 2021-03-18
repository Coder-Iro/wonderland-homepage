import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import YoutubeIframe from '@techassi/vue-youtube-iframe';

const app = createApp(App)
app.use(router)
app.use(YoutubeIframe)
app.mount('#app')
