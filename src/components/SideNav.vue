<script setup lang="ts">
import { RouterLink, } from 'vue-router'
</script>

<template>
    <div class="sidebar shadow-sm border-right px-4">
        <nav class="navbar sticky-top bg-white border-body navbar-expand-lg" data-bs-theme="light">
            <div class="container">
                <RouterLink class="navbar-brand" to="#">Navbar</RouterLink>
            </div>
        </nav>
        <nav class="nav flex-column nav-pills">
            <RouterLink class="nav-link" to="/" exact-active-class="active">
                <i class="bi bi-columns-gap me-2"></i>
                Dashboard
            </RouterLink>
            <RouterLink class="nav-link" to="/orders" active-class="active">
                <i class="bi bi-box-seam me-2"></i>
                Orders
            </RouterLink>
            <RouterLink class="nav-link" to="/products" active-class="active">
                <i class="bi bi-pc-display me-2"></i>
                Products
            </RouterLink>
            <RouterLink class="nav-link" to="/categories" active-class="active">
                <i class="bi bi-diagram-3 me-2"></i>
                Categories
            </RouterLink>
            <RouterLink class="nav-link" to="/users" active-class="active">
                <i class="bi bi-people me-2"></i>
                Users
            </RouterLink>
        </nav>
    </div>
</template>

<style scoped>
.sidebar {
    width: 260px;
    height: 100vh;
    background: #fff;

    .nav-link {
        color: #495057;

        &.active {
            color: #fff;
            background-color: #495057;
        }
    }
}
</style>
