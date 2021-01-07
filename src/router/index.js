import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import AboutLivia from "../views/AboutLivia.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "projetos",
    name: "Projetos",
    component: Projects,
  },
  {
    path: "sobre",
    name: "Sobre",
    component: AboutLivia,
  },
  {
    path: "contato",
    name: "Contato",
    component: Contact,
  },
  {
    path: "servicos",
    name: "Servicos",
    component: Services,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
});

export default router;
