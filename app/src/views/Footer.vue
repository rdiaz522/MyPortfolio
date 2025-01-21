<script setup>
const date = new Date()
</script>
<style scoped></style>
<template>
  <div class="w-full bg-teal-300 p-5">
    <div
      class="flex flex-row ml-20 mr-20 xsm:ml-4 xsm:mr-4 xsm:mr-12 md:max-lg:ml-40 md:max-lg:mr-40 lg:max-xl:ml-52 lg:max-xl:mr-52 xl:max-2xl:ml-72 xl:max-2xl:mr-72 2xl:ml-96 2xl:mr-96"
    >
      <div class="pt-10 pb-10 text-black" ref="footer">
        <h1>
          © {{ date.getFullYear() }} Ron Arnie Diaz. All rights reserved.
        </h1>
      </div>
    </div>
  </div>
</template>
