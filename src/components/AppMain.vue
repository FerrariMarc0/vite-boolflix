<script>
import axios from 'axios';
    import MovieCard from './MovieCard.vue';
    export default {
        name: 'Main',
        components: {
            MovieCard
        },
        data() {
            return {
                movies: []
            }
        },
        created(){
            axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=5adcd134eb7fa6e79d60ffe6d8f08f2b').then((response) =>{
                console.log(response);
                this.movies = response.data.results;
            })
        }
    }
</script>

<template>
    <ul v-for="movie in movies">
        <MovieCard/>
    </ul>
    
</template>

<style lang="scss" scoped>

</style>