import {reactive} from "vue";

export const store = reactive({
    movies: [],
    tvSeries: [],
    searchText: '',
    navGen: ['Home', 'Serie TV', 'Film', 'Originali', 'Aggiunti di recente', 'La mia lista'],
    config: {
        urlMovies: 'https://api.themoviedb.org/3/trending/movie/week?',
        urlSeries: 'https://api.themoviedb.org/3/trending/tv/week?',
        apiKey: 'api_key=5adcd134eb7fa6e79d60ffe6d8f08f2b'
    }
})