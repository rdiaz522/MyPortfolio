<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  imgSrc: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: 'dark:text-black',
  },
})
</script>

<style scoped></style>

<template>
  <div class="flex flex-col p-5">
    <div class="relative p-2.5">
      <h1 :class="['pl-10', labelClass]">{{ label }}</h1>
      <div class="absolute inset-1">
        <img class="h-10 w-10" :src="imgSrc" />
      </div>
    </div>
  </div>
</template>
