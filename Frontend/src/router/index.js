import RootLayout from "@/layouts/RootLayout.vue"
import { createRouter, createWebHistory } from "vue-router"

const clinetRouter = [
  {
    path: "/",
    name: "root-layout-client",
    component: RootLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/client/HomePage.vue"),
      },
      {
        path: "/books",
        name: "books",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/client/BooksPage.vue"),
      },
    ],
  },
]

const adminRouter = []

const routes = [...clinetRouter, ...adminRouter]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
