<template>
  <div>
    <div class="page-guide grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="6">
            <p class="text-h5">Blog</p>
          </v-col>
          <v-col cols="6">
            <p class="h3 float-right">
              <span class="primary--text">Home</span> > Blog
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="">
      <!-- Disabled -->
      <v-row class="section" v-if="false">
        <v-col
          cols="6"
          v-for="(blog, custKey) in blogs"
          :key="custKey"
          class="blog-container"
        >
          <NuxtLink :to="`/blogs/${getSlug(blog.name)}`">
            <v-img
              :alt="blog.name"
              :src="blog.img"
              :lazy-src="blog.img"
              class="img-fluid"
            ></v-img>
            <h2 class="mt-2 mb-2 primary--text">{{ blog.name }}</h2>
          </NuxtLink>
          <p>{{ blog.description }}</p>
        </v-col>
      </v-row>
      <v-row class="section">
        <v-col
          cols="6"
          v-for="(blog, custKey) in posts"
          :key="custKey"
          class="blog-container"
        >
          <NuxtLink :to="`/blogs/${blog.slug.current}`">
            <v-img
              :alt="blog.title"
              :src="blog.img"
              :lazy-src="blog.img"
              class="img-fluid"
            ></v-img>
            <h2 class="mt-2 mb-2 primary--text">{{ blog.title }}</h2>
          </NuxtLink>
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
import "~/assets/scss/blog.scss";

export default {
  head: {
    title: "Blog",
  },
  async asyncData() {
    const query = groq`*[_type == "post"]`;
    let posts = await sanity.fetch(query);
    posts = posts.map((post) => {
      return {
        ...post,
        img: imageUrl(post.image).url(),
      };
    });
    return { posts };
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
      blogs: [
        {
          name: "Top 10 Construction Timelapses of 2020",
          description:
            "2020 has been full of surprises that no one asked for, a year unlike we've ever experienced. A year marked by huge disruption to the construction industry comes to an end",
          img: "/img/bonham-3.png",
        },
        {
          name:
            "Evercam to create 50 jobs following €600,000 co-investment led by DBIC Ventures",
          description:
            "This is the first investment by DBIC Ventures’ new €23m early-stage fundFunding enables AI-powered construction software company, Evercam to:Double global staff to support expansion in the US, Australia and Middle...",
          img: "/img/Evercam-2-scaled.jpg",
        },
        {
          name: "Construction Time-lapse – How it Started How it’s Going",
          description:
            "Looking at the past and the present became looking into the future. Where we were, where we are, where will we be. How we Started - Communications  From day one,...",
          img: "/img/Aspire-Element_181112_164340.jpg",
        },
        {
          name: "Evercam's Autodesk BIM 360 Partner Card",
          description:
            "We are delighted to announce that Evercam and Autodesk BIM 360® users can now access their live Evercam cameras by simply setting up a BIM 360 Partner Card in their...",
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
