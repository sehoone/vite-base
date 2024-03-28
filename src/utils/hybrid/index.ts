// $flex dummy setup
import { $flex } from 'flex-hybrid-app-scripts';
import type { $FlexType } from '@/utils/hybrid/type/index';
import { UtilNativeToWeb } from '@/utils/hybrid/util/index';

/**
 * Native(App)와 통신을 위한 브릿지 추가
 * Native에서 WebView를 생성시 UserAgent에 sampleApp 문자열을 추가
 * Native에서 WebView를 생성시 script를 주입하여, window.$flex 객체를 생성해서 브릿지 통신시 사용
 * window.$flex: Native와 브릿지 통신으로 사용할 오브젝트
 * window.$flex.xxxx(): Web to Native 인터페이스
 * window.$flex.web:  Native to Web 인터페이스가 정의된 오브젝트
 * window.$flex.web.xxxx():  Native to Web 인터페이스
 * window.onload(): Native에서 스크립트 주입이 완료되면 실행되는 함수
 */
const flex = $flex as $FlexType;

//NativeToWeb 함수 추가
export const nativeToWeb = {
  ...UtilNativeToWeb
};

Object.assign(flex.web, nativeToWeb);

const isApp = navigator.userAgent.indexOf('sampleApp') > -1 ? true : false;

const flexDeviceReady = new Promise<$FlexType>((resolve) => {
  if (!isApp) {
    resolve(flex);
    return;
  }

  window.onFlexLoad = () => resolve(flex);
});

export default flexDeviceReady;
