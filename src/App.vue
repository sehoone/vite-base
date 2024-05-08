<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { logger } from './utils/logger';
import { EmulatorDevice } from './utils/hybrid/emulator/';
import { useRouter } from 'vue-router';
import { loadNativeToWebBridge } from './utils';

const router = useRouter();

onMounted(() => {
  logger.debug('mounted app');
  const environment = checkEnvironment();
  console.log('environment ', environment);
  if (environment === 'pc') {
    loadEmulWebToNativeBridge();
  }
  // load native to web bridge
  loadNativeToWebBridge();
  window.addEventListener('webViewBack', webViewBack);
});
onUnmounted(() => {
  logger.debug('unmounted app');
  window.removeEventListener('webViewBack', webViewBack);
});

// 개발용 브릿지 애뮬레이터 로드
function loadEmulWebToNativeBridge() {
  const emulatorBridge = { ...EmulatorDevice };
  Object.defineProperty(window, '$flex', { value: {}, writable: true, enumerable: true, configurable: true });
  if (typeof emulatorBridge === 'object') {
    Object.assign((window as any)['$flex'], emulatorBridge);
  }

  return (window as any)['$flex'];
}
function checkEnvironment() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (/tmonyGo/i.test(userAgent)) {
    return 'app';
  } else {
    return 'pc';
  }
  // if (/(android)/i.test(userAgent) || /iphone|ipad|ipod/i.test(userAgent)) {
  //     return 'app';
  // } else {
  //     return 'pc';
  // }
}
function webViewBack() {
  logger.debug('call webview back');
  if ('/sample/reactive' == router.currentRoute.value.path) {
    logger.debug('is last page');
  } else {
    router.back();
  }
}
</script>

<style scoped></style>
