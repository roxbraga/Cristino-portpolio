<template>
  <div class="project-card">
    <img :src="image" :alt="title" class="project-img">
    <div class="p-4">
      <h5 class="text-yellow">{{ title }}</h5>
      <p class="text-secondary small">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>
