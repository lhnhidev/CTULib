import { onMounted, ref } from "vue"

export const useFetch = (url) => {
  const data = ref()
  const error = ref()
  const isLoading = ref(false)

  const fetchData = async () => {
    isLoading.value = true
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error("Thất bại khi fetch")
      data.value = await res.json()
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchData)

  return { data, error, isLoading, reFetch: fetchData }
}
