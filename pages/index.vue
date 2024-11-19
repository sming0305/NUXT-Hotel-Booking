<script setup>
const route = useRoute();

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const { newsList, isLoading, getNewsList } = useHome()

// API 路徑 : https://nuxr3.zeabur.app/api/v1/home/news/
// 使用 ES6 fetch() 或是 axios.get() 串接 API
// 切換 isLoading 狀態
// 在 pages/index.vue 使用 ES6 fetch 或是 axios 串接前台 最新消息 API ( GET ) ，將資料寫入 newsList 並且切換 Loading 元件開啟、關閉的狀態。
// 將 newsList 資料在 <NewsCard /> 以 v-for 渲染卡片，並將 props 傳入<NewsCard /> 元件
// 將資料和 API 的方法移至 composables/useHome.js ，改成使用 composable 引入方法與資料
getNewsList();
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

    <!-- Day 5 - 使用指令建立 Composables -->

    <div class="container">
      <h1>最新消息</h1>
      <!-- <NewsCard v-for="..." :key="..."  v-bind="..." /> -->

      <NewsCard v-for="news in newsList" :_id="news._id" :title="news.title" :image="news.image"
        :description="news.description" :createdAt="news.createdAt" :updatedAt="news.updatedAt"></NewsCard>

      <ClientOnly>
        <Loading v-model:active="isLoading" />
      </ClientOnly>
    </div>

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
