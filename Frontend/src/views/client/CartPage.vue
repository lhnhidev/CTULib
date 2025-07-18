<template>
  <BreadcrumbComponent
    :title="`Giỏ hàng`"
    :breadcrumb="[
      { label: 'Trang chủ', path: '/' },
      { label: 'Giỏ hàng', path: '' },
    ]"
  ></BreadcrumbComponent>
  <div class="flex justify-between gap-10 px-20 py-10">
    <div class="max-h-[498px] w-[70%]">
      <el-table
        :data="
          books?.filter((book) => !deletedRows.includes(book.maSach)).reverse()
        "
        :preserve-expanded-content="preserveExpanded"
        style="width: 100%"
        height="100%"
        @selection-change="handleSelectionChange"
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
                  <div
                    class="h-[197px] w-40 border border-[var(--secondary-color)]"
                  >
                    <img
                      class="block w-full"
                      :src="props.row.image[0]"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-1">
                    <div
                      class="space-y-2 border-r border-r-slate-200 pr-8 text-[15px]"
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
                          @click="() => handelDeleteOutCart(props.row.maSach)"
                          class="mx-auto mt-3 block rounded bg-red-500 px-3 py-1 text-white transition-all hover:bg-red-600"
                        >
                          Xóa khỏi giỏ hàng
                        </button>
                      </div>
                    </div>

                    <div class="w-[320px] pl-8">
                      <div>
                        <h2
                          class="text-center text-lg uppercase text-[var(--primary-color)]"
                        >
                          Tùy chỉnh
                        </h2>

                        <div class="mt-3 flex items-center gap-3">
                          <span class="text-black"
                            >Số lượng đăng ký mượn:
                          </span>
                          <el-input-number
                            v-model="newAmounts[props.row.maSach]"
                            class="custom-input"
                            size="small"
                            min="1"
                            :max="props.row.soQuyen"
                          />
                        </div>

                        <div class="mt-3">
                          <div class="demo-date-picker">
                            <div class="flex gap-2">
                              <el-date-picker
                                v-model="dates[props.row.maSach]"
                                type="daterange"
                                range-separator="Đến"
                                start-placeholder="Ngày mượn"
                                end-placeholder="Ngày trả"
                                :size="size"
                                @change="
                                  (val, row) => {
                                    console.log(123)
                                    const today = new Date()
                                    today.setHours(0, 0, 0, 0)

                                    const selected = new Date(val[0])
                                    selected.setHours(0, 0, 0, 0)

                                    if (selected < today) {
                                      dates[props.row.maSach][0] = ''
                                      dates[props.row.maSach][1] = ''
                                      notifyMessage(
                                        'error',
                                        'bottom-right',
                                        'Ngày mượn không hợp lệ',
                                        'Ngày mượn phải là ngày hiện tại hoặc ngày trong tương lai',
                                      )
                                      row.borrowDate = null
                                    }
                                  }
                                "
                              />
                            </div>
                          </div>
                        </div>

                        <div class="mt-3">
                          <el-mention
                            v-model="notes[props.row.maSach]"
                            type="textarea"
                            style="width: 320px"
                            placeholder="Ghi chú nếu có..."
                          />
                        </div>
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
          :selectable="isRowSelectable"
        />
      </el-table>
    </div>

    <div class="h-80 w-[30%] border px-5 pt-3">
      <div class="space-y-2 border-b pb-4">
        <div class="flex w-full justify-between">
          <span class="">Tổng số đầu sách mượn: </span>
          <span class="text-gray-600"
            >{{ books?.length }} <span class="text-xs">đầu sách</span></span
          >
        </div>

        <div class="flex w-full justify-between">
          <span class="">Tổng số sách mượn: </span>
          <span class="text-gray-600"
            >{{ books?.reduce((total, item) => total + item.soLuong, 0) }}
            <span class="text-xs">quyển</span></span
          >
        </div>
      </div>

      <div class="space-y-2 pt-4">
        <div class="flex w-full justify-between">
          <span class="font-bold text-[var(--primary-color)]"
            >Phí phạt khi trễ hạn trả sách:
          </span>
          <span class="font-bold text-[var(--primary-color)]"
            >3%<span class="text-xs">/quyển</span></span
          >
        </div>

        <div class="flex w-full items-center gap-3">
          <input
            type="checkbox"
            class="checkbox checkbox-xs mt-1"
            id="dieuKhoan"
            :checked="isChecked"
            @click="isChecked = !isChecked"
          />
          <label for="dieuKhoan" class="mt-1"
            >Chấp nhận điều khoản mượn sách</label
          >
        </div>

        <div class="text-sm text-gray-600">
          <p class="mt-8">
            Hãy đảm bảo bạn đã đọc
            <a
              href="#"
              class="text-[var(--primary-color)] underline transition-all hover:text-[var(--secondary-color)]"
              >điều khoản mượn sách</a
            >
            và tuân thủ nó!
          </p>
        </div>

        <div>
          <button
            class="mx-auto mt-3 block rounded bg-[var(--primary-color)] px-5 py-2 text-white transition-all hover:bg-[var(--secondary-color)]"
            @click="handleAskingBrrowingBook"
          >
            Gửi yêu cầu mượn
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import BreadcrumbComponent from "@components/BreadcrumbComponent.vue"
import { notifyMessage } from "@utils/index"
import { nextTick, onUpdated, ref, watch } from "vue"

