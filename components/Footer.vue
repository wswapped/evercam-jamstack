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
          <v-col cols="12">
            <p class="text-center">
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
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
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
