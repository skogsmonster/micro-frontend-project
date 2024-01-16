import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import Welcome from './pages/Welcome.vue';
import SignIn from './pages/SignIn.vue';
import NotFound from './pages/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: 'hello',
    routes: [
        { path: '/signin', component: SignIn },
        { path: '/', component: Welcome },
        { path: '*', component: NotFound },
    ],
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
