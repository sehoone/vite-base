<!-- <template>
  <div>
    <slot></slot>
    <div v-for="(param, index) of params" :key="index">
      <v-text-field v-model="props.inputKey" :label="props.key" :placeholder="param.key"></v-text-field>
      <v-text-field v-model="props.inputValue" :label="props.value" :placeholder="param.value"></v-text-field>
    </div>
  </div>
</template>

<script setup lang="ts">
export type BridgeParams = {
  key: string;
  value: string;
  inputKey: string;
  inputValue: string;
};
const props = defineProps({
  params: {
    type: Array,
    defalut: () => [],
    required: true
  }
});

//let inputParams = reactive([]);
//return { inputParams };
</script>

<script lang="ts">
export default {
  name: 'sampleBrigdeParam',
  inheritAttrs: false,
  customOptions: {}
};
</script> -->
