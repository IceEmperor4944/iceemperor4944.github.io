<template>
  <!-- Hero -->
  <HeroSection />

  <!-- Featured Projects -->
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="section-title">Featured Work</h2>
      <div class="section-divider"></div>
      <div class="row g-4">
        <div class="col-md-4" v-for="project in featured" :key="project.id">
          <ProjectCard v-bind="project" />
        </div>
      </div>
      <div class="text-center mt-5">
        <RouterLink to="/portfolio" class="btn btn-primary btn-lg px-5">
          View All Projects
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- About Teaser -->
  <section class="py-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-5 text-center">
          <img
            src="https://placehold.co/400x400/0d0d1a/22d3ee?text=Photo"
            alt="Profile"
            class="rounded-circle shadow"
            style="width: 280px; height: 280px; object-fit: cover;"
          />
        </div>
        <div class="col-lg-7">
          <h2 class="section-title">A Little About Me</h2>
          <div class="section-divider"></div>
          <p class="text-muted fs-5 mb-4">
            I'm a game &amp; software developer who builds everything from custom engines
            to polished web tools. Specializing in C++ and Unity, I love tackling hard
            problems across systems programming, gameplay, and full-stack development.
          </p>
          <div class="d-flex flex-wrap gap-2 mb-4">
            <span class="badge fs-6 rounded-pill py-2 px-3 bg-dark">C++</span>
            <span class="badge fs-6 rounded-pill py-2 px-3 bg-dark">Unity</span>
            <span class="badge fs-6 rounded-pill py-2 px-3 bg-dark">Unreal</span>
            <span class="badge fs-6 rounded-pill py-2 px-3 bg-dark">C#</span>
          </div>
          <RouterLink to="/about" class="btn btn-outline-primary btn-lg px-4">
            Learn More About Me
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Banner -->
  <section class="py-5 stats-banner">
    <div class="container">
      <div class="row text-center text-white g-4">
        <div class="col-6 col-md-3" v-for="stat in stats" :key="stat.label">
          <div class="display-4 fw-bold">{{ stat.value }}</div>
          <div class="opacity-75">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'

interface Stat {
  value: string
  label: string
}

const featured = projects.slice(0, 3)

const stats: Stat[] = [
  { value: '3+',  label: 'Years Experience' },
  { value: '15+', label: 'Projects Built' },
  { value: '7+',  label: 'Languages Known' },
  { value: '10+', label: 'GitHub Repos' }
]
</script>
