<template>
  <button
    v-if="showButton"
    class="back-to-top"
    type="button"
    title="Back to top"
    aria-label="Back to top"
    @click="scrollToTop"
  >
    <img
      src="/images/B2T.png"
      alt="Back to top"
    />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 25px;
  bottom: 25px;

  width: 85px;
  height: 85px;

  padding: 0;
  border: none;
  background: transparent;

  cursor: pointer;
  z-index: 1000;

  opacity: 0.45;
  filter: blur(0.6px);

  transition:
    opacity 0.3s ease,
    filter 0.3s ease,
    transform 0.3s ease;
}

.back-to-top img {
  width: 100%;
  height: 100%;

  display: block;
  object-fit: contain;
}

.back-to-top:hover {
  opacity: 1;
  filter: blur(0);
  transform: translateY(-5px) scale(1.05);
}


/* MOBILE */
@media (max-width: 768px) {
  .back-to-top {
    width: 40px;
    height: 40px;

    right: 15px;
    bottom: 15px;
  }

  .back-to-top:active {
    opacity: 1;
    filter: blur(0);
    transform: translateY(-5px) scale(1.05);
  }
}


</style>