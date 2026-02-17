<template>
  <div class="project-card d-flex flex-column h-100">
    <img 
      :src="image" 
      :alt="title" 
      class="project-img"
    />

    <div class="p-4 d-flex flex-column flex-grow-1">
      <h4 class="text-warning text-center">
        {{ title }}
      </h4>
      <h5 class="text-white-50 mb-3">
        {{ subtitle }}
      </h5>

      <p class="text-white small">
        {{ description }}
      </p>

      <!-- Button pushed to bottom -->
      <div class="card-actions mt-auto">
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-view w-100"
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
  subtitle: String,
  description: String,
  image: String,
  url: String
})
</script>
