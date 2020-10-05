import Vue from 'vue';
import App from './App.vue';
import router from './router'
import '../../css/app.scss'
import store from './store'
import vuetify from './plugin/vuetify' // path to vuetify export
import 'material-design-icons-iconfont/dist/material-design-icons.css'

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log('route need authentication')
        if (store.getters.isAuthenticated !== false) {
            console.log('user is authenticated: ' + store.getters.isAuthenticated)
            next()
        } else {
            console.log('page should be redirect')
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store: store,
    vuetify
});


