<template>
  <div class="project-card">
    <img :src="image" :alt="title" class="project-img">

    <div class="p-4">
      <h5 class="text-yellow">{{ title }}</h5>
      <p class="text-secondary small">{{ description }}</p>

      <div class="card-actions">
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-view"
        >
          View
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  url: String
})
</script>
