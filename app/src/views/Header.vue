<script setup>
import { ref } from 'vue'

const isDarkMode = ref(null)
const toggleDarkMode = () => {
  isDarkMode.value = document.documentElement.classList.toggle('dark')
}


</script>

<style scoped></style>
<template>
  <div class="relative p-5">
    <div class="flex flex-nowrap gap-10 justify-end">
      <button
        class="border-2 px-4 pr-2 pl-2 rounded-lg border-teal-300 hover:bg-teal-300 hover:text-black"
      >
        Contact Me
      </button>
      <a href="../assets/files/RDiazResume.pdf" download="RDiazResume.pdf" class="border-2 pt-3 px-2 rounded-lg border-teal-300 hover:bg-teal-300 hover:text-black" >Resume/CV</a>
      <i
        v-on:click="toggleDarkMode()"
        class="flex flex-col-reverse border-2 rounded-2xl dark:border-teal-300 border-cyan-300 p-0 transition duration-1000"
      >
        <div class="relative">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white fill-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
              clip-rule="evenodd"
            />
          </svg>

          <svg
            class="w-6 h-6 text-gray-800 dark:text-white fill-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
              clip-rule="evenodd"
            />
          </svg>
          <span
            class="absolute dark:top-0 bottom-0 w-6 h-6 dark:bg-cyan-300 bg-teal-300 rounded-full"
          ></span>
        </div>
      </i>
    </div>
  </div>
</template>
