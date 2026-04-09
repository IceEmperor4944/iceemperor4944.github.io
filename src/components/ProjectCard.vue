<template>
  <div class="card h-100">
    <img :src="imageUrl" :alt="title" class="card-img-top" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title fw-bold">{{ title }}</h5>
      <p class="card-text text-muted flex-grow-1">{{ description }}</p>
      <div class="d-flex flex-wrap gap-1 mb-3">
        <span
          v-for="tag in tags"
          :key="tag"
          class="badge rounded-pill tag-badge"
        >
          {{ tag }}
        </span>
      </div>
      <div class="d-flex gap-2">
        <a
          v-if="liveUrl"
          :href="liveUrl"
          target="_blank"
          class="btn btn-primary btn-sm"
        >
          <i class="bi bi-box-arrow-up-right me-1"></i>Live Demo
        </a>
        <a
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          class="btn btn-outline-secondary btn-sm"
        >
          <i class="bi bi-github me-1"></i>Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
  imageUrl?: string
  tags?: string[]
  liveUrl?: string
  repoUrl?: string
}
withDefaults(defineProps<Props>(), {
  description: '',
  imageUrl: 'https://placehold.co/600x300/6c63ff/ffffff?text=Project',
  tags: () => [],
  liveUrl: '',
  repoUrl: ''
})
</script>
