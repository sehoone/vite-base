import type { $Flex, FlexInterfaces } from 'flex-hybrid-app-scripts';
import type FlexDevice from '@/utils/hybrid/device';
import { type UserAgentType } from '@/utils/hybrid/util';
import type FlexUtil from '@/utils/hybrid/util';

export enum FlexResponeCode {
  OK,
  FAIL
}

export type FlexResponeHeader = {
  code: FlexResponeCode;
  message: string;
};

export type FlexRespone = {
  response: FlexResponeHeader;
};

export type $FlexWebType = FlexInterfaces & UserAgentType;

export interface $FlexType extends $Flex, FlexDevice, FlexUtil {
  web: $FlexWebType;
}

declare global {
  interface Window {
    onFlexLoad: () => void;
  }
}
