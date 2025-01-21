<script setup>
import Accordion from '@/components/Accordion.vue'
const techUsed1 = [
  'Laravel',
  'Vue',
  'Angular',
  'Vagrant',
  'VM',
  'Github',
  'CI/CD',
  'DevOps',
]

const techUsed2 = ['Vanilla PHP', 'Javascript', 'jQuery', 'Bootstrap CSS']
</script>

<style scoped></style>

<template>
  <div class="h-full mt-36 mb-36">
    <h1 class="flex justify-center text-2xl font-bold">EXPERIENCE</h1>
    <Accordion
      title="Software Engineer @DEVTAC CRM Inc."
      description="Build and maintaining large web application, collaborating with
              other teams to ensure seamless integration, identifying future
              bugs and issues, preparing solutions estimate for new features and
              projects. Conducting code reviews with other developers."
      year="2021 - 2024"
      url="//devtac.com"
      url-name="devtac.com"
      :tech-used="techUsed1"
    />
    <Accordion
      title="Web Developer Internship @City Social Welfare and Development Office"
      description="Assist and Implementing new features & debuging existing errors. Optimizing existing codebase for the performance of the web application. Managing Documents of the Project & Perform Testing for Deployment"
      year="2020"
      url="//tacloban.gov.ph/city-social-welfare-and-development-office/.com"
      url-name="CSWDO-Tacloban.gov.ph"
      :tech-used="techUsed2"
    />
  </div>
</template>
