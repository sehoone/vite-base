<template>
  <div class="home">
    <v-card>
      <v-card-text>
        <p><b>Im parent</b></p>
        <p>Im parent person1.name: {{ person3.name }}</p></v-card-text
      >
    </v-card>
    <props-child :person1="person3" :title></props-child>
    <v-btn color="primary" @click="handleClick">click parent btn</v-btn>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import PropsChild from '@/views/sample/PropsChild.vue';
import { type person1Model } from '@/service/sample/model/compositionModel';

const title = ref('제목!');
const person3: person1Model = reactive({
  name: 'sehoone1',
  age: 33,
  computedNameLength: computed((): number => person3.name.length) // computed예시.
});

const handleClick = () => {
  person3.name = person3.name + '!';
};
</script>

<script lang="ts">
export default {
  name: 'samplePropsParent',
  inheritAttrs: false,
  customOptions: {}
};
</script>
