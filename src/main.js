

// Plugins
import { registerPlugins } from '@/plugins'

// vue router import
import { createRouter, createWebHistory } from 'vue-router';

// Components
import App from './App.vue'

//items
import dashboard from './components/items/dashboard.vue';
import input from './components/items/input_custom.vue'


//pages
import index from './components/index.vue';

//rotas
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/teste', component: index },
    ]
});


// Composables
import { createApp } from 'vue'

const app = createApp(App)


//implantando items
app.component('dash-board', dashboard);
app.component('input-custom', input);

// implantando pages
app.component('Index-vue', index);

registerPlugins(app)

app.mount('#app')
