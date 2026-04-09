<template>
  <!-- Page Header -->
  <section class="py-5 page-header">
    <div class="container text-white text-center py-3">
      <h1 class="fw-bold display-5">About Me</h1>
      <p class="opacity-75 mb-0">Game Designer, Programmer, Musician</p>
    </div>
  </section>

  <!-- Bio Section -->
  <section class="py-5">
    <div class="container">
      <div class="row align-items-start g-5">
        <div class="col-lg-4 text-center">
          <img src="https://placehold.co/400x400/6c63ff/ffffff?text=Photo" alt="Profile Photo"
            class="profile-img shadow mb-4" />
          <h4 class="fw-bold mb-1">Nathan Sears</h4>
          <p class="text-muted mb-3">Game & Software Developer</p>
          <div class="d-flex justify-content-center gap-3 fs-4">
            <a href="https://github.com/IceEmperor4944" class="text-secondary"><i class="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/nathan-m-sears/" class="text-secondary"><i
                class="bi bi-linkedin"></i></a>
            <a href="blah.com/me" class="text-secondary"><i class="bi bi-twitter-x"></i></a>
          </div>
          <hr />
          <a href="src\assets\files\NSearsResume_Newest.pdf" download="NSears_Resume.pdf"
            class="btn btn-primary w-100 mt-2">
            <i class="bi bi-download me-2"></i>Download Resume
          </a>
        </div>

        <div class="col-lg-8">
          <h2 class="section-title">Hello, World!</h2> <!-- Potentially change text later -->
          <div class="section-divider"></div>
          <p class="text-muted fs-5 mb-4">
            I'm a game &amp; software developer with a focus on systems programming and
            interactive experiences. I build everything from custom C++ game engines to
            full-stack web tools — bridging low-level performance with practical
            application development.
          </p>
          <p class="text-muted mb-4">
            I also <i>love</i> music, both experienceing and creating. I have been playing
            the violin for ~12 years, and can use many other instruments as well. I find
            music to be an important part of my lifestyle, one I could hardly live without.
          </p>

          <!-- Skills -->
          <h4 class="fw-bold mb-3">Skills</h4>
          <div class="row g-3 mb-4">
            <div class="col-12" v-for="group in skillGroups" :key="group.label">
              <div class="d-flex align-items-center gap-2 flex-wrap">
                <span class="fw-semibold text-muted" style="min-width: 110px;">{{ group.label }}</span>
                <span v-for="skill in group.skills" :key="skill" class="badge rounded-pill py-2 px-3 skill-badge">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience & Education -->
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row g-5">
        <!-- Experience -->
        <div class="col-lg-6">
          <h3 class="fw-bold mb-4">
            <i class="bi bi-briefcase me-2 text-primary"></i>Experience
          </h3>
          <div class="timeline-item pb-4" v-for="job in experience" :key="job.company">
            <div class="d-flex justify-content-between align-items-start mb-1">
              <h6 class="fw-bold mb-0">{{ job.role }}</h6>
              <span class="badge bg-light text-secondary border">{{ job.period }}</span>
            </div>
            <div class="text-primary fw-semibold mb-1">{{ job.company }}</div>
            <p class="text-muted small mb-0">{{ job.description }}</p>
          </div>
        </div>

        <!-- Education -->
        <div class="col-lg-6">
          <h3 class="fw-bold mb-4">
            <i class="bi bi-mortarboard me-2 text-primary"></i>Education
          </h3>
          <div class="timeline-item pb-4" v-for="edu in education" :key="edu.school">
            <div class="d-flex justify-content-between align-items-start mb-1">
              <h6 class="fw-bold mb-0">{{ edu.degree }}</h6>
              <span class="badge bg-light text-secondary border">{{ edu.period }}</span>
            </div>
            <div class="text-primary fw-semibold mb-1">{{ edu.school }}</div>
            <p class="text-muted small mb-0">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SkillGroup {
  label: string
  skills: string[]
}

interface Job {
  role: string
  company: string
  period: string
  description: string
}

interface Education {
  degree: string
  school: string
  period: string
  description: string
}

const skillGroups: SkillGroup[] = [
  { label: 'Game Engines', skills: ['Custom C++', 'Unity', 'Unreal'] },
  { label: 'Languages', skills: ['C/C++', 'C#', 'TypeScript', 'PHP', 'Python', 'JavaScript', 'Java'] },
  { label: 'Frameworks', skills: ['Vue.js', 'Nuxt.js', 'React', 'Laravel'] },
  //{ label: 'Databases',     skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
  //{ label: 'DevOps',        skills: ['Docker', 'GitHub Actions', 'AWS', 'Nginx'] }
]

const experience: Job[] = [
  {
    role: 'Game Developer - Intern',
    company: 'DSD Laboratories',
    period: '2026 – Present',
    description: 'Design and create several small games for use in the company\'s LMS with Unity and Laravel.'
  },
  {
    role: 'Full-Stack Developer - Intern',
    company: 'Salt Lake City Weekly',
    period: '2026 – 2026',
    description: 'Program using Typescript, React, and Redux for the StellaMart mobile app.'
  }
]

const education: Education[] = [
  {
    degree: 'B.Sc. Software & Game Development',
    school: 'Neumont University',
    period: '2023 – 2026',
    description: 'Graduated with significant project & industry experience.'
  }
]
</script>
