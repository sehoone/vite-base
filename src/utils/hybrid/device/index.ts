// $flex Device dummy setup
import type { FlexRespone } from '@/utils/hybrid/type/index';

// WebToNative request, reponse type 정의
export type DeviceInfoResponse = {
  appVersion: string;
  uuid: string;
} & FlexRespone;

// WebToNative interface 정의
export default interface FlexDevice {
  deviceInfo: () => Promise<DeviceInfoResponse>;
  /* add function */
}
