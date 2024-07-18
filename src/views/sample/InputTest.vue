<template>
  <div>
    <v-card>
      <div @click="onClickCallKeypad">
        <v-text-field
          label="Label1"
          v-model="inputValue"
          @blur="onClickCloseKeypad()"
          @input="handleInput(1)"
          @focus="handleFocus($event)"
          ref="input1"
        ></v-text-field>
        <v-text-field
          label="Label2"
          v-model="inputValue"
          @blur="onClickCloseKeypad()"
          @input="handleInput(2)"
          @focus="handleFocus($event)"
          ref="input2"
        ></v-text-field>
        <v-text-field
          label="Label3"
          v-model="inputValue"
          @blur="onClickCloseKeypad()"
          @input="handleInput(3)"
          @focus="handleFocus($event)"
          ref="input3"
        ></v-text-field>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';

const inputValue = ref('');
const input1 = ref();
const input2 = ref();
const input3 = ref();
const onClickCallKeypad = () => {
  // console.log('Keypad is Call');
};

const programmaticFocusChange = ref(false);

const onClickCloseKeypad = () => {
  // 포커스 변경이 프로그래밍 방식으로 발생하는 경우를 처리
  if (programmaticFocusChange.value) {
    programmaticFocusChange.value = false; // 상태를 초기화하고 핸들러 실행을 건너뜁니다.
    return;
  }
  // console.log('Keypad is close');
};
const handleInput = (inputNumber: number) => {
  // 입력 값에 따라 다음 입력 필드로 포커스 이동
  if (inputValue.value.length >= 3 && inputNumber === 1) {
    programmaticFocusChange.value = true;
    input2.value.focus();
  } else if (inputValue.value.length >= 6 && inputNumber === 2) {
    programmaticFocusChange.value = true;
    input3.value.focus();
  }
};
const handleFocus = async (event: FocusEvent) => {
  // 포커스 이동이 프로그래밍 방식으로 발생하는 경우를 처리
  await nextTick(); // DOM 업데이트를 기다림. 이 부분이 없으면 포커스가 변경되지 않음
  if (event.target instanceof HTMLElement) {
    event.target.blur();
  }
};
</script>

<style scoped></style>
