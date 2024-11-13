<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1 class="title">Hello world</h1>
    Page: index
    <p>目前路由的路徑 - route.fullpath 為 : {{ route.fullPath }}</p>
  </div>
</template>

<style lang="scss">
$primary: blue;

h1 {
  color: $primary
}
</style>
