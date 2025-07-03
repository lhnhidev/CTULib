import { ElNotification } from "element-plus"

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
