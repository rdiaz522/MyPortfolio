<script setup>
import Project from '@/components/Project.vue'
</script>
<template>
  <div class="lg:h-screen lg:w-screen mt-36 mb-36">
    <h1 class="flex justify-center text-2xl font-bold">MY WORK</h1>
    <h1 class="flex justify-center text-sm mb-16">
      Freelance projects i've worked on
    </h1>
    <!-- PAYROLL -->
    <Project
      imgSrc="Payroll.png"
      projectName="PAYROLL SYSTEM"
      projectType="WEB APPLICATION"
      description="The Sand & Gravel Payroll System it ensures accurate calculation of
            employee salaries, deductions, and benefits while reducing the time
            and effort required for manual payroll processing. The system
            features robust reporting tools, enabling businesses to generate
            detailed reports on payroll summaries, employee earnings, and more."
      buildWith="LARAVEL, VUE, MYSQL, BOOTSTRAP & JAVASCRIPT"
      year="2021"
      client="Sand & Gravel Supplier"
    />

    <!-- POS -->
    <Project
      imgSrc="POS.png"
      projectName="POINT OF SALE SYSTEM"
      projectType="WEB APPLICATION"
      description="The RCP Point of Sale System is designed to help businesses
            efficiently track and monitor sales performance, manage inventory
            stock in & out and Generate Reports. It also have a Cashier Portal
            for streamlined transactions, The cashier portal processing sales
            quickly and accurately with barcode scanner device, invocing reciept
            and improving customer service."
      buildWith="LARAVEL, VUE, MYSQL, BOOTSTRAP & JAVASCRIPT"
      year="2020"
      client="RCP Enterprises"
    />
  </div>
</template>
<style scoped></style>
