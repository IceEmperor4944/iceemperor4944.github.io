<template>
  <!-- Page Header -->
  <section class="py-5 page-header">
    <div class="container text-white text-center py-3">
      <h1 class="fw-bold display-5">Get In Touch</h1>
      <p class="opacity-75 mb-0">Let's talk about your next project</p>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row g-5">
        <!-- Contact Info -->
        <div class="col-lg-4">
          <h4 class="fw-bold mb-4">Contact Information</h4>

          <div class="contact-info-item" v-for="info in contactInfo" :key="info.label">
            <div class="icon-wrap">
              <i :class="`bi ${info.icon} fs-5`"></i>
            </div>
            <div>
              <div class="small text-muted fw-semibold text-uppercase">{{ info.label }}</div>
              <div class="fw-semibold">{{ info.value }}</div>
            </div>
          </div>

          <hr class="my-4" />

          <h5 class="fw-bold mb-3">Follow Me</h5>
          <div class="d-flex gap-3">
            <a v-for="social in socials" :key="social.label"
               :href="social.address"
               class="btn btn-outline-secondary rounded-circle p-2"
               style="width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;"
               :aria-label="social.label"
            >
              <i :class="`bi ${social.icon}`"></i>
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-lg-8">
          <div class="card p-4 p-md-5">
            <h4 class="fw-bold mb-4">Send a Message</h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'

interface ContactInfo {
  label: string
  icon: string
  value: string
}

interface Social {
  label: string
  icon: string
  address: string
}

const contactInfo: ContactInfo[] = [
  { label: 'Email',    icon: 'bi-envelope',    value: 'nsears@mdavenport.com' },
  { label: 'Location', icon: 'bi-geo-alt',     value: 'Salt Lake City, UT, USA' },
  { label: 'Phone',    icon: 'bi-telephone',   value: '+1 (970) 903-4627' },
  { label: 'Working',  icon: 'bi-clock',       value: 'Mon – Fri, 9am – 5pm EST' }
]

const socials: Social[] = [
  { label: 'GitHub',   icon: 'bi-github',      address: 'https://github.com/IceEmperor4944' },
  { label: 'LinkedIn', icon: 'bi-linkedin',    address: 'https://www.linkedin.com/in/nathan-m-sears/' },
  { label: 'Twitter',  icon: 'bi-twitter-x',   address: 'blah.com/me' },
  { label: 'Dribbble', icon: 'bi-dribbble',    address: 'blah.com/me' }
]
</script>
