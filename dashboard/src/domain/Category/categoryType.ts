export type GetAllCategoriesRequestParams = {
  page?: number,
  perPage?: number
}

type CategoryDataType = {
  name: string
  status: boolean
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
