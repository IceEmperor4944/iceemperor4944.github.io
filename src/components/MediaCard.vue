<template>
  <div class="card media-card h-100">
    <!-- Image -->
    <template v-if="type === 'image'">
      <img :src="src" :alt="title" class="card-img-top" style="height: 220px; object-fit: cover;" />
    </template>

    <!-- Video -->
    <template v-else-if="type === 'video'">
      <div class="ratio ratio-16x9">
        <video controls :src="src" class="rounded-top">
          Your browser does not support the video element.
        </video>
      </div>
    </template>

    <!-- Embed (YouTube / Vimeo / etc.) -->
    <template v-else-if="type === 'embed'">
      <div class="ratio ratio-16x9">
        <iframe
          :src="src"
          :title="title"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          class="rounded-top"
          frameborder="0"
        ></iframe>
      </div>
    </template>

    <div class="card-body">
      <h6 class="card-title fw-semibold mb-1">{{ title }}</h6>
      <p v-if="caption" class="card-text text-muted small mb-0">{{ caption }}</p>
      <span class="badge mt-2" :class="typeBadgeClass">
        <i :class="`bi ${typeIcon} me-1`"></i>{{ type }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MediaType } from '@/data/mediaItems'

interface Props {
  type?: MediaType
  src: string
  title?: string
  caption?: string
}
const props = withDefaults(defineProps<Props>(), {
  type: 'image',
  title: 'Media',
  caption: ''
})

const typeIcon = computed<string>(() => {
  const icons: Record<MediaType, string> = {
    image: 'bi-image',
    video: 'bi-play-circle',
    embed: 'bi-youtube'
  }
  return icons[props.type]
})

const typeBadgeClass = computed<string>(() => {
  const classes: Record<MediaType, string> = {
    image: 'bg-success',
    video: 'bg-info text-dark',
    embed: 'bg-danger'
  }
  return classes[props.type]
})
</script>
