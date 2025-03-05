<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>

<nav v-if="route.path!=='/login'" class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" exact-active-class="active">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about"   class="nav-link" exact-active-class="active">About</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink to="/contact"  class="nav-link"  exact-active-class="active">Contact</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink to="/login"  class="nav-link"  exact-active-class="active">Login</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink to="/Dashboard"  class="nav-link"  exact-active-class="active">Dashboard</RouterLink>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

  
  <RouterView></RouterView>
</template>

<style scoped>

</style>
