export declare const HTTP_METHOD_ARRAY: readonly ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
export declare const HTTP_METHOD_OBJECT: {
    readonly CONNECT: "CONNECT";
    readonly DELETE: "DELETE";
    readonly GET: "GET";
    readonly HEAD: "HEAD";
    readonly OPTIONS: "OPTIONS";
    readonly PATCH: "PATCH";
    readonly POST: "POST";
    readonly PUT: "PUT";
    readonly TRACE: "TRACE";
};
export declare const HTTP: readonly ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
export declare type HTTP = typeof HTTP_METHOD_ARRAY[number];
