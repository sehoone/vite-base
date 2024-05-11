<template>
  <v-app>
    <sample-app-bar-layout />
    <v-main>
      <v-container>
        <!-- vue transition 효과는 부모에 router view에 넣어야됨. 부모의 부모면은 동작안함. 그리고 적용될 화면은 하나의 root div가 필요함-->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SampleAppBarLayout from './SampleAppBarLayout.vue';
</script>

<style scoped>
/* .slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
} */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
