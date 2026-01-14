<template>
  <div class="project-card">
    <img :src="image" :alt="title" class="project-img">

    <div class="p-4">
      <h5 class="text-yellow">{{ title }}</h5>
      <p class="text-secondary small">{{ description }}</p>

      <div class="card-actions">
        <button class="btn btn-view" @click="$emit('view')">
          View
        </button>

        <button class="btn btn-details" @click="$emit('details')">
          Details
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String
})

defineEmits(['view', 'details'])
</script>
