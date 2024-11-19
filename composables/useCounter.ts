// composables/useCounter.ts
// import { ref } from 'vue';  <----- 因為有 Auto Imports ，所以不用 import ref 

export const useCounter = () => {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {
    count,
    increment,
    decrement
  };
}
