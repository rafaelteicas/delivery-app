export type GetAllCategoriesRequestParams = {
  page?: number
  perPage?: number
}

type CategoryDataType = {
  id: string
  name: string
  status: boolean
  image: string
  createdAt: Date
  updatedAt: Date
}

export type CategoryResponseDataType = {
  categories: {
    data: CategoryDataType[]
    metadata: {
      page: number
      perPage: number
      total: number
    }
  }
}
