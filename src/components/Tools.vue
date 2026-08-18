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

      <div class="section-header mb-5">
        <div class="section-number">
          <div class="number">03</div>
          <div class="label">Tools</div>
        </div>

        <div class="section-heading">
          <span class="eyebrow">Tools and Technologies</span>
          <h2>Tools i build with.</h2>
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

    </div>
  </section>
</template>

<style scoped>
.tools-section {
  overflow: hidden;
}

.marquee {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee-track {
  display: flex;
  align-items: center;
  gap: 18px;
  width: max-content;
  animation: scroll 28s linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

.tech-card {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 12px 22px;
  border-radius: 999px;
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
  transition: 0.3s;
}

.tech-card:hover {
  transform: translateY(-3px);
  border-color: #ffc107;
  box-shadow: 0 0 20px rgba(255, 193, 7, 0.18);
}

.tech-card img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.tech-card span {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .tools-section {
    overflow: hidden;
  }

  .marquee {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .marquee-track {
    gap: 14px;
  }

  .tech-card {
    padding: 10px 18px;
  }

  .tech-card img {
    width: 20px;
    height: 20px;
  }

  .tech-card span {
    font-size: 0.85rem;
  }
}
</style>