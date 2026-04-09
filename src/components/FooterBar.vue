<template>
  <footer class="py-4 mt-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <span class="footer-brand">NSears.dev</span>
          <span class="ms-2">&copy; {{ year }} All rights reserved.</span>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <a href="https://github.com" target="_blank" class="me-3 fs-5" aria-label="GitHub">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="me-3 fs-5" aria-label="LinkedIn">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="fs-5" aria-label="Twitter">
            <i class="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
const year = computed(() => new Date().getFullYear())
</script>
