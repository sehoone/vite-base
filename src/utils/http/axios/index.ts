/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosResponse } from 'axios';
import type { RequestOptions, Result } from './types/axios';
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform';
import { BaseAxios } from './baseAxios';
import { RequestEnum, ContentTypeEnum } from './enum/httpEnum';
import { isString } from '@/utils/is';
import { deepMerge } from '@/utils';
import { formatRequestDate } from './helper';

/**
 * @description: AxiosTransform
 */
const transform: AxiosTransform = {
  /**
   * @description: transformRequestHook
   */
  transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { isReturnNativeResponse } = options;
    // 서버응답 그대로 처리
    if (isReturnNativeResponse) {
      return res;
    }

    const { data } = res;
    if (!data) {
      // return '[HTTP] Request has no return value';
    }

    const { head, body } = data;
    // TODO 실패 코드 응답 처리
    console.log('header resultCode' + head.resultCode);

    return body;
  },

  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, urlPrefix } = options;

    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`;
    }
    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`;
    }
    const params = config.params || {};
    const data = config.data || false;
    formatDate && data && !isString(data) && formatRequestDate(data);
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        config.params = Object.assign(params || {});
      } else {
        config.url = config.url + params;
        config.params = undefined;
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params);
        if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
          config.data = data;
          config.params = params;
        } else {
          config.data = params;
          config.params = undefined;
        }
        if (joinParamsToUrl) {
          /*
          config.url = setObjToUrlParams(
            config.url as string,
            Object.assign({}, config.params, config.data)
          );*/
        }
      } else {
        config.url = config.url + params;
        config.params = undefined;
      }
    }
    console.log('beforeRequestHook');
    return config;
  },

  /**
   * @description: requestInterceptors
   */
  requestInterceptors: (config) => {
    console.log('requestInterceptors start');
    console.log('requestInterceptors end');
    return config;
  },

  /**
   * @description: responseInterceptors
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    console.log('responseInterceptors start');
    console.log('responseInterceptors end');
    return res;
  },

  /**
   * @description: responseInterceptorsCatch
   */
  responseInterceptorsCatch: (error: any) => {
    console.log('responseInterceptorsCatch start' + error);
    // TODO 실패응답 처리 추가
  }
};

/**
 * @description: axios 생성
 */
function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new BaseAxios(
    deepMerge(
      {
        timeout: 10 * 1000,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        transform,
        baseURL: '/api',
        requestOptions: {
          joinPrefix: false,
          isReturnNativeResponse: false,
          isTransformResponse: true,
          joinParamsToUrl: false,
          formatDate: true,
          errorMessageMode: 'message',
          urlPrefix: 'api',
          joinTime: true,
          ignoreCancelToken: true
        }
      },
      opt || {}
    )
  );
}
/**
 * @description: defHttp
 * axios 디폴트 옵션으로 생성
 * ex. defHttp.get<HellowModel>({ url: Api.GetHellowWorld });
 */
export const defHttp = createAxios();

/**
 * @description: defHttpOpt
 * axios 커스텀 옵션으로 생성. 디폴트 설정에서 커스텀이 필요한 필드와 merge
 * ex. defHttpOpt({ timeout: 200 * 1000 }).get<HellowModel>({url: Api.GetHellowWorld,});
 */
export const defHttpOpt = (opt?: Partial<CreateAxiosOptions>): BaseAxios => createAxios(opt);
