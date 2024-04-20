export interface HttpRequest {
  body: any
}

export interface HttpResponse {
  body: any
  status: number
}

export interface Controller {
  handler: (request: HttpRequest) => Promise<HttpResponse>
}
