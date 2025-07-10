<template>
  <div>
    <form
      action="/register"
      method="POST"
      class="mt-5 space-y-4 transition-all duration-500"
      @submit.prevent="handleRegisterForm"
    >
      <div class="animate__animated animate__fadeIn space-y-2" v-show="!isNext">
        <div class="flex gap-4">
          <div class="flex-[2]">
            <label
              for="firstName"
              class="mb-1 block text-lg text-[var(--primary-color)]"
              >Họ và tên lót:</label
            >
            <input
              type="text"
              id="firstName"
              ref="firstNameInput"
              v-model="firstName"
              class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
            />
          </div>

          <div class="flex-1">
            <label
              for="lastName"
              class="mb-1 block text-lg text-[var(--primary-color)]"
              >Tên:</label
            >
            <input
              type="text"
              id="lastName"
              ref="lastNameInput"
              v-model="lastName"
              class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
            />
          </div>
        </div>

        <div>
          <label
            for="phone"
            class="mb-1 block text-lg text-[var(--primary-color)]"
            >Số điện thoại:</label
          >
          <input
            type="phone"
            v-model="phone"
            ref="phoneInput"
            id="phone"
            class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
          />
        </div>

        <div>
          <div class="mt-4 items-center gap-8 space-y-2">
            <div flex="flex">
              <label class="text-lg text-[var(--primary-color)]"
                >Giới tính:</label
              >
              <div class="ml-8 inline-block">
                <el-radio-group v-model="gender" ref="genderInput" id="gender">
                  <el-radio value="male">Nam</el-radio>
                  <el-radio value="female">Nữ</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="flex items-center justify-between gap-3">
              <label for="birthday" class="text-lg text-[var(--primary-color)]"
                >Ngày sinh:</label
              >
              <div class="demo-date-picker">
                <div class="block">
                  <el-date-picker
                    id="birthday"
                    v-model="birthday"
                    ref="birthdayInput"
                    type="date"
                    placeholder="Chọn ngày"
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

      <div class="animate__animated animate__fadeIn space-y-4" v-show="isNext">
        <input
          class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
          type="text"
          v-model="email"
          id="email"
          ref="emailInput"
          placeholder="Nhập Email..."
        />
        <input
          class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
          type="password"
          v-model="password"
          id="password"
          ref="passwordInput"
          placeholder="Mật khẩu"
        />
        <input
          class="w-full rounded border border-gray-300 px-3 py-2 outline-[var(--secondary-color)] transition-all"
          type="password"
          v-model="confirmPassword"
          id="confirmPassword"
          ref="confirmPasswordInput"
          placeholder="Xác nhận mật khẩu"
        />
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
import { onMounted, ref } from "vue"

const emit = defineEmits(["update:url"])

const isNext = ref(false)

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

onMounted(() => {
  console.log(birthdayInput.value.$el)
  formArray.value = [
    {
      value: firstName.value,
      element: firstNameInput.value,
    },
    {
      value: lastName.value,
      element: lastNameInput.value,
    },
    {
      value: phone.value,
      element: phoneInput.value,
    },
    {
      value: gender.value,
      element: genderInput.value,
    },
    {
      value: birthday.value,
      element: birthdayInput.value,
    },
    {
      value: email.value,
      element: emailInput.value,
    },
    {
      value: password.value,
      element: passwordInput.value,
    },
    {
      value: confirmPassword.value,
      element: confirmPasswordInput.value,
    },
  ]
})

const handleRegisterForm = () => {
  formArray.value.forEach((item) => {
    console.log(item.element?.$el.id)
    if (item.value === "") {
      const label = document.querySelector(`label[for="${item.element.id}"]`)
      // console.log(label)
    } else {
    }
  })
}
</script>
