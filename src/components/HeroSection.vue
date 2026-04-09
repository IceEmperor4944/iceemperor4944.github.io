<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center py-5">
        <div class="col-lg-7">
          <p class="hero-eyebrow mb-3">&gt; init portfolio.exe</p>
          <h1>{{ title }}</h1>
          <p class="mt-3 mb-4">{{ subtitle }}</p>
          <div class="d-flex flex-wrap gap-3">
            <RouterLink to="/portfolio" class="btn btn-light btn-lg fw-semibold px-4">
              View My Work
            </RouterLink>
            <RouterLink to="/contact" class="btn btn-outline-light btn-lg fw-semibold px-4">
              Get In Touch
            </RouterLink>
          </div>
        </div>
        <div class="col-lg-5 d-none d-lg-flex justify-content-center mt-5 mt-lg-0">
          <div class="hero-terminal">
            <div class="terminal-header">
              <span class="terminal-dot dot-close"></span>
              <span class="terminal-dot dot-minimize"></span>
              <span class="terminal-dot dot-maximize"></span>
              <span class="terminal-title">nathan@portfolio:~</span>
            </div>
            <div class="terminal-body">
              <div class="terminal-line">
                <span class="terminal-prompt">$</span>
                <span class="terminal-cmd"> whoami</span>
              </div>
              <div class="terminal-output">Nathan Sears</div>
              <div class="terminal-line mt-2">
                <span class="terminal-prompt">$</span>
                <span class="terminal-cmd"> cat skills.txt</span>
              </div>
              <div class="terminal-output">C++ &middot; Unity &middot; Unreal Engine</div>
              <div class="terminal-output">C# &middot; TypeScript &middot; Python</div>
              <div class="terminal-line mt-2">
                <span class="terminal-prompt">$</span>
                <span class="terminal-cmd"> ls ./projects</span>
              </div>
              <div class="terminal-output">games/&nbsp; engines/&nbsp; web/&nbsp; tools/</div>
              <div class="terminal-line mt-2">
                <span class="terminal-prompt">$</span>
                <span class="terminal-cursor">&#9608;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title:    { type: String, default: 'Hi, I\'m Nathan.' },
  subtitle: { type: String, default: 'Game & Software Developer — I build engines, games, and full-stack tools.' }
})
</script>
