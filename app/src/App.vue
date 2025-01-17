<script setup>
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Skills from './views/Skills.vue'
import Header from './views/Header.vue'
</script>

<template>
  <Header></Header>
  <Home></Home>
  <hr class="border-2 border-teal-300 margin-left-right" />
  <Projects></Projects>
  <hr class="border-2 border-teal-300 margin-left-right" />
  <Skills></Skills>
  <router-view></router-view>
</template>

<style scoped></style>
