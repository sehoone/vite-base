import type { CallBackFunction } from '.';

// NativeToWeb interFace 구현부
export const UtilNativeToWeb = {
  webViewBack: (func: CallBackFunction) => {
    window.dispatchEvent(new CustomEvent('webViewBack'));
    return {
      response: {
        code: 0,
        message: 'OK'
      }
    };
  },
  /* add function */
};
