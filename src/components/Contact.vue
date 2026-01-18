<template>
  <section id="contact" class="contact-section">
    <h3 class="contact-title">Let’s work together</h3>

    <!-- TOP: FORM + MAP -->
    <div class="contact-wrapper">
      <!-- FORM -->
      <div class="contact-card">
        <form @submit.prevent="submitForm">
          <input
            v-model="name"
            type="text"
            class="contact-input"
            placeholder="Name"
            required
          />

          <input
            v-model="email"
            type="email"
            class="contact-input"
            placeholder="Email"
            required
          />

          <textarea
            v-model="message"
            class="contact-input"
            rows="5"
            placeholder="Message"
          ></textarea>

          <button type="submit" class="submit-btn" :disabled="isLoading">
            {{ isLoading ? "Sending..." : "Send Message" }}
          </button>

          <div class="captcha">
            <div ref="recaptchaContainer"></div>
          </div>
        </form>
      </div>

      <!-- MAP -->
      <div class="map-card">
        <iframe
          src="https://www.google.com/maps?q=Lucban,Quezon&output=embed"
        ></iframe>
      </div>
    </div>

    <!-- BOTTOM: SOCIAL + CONTACT INFO -->
    <div class="contact-bottom">

      <!-- SOCIAL ICONS -->
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/cristino-france-madali-596450296/" target="_blank" title="LinkedIn">
          <i class="bi bi-linkedin"></i>
        </a>

        <a href="https://www.kalibrr.com/profile/your-profile" target="_blank" title="Kalibrr">
          <i class="bi bi-bar-chart-fill"></i>
        </a>

        <a href="https://www.upwork.com/freelancers/your-profile" target="_blank" title="Upwork">
          <i class="bi bi-person-workspace"></i>
        </a>

        <a href="#"  title="Indeed">
          <i class="bi bi-briefcase-fill"></i>
        </a>

        <a href="mailto:cristinofrancemadali@gmail.com" title="Gmail">
          <i class="bi bi-envelope-fill"></i>
        </a>

        <a href="https://www.facebook.com/france.madali" target="_blank" title="facebook">
          <i class="bi bi-facebook"></i>
        </a>
      </div>

      <!-- CONTACT INFO -->
      <div class="contact-info">
        <div class="info-item">
          <i class="bi bi-geo-alt-fill text-purple"></i>
          <span>Lucban, Quezon</span>
        </div>

        <div class="info-item">
          <i class="bi bi-telephone-fill text-purple"></i>
          <span>0995 282 8785</span>
        </div>

        <div class="info-item">
          <i class="bi bi-envelope-fill text-purple"></i>
          <span>cristinofrancemadali@gmail.com</span>
        </div>
      </div>

    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const WEB3FORMS_ACCESS_KEY = "ccbb74f7-4ceb-4247-b533-c7a8807ccd29";

const name = ref("");
const email = ref("");
const message = ref("");

const isLoading = ref(false);
const notyf = new Notyf();

// reCAPTCHA
const SITE_KEY = "6LegX0osAAAAAI4oH8u7H3VQw5k66oYo2Wv4TIxl";
const recaptchaContainer = ref(null);
const recaptchaWidgetId = ref(null);
const recaptchaToken = ref("");

function onRecaptchaSuccess(token) {
  recaptchaToken.value = token;
}

function onRecaptchaExpired() {
  recaptchaToken.value = "";
}

function renderRecaptcha() {
  if (!window.grecaptcha) return;

  recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
    sitekey: SITE_KEY,
    callback: onRecaptchaSuccess,
    "expired-callback": onRecaptchaExpired,
  });
}

function resetRecaptcha() {
  if (recaptchaWidgetId.value !== null) {
    window.grecaptcha.reset(recaptchaWidgetId.value);
    recaptchaToken.value = "";
  }
}

let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    if (window.grecaptcha && window.grecaptcha.render) {
      renderRecaptcha();
      clearInterval(interval);
    }
  }, 100);
});

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});

const submitForm = async () => {
  if (!recaptchaToken.value) {
    notyf.error("please verify that you are not a robot");
    return;
  }

  isLoading.value = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      notyf.success("message sent");
      name.value = "";
      email.value = "";
      message.value = "";
      resetRecaptcha();
    }
  } catch (error) {
    notyf.error("Failed to send message");
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
/* TRANSPARENT SECTION */
.contact-section {
  padding: 80px 16px;
  background: transparent;
}

.contact-title {
  text-align: center;
  color: #facc15;
  font-weight: 700;
  margin-bottom: 48px;
}

/* CARD LAYOUT */
.contact-wrapper {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
}

/* FORM CARD */
.contact-card {
  background: #151520;
  padding: 48px;
}

.contact-input {
  width: 100%;
  background: #0f0f14;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 14px;
  color: #e5e7eb;
  margin-bottom: 16px;
}

.contact-input::placeholder {
  color: #9ca3af;
}

.contact-input:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 0 2px rgba(124,58,237,0.3);
}

/* BUTTON */
.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #facc15, #7c3aed);
  border: none;
  color: #0f0f14;
  padding: 14px;
  font-weight: 600;
  border-radius: 999px;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* CAPTCHA */
.captcha {
  margin-top: 16px;
}

/* MAP */
.map-card iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(100%) brightness(0.9) contrast(1.1);
}

/* MOBILE */
@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }

  .map-card {
    height: 280px;
  }
}

   /*CONTACT BOTTOM ALIGNMENT*/

.contact-bottom {
  max-width: 1100px;
  margin: 16px auto 0; 
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

/* LEFT = SOCIAL ICONS (under FORM) */
.contact-bottom .social-icons {
  justify-self: start;
}

/* RIGHT = CONTACT INFO (under MAP) */
.contact-bottom .contact-info {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 20px;                 
  color: #facc15;
  font-size: 0.95rem;
  white-space: nowrap;       
  margin: 1px auto 0;
}

/* SOCIAL ICON STYLES */
.social-icons {
  display: flex;
  gap: 12px; 
}

.social-icons a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0f0f14;
  color: #facc15;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  border: 1px solid rgba(250,204,21,0.3);
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background: #facc15;
  color: #0f0f14;
  box-shadow: 0 0 12px rgba(250,204,21,0.4);
}

/* CONTACT INFO ITEMS */
.info-item {
  display: flex;
  align-items: center;
  gap: 6px; /* tighter */
}

.info-item i {
  font-size: 1.1rem;
}

/* =========================
   MOBILE
========================= */
@media (max-width: 768px) {
  .contact-bottom {
    grid-template-columns: 1fr;
    gap: 18px;
    text-align: center;
  }

  .contact-bottom .social-icons,
  .contact-bottom .contact-info {
    justify-self: center;
  }

  .contact-info {
    flex-direction: column;
    gap: 10px;
    white-space: normal; 
  }
}

</style>
