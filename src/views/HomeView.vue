<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import SideNav from '@/components/SideNav.vue'
</script>

<template>
  <div class="row g-0">
    <div class="col-auto">
      <SideNav />
    </div>
    <div class="col">
      <NavBar />
      <RouterView />
    </div>
  </div>
</template>
