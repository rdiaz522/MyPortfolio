<script setup>
defineProps({
  imgSrc: {
    type: String,
    default: '',
  },
  imgType: {
    type: String,
    default: 'img',
  },
  label: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
})
</script>
<style scoped></style>
<template>
  <div class="flex flex-row p-5">
    <div v-if="imgType === 'img'">
      <img class="h-10 w-10" :src="imgSrc" />
    </div>
    <div v-if="imgType === 'svg'">
      <slot></slot>
    </div>
    <div class="pl-3 pt-2">
      <a :href="url" target="_blank">
        <h1 class="text-lg text-teal-700 dark:text-teal-300">{{ label }}</h1></a
      >
    </div>
  </div>
</template>
