import {createRouter,createWebHashHistory} from 'vue-router';
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Labo from './pages/Labo.vue'
import Labo1 from './pages/labo/1.vue'
import Labo2 from './pages/labo/2.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/labo', component: Labo },
  { path: '/labo/1', component: Labo1  },
  { path: '/labo/2', component: Labo2  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
