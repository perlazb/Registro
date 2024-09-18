import { createRouter, createWebHistory } from 'vue-router';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';

// Simulación de comprobación de usuario registrado
const isUserRegistered = () => {
  const user = localStorage.getItem('user');
  return !!user; // Devuelve true si existe el usuario, de lo contrario false
};

const routes = [
  {
    path: '/register',  
    name: 'Register',
    component: Register,  
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!isUserRegistered()) {
        next('/login');
      } else {
        
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

