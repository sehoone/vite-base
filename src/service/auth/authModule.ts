import { defineStore } from 'pinia';

import { httpAuth } from '@/service/auth/authService';
import type { AuthInterface } from '@/service/auth/model/authModel';

interface authState {
  authInfo: AuthInterface;
  isLodingAuthInfo: boolean;
  isDoneAuthInfo: boolean;
  errorAuthInfo: string | null;
}

export const authInfoInit = {
  userId: '',
  name: '',
  lv: 0,
  token: '' // 토큰
};

export const useAuthStore = defineStore({
  id: 'auth-store',

  state: (): authState => ({
    authInfo: authInfoInit,
    isLodingAuthInfo: false,
    isDoneAuthInfo: false,
    errorAuthInfo: null
  }),

  getters: {
    getIsLogin(): boolean {
      if (this.authInfo.token.length > 1) {
        return true;
      }
      return false;
    },
    getToken(): string {
      return this.authInfo.token;
    }
  },
  actions: {
    async actionHttpAuth(fdata: any) {
      localStorage.removeItem('TOKEN');
      this.authInfo = authInfoInit;
      this.isLodingAuthInfo = true;
      this.isDoneAuthInfo = false;
      this.errorAuthInfo = null;
      try {
        const res = await httpAuth(fdata);
        this.authInfo = res;
        localStorage.setItem('TOKEN', this.authInfo.token);
        this.isLodingAuthInfo = false;
        this.isDoneAuthInfo = true;
        return res;
      } catch (error) {
        this.isLodingAuthInfo = false;
        this.isDoneAuthInfo = false;
        this.errorAuthInfo = '에러가 발생했습니다. #1';
        return await Promise.reject(error);
      }
    },

    actionLogout() {
      localStorage.removeItem('TOKEN');
      this.authInfo = authInfoInit;
      this.isLodingAuthInfo = false;
      this.isDoneAuthInfo = true;
      this.errorAuthInfo = null;
    }
  }
});
