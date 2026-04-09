<template>
  <div>
    <NavBar />
    <main>
      <RouterView />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import { useTheme } from '@/composables/useTheme.js'
useTheme() // initialize theme from localStorage on app load
</script>
