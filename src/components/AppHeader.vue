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
        <div>   <!-- Logo Netflix -->
            <img :src="'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'" alt="Netflix logo">   
            <!-- Navigazione -->
            <ul class="list_margin">
                <li v-for="item in store.navGen"><a href="#">{{ item }}</a></li>
            </ul>
        </div>
        <div>
            <div>   <!-- Barra di ricerca -->
                <div v-if="!store.showSearch" @click="store.showSearch = true">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
                </div>
                    <!-- Form per la ricerca -->
                <div v-if="store.showSearch">
                <form @submit.prevent="$emit('search')">
                    <input type="text" name="search" id="bar" placeholder="Cerca un titolo" v-model="store.searchText">
                    <button type="button" @click="store.showSearch = false">Annulla</button>
                </form>
            </div>  <!-- Icone di profilo, notifiche e menu -->
                <ul class="search_nav">
                    <li class="icon_padding"><span>Profilo</span></li>
                    <li><font-awesome-icon icon="fa-solid fa-bell"/></li>
                    <li class="menu"><font-awesome-icon icon="fa-solid fa-bars"/></li>
                    <li class="icon_margin"><font-awesome-icon icon="fa-solid fa-caret-down"/></li>
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
        .list_margin{
            gap: 20px;
            margin-left: 50px;
            
        }
        #bar, button{
            border: none;
            padding: 10px;
            background-color: #000;
            color: #fff;
        }
        .search_nav{
            text-transform: uppercase;
            font-weight: 600;
            gap: 10px;
        }
        .icon_padding{
            padding: 0 10px;
        }
        .menu{
            margin-left: 10px;
        }
        .icon_margin{
            margin: 0 30px 0 0;
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
            
            a{
                text-decoration: none;
                font-weight: 500;
                font-size: 1.125rem;
                color: #000;
            }
        }
        }
        
    }
</style>