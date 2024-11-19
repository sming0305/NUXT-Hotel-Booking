import axios from "axios";

export const useHome = () => {

  const newsList = ref([]);
  const isLoading = ref(false);

  async function getNewsList() {
    try {
      isLoading.value = true
      const res = await axios.get('https://nuxr3.zeabur.app/api/v1/home/news/')
      newsList.value = res.data.result
      isLoading.value = false
      console.log(newsList.value)
    } catch (err) {
      isLoading.value = false
      console.log(err)
      alert('取得資料失敗')
    }
  }

  return {
    newsList,
    isLoading,
    getNewsList
  }

}
