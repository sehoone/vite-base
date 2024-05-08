<template>
  <v-app>
    <sample-app-bar-layout />
    <v-main>
      <v-container>
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SampleAppBarLayout from './SampleAppBarLayout.vue';
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
