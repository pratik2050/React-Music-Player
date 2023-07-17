import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'af5e87187emsheedca087f36adc4p17c14ejsnecdf450bffdb');

            return headers;
        }
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
        getArtist: builder.query({ query: ({ artistId }) => `/artists/get-details?id=${artistId}` }),
        getTopArtists: builder.query({ query: () => `/songs/list-artist-top-tracks?id=40008598&locale=en-US` }),
        getAround: builder.query({ query: () => `/songs/list-recommendations?key=484129036&locale=en-US` }),
        getBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}&locale=en-US&offset=0&limit=5` }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetArtistQuery,
    useGetTopArtistsQuery,
    useGetAroundQuery,
    useGetBySearchQuery,
} = shazamCoreApi;