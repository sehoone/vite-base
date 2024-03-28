// $flex Device dummy setup
import type { FlexRespone } from '@/utils/hybrid/type/index';

// WebtoNative request, reponse type 정의
export type AlertRequest = {
  title: string;
  message: string;
  buttons: Array<string>;
};

export type AlertResponse = {
  selected: number;
} & FlexRespone;

// WebToNative interFace 정의
export default interface FlexUtil {
  alert: (param: AlertRequest) => Promise<AlertResponse>;
  /* add fucntion */
}

// NativeToWeb request, response type 정의
export type UserAgentResponse = {
  userAgnet: string;
} & FlexRespone;

export type UserAgentType = {
  userAgent(): UserAgentResponse;
  /* add function */
};

// NativeToWeb export
export { UtilNativeToWeb } from './nativeToWeb';
