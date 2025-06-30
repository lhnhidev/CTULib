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
        component: () => import("../views/client/BooksPage.vue"),
      },
      {
        path: "/books/:id",
        name: "book",
        component: () => import("../views/client/BookDetailPage.vue"),
      },
    ],
  },
]

const adminRouter = []

const routes = [...clinetRouter, ...adminRouter]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      // behavior: "smooth",
    }
  },
})

export default router
