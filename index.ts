export const HTTP_METHOD_ARRAY = [
    'CONNECT',
    'DELETE',
    'GET',
    'HEAD',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
    'TRACE'
] as const

export const HTTP_METHOD_OBJECT = {
    'CONNECT': 'CONNECT',
    'DELETE': 'DELETE',
    'GET': 'GET',
    'HEAD': 'HEAD',
    'OPTIONS': 'OPTIONS',
    'PATCH': 'PATCH',
    'POST': 'POST',
    'PUT': 'PUT',
    'TRACE': 'TRACE'
} as const

export const HTTP = HTTP_METHOD_ARRAY

export type HTTP = typeof HTTP_METHOD_ARRAY[number]




