<template>
  <div class="container mt-4">
    <h1>Countries Cases</h1>
    <p>The data will be updated automatically in {{time}}s..</p>
    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-auto">
      <input
        type="text"
        class="form-control form-control-borderless"
        v-debounce:300ms="debounceData"
        placeholder="Search country..."
      />
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-dark table-hover table-borderless mt-4">
        <thead class="thead-light">
          <tr>
            <th>Country</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Actives</th>
            <th>Cases Today</th>
            <th>Deaths Today</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(country, index) in filteredData" :key="index">
            <td>{{country.country_name}}</td>
            <td>{{country.cases}}</td>
            <td>{{country.deaths}}</td>
            <td>{{country.total_recovered}}</td>
            <td>{{country.active_cases}}</td>
            <td>{{country.new_cases}}</td>
            <td>{{country.new_deaths}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Coronavirus } from "@/http-common.js"

export default {
  data() {
    return {
      data: [],
      search: null,
      time: 60,
      isRunning: false,
      interval: null
    }
  },
  computed: {
    filteredData() {
      if (this.search) {
        return this.data.filter(country => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every(s => country.country_name.toLowerCase().includes(s))
        })
      } else
        return this.data
    },
  },
  methods: {
    async getData() {
      try {
        const response = await Coronavirus.get(`cases_by_country.php`)
        this.data = response.data.countries_stat
        this.time = 60
      } catch (error) {
        console.error(error)
        this.time = 60
      }
    },
    intervalFetchData() {
      setInterval(() => {
        this.getData()
      }, 60000)
    },
    toggleTimer() {
      if (this.isRunning) {
        clearInterval(this.interval)
      } else
        this.interval = setInterval(this.decrementTime, 1000)
      this.isRunning = !this.isRunning
    },
    decrementTime() {
      this.time = parseInt(this.time) - 1
    },
    debounceData(str) {
      this.search = str
      this.filteredData
    }
  },
  mounted() {
    this.getData()
    this.toggleTimer()
    this.intervalFetchData()
  }
}
</script>

<style scoped>
.form-control-borderless:hover,
.form-control-borderless:active,
.form-control-borderless:focus {
  outline: none;
  box-shadow: none;
}
</style>
