<script>
import {store} from '../store'
    import MovieCard from './MovieCard.vue';
    export default {
        name: 'Main',
        components: {
            MovieCard
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <h1>Originali Netflix</h1>
    <div class="container">
        
        <div class="box" v-for="movie in store.movies">
            <MovieCard
                :img="movie.poster_path"
                :name="movie.title"
                :original="movie.original_title" 
                :language="movie.original_language" 
                :vote="movie.vote_average"/>
        </div>

        <div class="box" v-for="tv in store.tvSeries">
            <MovieCard
                :img="tv.poster_path"
                :title= "tv.name"
                :original="tv.original_name" 
                :language="tv.original_language" 
                :vote="tv.vote_average"/>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    h1{
        margin: 30px 0 0 30px;
    }
    .container{
        display: flex;
        padding: 20px;
        overflow: scroll;
        .box{
            flex-basis: calc(100% / 5);
            padding: 10px;
            
        }
    }

</style>