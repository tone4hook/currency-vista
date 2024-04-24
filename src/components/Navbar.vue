<template>
  <nav class="navbar navbar-expand-sm bg-primary" data-bs-theme="dark">
    <div class="container">
      <div class="d-flex justify-content-between w-100">
        <a class="navbar-brand fs-6" href="#">
          <img
            src="../assets/c-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Currency <small class="fw-bold">Vista</small>
        </a>
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            v-on:click="isCollapsed = !isCollapsed"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            :class="{ show: isCollapsed }"
            id="navbarCollapse"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/converter"
                  >Converter</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/dictionary"
                  >Dictionary</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isCollapsed = ref(false);
</script>
