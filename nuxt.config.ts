// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate 屬性 : 將 Nuxt3 的功能和行為鎖定在 2024-04-03 之前的版本，
  // 避免之後 Nuxt3 新版本的寫法調整會影響到目前專案的運作
  compatibilityDate: "2024-04-03",
  // 啟用 Nuxt DevTools 開發工具
  devtools: { enabled: true },
  // 假設 all.scss 文件中引入了自訂的 Bootstrap 配置、字體和基礎樣式，這些設定會在應用啟動後自動生效，您不需要再手動將 all.scss 引入到每個頁面或元件。
  css: ["@/assets/stylesheets/all.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 在 Nuxt.config.ts 設定全域共用 bootstrap5 的 SCSS 變數 ，並且可以直接使用在 .vue 檔案內的 <style></style>
          // 使用了 vite.css.preprocessorOptions.scss.additionalData 設置，這可以讓所有 SCSS 文件（如元件內的樣式）在編譯前自動包含 _variables.scss。
          additionalData: `
          @import "bootstrap/scss/functions"; 
          @import "bootstrap/scss/variables";
          @import "@/assets/stylesheets/_variables.scss"; `, // 在全部的元件都引入 _variables.scss
        },
      },
    },
  },
  router: {
    options: {
      // linkActiveClass: "active",
      linkExactActiveClass: "active",
    },
  },
});

// css 屬性將 all.scss 全域加載。
// additionalData 避免在每個 SCSS 文件中重複引入變數。
