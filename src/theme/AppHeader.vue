<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <router-link to="/" exact>
        <img src="http://bit.ly/vue-img"
          alt="Vue SPA" />
      </router-link>
      <router-link class="navbar-item is-tab"
      to="/" exact>Home</router-link>
      <router-link class="navbar-item is-tab"
      to="/card">Card</router-link>
    </div>
  </nav>
</template>
