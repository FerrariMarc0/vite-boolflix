<script>
import { store } from '../store';
import MovieCard from './MovieCard.vue';
    export default {
        name: 'Header',
        components: {
            MovieCard
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <header>
        <div>
            <img :src="'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'" alt="Netflix logo">
            <ul>
                <li v-for="item in store.navGen"><a href="#">{{ item }}</a></li>
            </ul>
        </div>
        <div>
            <div>
                <div v-if="!store.showSearch" @click="store.showSearch = true">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
                </div>

                <div v-if="store.showSearch">
                <form @submit.prevent="$emit('search')">
                    <input type="text" name="search" id="bar" placeholder="Cerca un titolo" v-model="store.searchText">
                    <button type="button" @click="store.showSearch = false">Annulla</button>
                </form>
            </div>
                <ul class="search_nav">
                    <li><span>Profilo</span></li>
                    <li><font-awesome-icon icon="fa-solid fa-bell"/></li>
                    <li><font-awesome-icon icon="fa-solid fa-bars"/></li>
                    <li><font-awesome-icon icon="fa-solid fa-caret-down"/></li>
                </ul>
            </div>
            
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        .search_nav{
            gap: 20px;
            padding-right: 1.875rem;
            text-transform: uppercase;
            font-weight: 600;
        }
        div{
            display: flex;
            align-items: center;
            img{
                width: 20%;
            }
            ul{
            display: flex;
            list-style: none;
            gap: .625rem;
            margin-left: 3.125rem;
            a{
                text-decoration: none;
                font-weight: 600;
            }
        }
        }
        
    }
</style>