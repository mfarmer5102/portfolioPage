import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: () =>
          import(/* webpackChunkName: "welcome" */ "../views/Welcome.vue") // Lazy loading
    },
    {
    path: "/applications",
    name: "Applications",
    component: () =>
        import(/* webpackChunkName: "" */ "../views/Applications.vue") // Lazy loading
    },
    {
        path: "/skills",
        name: "Skills",
        component: () =>
            import(/* webpackChunkName: "" */ "../views/Skills.vue") // Lazy loading
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import(/* webpackChunkName: "" */ "../views/Contact.vue") // Lazy loading
    }
//   {
//     path: "/edit",
//     name: "EditRecord",
//     component: () =>
//       import(/* webpackChunkName: "edit" */ "../views/EditRecord.vue") // Lazy loading
//   },
//   {
//     path: "/add",
//     name: "AddRecord",
//     component: () =>
//       import(/* webpackChunkName: "add" */ "../views/AddRecord.vue") // Lazy loading
//   }
];

const router = new VueRouter({
  routes
});

export default router;
