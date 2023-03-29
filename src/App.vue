<script>
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  export default{
    name: 'app',
    components: {
      AppHeader,
      AppMain
    }
  }
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>
