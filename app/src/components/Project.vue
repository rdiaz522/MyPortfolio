<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: '',
  },
  projectName: {
    type: String,
    default: '',
  },
  projectType: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  buildWith: {
    type: String,
    default: '',
  },
  year: {
    type: String,
    default: '',
  },
  client: {
    type: String,
    default: '',
  },
})
const getImageUrl = () => {
  return new URL(`../assets/images/${props.imgSrc}`, import.meta.url)
}
</script>
<template>
  <!-- PAYROLL -->
  <div
    class="flex flex-wrap justify-start mb-36 ml-20 mr-20 md:max-lg:ml-40 md:max-lg:mr-40 lg:max-xl:ml-52 lg:max-xl:mr-52 xl:max-2xl:ml-72 xl:max-2xl:mr-72 2xl:ml-96 2xl:mr-96"
  >
    <div
      class="relative group h-96 w-96 bg-white-300 rounded-lg overflow-hidden sm:max-lg:w-full lg:max-xl:w-1/2 xl:max-2xl:w-[49%] xl:w-1/2"
    >
      <!-- Content or Background -->
      <div class="absolute inset-0 flex items-center justify-center">
        <img
          :src="getImageUrl()"
          alt=""
          class="box-border w-full h-full opacity-90 rounded-lg border-2 border-teal-300"
        />
      </div>

      <!-- Hover Message -->
      <div
        class="absolute inset-0 bg-blue-900 bg-opacity-50 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <h1 class="text-white text-center text-lg font-bold mt-36">
          {{ props.projectName }}
        </h1>
        <h1 class="text-gray-200 text-center text-lg font-medium">
          {{ props.projectType }}
        </h1>
      </div>
    </div>

    <div
      class="sm:max-lg:w-full lg:max-xl:w-1/2 xl:max-2xl:w-[49%] xl:max-2xl:pl-7 lg:max-xl:pl-5 sm:max-lg:pt-5 xl:w-1/2 xl:pl-10"
    >
      <div>
        <h1
          class="text-lg text-left text-justify tracking-tighter"
          style="hyphens: auto"
        >
          {{ props.description }}
        </h1>
        <br />
        <h1 class="text-lg">
          Built with:
          <span class="text-teal-400 text-sm font-bold">{{
            props.buildWith
          }}</span>
        </h1>
        <br />
        <h1 class="text-lg">Year: {{ props.year }}</h1>
        <br />
        <h1 class="text-lg">Client: {{ props.client }}</h1>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
