<template>
  <div class="mt-3 flex gap-24 overflow-auto px-12 py-1">
    <BookImage
      :image="bookUpload.image.map((item) => item.url) || []"
      :styleLitileImage="{ width: '80px' }"
      :styleMainImage="{ width: '280px' }"
      :flexCol="true"
      :hiddenZoom="true"
      :style="{ width: '280px' }"
      :allowRemoveImage="true"
      @remove="handleRemove"
    ></BookImage>

    <div class="relative">
      <form class="space-y-3">
        <div class="flex gap-10">
          <div class="flex flex-col gap-1">
            <label for="tenSach" class="text-[var(--primary-color)]"
              >Tên sách:</label
            >
            <el-input
              id="tenSach"
              v-model="bookUpload.tenSach"
              style="width: 550px"
              size="large"
              placeholder="Nhập tên sách"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label for="danhGia" class="text-[var(--primary-color)]"
              >Đánh giá:</label
            >
            <el-select
              id="danhGia"
              v-model="bookUpload.vote"
              placeholder="Select"
              style="width: 120px"
              size="large"
            >
              <el-option
                v-for="item in 5"
                :key="item"
                :label="item + ' ⭐'"
                :value="item"
              />
            </el-select>
          </div>
        </div>

        <div class="flex gap-10">
          <div class="flex w-1/2 flex-col gap-1">
            <label for="tacGia" class="text-[var(--primary-color)]"
              >Tác giả:</label
            >
            <el-input
              id="tacGia"
              v-model="bookUpload.author"
              style="width: 100%"
              size="large"
              placeholder="Nhập tên tác giả"
            />
          </div>

          <div class="flex w-1/2 flex-col gap-1">
            <label for="NXB" class="text-[var(--primary-color)]"
              >Nhà xuất bản:</label
            >
            <el-select
              id="NXB"
              v-model="bookUpload.maNXB"
              placeholder="Chọn nhà xuất bản"
              style="width: 100%"
              size="large"
            >
              <el-option
                v-for="item in nxb"
                :key="item"
                :label="item.tenNXB"
                :value="item.maNXB"
              />
            </el-select>
          </div>
        </div>

        <div class="flex gap-10">
          <div class="flex flex-col gap-1">
            <label for="namXuatBan" class="text-[var(--primary-color)]"
              >Năm xuất bản:</label
            >
            <el-date-picker
              id="namXuatBan"
              v-model="bookUpload.namXuatBan"
              type="year"
              placeholder="Pick a year"
              style="width: 200px"
            >
              <template #default="cell">
                <div
                  class="el-date-table-cell"
                  :class="{ current: cell.isCurrent }"
                >
                  <span class="el-date-table-cell__text">{{ cell.text }}y</span>
                </div>
              </template>
            </el-date-picker>
          </div>
          <div class="flex flex-col gap-1">
            <label for="soLuong" class="text-[var(--primary-color)]"
              >Số lượng:</label
            >
            <el-input-number v-model="bookUpload.soQuyen" :min="1" />
          </div>
          <div class="flex flex-col gap-1">
            <label for="soLuong" class="text-[var(--primary-color)]"
              >Giá tiền:</label
            >
            <el-input-number v-model="bookUpload.donGia" :min="1">
              <template #prefix>
                <span>$</span>
              </template>
            </el-input-number>
          </div>
        </div>

        <div class="flex gap-10">
          <div class="flex w-1/2 flex-col gap-1">
            <label for="ngonNgu" class="text-[var(--primary-color)]"
              >Ngôn ngữ:</label
            >
            <el-select
              id="ngonNgu"
              v-model="bookUpload.lang"
              placeholder="Select"
              style="width: 100%"
              size="large"
            >
              <el-option
                v-for="item in lang"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              />
            </el-select>
          </div>

          <div class="flex w-1/2 flex-col gap-1">
            <label for="theLoai" class="text-[var(--primary-color)]"
              >Thể loại:</label
            >
            <el-select
              id="theLoai"
              v-model="bookUpload.idFeatures"
              placeholder="Chọn thể loại"
              style="width: 100%"
              size="large"
              multiple
            >
              <el-option
                v-for="item in theloai?.featureValue"
                :key="item?.id"
                :label="item?.name"
                :value="item?.id"
              />
            </el-select>
          </div>
        </div>

        <div class="flex justify-between">
          <div class="flex gap-10">
            <div class="flex flex-col gap-1">
              <label for="anhBia" class="text-[var(--primary-color)]"
                >Cập nhật ảnh bìa:</label
              >
              <el-upload
                class="upload-demo"
                action=""
                :show-file-list="false"
                :before-upload="handleBeforeUpload"
                multiple
              >
                <el-button type="primary">Chọn ảnh</el-button>
              </el-upload>
            </div>
            <div class="flex flex-col gap-1">
              <label for="gioiThieu" class="text-[var(--primary-color)]"
                >Giới thiệu:</label
              >
              <el-mention
                v-model="bookUpload.desc"
                type="textarea"
                style="width: 335px"
                placeholder="Nhập giới thiệu sách..."
              />
            </div>
          </div>
          <div class="flex">
            <button
              type="submit"
              @click.prevent="handleSubmit"
              class="mt-auto w-28 rounded bg-[var(--primary-color)] px-4 py-2 text-white transition-all hover:bg-[var(--secondary-color)]"
            >
              Lưu
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/hooks/useFetch"
import BookImage from "@components/BookImage.vue"
import { notifyMessage } from "@utils/index"
import { ElMessage, ElMessageBox } from "element-plus"
import { reactive } from "vue"

