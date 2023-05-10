import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userDataType } from "../interface/userDataType";
const BASE_URL =
  "https://test-react-5cd74-default-rtdb.firebaseio.com/users.json";

export const exampleApi = createApi({
  reducerPath: "exampleApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getExampleData: builder.query<userDataType[], number>({
      query: (pageNo) => {
        if (pageNo > 5) {
          pageNo = 5;
        }
        return `?orderBy="id"&startAt=${
          (pageNo == null ? 0 : pageNo - 1) * 10
        }&limitToFirst=10`;
      },
    }),
  }),
});

export const { useGetExampleDataQuery } = exampleApi;
