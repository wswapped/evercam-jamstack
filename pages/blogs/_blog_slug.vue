<template>
  <div>
    <div class="page-guide grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="6">
            <p class="text-h5">{{ post.title }}</p>
          </v-col>
          <v-col cols="6">
            <p class="h3 float-right">
              <span class="primary--text">Home</span> >
              <span class="primary--text">Blogs</span> >
              <span>{{ post.title }}</span>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="">
      <v-row class="pl-15 pr-15 section">
        <v-col cols="12">
          <div class="embed-responsive">
            <!-- <iframe
              class="embed-responsive-item"
              width="100"
              src="https://player.vimeo.com/video/453811131?autoplay=1&amp;loop=1&amp;autopause=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;quality=4k"
              allowfullscreen=""
            ></iframe> -->
          </div>
        </v-col>
        <v-col cols="8">
          <v-img
            :alt="post.title"
            :src="post.img"
            :lazy-src="post.img"
            class="img-fluid mb-2"
          ></v-img>
          <BlockContent
            :blocks="child"
			:projectId="sanData.projectId"
			:dataset="sanData.dataset"
            v-for="child in post.body.en"
            :key="child._id"
          />
        </v-col>
        <v-col cols="4">
          <h3>Recent Posts</h3>

          <ul>
            <li v-for="(blog, custKey) in blogs" :key="custKey">
              <NuxtLink
                class="text-decoration-none"
                :to="`/blogs/${getSlug(blog.name)}`"
                >{{ blog.name }}</NuxtLink
              >
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import sanity, { imageUrl } from "@/plugins/sanity";
import sanityConfig from "@/sanity.json";
import BlockContent from "sanity-blocks-vue-component";
import { groq } from "@nuxtjs/sanity";
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { vueVimeoPlayer } from "vue-vimeo-player";
import ContactForm from "~/components/ContactForm.vue";
import "~/assets/scss/projects.scss";

export default {
  head() {
    return {
      title: this.post.title,
    };
  },
  async asyncData({ params }) {
    let slug = params.blog_slug;
    // const query = `*[_type == "post" && slug == $slug]`;
    const query = `*[_type == "post" && slug.current == $slug]{
		slug,
		title,
		body,
		image
	}[0]`;
    let post = await sanity.fetch(query, { slug: slug });
    post = {
      ...post,
      img: imageUrl(post.image).url(),
    };
    return {
      post,
      projectId: sanityConfig.api.sanityConfig,
      dataset: sanityConfig.api.dataset,
    };
  },
  props: ["slug"],
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
      projectId: sanityConfig.api.sanityConfig,
	  dataset: sanityConfig.api.dataset,
	  sanData: sanityConfig.api,
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
    BlockContent,
  },
};
</script>