const defaultBookUpload = {
  image: [
    {
      url: "https://res.cloudinary.com/dpsj6nk7y/image/upload/v1753386269/no-image_qez2fh.svg",
      public_id: "",
    },
  ],
  vote: 1,
  desc: "",
  author: "",
  idFeatures: [],
  lang: "Tiếng Việt",
  donGia: 1,
  namXuatBan: new Date(new Date().getFullYear(), 0, 1),
  soQuyen: 1,
  tenSach: "",
  maNXB: "",
}

const bookUpload = reactive({ ...defaultBookUpload })

const lang = [
  {
    label: "Tiếng Việt",
    value: "ngonngu01",
  },
  {
    label: "Tiếng Anh",
    value: "ngonngu02",
  },
  {
    label: "Tiếng Trung",
    value: "ngonngu03",
  },
  {
    label: "Tiếng Nhật",
    value: "ngonngu04",
  },
  {
    label: "Tiếng Hàn",
    value: "ngonngu05",
  },
]

const apiImg = import.meta.env.VITE_IMAGE

const handleRemove = async (index) => {
  const img = bookUpload.image[index]

  if (img.public_id) {
    await fetch(`${api}books/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ public_id: img.public_id }),
    }).then((res) => res.json())
    // console.log(mess)
  }
  bookUpload.image.splice(index, 1)
  if (bookUpload.image.length === 0) {
    bookUpload.image.push({
      url: `${apiImg}/v1753386269/no-image_qez2fh.svg`,
      public_id: "",
    })
  }
  bookUpload.image = [...bookUpload.image]
}

const api = import.meta.env.VITE_HOST
const token = localStorage.getItem("token")

const handleBeforeUpload = async (fileList) => {
  const files = Array.isArray(fileList) ? fileList : [fileList]

  const uploadedUrls = []

  for (const file of files) {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET)

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    )

    const data = await res.json()

    if (data.secure_url && data.public_id) {
      uploadedUrls.push({ url: data.secure_url, public_id: data.public_id })
    }
  }

  if (
    bookUpload.image.length === 1 &&
    bookUpload.image[0].url.includes("no-image")
  ) {
    bookUpload.image = uploadedUrls
  } else {
    bookUpload.image.push(...uploadedUrls)
  }

  bookUpload.image = [...bookUpload.image]

  return false
}

const handleSubmit = async () => {
  for (const key in bookUpload) {
    const value = bookUpload[key]
    if (
      value === "" ||
      value === null ||
      value === undefined ||
      (Array.isArray(value) && value.length === 0) ||
      (Array.isArray(value) && value[0]?.url?.includes("no-image"))
    ) {
      console.log(key)
      notifyMessage(
        "error",
        "bottom-right",
        "Thêm sách thất bại",
        "Vui lòng nhập đầy đủ thông tin",
      )
      return
    }
  }

  const mess = await fetch(`${api}books/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookUpload),
  }).then((res) => res.json())

  ElMessageBox.alert(
    "Bạn có thể kiểm tra thông tin sách tại mục quản lý",
    "Thêm sách thành công",
    {
      confirmButtonText: "OK",
      callback: () => {
        ElMessage({
          type: "primary",
          message: `Thêm mới thành công`,
        })
      },
    },
  )

  Object.assign(bookUpload, JSON.parse(JSON.stringify(defaultBookUpload)))

  console.log(mess)
}

const { data: nxb } = useFetch(`${api}publishers`)
const { data: theloai } = useFetch(`${api}bookFeatures/theloai`)
</script>
