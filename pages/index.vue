<script setup>
const route = useRoute();
</script>

<template>
  <div>
    <!-- Day 1 - 起手式 : 建立 Nuxt3 專案  -->
    <h1 class="title">Hello world</h1>
    Page: index
    <p>目前路由的路徑 - route.fullpath 為 : {{ route.fullPath }}</p>


    <!-- Day 2 - Nuxt3 專案引入 CSS 樣式 -->
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>

    <!-- Day 4 - 使用指令建立元件 -->
    <p>Day 4 - 使用指令建立元件</p>
    <ProductCard
      :imageSrc="'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png'"
      :altText="'尊爵雙人房'" :title="'尊爵雙人房'" :price="'NT$10000'" :buttonText="'馬上預約'"></ProductCard>

  </div>
</template>

<style lang="scss">
$primary: blue;

// 在 Nuxt.config.ts 設定全域共用 bootstrap5 的 SCSS 變數，這邊就可以直接使用  vite.css.preprocessorOptions.scss 內引入的 @import "bootstrap/scss/functions"; 
// 以及 @import "bootstrap/scss/variables"; 內的變數了
h1 {
  color: $indigo
}
</style>
