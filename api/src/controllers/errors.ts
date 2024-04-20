import { HttpResponse } from './controller'

export function badRequest(error: Error): HttpResponse {
  return {
    body: {
      message: error.message,
    },
    status: 400,
  }
}

export function serverError(): HttpResponse {
  return {
    body: {
      message: 'Server error',
    },
    status: 400,
  }
}
