import { ref, computed } from "vue";

export default function (initialValue: number) {
  const count = ref<number>(initialValue);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {
    count,
    increment,
    decrement,
    doubleCount,
  };
}
