import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import app from './App.vue'

import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'
var router = new VueRouter({
    routes:[
        {path: '/account',component:account},
        {path: '/goodsList',component:goodsList}
    ]
})
var vm = new Vue({
    el:"#app",
    render:c => c(app),
    router
})