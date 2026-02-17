<template>
  <header class="py-3 px-3 px-md-5">
    <div class="container-fluid d-flex align-items-center">
      <h1 class="fs-4 fw-bold text-yellow m-0">CRISTINO FRANCE</h1>

      <!-- Desktop Navigation -->
      <nav class="ms-auto d-none d-md-flex gap-4">
        <a href="#home" class="nav-link-custom">Home</a>
        <a href="#projects" class="nav-link-custom">Projects</a>
        <a href="#contact" class="nav-link-custom">Contact</a>
        <a
          href="/images/resume.pdf"
          target="_blank"
          rel="noopener"
          class="nav-link-custom"
        >
          Resume
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="btn d-md-none text-purple fs-3 ms-auto"
        data-bs-toggle="collapse"
        data-bs-target="#mobileMenu"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Navigation -->
    <ul
      id="mobileMenu"
      class="collapse list-unstyled mt-3 p-3 rounded"
      style="background: linear-gradient(180deg,#000,#1a1a1a);"
    >
      <li><a href="#home" class="nav-link-custom">Home</a></li>
      <li><a href="#projects" class="nav-link-custom">Projects</a></li>
      <li><a href="#contact" class="nav-link-custom">Contact</a></li>
      <li>
        <a
          href="/images/Cristino.pdf"
          target="_blank"
          rel="noopener"
          class="nav-link-custom"
        >
          Resume
        </a>
      </li>
    </ul>
  </header>
</template>
