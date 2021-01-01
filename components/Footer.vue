<template>
  <v-footer :absolute="!fixed" app>
    <v-container>
      <v-row>
        <v-col cols="3" class="footer-col">
          <h3 class="footer-title">CONSTRUCTION CAMERAS</h3>
          <ul>
            <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
            <li><NuxtLink to="/blogs">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
            <li><NuxtLink to="/tutorials">Tutorials</NuxtLink></li>
          </ul>
        </v-col>
        <v-col cols="3" class="footer-col">
          <h3 class="footer-title">ABOUT EVERCAM</h3>
          <ul>
            <li><NuxtLink to="/terms">Terms &amp; Conditions</NuxtLink></li>
            <li><NuxtLink to="/gdpr-compliance">GDPR Compliance</NuxtLink></li>
            <li>
              <NuxtLink to="/jobs-construction-cameras"
                >Job Opportunities</NuxtLink
              >
            </li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
          </ul>
          <h3 class="footer-title mt-2">EVERCAM PARTNERS</h3>
          <ul>
            <li>
              <NuxtLink to="/become-an-installer/"
                >Become An Installer</NuxtLink
              >
            </li>
            <li><NuxtLink to="/partners/">Find An Installer</NuxtLink></li>
          </ul>
        </v-col>
        <v-col cols="3" class="footer-col">
          <h3 class="footer-title">EVERCAM SOFTWARE FEATURES</h3>
          <ul>
            <li>
              <NuxtLink to="/bim-time-lapse-integration/"
                >BIM Integration</NuxtLink
              >
            </li>
            <li><NuxtLink to="/gate-report/">Gate Report</NuxtLink></li>
            <li>
              <NuxtLink to="/machine-learning-for-construction/"
                >Machine Learning for Construction</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/project-management/">Project Management</NuxtLink>
            </li>
            <li><NuxtLink to="/safety/">Safety</NuxtLink></li>
            <li><NuxtLink to="/marketing/">Marketing</NuxtLink></li>
          </ul>
        </v-col>
        <v-col cols="3" class="footer-col">
          <h3 class="footer-title">WHERE TO FIND US</h3>
          <ul>
            <li class="mb-2">
              Phone: <a href="tel:+35315397227">+353 1 539 7227</a>
            </li>
            <li class="mb-2">
              Email: <a href="mailto:hello@evercam.io">hello@evercam.io</a>
            </li>
            <li>
              Evercam Ireland<br />
              6-7 Granby Row, Dublin 1,<br />
              Ireland
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
    <div class="bottom-bar">
      <v-container>
        <v-row>
          <v-col cols="3">
            <ul>
              <li class="d-inline">
                <a
                  href="https://play.google.com/store/apps/details?id=io.evercam.androidapp"
                  target="_blank"
                >
                  <img
                    src="/img/google_play_download.png"
                    alt="Download App on Google Play"
                  />
                </a>
              </li>
              <li class="d-inline">
                <a
                  href="https://itunes.apple.com/ie/app/evercam-play-ip-camera-viewer/id983189658?mt=8"
                  target="_blank"
                >
                  <img
                    src="/img/ios-logo.png"
                    alt="Download App on Google Play"
                  />
                </a>
              </li>
            </ul>
          </v-col>
          <v-col cols="5">
            <v-form ref="form" class="d-flex" lazy-validation>
              <div class="pr-4">
                <v-text-field
                  v-model="subscribeEmail"
                  type="email"
                  label="E-mail"
                  class="email-input"
                  background-color="white"
                  required
                ></v-text-field>
              </div>

              <div class="">
                <v-btn
                  class="btn-style"
                  color="primary white--text text-center"
                  nuxt
                  tile
                  to="/projects"
                  @click="validate"
                  small
                  >Subscribe</v-btn
                >
              </div>
            </v-form>
          </v-col>
          <v-col cols="4">
            <ul class="social-links">
              <li>
                <a
                  href="https://wa.me/353894481651"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-whatsapp" aria-hidden="true"></i>
                  <span class="sr-only">Whatsapp </span></a
                >
              </li>
              <li>
                <a
                  href="https://github.com/evercam"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-github" aria-hidden="true"></i>
                  <span class="sr-only">Github </span></a
                >
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/evercam"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-linkedin-in" aria-hidden="true"></i>
                  <span class="sr-only">Linkedin </span></a
                >
              </li>
              <li>
                <a
                  href="https://twitter.com/evrcm"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-twitter" aria-hidden="true"></i>
                  <span class="sr-only">Twitter </span></a
                >
              </li>
              <li>
                <a
                  href="https://www.facebook.com/evrcm/"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-facebook-f" aria-hidden="true"></i>
                  <span class="sr-only">Facebook </span></a
                >
              </li>
              <li>
                <a
                  href="https://vimeo.com/evercam"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-vimeo-v" aria-hidden="true"></i>
                  <span class="sr-only">Vimeo </span></a
                >
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/evrcm"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-youtube" aria-hidden="true"></i>
                  <span class="sr-only">Youtube </span></a
                >
              </li>
              <li>
                <a
                  href="https://www.instagram.com/EvercamConstructionCameras/"
                  target="_blank"
                  rel="noopener"
                  ><i class="fab fa-instagram" aria-hidden="true"></i>
                  <span class="sr-only">Instagram </span></a
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="12">
            <p class="text-center">
              <span>Evercam</span>
              <span>&copy; {{ new Date().getFullYear() }}</span>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "ContactForm",
  data: () => ({
    subscribeEmail: "",
    fixed: false,
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
