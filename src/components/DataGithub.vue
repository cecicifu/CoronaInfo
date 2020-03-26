<template>
  <div class="mt-4 mb-4">
    <div class="bg-light pt-4 pb-4">
      <span class="lead">Updates</span>
      <div class="row mt-2" v-for="(item, index) in data" :key="index">
        <div class="col-lg-5 text-right font-weight-bold">
          <span>{{item.commit.message}}</span>
        </div>
        <div class="col-lg-3 font-italic">
          <span>{{formatDate[index]}}</span>
        </div>
        <div class="col-lg-4">
          <span class="badge badge-primary badge-square">SHA: {{item.sha}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GITHUB } from "@/http-common.js"

export default {
  data() {
    return {
      data: [],
      error: null
    }
  },
  computed: {
    formatDate() {
      return this.data.map((item) => {
        return ((item.commit.committer.date).substr(0, 10))
      })
    }
  },
  methods: {
    async getData() {
      try {
        const response = await GITHUB.get(`commits?sha=dev`)
        this.data = response.data.splice(0, 5)
      } catch (error) {
        this.error = error
      }
    }
  },
  mounted() {
    this.getData()
  }
}
</script>