<template>
  <div>
    <span>
      <!-- Important: Multiple elements must be wrapped by one root element for transition to work -->
      <h1 ref="title"></h1>

      <section>
        Page 2 Body
        <div key="note1" class="fade-in-left">
          <em>Note: This is enclosed in &lt;span&gt; to support transition</em>
        </div>
        <div key="note2" class="fade-in-left">
          <em>Note: This is enclosed in &lt;span&gt; to support transition</em>
        </div>
        <div key="note3" class="fade-in-left">
          <em>Note: This is enclosed in &lt;span&gt; to support transition</em>
        </div>
        <div key="note4" class="fade-in-left">
          <em>Note: This is enclosed in &lt;span&gt; to support transition</em>
        </div>
      </section>
    </span>
  </div>
</template>

<script>
import useUtility from '@/composables/useUtility';

export default {
  setup() {
    // === Composables ===
    const utility = useUtility(import.meta);

    return {
      utility
    };
  },
  mounted() {
    console.log(`[${this.utility.currentFileName}::mounted()] Starting...`);

    this.$refs.title.innerText = this.$options.__file.split('/').pop();
  }
};
</script>

<style scoped>
@keyframes slideInLeft {
  0% {
    transform: translateX(-20%);
    visibility: hidden;
  }
  1% {
    visibility: visible;
  }
  100% {
    transform: translateX(0);
    visibility: visible;
  }
}

.fade-in-left {
  animation: slideInLeft 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  visibility: hidden;
}

.fade-in-left:nth-child(1) {
  animation-delay: 0s;
}

.fade-in-left:nth-child(2) {
  animation-delay: 0.1s;
}

.fade-in-left:nth-child(3) {
  animation-delay: 0.2s;
}

.fade-in-left:nth-child(4) {
  animation-delay: 0.3s;
}
</style>
