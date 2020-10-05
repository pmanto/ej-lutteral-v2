import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import AdminDashboard from "../views/admin/AdminDashboard.vue"
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/login", component: LoginView },
    { path: "/admin-dashboard", component: AdminDashboard }
  ]
});
