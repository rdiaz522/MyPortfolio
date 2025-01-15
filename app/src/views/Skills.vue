<script setup></script>
<template>
  <div class="h-screen w-screen">
    <h1 class="flex justify-center lg:mb-12 text-white text-lg font-bold">
      SKILLS
    </h1>

    <div
      class="flex flex-wrap lg:gap-10 gap-5 lg:justify-start lg:ml-96 lg:mr-96 mr-16 ml-16"
    >
      <div class="w-full lg:w-1/4 p-4 bg-white border rounded-lg">
        <div class="flex flex-col p-5 text-lg">FRONTEND</div>
        <div class="flex flex-col p-5 border-1 border-black">
          <div class="relative">
            Vue
            <div class="absolute">
              <svg class="h-5 w-5" viewBox="0 0 128 128">
                <path
                  d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
                  fill="none"
                ></path>
                <path
                  d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z"
                  fill="#35495e"
                ></path>
                <path
                  d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z"
                  fill="#41b883"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex flex-col p-5">Angular</div>
        <div class="flex flex-col p-5">Javascript</div>
        <div class="flex flex-col p-5">Tailwind CSS</div>
        <div class="flex flex-col p-5">jQuery</div>
      </div>
      <div class="w-full lg:w-1/4 p-4 border bg-white rounded-lg">
        <div class="flex flex-col p-5 text-lg">BACKEND</div>
        <div class="flex flex-col p-5">Laravel</div>
        <div class="flex flex-col p-5">PHP</div>
        <div class="flex flex-col p-5">MySQL</div>
        <div class="flex flex-col p-5">PostgeSQL</div>
      </div>
      <div class="w-full lg:w-1/4 p-4 border bg-white rounded-lg">
        <div class="flex flex-col p-5 text-lg">DEV TOOLS</div>
        <div class="flex flex-col p-5">Git</div>
        <div class="flex flex-col p-5">Docker</div>
        <div class="flex flex-col p-5">Vite</div>
        <div class="flex flex-col p-5">Vagrant</div>
        <div class="flex flex-col p-5">VS Code</div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
