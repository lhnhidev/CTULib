<template>
  <el-table
    :data="booksWithNXB"
    :preserve-expanded-content="preserveExpanded"
    style="width: 100%"
  >
    <el-table-column
      label="STT"
      type="index"
      width="70"
      label-class-name="custome-lable my-flex-center"
      class-name="custome-lable-stt"
    />
    <el-table-column
      label="Tên sách"
      prop="name"
      label-class-name="padding-30 custome-lable my-text-left"
      class-name="padding-30 my-text-left"
      width="400"
    />
    <el-table-column
      label="Ngày mượn"
      prop="ngayMuon"
      width="175"
      label-class-name="custome-lable text-center"
      class-name="text-center"
    />
    <el-table-column
      label="Ngày trả"
      prop="ngayTra"
      width="175"
      label-class-name="custome-lable text-center"
      class-name="text-center"
    />
    <el-table-column
      label="Ngày đăng ký"
      prop="ngayDangKyMuon"
      width="175"
      label-class-name="custome-lable text-center"
      class-name="text-center"
    >
      <template #default="scope">
        <p>
          {{
            scope.row.ngayDangKyMuon.slice(0, 10).split("-").reverse().join("-")
          }}
        </p>
      </template>
    </el-table-column>
    <el-table-column
      prop="trangThai"
      label="Trạng thái"
      width="230"
      :filters="[
        { text: 'Đang mượn', value: 'Đang mượn' },
        { text: 'Đã trả', value: 'Đã trả' },
        { text: 'Bị từ chối', value: 'Bị từ chối' },
        { text: 'Chờ xác nhận', value: 'Chờ xác nhận' },
      ]"
      label-class-name="custome-lable text-center"
      :filter-method="filterTag"
      filter-placement="bottom-start"
    >
      <template #default="scope">
        <div class="flex justify-center py-2">
          <el-tag :type="getTagType(scope.row.trangThai)" disable-transitions>
            {{ scope.row.trangThai }}
          </el-tag>
        </div>
      </template>
    </el-table-column>

    <el-table-column
      type="expand"
      label-class-name="custome-lable text-center"
      width="48"
    >
      <template #default="props">
        <div class="px-8 py-8">
          <div m="4">
            <div class="flex gap-8">
              <div class="w-40 border border-[var(--secondary-color)]">
                <img class="block w-full" :src="props.row.image[0]" alt="" />
              </div>
              <div class="flex flex-1">
                <div
                  class="flex flex-col items-start space-y-2 border-r border-r-slate-200 pr-12 text-[15px]"
                >
                  <p m="t-0 b-2">
                    <span class="text-md mr-2 text-black">Mã sách:</span>
                    {{ props.row.maSach }}
                  </p>
                  <p m="t-0 b-2">
                    <span class="text-md mr-2 text-black">Tác giả:</span>
                    {{ props.row.author }}
                  </p>
                  <p m="t-0 b-2" class="flex items-center gap-2">
                    <span class="text-md mr-2 text-black">Ngôn ngữ:</span>
                    <img
                      :src="`https://flagcdn.com/24x18/${handleLang(props.row.lang)}.png`"
                      :srcset="`https://flagcdn.com/48x36/${handleLang(props.row.lang)}.png 2x,
                    https://flagcdn.com/72x54/${handleLang(props.row.lang)}.png 3x`"
                      width="24"
                      height="18"
                      :alt="props.row.lang"
                      :title="props.row.lang"
                    />
                  </p>
                  <p m="t-0 b-2">
                    <span class="text-md mr-2 text-black">Nhà xuất bản:</span>
                    {{ props.row.tenNXB }}
                  </p>
                  <p m="t-0 b-2">
                    <span class="text-md mr-2 text-black"
                      >Số lượng đăng ký mượn:</span
                    >
                    {{ props.row.soLuongMuon }}
                  </p>

                  <div>
                    <button
                      class="block rounded bg-red-500 px-3 py-1 text-white transition-all hover:bg-red-600"
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
</template>

<script setup>
import { ref, watchEffect } from "vue"

const { books } = defineProps({
  books: Array,
})

const filterTag = (value, row) => {
  return row.trangThai === value
}

const booksWithNXB = ref([])

const api = import.meta.env.VITE_HOST

const renderNameNXB = async (id) => {
  const res = await fetch(`${api}publishers/${id}`)
  const data = await res.json()
  return data.tenNXB
}

watchEffect(async () => {
  booksWithNXB.value = await Promise.all(
    books.map(async (book) => {
      const tenNXB = await renderNameNXB(book.maNXB)
      return { ...book, tenNXB }
    }),
  )
})

const preserveExpanded = ref(false)

const getTagType = (tag) => {
  switch (tag) {
    case "Đã trả":
      return "success"
    case "Đang mượn":
      return "primary"
    case "Chờ xác nhận":
      return "info"
    case "Bị từ chối":
      return "danger"
    default:
      return undefined
  }
}

const handleLang = (lang) => {
  switch (lang) {
    case "Tiếng Việt":
      return "vn"
    case "Tiếng Anh":
      return "gb"
    case "Tiếng Trung":
      return "cn"
    case "Tiếng Nhật":
      return "jp"
    case "Tiếng Hàn":
      return "kr"
    default:
      return "vn"
  }
}
</script>

<style>
.custome-lable-stt {
  text-align: center !important;
}

.custome-lable {
  color: white;
  background-color: var(--primary-color) !important;
  font-size: 20px !important;
  padding-bottom: 12px !important;
  padding-top: 12px !important;
}

.padding-30 {
  padding-left: 30px !important;
  padding-right: 30px !important;
}

.cell {
  text-align: center;
}

.my-text-left > .cell {
  text-align: left !important;
}
</style>
