<script>
import {store} from '../store'
    import MovieCard from './MovieCard.vue'; // Importa il componente MovieCard da './MovieCard.vue'
    export default {
        name: 'Main',
        components: {
            MovieCard
        },
        data() {
            return {    // Restituisce lo store come dato del componente
                store
            }
        }
    }
</script>

<template>
    <h1>Originali Netflix</h1>
    <div class="container">
        <!-- Per ogni oggetto nel array 'movies' dello store -->
        <div class="box" v-for="movie in store.movies">
            <!-- Mostra il componente MovieCard passando le proprietà dell'oggetto corrente -->
            <MovieCard      
                :img="movie.poster_path"
                :name="movie.title"
                :original="movie.original_title" 
                :language="movie.original_language" 
                :vote="movie.vote_average"
                :overview="movie.overview"
                />
        </div>
        <!-- Per ogni oggetto nel array 'tvSeries' dello store -->
        <div class="box" v-for="tv in store.tvSeries">
            <MovieCard  
                :img="tv.poster_path"
                :title= "tv.name"
                :original="tv.original_name" 
                :language="tv.original_language" 
                :vote="tv.vote_average"
                :overview="tv.overview"/>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    h1{
        margin: 30px 0 0 30px;
        text-transform: uppercase;
    }
    .container{
        display: flex;
        padding: 20px;
        overflow: scroll;
        .box{
            padding-left: .3125rem;
            
            img{
                max-height: 100%;
            }
        }
    }
</style>