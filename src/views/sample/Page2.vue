<template>
  <span>
    <!-- Important: Multiple elements must be wrapped by one root element for transition to work -->
    <h1 ref="title"></h1>

    <section>
      Page 2 Body

      <div>
        <em>Note: This is enclosed in &lt;span&gt; to support transition</em>
      </div>
    </section>
  </span>
</template>

<script>
import useUtility from '@/composables/useUtility.js';

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
