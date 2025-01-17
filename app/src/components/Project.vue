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
  <div class="flex flex-wrap gap-10 justify-start lg:ml-96 mr-16 ml-16 mb-12">
    <div
      class="relative group h-96 w-96 bg-white-300 rounded-lg overflow-hidden w-full sm:w-1/3 lg:w-1/4"
    >
      <!-- Content or Background -->
      <div class="absolute inset-0 flex items-center justify-center">
        <img
          :src="getImageUrl()"
          alt=""
          class="box-border w-full h-full opacity-70 rounded-lg border-2 border-teal-300"
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

    <div class="w-full lg:w-1/2 p-4">
      <div>
        <h1 class="text-lg text-left">
          {{ props.description }}
        </h1>
        <br />
        <h1 class="text-lg">Built with: {{ props.buildWith }}</h1>
        <br />
        <h1 class="text-lg">Year: {{ props.year }}</h1>
        <br />
        <h1 class="text-lg">Client: {{ props.client }}</h1>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
