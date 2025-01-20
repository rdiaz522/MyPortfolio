<script setup>
import Tools from '@/components/Tools.vue'
</script>
<template>
  <div class="h-full mt-36 mb-36">
    <h1 class="flex justify-center mb-12 text-2xl font-bold">SKILLS</h1>

    <div
      class="flex flex-wrap xl:gap-8 gap-10 justify-start ml-20 mr-20 md:max-lg:ml-40 md:max-lg:mr-40 lg:max-xl:ml-52 lg:max-xl:mr-52 xl:max-2xl:ml-72 xl:max-2xl:mr-72 2xl:ml-96 2xl:mr-96"
    >
      <div
        class="w-full xl:w-[29%] 2xl:w-[31%] p-5 dark:bg-white bg-gray-200 border-2 border-teal-300 rounded-lg"
      >
        <h1 class="flex flex-col p-5 text-lg dark:text-black">FRONTEND</h1>

        <Tools
          label="Vue"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
        />
        <Tools
          label="Angular"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
        />
        <Tools
          label="Javascript"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />
        <Tools
          label="Tailwind CSS"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        />
        <Tools
          label="Bootstrap"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
        />
        <Tools
          label="jQuery"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
        />
      </div>
      <div
        class="w-full xl:w-[29%] 2xl:w-[31%] p-5 dark:bg-white bg-gray-200 border-2 border-teal-300 rounded-lg"
      >
        <h1 class="flex flex-col p-5 text-lg dark:text-black">BACKEND</h1>
        <Tools
          label="Laravel"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
        />
        <Tools
          label="PHP"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
        />
        <Tools
          label="MySQL"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
        />
        <Tools
          label="PostgreSQL"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        />
      </div>
      <div
        class="w-full xl:w-[29%] 2xl:w-[31%] p-5 dark:bg-white bg-gray-200 border-2 border-teal-300 rounded-lg"
      >
        <h1 class="flex flex-col p-5 text-lg dark:text-black">DEV TOOLS</h1>
        <Tools
          label="Git + Github"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        />
        <Tools
          label="Docker"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        />
        <Tools
          label="Vagrant"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vagrant/vagrant-original.svg"
        />
        <Tools
          label="Vite"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
        />
        <Tools
          label="Postman"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
        />
        <Tools
          label="VS Code"
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
