import { defHttp } from '@/utils/http/axios';

import type { AuthInterface } from '@/service/auth/model/authModel';

enum Api {
  auth = '/auth'
}

/**
 * @description: httpAuth
 */
export const httpAuth = async (data: any): Promise<AuthInterface> => {
  return defHttp.post({
    url: Api.auth,
    data: {
      data
    }
  });
};
