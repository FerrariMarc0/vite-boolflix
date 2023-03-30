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
            vote: Number
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
    <article>
        <h1>Titolo: {{ name }} {{ title }}</h1>
        <h2>Titolo originale: {{original}}</h2>
        <h4>Lingua: <country-flag :country='movieFlag' size='normal'/></h4>
        <h5>Voto:
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in movieVote"/>
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - movieVote" />
        </h5>
        
    </article>
</template>