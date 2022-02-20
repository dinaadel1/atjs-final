import { createRouter, createWebHistory } from 'vue-router';

import Home from '/src/pages/Home.vue';
import Pokedex from '/src/pages/Pokedex.vue';
import Calculator from '/src/pages/Calculator.vue';
import Guesser from '/src/pages/Guesser.vue';
import War from '/src/pages/War.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/pokedex', component: Pokedex },
  { path: '/calculator', component: Calculator },
  { path: '/guesser', component: Guesser },
  { path: '/war', component: War },
];

// Here we create our own Vue Router Instance
// and define the paths we can then use.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
