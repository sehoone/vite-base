// $flex Device dummy setup
import { FlexResponeCode } from '@/utils/hybrid/type/index';
import type { UserAgentType } from '@/utils/hybrid/util/index';

// NativeToWeb interFace 구현부
export const UtilNativeToWeb: UserAgentType = {
  userAgent: () => {
    return {
      userAgnet: navigator.userAgent,
      response: {
        code: FlexResponeCode.OK,
        message: 'OK'
      }
    };
  }
  /* add function */
};
