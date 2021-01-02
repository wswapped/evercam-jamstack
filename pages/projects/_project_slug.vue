<template>
  <div>
    <div class="page-guide grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="6">
            <p class="text-h5">{{ sanityPost.title }}</p>
          </v-col>
          <v-col cols="6">
            <p class="h3 float-right">
              <span class="primary--text">Home</span> >
              <span class="primary--text">Projects</span> >
              <span>{{ sanityPost.title }}</span>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="">
      <v-row class="pl-15 section">
        <!-- <v-col cols="12">
          <div class="embed-responsive">
            <iframe
              class="embed-responsive-item"
              width="100"
              src="https://player.vimeo.com/video/453811131?autoplay=1&amp;loop=1&amp;autopause=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;quality=4k"
              allowfullscreen=""
            ></iframe>
          </div>
        </v-col> -->
        <v-col cols="8">
          <BlockContent
            :blocks="child"
            :projectId="sanData.projectId"
            :dataset="sanData.dataset"
            v-for="child in sanityPost.description.en"
            :key="child._id"
          />
          <v-img
            :alt="sanityPost.title"
            :src="sanityPost.img"
            :lazy-src="sanityPost.img"
            class="img-fluid"
          ></v-img>
        </v-col>
        <v-col cols="4">
          <h3>Project Details</h3>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>Client</td>
                  <td>
                    <a
                      class="text-decoration-none"
                      href="https://oneforcetx.com/"
                      >OneForce Construction</a
                    >
                  </td>
                </tr>
                <tr>
                  <td>Channel Partner</td>
                  <td>
                    <a
                      class="text-decoration-none"
                      href="https://www.danners.com/"
                      >Danner's Inc</a
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <!-- <GMap
            ref="gMap"
            language="en"
            :center="{ lat: locations[0].lat, lng: locations[0].lng }"
            :options="{ fullscreenControl: true, styles: mapStyle }"
            :zoom="8"
          >
            <GMapMarker
              v-for="location in locations"
              :key="location.id"
              :position="{ lat: location.lat, lng: location.lng }"
              @click="currentLocation = location"
            >
              <GMapInfoWindow :options="{ maxWidth: 200 }">
                <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code>
              </GMapInfoWindow>
            </GMapMarker>
            <GMapCircle :options="circleOptions" />
          </GMap> -->
          <iframe
            class="map"
            src="https://maps.google.com/maps?q=30.03204,-94.08829&z=15&output=embed"
            style="border: 0"
          ></iframe>
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
      title: this.sanityPost.title,
    };
  },
  async asyncData({ params }) {
    let slug = params.project_slug;
    const query = `*[_type == "project" && slug.current == $slug]{
		slug,
		name,
		title,
		description,
		image
	}[0]`;
    let sanityPost = await sanity.fetch(query, { slug: slug });
    sanityPost = {
      ...sanityPost,
      img: imageUrl(sanityPost.image).url(),
    };
    return {
      sanityPost,
      projectId: sanityConfig.api.sanityConfig,
      dataset: sanityConfig.api.dataset,
    };
  },
  data() {
    return {
      sanData: sanityConfig.api,
      project: {
        name: "The Palms - Beaumont, Texas",
        description:
          "The Palms at Cardinal is a residential development in Beaumont Texas. Check out this construction timelapse capturing the progress being",
        img: "/img/pro1.png",
      },
      currentLocation: {},
      locations: [
        {
          lat: -94.08829,
          lng: 30.03204,
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