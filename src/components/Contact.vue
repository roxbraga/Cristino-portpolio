<template>
  <section id="contact" class="contact-section">

    <!-- SECTION HEADER -->
    <div class="contact-header">

      <div class="contact-eyebrow">
        <span class="eyebrow-line"></span>
        <span>GET IN TOUCH</span>
        <span class="eyebrow-line"></span>
      </div>

      <h3 class="contact-title">
        Let’s work <span>together</span>
      </h3>

      <p class="contact-subtitle">
        Have a project in mind or just want to say hello? Fill out the form
        <br />
        and I’ll get back to you as soon as possible.
      </p>

    </div>


    <!-- MAIN CONTACT AREA -->
    <div class="contact-wrapper">

      <!-- FORM -->
      <div class="contact-card">

        <!-- FORM HEADING -->
        <div class="card-heading">

          <div class="heading-icon">
            <i class="bi bi-envelope-fill"></i>
          </div>

          <div>
            <span class="card-eyebrow">CONTACT</span>
            <h4>Send me a message</h4>
          </div>

        </div>


        <form @submit.prevent="submitForm">

          <!-- NAME + EMAIL -->
          <div class="form-row">

            <div class="input-group">
              <label for="contact-name">Name</label>

              <input
                id="contact-name"
                v-model="name"
                type="text"
                class="contact-input"
                placeholder="Your name"
                required
              />
            </div>


            <div class="input-group">
              <label for="contact-email">Email</label>

              <input
                id="contact-email"
                v-model="email"
                type="email"
                class="contact-input"
                placeholder="your@email.com"
                required
              />
            </div>

          </div>


          <!-- SUBJECT - UI ONLY -->
          <div class="input-group">

            <label for="contact-subject">
              Subject
            </label>

            <input
              id="contact-subject"
              type="text"
              class="contact-input"
              placeholder="What can I help you with?"
            />

          </div>


          <!-- MESSAGE -->
          <div class="input-group">

            <label for="contact-message">
              Message
            </label>

            <textarea
              id="contact-message"
              v-model="message"
              class="contact-input contact-textarea"
              rows="5"
              placeholder="Tell me about your project..."
            ></textarea>

          </div>


          <!-- SUBMIT -->
          <button
            type="submit"
            class="submit-btn"
            :disabled="isLoading"
          >

            <i
              v-if="!isLoading"
              class="bi bi-send-fill"
            ></i>

            <span>
              {{ isLoading ? "Sending..." : "Send Message" }}
            </span>

          </button>


          <!-- RECAPTCHA -->
          <div class="captcha-box">

            <div class="captcha-info">
              <i class="bi bi-shield-shaded"></i>

              <div>
                <strong>This site is protected by reCAPTCHA</strong>

                <span>
                  and the Google Privacy Policy and Terms of Service apply.
                </span>
              </div>
            </div>

            <div class="captcha">
              <div ref="recaptchaContainer"></div>
            </div>

          </div>

        </form>

      </div>


      <!-- RIGHT SIDE -->
      <div class="contact-right">

        <!-- ONE COMPLETE RIGHT CARD -->
        <div class="map-card">

          <!-- MAP -->
          <div class="map-container">

            <iframe
              src="https://www.google.com/maps?q=Lucban,Quezon&output=embed"
            ></iframe>


            <!-- CUSTOM MAP PIN -->
            <div class="custom-map-pin">
              <div class="custom-map-pin-inner"></div>
            </div>


            <!-- MAP LOCATION OVERLAY -->
            <div class="map-overlay">

              <div class="map-location-icon">
                <i class="bi bi-geo-alt-fill"></i>
              </div>

              <div class="map-location-content">

                <strong>
                  Lucban, Quezon
                </strong>

                <span>
                  Philippines
                </span>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Lucban,Quezon"
                  target="_blank"
                  class="map-button"
                >
                  <i class="bi bi-box-arrow-up-right"></i>
                  Open in Maps
                </a>

              </div>

            </div>

          </div>


          <!-- CONTACT DETAILS -->
          <div class="contact-details">

            <!-- LOCATION -->
            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-geo-alt-fill"></i>
              </div>

              <div class="detail-content">
                <span>Location</span>
                <p>Lucban, Quezon</p>
              </div>
            </div>


            <!-- PHONE -->
            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-telephone-fill"></i>
              </div>

              <div class="detail-content">
                <span>Phone</span>
                <p>0995 282 8785</p>
              </div>
            </div>


            <!-- EMAIL -->
            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-envelope-fill"></i>
              </div>

              <div class="detail-content">
                <span>Email</span>
                <p>cristinofrancemadali@gmail.com</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>


    <!-- SOCIAL + QUOTE -->
    <div class="contact-footer">

      <!-- SOCIAL -->
      <div class="social-section">

        <span class="social-label">
          FOLLOW ME
        </span>

        <div class="social-icons">

          <a
            href="https://www.linkedin.com/in/cristino-france-madali-596450296/"
            target="_blank"
            title="LinkedIn"
          >
            <i class="bi bi-linkedin"></i>
          </a>

          <a
            href="https://www.kalibrr.com/profile/your-profile"
            target="_blank"
            title="Kalibrr"
          >
            <i class="bi bi-bar-chart-fill"></i>
          </a>

          <a
            href="https://www.upwork.com/freelancers/your-profile"
            target="_blank"
            title="Upwork"
          >
            <i class="bi bi-person-workspace"></i>
          </a>

          <a
            href="#"
            title="Indeed"
          >
            <i class="bi bi-briefcase-fill"></i>
          </a>

          <a
            href="mailto:cristinofrancemadali@gmail.com"
            title="Gmail"
          >
            <i class="bi bi-envelope-fill"></i>
          </a>

          <a
            href="https://www.facebook.com/france.madali"
            target="_blank"
            title="Facebook"
          >
            <i class="bi bi-facebook"></i>
          </a>

        </div>

      </div>


      <!-- QUOTE -->
      <div class="contact-quote">

        <span class="quote-mark">
          “
        </span>

        <div>
          <p>Great ideas start with a conversation.</p>

          <span>
            Let’s create something amazing together.
          </span>
        </div>

      </div>

    </div>

  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const WEB3FORMS_ACCESS_KEY =
  "ccbb74f7-4ceb-4247-b533-c7a8807ccd29";

const name = ref("");
const email = ref("");
const message = ref("");

const isLoading = ref(false);
const notyf = new Notyf();

// reCAPTCHA
const SITE_KEY =
  "6LegX0osAAAAAI4oH8u7H3VQw5k66oYo2Wv4TIxl";

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

  recaptchaWidgetId.value =
    window.grecaptcha.render(
      recaptchaContainer.value,
      {
        sitekey: SITE_KEY,
        callback: onRecaptchaSuccess,
        "expired-callback": onRecaptchaExpired,
      }
    );
}

function resetRecaptcha() {
  if (recaptchaWidgetId.value !== null) {
    window.grecaptcha.reset(
      recaptchaWidgetId.value
    );

    recaptchaToken.value = "";
  }
}

let interval = null;

onMounted(() => {
  interval = setInterval(() => {

    if (
      window.grecaptcha &&
      window.grecaptcha.render
    ) {
      renderRecaptcha();
      clearInterval(interval);
    }

  }, 100);
});

onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval);
  }
});

const submitForm = async () => {

  if (!recaptchaToken.value) {
    notyf.error(
      "please verify that you are not a robot"
    );

    return;
  }

  isLoading.value = true;

  try {

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
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
      }
    );

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