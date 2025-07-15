<template>
  <div>
    <el-dialog
      v-model="centerDialogVisible"
      title="Đăng ký thành công"
      width="500"
      center
    >
      <span>Vui lòng chọn tùy bọn bên dưới để đăng nhập vào hệ thống!</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Hủy bỏ</el-button>
          <router-link to="/login" class="ml-3">
            <el-button
              type="primary"
              @click="centerDialogVisible = false"
              to="/login"
            >
              Đăng nhập
            </el-button>
          </router-link>
        </div>
      </template>
    </el-dialog>
    <form
      class="mt-5 space-y-4 transition-all duration-500"
      @submit="handleRegisterForm"
    >
      <div class="animate__animated animate__fadeIn space-y-2" v-show="!isNext">
        <div class="flex gap-4">
          <div class="flex-[2]">
            <label
              ref="firstNameLabel"
              for="firstName"
              class="text-md mb-1 block text-[var(--primary-color)]"
              >Nhập họ lót:</label
            >
            <input
              type="text"
              id="firstName"
              ref="firstNameInput"
              v-model="firstName"
              class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
              @input="handleChange(firstNameLabel)"
            />
          </div>

          <div class="flex-1">
            <label
              ref="lastNameLabel"
              for="lastName"
              class="text-md mb-1 block text-[var(--primary-color)]"
              >Nhập tên:</label
            >
            <input
              type="text"
              id="lastName"
              ref="lastNameInput"
              v-model="lastName"
              class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
              @input="handleChange(lastNameLabel)"
            />
          </div>
        </div>

        <div>
          <label
            ref="phoneLabel"
            for="phone"
            class="text-md mb-1 block text-[var(--primary-color)]"
            >Số điện thoại:</label
          >
          <input
            type="phone"
            v-model="phone"
            ref="phoneInput"
            id="phone"
            class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
            @input="handleChange(phoneLabel)"
          />
        </div>

        <div>
          <div class="mt-4 items-center gap-8 space-y-2">
            <div flex="flex">
              <label
                class="text-lg text-[var(--primary-color)]"
                ref="genderLabel"
                >Giới tính:
              </label>
              <div class="ml-8 inline-block">
                <el-radio-group
                  v-model="gender"
                  ref="genderInput"
                  id="gender"
                  @input="handleChange(genderLabel)"
                >
                  <el-radio value="male">Nam</el-radio>
                  <el-radio value="female">Nữ</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="flex items-center justify-between gap-3">
              <label
                for="birthday"
                class="text-md text-[var(--primary-color)]"
                ref="birthdayLabel"
                >Ngày sinh</label
              >
              <div class="demo-date-picker">
                <div class="block">
                  <el-date-picker
                    id="birthday"
                    v-model="birthday"
                    ref="birthdayInput"
                    type="date"
                    placeholder="Chọn ngày"
                    @change="handleChange(birthdayLabel)"
                  />
                </div>
              </div>
              <div>
                <FontAwesomeIcon
                  :icon="faAngleRight"
                  class="block h-6 w-6 cursor-pointer rounded-[50%] border-2 border-[var(--primary-color)] p-1 text-[var(--primary-color)] transition-all hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)]"
                  title="Tiếp tục"
                  @click="() => (isNext = true)"
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animate__animated animate__fadeIn space-y-2" v-show="isNext">
        <div>
          <label
            ref="emailLabel"
            for="email"
            class="text-md mb-1 block text-[var(--primary-color)]"
            >Địa chỉ Email:</label
          >
          <input
            class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
            type="text"
            v-model="email"
            id="email"
            ref="emailInput"
            @input="handleChange(emailLabel)"
          />
        </div>

        <div>
          <label
            ref="passwordLabel"
            for="password"
            class="text-md mb-1 block text-[var(--primary-color)]"
            >Nhập mật khẩu:</label
          >
          <input
            class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
            type="password"
            v-model="password"
            id="password"
            ref="passwordInput"
            @input="handleChange(passwordLabel)"
          />
        </div>

        <div>
          <label
            ref="confirmPasswordLabel"
            for="confirmPassword"
            class="text-md mb-1 block text-[var(--primary-color)]"
            >Xác nhận mật khẩu:</label
          >
          <input
            class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
            type="password"
            v-model="confirmPassword"
            id="confirmPassword"
            ref="confirmPasswordInput"
            @input="handleChange(confirmPasswordLabel)"
          />
        </div>
      </div>

      <div
        class="animate__animated animate__fadeIn flex items-center justify-between"
        v-show="isNext"
      >
        <button
          type="submit"
          class="rounded bg-[var(--primary-color)] px-5 py-2 text-white transition-all hover:bg-[var(--secondary-color)]"
        >
          Đăng ký
        </button>

        <FontAwesomeIcon
          :icon="faAngleLeft"
          title="Trở lại"
          @click="() => (isNext = false)"
          class="block h-6 w-6 cursor-pointer rounded-[50%] border-2 border-[var(--primary-color)] p-1 text-[var(--primary-color)] transition-all hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)]"
        ></FontAwesomeIcon>
      </div>
    </form>

    <div class="mt-7">
      <p class="mb-2 text-gray-600">Tùy chọn khác:</p>
      <div class="flex gap-3">
        <div
          class="cursor-pointer rounded bg-gray-100 px-2 py-1 transition-all hover:opacity-80"
        >
          <FontAwesomeIcon
            :icon="faFacebook"
            class="text-[#3B5998]"
          ></FontAwesomeIcon>
          Facebook
        </div>
        <div
          class="cursor-pointer rounded bg-gray-100 px-2 py-1 transition-all hover:opacity-80"
        >
          <FontAwesomeIcon
            :icon="faGoogle"
            class="text-[#F44336]"
          ></FontAwesomeIcon>
          Google
        </div>
        <div
          class="cursor-pointer rounded bg-gray-100 px-2 py-1 transition-all hover:opacity-80"
        >
          <FontAwesomeIcon
            :icon="faLinkedin"
            class="text-[#0077B5]"
          ></FontAwesomeIcon>
          Linkedin
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <router-link
        to="/login"
        class="mt-6 inline-block pr-2 text-[var(--primary-color)] transition-all hover:text-[var(--secondary-color)]"
        @click="emit('update:url', '2')"
      >
        Bạn đã có tài khoản?
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref, watchEffect } from "vue"
import { ElNotification } from "element-plus"

