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

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type:    { type: String, default: 'image' }, // 'image' | 'video' | 'embed'
  src:     { type: String, required: true },
  title:   { type: String, default: 'Media' },
  caption: { type: String, default: '' }
})

const typeIcon = computed(() => ({
  image: 'bi-image',
  video: 'bi-play-circle',
  embed: 'bi-youtube'
}[props.type] ?? 'bi-file-earmark'))

const typeBadgeClass = computed(() => ({
  image: 'bg-success',
  video: 'bg-info text-dark',
  embed: 'bg-danger'
}[props.type] ?? 'bg-secondary'))
</script>
