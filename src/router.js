/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "top",
      component: () => import( /* webpackChunkName: "about" */ "./views/Top.vue")
    },
    {
      path: "/git",
      name: "git",
      component: () => import( /* webpackChunkName: "about" */ "./views/Git.vue")
    },
    {
      path: "/cheat-sheet",
      name: "cheat-sheet",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/CheatSheet.vue")
    },
    {
      path: "/mkp-app",
      name: "mkp-app",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/MkpApp.vue")
    },
    {
      path: "*",
      name: "not-found",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/NotFound.vue")
    }
  ]
});
