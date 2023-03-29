<script>
import { store } from '../store';
    export default {
        name: 'Header',
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <header>
        <h1>Logo</h1>
        <form @submit.prevent="$emit('search')">
            <input type="text" name="search" id="bar" placeholder="Cerca un titolo" v-model="store.searchText">
            <button type="submit">Search</button>
        </form> 
        
    </header>
</template>

<style lang="scss" scoped>
    header{
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
</style>