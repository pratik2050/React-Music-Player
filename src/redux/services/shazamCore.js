import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shaadfvadvzam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'af5e87187emsheedca087f36adc4p17c14ejsnecdf450bffdb');

            return headers;
        }
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' })
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;