const open = (message, type) => {
  ElNotification[type]({
    title: "Lỗi",
    message,
    offset: 100,
  })
}

const emit = defineEmits(["update:url"])

const isNext = ref(false)

const firstNameLabel = ref()
const lastNameLabel = ref()
const phoneLabel = ref()
const genderLabel = ref()
const birthdayLabel = ref()
const emailLabel = ref()
const passwordLabel = ref()
const confirmPasswordLabel = ref()

const firstName = ref("")
const lastName = ref("")
const phone = ref("")
const gender = ref("male")
const birthday = ref("")
const email = ref("")
const password = ref("")
const confirmPassword = ref("")

const firstNameInput = ref()
const lastNameInput = ref()
const phoneInput = ref()
const genderInput = ref()
const birthdayInput = ref()
const emailInput = ref()
const passwordInput = ref()
const confirmPasswordInput = ref()

const formArray = ref([])

watchEffect(() => {
  formArray.value = [
    {
      type: "firstName",
      value: firstName.value,
      element: firstNameInput.value,
      label: firstNameLabel.value,
    },
    {
      type: "lastName",
      value: lastName.value,
      element: lastNameInput.value,
      label: lastNameLabel.value,
    },
    {
      type: "phone",
      value: phone.value,
      element: phoneInput.value,
      label: phoneLabel.value,
    },
    {
      type: "gender",
      value: gender.value,
      element: genderInput.value,
      label: genderLabel.value,
    },
    {
      type: "birthday",
      value: birthday.value,
      element: birthdayInput.value,
      label: birthdayLabel.value,
    },
    {
      type: "email",
      value: email.value,
      element: emailInput.value,
      label: emailLabel.value,
    },
    {
      type: "password",
      value: password.value,
      element: passwordInput.value,
      label: passwordLabel.value,
    },
    {
      type: "confirmPassword",
      value: confirmPassword.value,
      element: confirmPasswordInput.value,
      label: confirmPasswordLabel.value,
    },
  ]
})

const centerDialogVisible = ref(false)

const handleRegisterForm = async (e) => {
  e.preventDefault()

  let hasError = false
  const payload = {}

  let flag = false
  formArray.value.forEach((item) => {
    const val = item.value?.toString().trim()

    if (!val) {
      hasError = true
      if (!item.label.innerHTML.startsWith("*")) {
        item.label.innerHTML = `* ${item.label.innerHTML}`
      }
      item.label.style.color = "red"
      if (flag === false) {
        open("Vui lòng nhập đủ thông tin", "error")
        flag = true
      }
    } else {
      payload[item.type] = val
    }
  })
  flag = false

  if (hasError) return

  const api = import.meta.env.VITE_HOST

  try {
    const { messeage } = await fetch(`${api}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json())

    if (messeage === "account is exist") {
      open("Email đã được sử dụng, vui lòng dùng Email khác!", "warning")
      return
    }

    if (password.value != confirmPassword.value) {
      open("Mật khẩu và mật khẩu xác thực không khớp", "error")
      return
    }

    firstName.value = ""
    lastName.value = ""
    phone.value = ""
    gender.value = ""
    birthday.value = ""
    email.value = ""
    password.value = ""
    confirmPassword.value = ""

    centerDialogVisible.value = true
  } catch (err) {
    console.log("Lỗi: " + err.message)
  }
}

const handleChange = (ele) => {
  ele.style.color = "var(--primary-color)"
  if (ele.innerHTML[0] == "*") ele.innerHTML = ele.innerHTML.slice(2)
}
</script>
