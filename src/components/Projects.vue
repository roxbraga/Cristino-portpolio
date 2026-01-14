<template>
  <section id="projects" class="container py-5">
    <h3 class="text-center text-yellow fw-bold mb-5">Featured Projects</h3>

    <div class="row g-4">
      <div
        class="col-sm-6 col-lg-4"
        v-for="project in projects"
        :key="project.id"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="project.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import projects from '../data/project.json'
import ProjectCard from './ProjectCard.vue'
</script>
