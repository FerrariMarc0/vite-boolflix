<script>
    export default {
        name: 'Movie Card',
        props: {
            name: String,
            original: String,
            language: String,
            vote: Number
        }
    }
</script>

<template>
    <article>
        <h1>Titolo: {{ name }}</h1>
        <h2>Titolo originale: {{original}}</h2>
        <h3>Lingua: {{language}}</h3>
        <h4>Voto: {{vote}}</h4>
    </article>
</template>

<style lang="scss" scoped>
    
</style>