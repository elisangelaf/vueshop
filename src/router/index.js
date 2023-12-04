// Importe os componentes criados acima
import { createRouter, createWebHistory } from 'vue-router'
import FilterView from '../components/FilterView.vue'

const routes = [
  {
    path: '/',
    name: 'FilterView',
    component: FilterView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
