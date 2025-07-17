<template>
  <BreadcrumbComponent
    :title="`Giỏ hàng`"
    :breadcrumb="[
      { label: 'Trang chủ', path: '/' },
      { label: 'Giỏ hàng', path: '' },
    ]"
  ></BreadcrumbComponent>
  <div class="flex justify-between gap-10 px-20 py-10">
    <div class="w-[70%]">
      <el-table
        :data="books"
        :preserve-expanded-content="preserveExpanded"
        style="width: 100%"
      >
        <el-table-column
          label="STT"
          type="index"
          width="70"
          label-class-name="custome-lable"
          class-name="custome-lable-stt"
        />
        <el-table-column
          label="Tên sách"
          prop="tenSach"
          label-class-name="padding-15 custome-lable"
          class-name="padding-15 "
          width="350"
        />
        <el-table-column
          label="Số lượng"
          prop="soLuong"
          label-class-name="custome-lable text-center"
          class-name="text-center"
          width="140"
        />
        <el-table-column
          label="Ngày thêm vào"
          prop="ngayThemVaoGio"
          width="300"
          label-class-name="custome-lable text-center"
          class-name="text-center"
        >
          <template #default="scope">
            <span>{{ formatDate(scope.row.ngayThemVaoGio) }}</span>
          </template>
        </el-table-column>

        <el-table-column
          type="expand"
          label-class-name="custome-lable"
          width="30"
        >
          <template #default="props">
            <div class="px-8 py-8">
              <div m="4">
                <div class="flex gap-8">
                  <div class="w-40 border border-[var(--secondary-color)]">
                    <img
                      class="block w-full"
                      :src="props.row.image[0]"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-1">
                    <div
                      class="space-y-2 border-r border-r-slate-200 pr-12 text-[15px]"
                    >
                      <p m="t-0 b-2">
                        <span class="text-md mr-2 text-black">Mã sách:</span>
                        {{ props.row.maSach }}
                      </p>
                      <p m="t-0 b-2">
                        <span class="text-md mr-2 text-black">Tác giả:</span>
                        {{ props.row.author }}
                      </p>
                      <p m="t-0 b-2">
                        <span class="text-md mr-2 text-black"
                          >Nhà xuất bản:</span
                        >
                        {{ props.row.maNXB }}
                      </p>
                      <p m="t-0 b-2">
                        <span class="text-md mr-2 text-black"
                          >Số lượng đăng ký mượn:</span
                        >
                        {{ props.row.soLuong }}
                      </p>

                      <div>
                        <button
                          class="mt-10 block rounded bg-red-500 px-3 py-1 text-white transition-all hover:bg-red-600"
                        >
                          Hủy mượn
                        </button>
                      </div>
                    </div>

                    <div class="flex-1 pl-12">
                      <h3 class="mb-2 text-[15px] text-[var(--primary-color)]">
                        Ghi chú:
                      </h3>
                      <div
                        class="h-40 w-full overflow-y-auto rounded border border-[var(--secondary-color)] px-4 py-2"
                      >
                        <p>{{ props.row.ghiChu }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          type="selection"
          width="55"
          label-class-name="custome-lable"
        />
      </el-table>
    </div>

    <div class="w-[30%]">Form mượn sách</div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import BreadcrumbComponent from "@components/BreadcrumbComponent.vue"
import { ref, watch } from "vue"

const preserveExpanded = ref(false)
const products = ref()
const books = ref([])

const token = localStorage.getItem("token")

const api = import.meta.env.VITE_HOST
if (token) {
  const payload = JSON.parse(atob(token.split(".")[1]))
  payload.role === "user"

  const { data } = useFetch(`${api}cart/${payload.id}`)

  watch(data, () => (products.value = data.value))
}

watch(products, () => {
  products.value?.forEach(async (product) => {
    const data = await fetch(`${api}books/${product.maSach}`).then((res) =>
      res.json(),
    )

    books.value = [
      ...books.value,
      {
        soLuong: product.soLuong,
        ngayThemVaoGio: product.ngayThemVaoGio,
        ...data,
      },
    ]
  })
})

const formatDate = (date) =>
  new Date(date).toLocaleString("vi-VN").replace(" ", ", ")

setTimeout(() => console.log(books.value), 2000)
</script>

<style>
td {
  height: 63px;
}

.padding-15 {
  padding-left: 15px !important;
  padding-right: 15px !important;
}

.text-center {
  text-align: center !important;
}
</style>
