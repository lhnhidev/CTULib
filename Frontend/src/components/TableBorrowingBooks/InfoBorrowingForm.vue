<template>
  <div class="grid h-full grid-cols-12 px-6 py-6">
    <div class="border-r-1 col-span-4 border-r pr-5">
      <div class="pl-6">
        <div class="mb-3 text-xl font-bold text-[var(--primary-color)]">
          Thông tin người mượn
        </div>
        <div class="space-y-5">
          <div class="flex gap-3">
            <div>
              <img
                :src="form?.user.avatar"
                alt="image"
                class="h-14 w-14 rounded-full"
              />
            </div>
            <div>
              <p class="break-words text-lg">
                {{ form?.user.hoLot + " " + form?.user.ten }}
              </p>
              <p class="text-gray-600">{{ form?.maDocGia }}</p>
            </div>
          </div>
          <div class="space-y-2 text-sm">
            <p class="flex flex-wrap gap-2 text-black">
              Email:
              <span class="text-gray-600">{{ form?.user.email }}</span>
            </p>
            <p class="flex flex-wrap gap-2 text-black">
              SĐT:
              <span class="text-gray-600">{{ form?.user.dienThoai }}</span>
            </p>
            <p class="flex flex-wrap gap-2 text-black">
              Địa chỉ:
              <span class="text-gray-600">{{
                form?.user.diaChi === "" ? "Chưa cập nhật" : form?.user.diaChi
              }}</span>
            </p>
            <p class="flex flex-wrap gap-2 text-black">
              Ngày sinh:
              <span class="text-gray-600">{{ form?.user.ngaySinh }}</span>
            </p>
            <p class="flex flex-wrap gap-2 text-black">
              Giới tính:
              <span class="text-gray-600">{{ form?.user.phai }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-8 space-y-5 pl-20">
      <div>
        <div class="mb-3 text-xl font-bold text-[var(--primary-color)]">
          Thông tin sách
        </div>
        <div class="flex gap-10">
          <div>
            <img class="w-36" :src="form?.book.image[0]" alt="imga" />
          </div>
          <div class="space-y-2">
            <p class="mb-3 text-[20px]">
              {{ form?.maSach + " - " + form?.book.tenSach }}
            </p>
            <div class="flex items-start gap-32 text-sm">
              <div class="space-y-2">
                <p class="flex gap-2 text-black">
                  Số lượng có sẵn:
                  <span class="text-gray-600">{{ form?.book.amount }}</span>
                </p>
                <p class="flex gap-2 text-black">
                  Tác giả:
                  <span class="text-gray-600">{{ form?.book.author }}</span>
                </p>
                <p class="flex gap-2 text-black">
                  Đơn giá:
                  <span class="text-gray-600">{{ form?.book.price }}</span>
                </p>
                <p class="flex gap-2 text-black">
                  Ngôn ngữ:
                  <span class="text-gray-600">{{ form?.book.lang }}</span>
                </p>
              </div>
              <div class="space-y-2">
                <p class="flex gap-2 text-black">
                  Nhà xuất bản:
                  <span class="text-gray-600">{{ form?.book.maNXB }}</span>
                </p>
                <p class="flex gap-2 text-black">
                  Năm xuất bản:
                  <span class="text-gray-600">{{ form?.book.release }}</span>
                </p>
                <p class="flex gap-2 text-black">
                  Thể loại:
                  <span class="text-gray-600">{{ form?.book.maNXB }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="mb-3 text-xl font-bold text-[var(--primary-color)]">
          Thông tin phiếu mượn
        </div>
        <div class="flex text-sm">
          <div class="w-[280px] space-y-2">
            <p class="flex gap-2 text-black">
              Mã phiếu:
              <span class="text-gray-600">{{ form?.maPhieu }}</span>
            </p>
            <p class="flex gap-2 text-black">
              Trạng thái:
              <span class="text-gray-600">{{ form?.trangThai }}</span>
            </p>
            <p class="flex gap-2 text-black">
              Ngày đăng ký mượn:
              <span class="text-gray-600">{{
                handleChangeDate(form?.ngayDangKyMuon)
              }}</span>
            </p>
            <p class="flex gap-2 text-black">
              Ngày mượn:
              <span class="text-gray-600">{{ form?.ngayMuon }}</span>
            </p>
            <p class="flex gap-2 text-black">
              Ngày trả:
              <span class="text-gray-600">{{ form?.ngayTra }}</span>
            </p>
            <p class="flex gap-2 text-black">
              Số lượng mượn:
              <span class="text-gray-600">{{ form?.soLuongMuon }}</span>
            </p>
          </div>
          <div class="ml-20 flex-1 space-y-2">
            <el-collapse expand-icon-position="top" class="w-[calc(100%-40px)]">
              <el-collapse-item title="Ghi chú" name="1" class="w-full">
                <div class="w-full overflow-y-auto text-justify text-sm">
                  <p
                    class="max-h-[100px] w-full max-w-[400px] break-words px-1"
                  >
                    {{
                      form?.ghiChu === "" ? "Không có ghi chú..." : form?.ghiChu
                    }}
                  </p>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import { ref, watch } from "vue"

const { idForm } = defineProps({
  idForm: String,
})

const api = import.meta.env.VITE_HOST
const { data: formInit } = useFetch(`${api}borrowing/form/${idForm}`)
const form = ref()

watch(formInit, async () => {
  const book = await fetch(`${api}books/${formInit.value?.maSach}`).then(
    (res) => res.json(),
  )
  const user = await fetch(`${api}user/${formInit.value?.maDocGia}`).then(
    (res) => res.json(),
  )
  form.value = { ...formInit.value, book, user }
  console.log("form", form.value)
})

const handleChangeDate = (date) => {
  if (!date) return
  const res = new Date(form.value?.ngayDangKyMuon)

  const day = String(res.getDate()).padStart(2, "0")
  const month = String(res.getMonth() + 1).padStart(2, "0")
  const year = res.getFullYear()

  return `${day}-${month}-${year}`
}
</script>

<style scoped>
::v-deep(.el-collapse-item__header) {
  font-size: 14px;
  color: black !important;
}

::v-deep(.el-collapse-item__header:hover) {
  font-size: 14px;
  color: var(--secondary-color) !important;
}
</style>
