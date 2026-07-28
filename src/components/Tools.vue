<script setup>
const technologies = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
  },
  // {
  //   name: "NestJS",
  //   icon: "/images/nest.webp",
  // },
  // {
  //   name: "Prisma",
  //   icon: "/images/prisma.png",
  // },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "VS Code",
    icon: "/images/vs.png",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "Render",
    icon: "/images/render.png",
  },
  {
    name: "AWS",
    icon: "/images/aws.png",
  },
];
</script>

<template>
  <section id="tools" class="tools-section py-5">

    <div class="container">

      <!-- <h2 class="text-center text-yellow fw-bold mb-5">
        Tools & Technologies
      </h2> -->

      <div class="section-header mb-5">

  <div class="section-number">
    <div class="number">03</div>
    <div class="label">Tools</div>
  </div>

  <div class="section-heading">
    <span class="eyebrow">Tools and Technologies</span>
    <h2>Tools I build with.</h2>
  </div>

</div>

    </div>

    <div class="marquee">

      <div class="marquee-track">

        <div
          v-for="(tech, index) in [...technologies, ...technologies]"
          :key="`${tech.name}-${index}`"
          class="tech-card"
        >
          <img :src="tech.icon" :alt="tech.name" />
          <span>{{ tech.name }}</span>
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>


</style>