import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AwardsView from '../views/AwardsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/awards', name: 'awards', component: AwardsView },
    { path: '/contact', name: 'contact', component: ContactView }
  ]
})

export default router