const preserveExpanded = ref(false)
const products = ref()
const books = ref([])
const newAmounts = ref({})
const dates = ref({})
const notes = ref({})
const isChecked = ref(false)
const deletedRows = ref([])

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

watch(books, () => {
  books.value.forEach((book) => {
    newAmounts.value[book.maSach] = book.soLuong
    dates.value[book.maSach] = ""
    notes.value[book.maSach] = ""
  })
})

// dates.value[books.value[0]?.maSach

const formatDate = (date) =>
  new Date(date).toLocaleString("vi-VN").replace(" ", ", ")

watch(dates)

const isRowSelectable = (row) => {
  const currentDate = dates.value[row.maSach]
  return !!(currentDate && currentDate[0] && currentDate[1])
}

const checkedMaSach = ref([])
const borrowingBooks = ref([])

const handleSelectionChange = (row) => {
  checkedMaSach.value = row.map((r) => r.maSach)
}

const handleAskingBrrowingBook = async () => {
  if (!isChecked.value) {
    notifyMessage(
      "warning",
      "bottom-right",
      "Bạn chưa đồng ý điều khoản",
      "Vui lòng đọc và ấn chọn chấn nhận điều khoản",
    )
    return
  }

  if (checkedMaSach.value.length === 0) {
    notifyMessage(
      "warning",
      "bottom-right",
      "Bạn chưa chọn sản phẩm cần mượn",
      "Vui lòng ấn chọn các sản phẩm bạn muốn mượn",
    )
    return
  } else {
    checkedMaSach.value.forEach((item) => {
      borrowingBooks.value = [
        ...borrowingBooks.value,
        {
          maDocGia: JSON.parse(atob(token.split(".")[1])).id,
          maSach: item,
          ngayMuon: dates.value[item][0],
          ngayTra: dates.value[item][1],
          trangThai: "Chờ xác nhận",
          ghiChu: notes.value[item],
          soLuongMuon: newAmounts.value[item],
        },
      ]
    })
  }

  const { message } = await fetch(`${api}borrowing/borrowingBooks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      borrowingBooks: borrowingBooks.value,
    }),
  }).then((res) => res.json())

  borrowingBooks.value.forEach((item) => {
    handelDeleteOutCart(item.maSach, false)
  })

  borrowingBooks.value = []

  if (message === "thành công") {
    notifyMessage(
      "success",
      "bottom-right",
      "Gửi phiếu mượn thành công",
      "Bạn đã gửi phiếu mượn thành công, vui lòng chờ phản hồi từ Thư viện",
    )
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

onUpdated(() => {
  nextTick(() => {
    const rows = document.querySelectorAll(".el-table__body-wrapper tbody tr")

    rows.forEach((rowEl, index) => {
      const book = books.value[index]
      const dateRange = dates.value[book.maSach]
      const checkboxCell = rowEl.querySelector("td.el-table-column--selection")

      if (checkboxCell && (!dateRange || !dateRange[0] || !dateRange[1])) {
        checkboxCell.setAttribute("title", "Chưa chọn ngày mượn trả")
      }
    })
  })
})

const handelDeleteOutCart = async (maSach, notify = true) => {
  const token = localStorage.getItem("token")
  const maDocGia = JSON.parse(atob(token.split(".")[1])).id

  const { message } = await fetch(`${api}cart/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      maDocGia,
      maSach,
    }),
  }).then((res) => res.json())

  if (message === "Xóa khỏi giỏ thành công" && notify === true) {
    notifyMessage(
      "success",
      "bottom-right",
      "Xóa khỏi giở hàng thành công",
      "Bạn đã thực hiện xóa sản phẩm khỏi giỏ hàng",
    )
  }

  deletedRows.value.push(maSach)
}
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

.custom-input {
  width: 90px !important;
}

.tooltip-disabled {
  position: relative;
}
</style>
