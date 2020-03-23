<template>
  <div class="container mt-4">
    <h1>Countries Cases</h1>
    <p>The data will be updated automatically in {{time}}s..</p>
    <div v-if="error && error.length">
      <p>
        {{error}}
      </p>
    </div>
    <div v-else>
      <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-auto">
        <input type="text" class="form-control form-control-borderless" v-model="search" placeholder="Search country ..." autofocus>
      </div>
      <div class="table-responsive"> 
        <table class="table table-striped table-dark table-hover table-borderless mt-4">  
          <thead class="thead-light">
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Critical</th>
              <th>Cases Today</th>
              <th>Deaths Today</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(country, index) in filteredCountries" :key="index">
              <td>{{country.country_name}}</td>
              <td>{{country.cases}}</td>
              <td>{{country.deaths}}</td>
              <td>{{country.total_recovered}}</td>
              <td>{{country.serious_critical}}</td>
              <td>{{country.new_cases}}</td>
              <td>{{country.new_deaths}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { headers } from '../main.js'

  export default {
    data () {
      return {
        countries: [],
        search: '',
        error: '',
        time: 60,
        isRunning: false,
        interval: null
      }
    },
    computed: {
      filteredCountries() {
        if(this.search) {
          return this.countries.filter((country) => {
            return this.search.toLowerCase().split(' ').every(s => country.country_name.toLowerCase().includes(s))
          })
        } else {
          return this.countries
        }
      }
    },
    methods: {
      APICall () {
        this.$http.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', headers)
        .then(response => {
          this.countries = response.data.countries_stat
          this.time = 60
        })
        .catch(error => {
          this.error = error
        })
      },
      intervalFetchData () {
        setInterval(() => {
          this.APICall()
        }, 60000)
      },
      toggleTimer () {
        if (this.isRunning) {
          clearInterval(this.interval);
        } else {
          this.interval = setInterval(this.decrementTime, 1000);
        }
        this.isRunning = !this.isRunning
      },
      decrementTime () {
        this.time = parseInt(this.time) - 1;
      }
    },
    created () {
      this.APICall()
      this.toggleTimer()
      this.intervalFetchData()
    }
  }
</script>

<style scoped>
  .form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus{
    outline: none;
    box-shadow: none;
  }
</style>
