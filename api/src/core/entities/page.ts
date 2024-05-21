export type Page<T> = {
  data: T
  metadata: {
    page: number
    perPage: number
    total: number
  }
}
