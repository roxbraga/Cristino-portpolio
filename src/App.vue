<template>
  <Navbar />
  <Hero />
  <router-view />
  <Capstone />
  <Projects />
  <Tools />
  <Contact />
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Capstone from './components/Capstone.vue'
import Projects from './components/Projects.vue'
import Tools from './components/Tools.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

</script>
