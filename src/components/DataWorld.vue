<template>
  <div class="container mt-4">
    <h1>World Cases</h1>
    <p>The data will be updated automatically in {{time}}s..</p>
    <div v-if="error && error.length">
      <p>
        {{error}}
      </p>
    </div>
    <div v-else class="row justify-content-center">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
        <div class="card border-top-primary shadow-sm h-100">
            <div class="card-body">
                <h5 class="text-muted mb-4">Cases</h5>
                <div class="d-flex justify-content-center">
                    <div class="metric-value">
                        <h1 class="font-weight-bold">{{world.total_cases}}</h1>
                    </div>
                    <!--<div class="metric-label text-success font-weight-bold align-self-center">
                        <span class="icon-shape icon-xs rounded-circle text-success bg-success-light"><i class="fa fa-fw fa-arrow-up"></i></span><span class="ml-1">5.86%</span>
                    </div>-->
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
        <div class="card border-top-primary shadow-sm h-100">
            <div class="card-body">
                <h5 class="text-muted mb-4">Deaths</h5>
                <div class="d-flex justify-content-center">
                    <div class="metric-value">
                        <h1 class="font-weight-bold">{{world.total_deaths}}</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
        <div class="card border-top-primary shadow-sm h-100">
            <div class="card-body">
                <h5 class="text-muted mb-4">Recovered</h5>
                <div class="d-flex justify-content-center">
                    <div class="metric-value">
                        <h1 class="font-weight-bold">{{world.total_recovered}}</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
        <div class="card border-top-primary shadow-sm h-100">
            <div class="card-body">
                <h5 class="text-muted mb-4">Cases Today</h5>
                <div class="d-flex justify-content-center">
                    <div class="metric-value">
                        <h1 class="font-weight-bold">{{world.new_cases}}</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
        <div class="card border-top-primary shadow-sm h-100">
            <div class="card-body">
                <h5 class="text-muted mb-4">Deaths Today</h5>
                <div class="d-flex justify-content-center">
                    <div class="metric-value">
                        <h1 class="font-weight-bold">{{world.new_deaths}}</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-12">
          <twitter>
            <div slot="loading"><i class="fas fa-spinner fa-spin fa-5x"></i><br/><br/>Loading...</div>
            <a class="twitter-timeline" href="https://twitter.com/nytimes"></a>
          </twitter>
        </div>
    </div>
  </div>
</template>

<script>
  import { headers } from '@/main.js'

  export default {
    data () {
      return {
        world: {},
        error: '',
        time: 60,
        isRunning: false,
        interval: null
      }
    },
    methods: {
      APICall () {
        this.$http.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php', headers)
        .then(response => {
          this.world = response.data
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
    mounted () {
      this.APICall()
      this.toggleTimer()
      this.intervalFetchData()
    }
  }
</script>
