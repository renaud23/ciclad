import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ciladeApi = createApi({
  reducerPath: 'cicladeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://somewhere' }),
  endpoints: (build) => ({
    getSomething: build.query<unknown, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetSomethingQuery } = ciladeApi
