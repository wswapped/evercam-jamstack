<template>
  <div>
    <div class="page-guide grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="6">
            <p class="text-h5">Projects</p>
          </v-col>
          <v-col cols="6">
            <p class="h3 float-right">
              <span class="primary--text">Home</span> > Projects
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="">
      <v-row class="pl-15 section">
        <v-col
          cols="3"
          v-for="(customer, custKey) in happyCustomers"
          :key="custKey"
          class="project"
        >
          <NuxtLink :to="`/projects/${getSlug(customer.name)}`">
            <v-img
              :alt="customer.name"
              :src="customer.img"
              :lazy-src="customer.img"
              class="img-fluid"
              to="projects/test"
            ></v-img>
          </NuxtLink>
          <h2 class="primary--text">{{ customer.name }}</h2>
          <p>{{ customer.description }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { vueVimeoPlayer } from "vue-vimeo-player";
import ContactForm from "~/components/ContactForm.vue";
import "~/assets/scss/projects.scss";

export default {
  head: {
    title: "Projects Archive",
  },
  methods: {
    getSlug(projectName) {
      // Returns route friendly url
      let ret = projectName.toString().toLowerCase();
      ret = ret.replace(" ", "_");
      ret = ret.replace(/\W/gi, "");
      return ret;
    },
  },
  data() {
    return {
      happyCustomers: [
        {
          name: "The Palms - Beaumont, Texas",
          description:
            "The Palms at Cardinal is a residential development in Beaumont Texas. Check out this construction timelapse capturing the progress being",
          img: "/img/pro1.png",
        },
        {
          name: "ZED PODs - Bristol",
          description:
            "Despite concerns about air quality for potential tenants, Bristol councilors have approved proposals for “peculiar” apartments in a Bristol car",
          img: "/img/zedpods-bristol-ft.gif",
        },
        {
          name: "Simonds Homes",
          description:
            "Simonds Homes has built an enviable reputation throughout our history for designing the finest homes in Australia. Their mission is",
          img: "/img/Aspire-Element_181112_164340.jpg",
        },
        {
          name: "Bartra Poplar Row",
          description:
            "This site was acquired by Bartra on Poplar Road, comprising 0.14ha/0.35acres, zoned Z4 (District Centre) with the objective: ‘to have",
          img: "/img/poplar1-469x364-1.png",
        },
      ],
    };
  },
  components: {
    Logo,
    VuetifyLogo,
    vueVimeoPlayer,
  },
};
</script>
