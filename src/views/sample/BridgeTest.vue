<template>
  <div>
    <p>web to native. name: deviceInfo</p>
    <p>deviceInfoRequest = { "requstId": "requstId2"; };</p>
    <p>
      deviceInfoResponse = {"osCd":"A","uuId":"TEST_UUID","requstId":"requstId0","response":{"code":0,"message":"OK"}};
    </p>
    <p>native to web. name: webViewBack</p>
    <p>webViewBack</p>
    <p>webViewBackResponse = {"response":{"code":0,"message":"OK"}};</p>
    <br />
    <v-btn color="primary" @click="callWebToNative">click call web to native bridge "deviceInfo"</v-btn>

    <p>response</p>
    <v-textarea label="Description" placeholder="Enter some text..." v-model="responseBridge"></v-textarea>
  </div>
</template>

<script setup lang="ts">
import { getAppBridge } from '@/utils';
import type AppBridge from '@/utils/hybrid';
import { onMounted, ref } from 'vue';
import { type DeviceInfoRequest } from '@/utils/hybrid/device/device.type';

const responseBridge = ref('');
const requstCount = ref(0);
const createdRequstId = ref('');

let appBridge: AppBridge;
onMounted(async () => {
  appBridge = await getAppBridge();
  console.log('appBridge ', appBridge);
});

const callWebToNative = async () => {
  const deviceInfoParam = {
    requstId: 'requstId' + requstCount.value
  } as DeviceInfoRequest;

  const data = await appBridge.deviceInfo(deviceInfoParam);
  responseBridge.value = JSON.stringify(data);
  requstCount.value = requstCount.value + 1;
  createdRequstId.value = deviceInfoParam.requstId;
};
</script>

<style scoped></style>
