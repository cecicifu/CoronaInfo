<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand bg-dark navbar-dark">
      <span class="navbar-brand">#CoronaInfo</span>
      <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/world" class="nav-link"><i class="fas fa-globe"></i> World</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/countries" class="nav-link"><i class="fas fa-flag"></i> Countries</router-link>
          </li>
          <!--<li class="nav-item">
            <router-link to="/stats" class="nav-link"><i class="fas fa-chart-line"></i> Stats</router-link>
          </li>-->
          <li class="nav-item">
            <router-link to="/about" class="nav-link"><i class="fas fa-question-circle"></i> About</router-link>
          </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>