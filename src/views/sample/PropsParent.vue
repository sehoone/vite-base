<template>
  <div class="home">
    <v-card>
      <v-card-text>
        <p><b>Im parent</b></p>
        <p>Im parent person1.name: {{ person1.name }}</p></v-card-text
      >
    </v-card>
    <props-child :person1="person1"></props-child>
    <v-btn color="primary" @click="handleClick">click parent btn</v-btn>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import PropsChild from '@/views/sample/PropsChild.vue';
import { type person1Model } from '@/service/sample/model/compositionModel';

let person1: person1Model = reactive({
  name: 'sehoone1',
  age: 33,
  computedNameLength: computed((): number => person1.name.length) // computed예시.
});

const handleClick = () => {
  person1.name = person1.name + '!';
};
</script>

<script lang="ts">
export default {
  name: 'samplePropsParent',
  inheritAttrs: false,
  customOptions: {}
};
</script>
