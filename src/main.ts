import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import VueGtag from "vue-gtag";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faFlask } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faFlask)

const app = createApp(App)
app.use(router)
if (import.meta.env.DEV) {
  app.use(VueGtag, {config: { id: "G-YBD2S57910" }}, router)
}
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
