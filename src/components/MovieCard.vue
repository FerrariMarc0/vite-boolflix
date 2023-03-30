<script>
import CountryFlag from 'vue-country-flag-next'
    export default {
        name: 'Movie Card',
        components: {
            CountryFlag
        },
        props: {
            title: String,
            name: String,
            original: String,
            language: String,
            vote: Number,
            img: String
        },
        computed: {
            movieFlag(){
                switch(this.language){
                    case 'en':
                        return 'gb';
                    case 'he':
                        return 'il';
                    case 'ko':
                        return 'kr';
                    case 'ja':
                        return 'jp';
                    default:
                        return this.language;
                }
            },
            movieVote(){
                return Math.ceil(this.vote / 2)
            }
        }
    }
</script>

<template>
    <article class="card_container">
        <div class="card_image">
            <img v-if="img" :src="'https://image.tmdb.org/t/p/w342' + img" :alt="title" />
        </div>
        <div class="card_content card_visible">
            <h1>Titolo: {{ name }} {{ title }}</h1>
            <h2>Titolo originale: {{original}}</h2>
            <h4>Lingua: <country-flag :country='movieFlag' size='normal'/></h4>
            <h5>Voto:
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in movieVote" class="star"/>
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - movieVote" />
            </h5>
        </div>
        
        
    </article>
</template>

<style lang="scss" scoped>
    .star{
        color: gold;
    }
    .card_container{
        position: relative;
    }
    .card_content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .card_visible{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        line-height: 1.875rem;
        font-size: small;
        background-color: rgba(0, 0, 0, 0.9);
        color: #fff;
        display: none;
    }
    .card_container:hover .card_visible {
    display: block;
}
</style>