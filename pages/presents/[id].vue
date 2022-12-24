<template>
  <Navigation />
  <PresentItem :presentId="{ id }" />
  <Footer />
</template>

<script setup>
const route = useRoute()
let id = route.params.id
</script>
