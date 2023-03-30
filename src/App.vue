<script>
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
      search(){
        console.log('inviato');
        console.log(this.store.searchText);
        axios.get('https://api.themoviedb.org/3/search/multi?api_key=5adcd134eb7fa6e79d60ffe6d8f08f2b&language=it_IT', {
          params: {
            query: store.searchText
          }
        }).then((response) =>{
        console.log(response);
        this.store.movies = response.data.results.filter(result => result.media_type === 'movie');
        this.store.tvSeries = response.data.results.filter(result => result.media_type === 'tv');
      })
      }
    },
    created(){
      this.search();
    }
  }
</script>

<template>
  <AppHeader @search="search"/>
  <AppMain />
</template>
