<template>
  <form @submit.prevent="handleSubmit" novalidate>
    <div v-if="submitted" class="alert alert-success d-flex align-items-center mb-4" role="alert">
      <i class="bi bi-check-circle-fill me-2 fs-5"></i>
      <span>Thanks for reaching out! I'll get back to you soon.</span>
    </div>

    <div class="row g-3">
      <div class="col-sm-6">
        <label for="name" class="form-label fw-semibold">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.name }"
          placeholder="Jane Smith"
        />
        <div class="invalid-feedback">Please enter your name.</div>
      </div>

      <div class="col-sm-6">
        <label for="email" class="form-label fw-semibold">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          placeholder="jane@example.com"
        />
        <div class="invalid-feedback">Please enter a valid email.</div>
      </div>

      <div class="col-12">
        <label for="subject" class="form-label fw-semibold">Subject</label>
        <input
          id="subject"
          v-model="form.subject"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.subject }"
          placeholder="Project inquiry"
        />
        <div class="invalid-feedback">Please enter a subject.</div>
      </div>

      <div class="col-12">
        <label for="message" class="form-label fw-semibold">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          class="form-control"
          :class="{ 'is-invalid': errors.message }"
          rows="5"
          placeholder="Tell me about your project..."
        ></textarea>
        <div class="invalid-feedback">Please enter a message.</div>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary px-5 py-2 fw-semibold">
          <i class="bi bi-send me-2"></i>Send Message
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const submitted = ref(false)

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: false, email: false, subject: false, message: false })

function handleSubmit() {
  errors.name    = !form.name.trim()
  errors.email   = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  errors.subject = !form.subject.trim()
  errors.message = !form.message.trim()

  if (Object.values(errors).some(Boolean)) return

  submitted.value = true
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
}
</script>
