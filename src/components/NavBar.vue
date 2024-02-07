<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar sticky-top bg-white border-bottom border-body navbar-expand-lg" data-bs-theme="light">
    <div class="container-fluid">
      <!-- <RouterLink class="navbar-brand" to="/">Navbar</RouterLink> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <div class="col-8">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
        <div class="col-auto ms-auto">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <!-- <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/" active-class="active">Home</RouterLink>
          </li> -->

            <li class="nav-item">
              <RouterLink class="nav-link" to="/login" active-class="active">Login</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <RouterLink class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </RouterLink>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="dropdown-item" to="#">Action</RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="#">Another action</RouterLink>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="#">Something else here</RouterLink>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.dropdown-menu {
  right: 0;
  left: auto;
}
</style>
