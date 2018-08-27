<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <router-link to="/" exact>
        <img style="width:48px;" src="https://toppng.com/public/uploads/preview/weather-icon-11530957523kyheyffhqd.png"
          alt="Vue SPA" />
      </router-link>
      <router-link class="navbar-item is-tab"
      to="/" exact>Home</router-link>
      <router-link class="navbar-item is-tab"
      to="/card?id=1">Card</router-link>
    </div>
  </nav>
</template>
