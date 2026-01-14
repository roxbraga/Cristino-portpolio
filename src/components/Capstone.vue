<template>
  <section id="capstone" class="container py-5">
    <h3 class="text-center text-yellow fw-bold mb-5">
      Capstone Projects
    </h3>

    <div class="row g-4">
      <div
        class="col-sm-6 col-lg-4"
        v-for="capstone in capstones"
        :key="capstone.id"
      >
        <router-link
          :to="`/capstone/${capstone.id}`"
          class="text-decoration-none"
        >
          <CapstoneCard
            :title="capstone.title"
            :description="capstone.description"
            :image="capstone.image"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import capstones from '../data/capstone.json'
import CapstoneCard from './CapstoneCard.vue'
</script>
