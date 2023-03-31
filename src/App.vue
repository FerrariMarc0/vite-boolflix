<script>  // Import delle dipendenze necessarie
  import axios from 'axios'
  import { store } from './store';
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  export default{
    name: 'BoolFlix',
    components: {
      AppHeader,
      AppMain
    },
    data(){
      return {
        store
      }
    },
    methods: {
      search(){ // Metodo per effettuare la ricerca dei film e serie TV tramite l'API di The Movie DB
        
          axios.get('https://api.themoviedb.org/3/search/multi?api_key=5adcd134eb7fa6e79d60ffe6d8f08f2b&language=it_IT', {
            params: {
              query: store.searchText
            }
          }).then((response) =>{
        
        // Filtraggio dei risultati in base al tipo di media (film o serie TV)
        this.store.movies = response.data.results.filter(result => result.media_type === 'movie');
        this.store.tvSeries = response.data.results.filter(result => result.media_type === 'tv');
      })
      }
    },
    // Metodo eseguito al momento della creazione del componente
    created(){
      this.search();
    }
  }
</script>

<template>  <!-- collegamento ai componenti AppHeader e AppMain -->
  <AppHeader @search="search"/> 
  <AppMain />
</template>
