import LoginForm from "@components/UserAccess/LoginForm.vue"
import RegisterForm from "@components/UserAccess/RegisterForm.vue"
import { createRouter, createWebHistory } from "vue-router"
import NotFoundPage from "@views/NotFoundPage.vue"

const clinetRouter = [
  {
    path: "/",
    name: "root-layout-client",
    component: () => import("../layouts/RootLayoutClinet.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/client/HomePage.vue"),
      },
      {
        path: "books",
        name: "books",
        component: () => import("../views/client/BooksPage.vue"),
      },
      {
        path: "books/:id",
        name: "book",
        component: () => import("../views/client/BookDetailPage.vue"),
      },
      {
        path: "history",
        name: "history",
        component: () => import("../views/client/HistoryBooksPage.vue"),
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("../views/client/CartPage.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/UserAccess.vue"),
    props: {
      title: "Đăng nhập",
      desc: "Bạn cần tài khoản CTU để đăng nhập.",
      formType: LoginForm,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/UserAccess.vue"),
    props: {
      title: "Đăng ký",
      desc: "Trang này giúp bạn tạo tài khoản. Vui lòng cung cấp đầy đủ thông tin.",
      formType: RegisterForm,
    },
  },
]

const adminRouter = [
  {
    path: "/admin",
    name: "root-layout-admin",
    component: () => import("../layouts/RootLayoutAdmin.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("../views/admin/DashBoard.vue"),
      },
      {
        path: "books",
        name: "clinet-books",
        component: () => import("../views/admin/BooksPageDashBoard.vue"),
      },
      {
        path: "books/:id",
        name: "clinet-book",
        component: () => import("../views/admin/EditBooksDashBoard.vue"),
      },
      {
        path: "history",
        name: "client-history",
        component: () => import("../views/admin/ManageBorrowingBooks.vue"),
      },
    ],
  },
]

const routes = [
  ...clinetRouter,
  ...adminRouter,
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
  },
]

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
