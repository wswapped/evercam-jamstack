<template>
  <div>
    <div class="page-guide grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="6">
            <p class="text-h5">Evercam Partners</p>
          </v-col>
          <v-col cols="6">
            <p class="h3 float-right">
              <span class="primary--text">Home</span> > Evercam Partners
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="">
      <v-row class="pl-15 section">
        <v-col
          cols="6"
          v-for="(partner, custKey) in partners"
          :key="custKey"
          class="partner"
        >
          <a target="_blank" :href="`${partner.website}`">
            <v-img
              :alt="partner.name"
              :src="partner.img"
              :lazy-src="partner.img"
              class="img-fluid logo"
            ></v-img>
          </a>

          <h2 class="primary--text mb-2 text-decoration-none">
            {{ partner.name }}
          </h2>
          <BlockContent
            :blocks="child"
            :projectId="sanData.projectId"
            :dataset="sanData.dataset"
            v-for="child in partner.description.en"
            :key="child._id"
          />
          <section>
            <p><strong>Areas covered</strong></p>
            <p><span v-for="(area, key) in partner.areas" :key="key">{{area}} </span></p>
          </section>
          <section>
            <p><strong>Contact</strong></p>
            <p>{{partner.address}}</p>
            <a :href="'tel:'+partner.phone">+{{partner.phone}}</a>
          </section>
          <section>
            <iframe
            v-if="partner.map_location.lat && partner.map_location.lng"
            class="map"
            :src="
              'https://maps.google.com/maps?q=' +
              partner.map_location.lat +
              ',' +
              partner.map_location.lng +
              '&z=15&output=embed'
            "
            style="border: 0"
          ></iframe>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import sanity, { imageUrl } from "@/plugins/sanity";
import { groq } from "@nuxtjs/sanity";
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { vueVimeoPlayer } from "vue-vimeo-player";
import ContactForm from "~/components/ContactForm.vue";
import "~/assets/scss/partners.scss";
import BlockContent from "sanity-blocks-vue-component"
import sanityConfig from "@/sanity.json";

export default {
  head: {
    title: "Partners",
  },
  async asyncData() {
    const query = groq`*[_type == "partner"]{
      ...,
      areas->
    }`;
    let partners = await sanity.fetch(query);
    partners = partners.map((post) => {
      return {
        ...post,
        img: imageUrl(post.logo).url(),
      };
    });
    console.log(partners);
    return { partners };
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
      sanData: sanityConfig.api,
    };
  },
  components: {
    Logo,
    VuetifyLogo,
    vueVimeoPlayer,
    BlockContent,
  },
};
</script>
