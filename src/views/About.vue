<template>
  <div class="mt-4">
    <InfoAbout />
    <DataGithub />
  </div>
</template>

<script>
import DataGithub from '@/components/DataGithub.vue'
import InfoAbout from '@/components/InfoAbout.vue'

export default {
  components: {
    DataGithub,
    InfoAbout
  }
}
</script>