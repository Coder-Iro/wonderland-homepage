import {createApp} from 'vue'
import {createHead, Head} from "@vueuse/head";
import App from './App.vue'
import router from "./router";
import YoutubeIframe from '@techassi/vue-youtube-iframe';

const app = createApp(App)
app.use(createHead())
app.use(router)
app.use(YoutubeIframe)
app.component('Head', Head)
app.mount('#app')
