<template>
  <section id="capstone" class="container py-5">
    <h3 class="text-center text-yellow fw-bold mb-5">
      Capstone Projects
    </h3>

    <div class="row g-4">
      <div
        class="col-sm-6 col-lg-4 d-flex"
        v-for="capstone in capstones"
        :key="capstone.id"
      >
        <CapstoneCard
          :title="capstone.title"
          :subtitle="capstone.subtitle"
          :description="capstone.description"
          :image="capstone.image"
          :url="capstone.url"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import capstones from "../data/capstone.json";
import CapstoneCard from "./CapstoneCard.vue";
</script>
