<script setup>
import { ref } from 'vue'
const content = ref(null)
const icon = ref(null)
const toggleAccordion = () => {
  // SVG for Minus icon
  const minusSVG = `
     <svg class="w-6 h-6 text-gray-800 dark:text-black text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
</svg>

    `

  // SVG for Plus icon
  const plusSVG = `
       <svg
          class="w-6 h-6 text-gray-800 dark:text-black text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
    `

  // Toggle the content's max-height for smooth opening and closing
  if (
    content.value.style.maxHeight &&
    content.value.style.maxHeight !== '0px'
  ) {
    content.value.style.maxHeight = '0'
    icon.value.innerHTML = plusSVG
  } else {
    content.value.style.maxHeight = content.value.scrollHeight + 'px'
    icon.value.innerHTML = minusSVG
  }
}

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  employer: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  year: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  urlName: {
    type: String,
    default: '',
  },
  techUsed: {
    type: Array,
    default: [],
  },
})
</script>

<style scoped></style>

<template>
  <div
    class="rounded-lg ml-20 mr-20 xsm:ml-12 xsm:mr-12 md:max-lg:ml-40 md:max-lg:mr-40 lg:max-xl:ml-52 lg:max-xl:mr-52 xl:max-2xl:ml-72 xl:max-2xl:mr-72 2xl:ml-96 2xl:mr-96"
  >
    <button
      @click="toggleAccordion()"
      class="w-full text-lg font-bold flex justify-between items-center py-5"
    >
      <span class="flex hover:scale-110 duration-300">
        <h1 class="dark:text-white pr-2">{{ props.title }}</h1>
        <h1 class="text-teal-300">{{ props.employer }}</h1>
      </span>
      <span
        ref="icon"
        class="transition-transform duration-300 dark:bg-teal-300 bg-black rounded-lg"
      >
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
          />
        </svg> -->
        <svg
          class="w-6 h-6 text-gray-800 dark:text-black text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </span>
    </button>
    <div
      ref="content"
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div class="flex flex-row">
        <div class="flex flex-wrap">
          <div
            class="text-justify xsm:text-left items-center justify-center w-full"
          >
            <p
              class="pr-5 pl-5 pb-5 lg:pr-28 lg:pl-28 dark:text-white text-lg font-medium tracking-tighter"
            >
              {{ props.description }}
            </p>
          </div>

          <div
            class="text-justify items-center justify-center w-1/2 xsm:w-full"
          >
            <div
              class="pl-5 pr-5 pb-5 lg:pr-28 lg:pl-28 dark:text-white text-lg font-bold"
            >
              <span class="font-medium">{{ props.year }}</span
              ><br />
              <span>
                <a
                  class="text-blue-500 underline"
                  :href="props.url"
                  target="_blank"
                  >{{ props.urlName }}</a
                ></span
              >
            </div>
          </div>

          <div
            class="text-justify items-center justify-center w-1/2 xsm:w-full"
          >
            <div
              class="pl-5 pr-5 lg:pr-28 lg:pl-28 text-white text-sm font-bold"
            >
              <div class="flex flex-row w-full">
                <div class="flex flex-wrap gap-2">
                  <div
                    v-for="(tech, i) in props.techUsed"
                    :key="i"
                    class="flex bg-teal-600 pl-5 pr-5 pt-2 pb-2 rounded-3xl"
                  >
                    <span>{{ tech }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
