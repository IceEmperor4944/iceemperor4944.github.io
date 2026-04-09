<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <i class="bi bi-terminal me-2"></i>NSears.dev
      </RouterLink>

      <div class="d-flex align-items-center gap-2">
        <button
          class="btn theme-toggle-btn"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <i :class="isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
        </button>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto gap-1">
          <li class="nav-item" v-for="link in links" :key="link.to">
            <RouterLink
              class="nav-link px-3 py-2 rounded"
              active-class="active bg-primary"
              :to="link.to"
            >
              <i :class="`bi ${link.icon} me-1`"></i>{{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js'

const { isDark, toggleTheme } = useTheme()

const links = [
  { to: '/',          label: 'Home',      icon: 'bi-house'    },
  { to: '/about',     label: 'About',     icon: 'bi-person'   },
  { to: '/portfolio', label: 'Portfolio', icon: 'bi-grid'     },
  { to: '/contact',   label: 'Contact',   icon: 'bi-envelope' }
]
</script>
