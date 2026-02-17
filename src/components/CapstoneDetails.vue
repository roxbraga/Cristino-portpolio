<template>
  <section class="container py-5" v-if="capstone">
    <button class="btn btn-outline-secondary mb-4" @click="goBack">
      ← Back
    </button>

    <div class="row align-items-center g-4">
      <div class="col-md-6">
        <img
          :src="capstone.image"
          :alt="capstone.title"
          class="img-fluid rounded"
        />
      </div>

      <div class="col-md-6">
        <h2 class="text-yellow fw-bold mb-3">
          {{ capstone.title }}
        </h2>

        <h3 class="text-yellow fw-bold mb-3">
          {{ capstone.subtitle }}
          
        </h3>

        <p class="text-secondary">
          {{ capstone.description }}
        </p>
      </div>
    </div>
  </section>

  <section v-else class="container py-5 text-center">
    <h4 class="text-secondary">Capstone not found</h4>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import capstones from '../data/capstone.json'

const route = useRoute()
const router = useRouter()

const capstoneId = Number(route.params.id)
const capstone = capstones.find(item => item.id === capstoneId)

const goBack = () => {
  router.back()
}
</script>
