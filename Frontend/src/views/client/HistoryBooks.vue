<template>
  <div class="px-20 py-10">
    <el-table
      v-if="books.length"
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
        prop="name"
        label-class-name="padding-30 custome-lable"
        class-name="padding-30"
        width="400"
      />
      <el-table-column
        label="Ngày mượn"
        prop="ngayMuon"
        label-class-name="custome-lable"
      />
      <el-table-column
        label="Ngày trả"
        prop="ngayTra"
        label-class-name="custome-lable"
      />
      <el-table-column
        prop="trangThai"
        label="Trạng thái"
        :filters="[
          { text: 'Đang mượn', value: 'Đang mượn' },
          { text: 'Đã trả', value: 'Đã trả' },
          { text: 'Bị từ chối', value: 'Bị từ chối' },
          { text: 'Chờ xác nhận', value: 'Chờ xác nhận' },
        ]"
        label-class-name="custome-lable"
        :filter-method="filterTag"
        filter-placement="bottom-start"
      >
        <template #default="scope">
          <div class="py-2">
            <el-tag :type="getTagType(scope.row.trangThai)" disable-transitions>
              {{ scope.row.trangThai }}
            </el-tag>
          </div>
        </template>
      </el-table-column>

      <el-table-column type="expand" label-class-name="custome-lable">
        <template #default="props">
          <div class="px-8 py-8">
            <div m="4">
              <div class="flex gap-8">
                <div class="w-40 border border-[var(--secondary-color)]">
                  <img class="block w-full" :src="props.row.image[0]" alt="" />
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
                      <span class="text-md mr-2 text-black">Nhà xuất bản:</span>
                      {{ props.row.maNXB }}
                    </p>
                    <p m="t-0 b-2">
                      <span class="text-md mr-2 text-black"
                        >Số lượng đăng ký mượn:</span
                      >
                      {{ props.row.soLuongMuon }}
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
</template>

<script setup>
import { ref } from "vue"

const preserveExpanded = ref(false)

const api = import.meta.env.VITE_HOST

const tableData = ref()
const books = ref([])

const main = async () => {
  tableData.value = await fetch(`${api}borrowing`).then((res) => res.json())

  await tableData.value.forEach(async (item) => {
    const book = await fetch(`${api}books/${item.maSach}`).then((res) =>
      res.json(),
    )
    books.value.push({ ...book, ...item })
  })
}

main()

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

const filterTag = (value, row) => {
  return row.trangThai === value
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

span.el-table__column-filter-trigger i svg {
  color: white !important;
  margin-left: 8px !important;
  width: 20px !important;
  height: 20px !important;
  font-size: 20px !important;
  vertical-align: middle;
  display: inline-block;
}

span.el-table__column-filter-trigger {
  width: 20px !important;
  height: 20px !important;
}

span.el-table__column-filter-trigger i {
  width: 100% !important;
}

.el-table-filter.el-popper {
  margin-top: 18px !important;
}
</style>
