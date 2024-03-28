export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

// 요청 처리 옵션
export interface RequestOptions {
  // Splicing request parameters to url
  joinParamsToUrl?: boolean;
  // Format request parameter time
  formatDate?: boolean;
  // Whether to process the request result
  isTransformResponse?: boolean;
  // Whether to return native response headers
  // For example: use this attribute when you need to get the response headers
  isReturnNativeResponse?: boolean;
  // Whether to join url
  joinPrefix?: boolean;
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?: string;
  // URL prefix
  urlPrefix?: string;
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode;
  // Whether to add a timestamp
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  // Whether to send token in header
  withToken?: boolean;
}

// API response HEAD. http의 header가 아님. request 의 성공/실패코드 및 메세지
export interface head {
  resultCode: string;
  resultMessage: string;
}

// API response
export interface Result<T = unknown> {
  body: T;
  head: head;
}
