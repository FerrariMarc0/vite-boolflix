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
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=5adcd134eb7fa6e79d60ffe6d8f08f2b', {
          params: {
            query: store.searchText
          }
        }).then((response) =>{
        console.log(response);
        this.store.movies = response.data.results;
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
