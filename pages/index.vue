<script setup lang="ts">
const route = useRoute();

console.log(route)
</script>

<template>
  <div>
    Page: index
    <p>目前路由的路徑 - route.fullpath 為 : {{ route.fullPath }}</p>
  </div>
</template>

<style scoped></style>
