<script setup>
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Skills from './views/Skills.vue'
import Header from './views/Header.vue'
import Contact from './views/Contact.vue'
import Footer from './views/Footer.vue'
import Experience from './views/Experience.vue'
</script>

<template>
  <Header></Header>
  <Home></Home>
  <hr
    class="border-2 border-teal-300 ml-20 mr-20 xsm:ml-12 xsm:mr-12 md:max-lg:ml-32 md:max-lg:mr-32 lg:max-xl:ml-52 lg:max-xl:mr-52 xl:max-2xl:ml-72 xl:max-2xl:mr-72 2xl:ml-96 2xl:mr-96"
  />
  <Experience />

  <Projects></Projects>
  <hr
    class="border-2 border-teal-300 ml-20 mr-20 xsm:ml-12 xsm:mr-12 md:max-lg:ml-40 md:max-lg:mr-40 lg:max-xl:ml-52 lg:max-xl:mr-52 xl:max-2xl:ml-72 xl:max-2xl:mr-72 2xl:ml-96 2xl:mr-96"
  />
  <Skills></Skills>
  <hr
    class="border-2 border-teal-300 ml-20 mr-20 xsm:ml-12 xsm:mr-12 md:max-lg:ml-40 md:max-lg:mr-40 lg:max-xl:ml-52 lg:max-xl:mr-52 xl:max-2xl:ml-72 xl:max-2xl:mr-72 2xl:ml-96 2xl:mr-96"
  />
  <Contact />

  <Footer />
  <router-view></router-view>
</template>

<style scoped>
html,
body {
  scroll-behavior: smooth !important;
}
</style>
