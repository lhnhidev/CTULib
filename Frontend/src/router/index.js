import RootLayout from "@/layouts/RootLayout.vue"
import LoginForm from "@components/UserAccess/LoginForm.vue"
import RegisterForm from "@components/UserAccess/RegisterForm.vue"
import UserAccess from "@views/UserAccess.vue"
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
  {
    path: "/login",
    name: "login",
    component: UserAccess,
    props: {
      title: "Đăng nhập",
      desc: "Bạn cần tài khoản CTU để đăng nhập.",
      formType: LoginForm,
    },
  },
  {
    path: "/register",
    name: "register",
    component: UserAccess,
    props: {
      title: "Đăng ký",
      desc: "Trang này giúp bạn tạo tài khoản. Vui lòng cung cấp đầy đủ thông tin.",
      formType: RegisterForm,
    },
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
      behavior: "smooth",
    }
  },
})

export default router
