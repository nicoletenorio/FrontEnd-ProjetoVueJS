import Vue from 'vue'
import App from './components/App'
import CadastroInicial from './components/CadastroInicial.vue'
import LoginInicial from './components/LoginInicial.vue'
import TelaInicial from './components/TelaInicial.vue'
import CadastroDisciplina from './components/CadastroDisciplina.vue'
import MemoriasDeAula from './components/MemoriasDeAula.vue'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import VueRouter from 'vue-router'
import 'spectre.css/dist/spectre-icons.css'





Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
            path: '/login',
            component: LoginInicial,
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: CadastroInicial,
        },
        {
            path: '/',
            name: 'inicial',
            component: TelaInicial,
        },
        {
            path: '/cadastro-de-disciplina',
            name: 'cadastroDisciplina',
            component: CadastroDisciplina,
        },
        {
            path: '/memorias-de-aula',
            name: 'memorias',
            component: MemoriasDeAula,
        },


    ]
});



Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')