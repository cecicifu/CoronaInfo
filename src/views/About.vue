<template>
  <div class="container mt-4">
    <div class="mt-4">
      <h1 class="mb-4">ABOUT</h1>
      <p class="lead">Web application developed to provide information to everyone about COVID-19</p>
      <p class="lead">
        Report an issue:
        <a href="mailto:unknowpy@protonmail.com">unknowpy@protonmail.com</a>
      </p>
      <a href="https://github.com/cecicifu/" target="_blank">
        <i class="fab fa-github fa-5x svg-inline--fa"></i>
      </a>
    </div>
    <DataGithub />
  </div>
</template>

<script>
import DataGithub from '@/components/DataGithub.vue'

export default {
  components: {
    DataGithub
  }
}
</script>