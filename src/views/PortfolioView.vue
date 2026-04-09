<template>
  <!-- Page Header -->
  <section class="py-5 page-header">
    <div class="container text-white text-center py-3">
      <h1 class="fw-bold display-5">Portfolio</h1>
      <p class="opacity-75 mb-0">Projects I've built and media from my work</p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <!-- Tabs -->
      <ul class="nav nav-tabs mb-4 border-bottom" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link fw-semibold"
            :class="{ active: activeTab === 'projects' }"
            @click="activeTab = 'projects'"
          >
            <i class="bi bi-grid me-2"></i>Projects
            <span class="badge bg-primary ms-2">{{ projects.length }}</span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link fw-semibold"
            :class="{ active: activeTab === 'media' }"
            @click="activeTab = 'media'"
          >
            <i class="bi bi-images me-2"></i>Media
            <span class="badge bg-primary ms-2">{{ mediaItems.length }}</span>
          </button>
        </li>
      </ul>

      <!-- Projects Tab -->
      <div v-if="activeTab === 'projects'">
        <!-- Filter chips -->
        <div class="d-flex flex-wrap gap-2 mb-4">
          <button
            v-for="tag in allTags"
            :key="tag"
            class="btn btn-sm rounded-pill"
            :class="activeFilter === tag ? 'btn-primary' : 'btn-outline-secondary'"
            @click="activeFilter = activeFilter === tag ? null : tag"
          >
            {{ tag }}
          </button>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="project in filteredProjects" :key="project.id">
            <ProjectCard v-bind="project" />
          </div>
        </div>

        <div v-if="filteredProjects.length === 0" class="text-center py-5 text-muted">
          <i class="bi bi-search fs-1 d-block mb-3"></i>
          No projects match the selected filter.
        </div>
      </div>

      <!-- Media Tab -->
      <div v-else-if="activeTab === 'media'">
        <!-- Media type filter -->
        <div class="d-flex flex-wrap gap-2 mb-4">
          <button
            v-for="t in ['all', 'image', 'video', 'embed']"
            :key="t"
            class="btn btn-sm rounded-pill"
            :class="mediaFilter === t ? 'btn-primary' : 'btn-outline-secondary'"
            @click="mediaFilter = t"
          >
            <i :class="`bi ${mediaIcons[t]} me-1`"></i>{{ t === 'all' ? 'All' : t.charAt(0).toUpperCase() + t.slice(1) }}
          </button>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="item in filteredMedia" :key="item.id">
            <MediaCard v-bind="item" />
          </div>
        </div>

        <div v-if="filteredMedia.length === 0" class="text-center py-5 text-muted">
          <i class="bi bi-images fs-1 d-block mb-3"></i>
          No media items of this type yet.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import MediaCard from '@/components/MediaCard.vue'
import { projects } from '@/data/projects.js'
import { mediaItems } from '@/data/mediaItems.js'

const activeTab    = ref('projects')
const activeFilter = ref(null)
const mediaFilter  = ref('all')

const allTags = computed(() => {
  const tags = projects.flatMap(p => p.tags)
  return [...new Set(tags)].sort()
})

const filteredProjects = computed(() =>
  activeFilter.value
    ? projects.filter(p => p.tags.includes(activeFilter.value))
    : projects
)

const filteredMedia = computed(() =>
  mediaFilter.value === 'all'
    ? mediaItems
    : mediaItems.filter(m => m.type === mediaFilter.value)
)

const mediaIcons = {
  all:   'bi-collection',
  image: 'bi-image',
  video: 'bi-play-circle',
  embed: 'bi-youtube'
}
</script>
