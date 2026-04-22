import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import ProductListView from '../views/product/ProductListView.vue'
import ProductDetailView from '../views/product/ProductDetailView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/products', name: 'products', component: ProductListView },
  { path: '/products/:id', name: 'productDetail', component: ProductDetailView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
