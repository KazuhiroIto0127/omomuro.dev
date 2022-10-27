import {createRouter,createWebHashHistory} from 'vue-router';
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Labo from './pages/Labo.vue'
import Labo1 from './pages/labo/1.vue'
import Labo2 from './pages/labo/2.vue'
import Labo3 from './pages/labo/3.vue'

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About },
  { name: 'Labo', path: '/labo', component: Labo },
  { name: 'labo1', path: '/labo/1', component: Labo1  },
  { name: 'labo2', path: '/labo/2', component: Labo2  },
  { name: 'labo3', path: '/labo/3', component: Labo3  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
