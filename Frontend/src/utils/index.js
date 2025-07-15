import { ElNotification } from "element-plus"
import axios from "axios"

export const formatCurrency = (number, currency = "USD") => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  })

  return formatter.format(number)
}

export const isUserLoggedIn = (type, position, title, message) => {
  const token = localStorage.getItem("token")

  if (!token) {
    ElNotification({
      title,
      message,
      position,
      type,
    })
    return false
  }
  return true
}

const authFetch = axios.create({
  baseURL: import.meta.env.VITE_HOST,
})

authFetch.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export { authFetch }
