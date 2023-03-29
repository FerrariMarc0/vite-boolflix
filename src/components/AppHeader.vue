<script>
    export default {
        name: 'Header'
    }
</script>

<template>
    <header>
        <h1>Logo</h1>
        <form>
            <input type="search" name="search" id="bar">
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