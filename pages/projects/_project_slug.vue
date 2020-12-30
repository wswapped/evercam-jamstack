<template>
  <div>
    <div class="page-guide grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="6">
            <p class="text-h5">{{ project.name }}</p>
          </v-col>
          <v-col cols="6">
            <p class="h3 float-right">
              <span class="primary--text">Home</span> >
              <span class="primary--text">Projects</span> >
              <span>{{ project.name }}</span>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="">
      <v-row class="pl-15 section">
        <v-col cols="12">
          <div class="embed-responsive">
            <iframe
              class="embed-responsive-item"
              width="100"
              src="https://player.vimeo.com/video/453811131?autoplay=1&amp;loop=1&amp;autopause=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;quality=4k"
              allowfullscreen=""
            ></iframe>
          </div>
        </v-col>
        <v-col cols="8">
          <p>
            <strong>The Palms at Cardinal</strong> is a residential development
            in Beaumont Texas. Check out this construction timelapse capturing
            the progress being made by OneForce Construction.
          </p>

          <p>
            Located just minutes away from
            <strong>Lamar University and central Beaumont</strong>, this
            development will be ideal for both students and working
            professionals.
          </p>

          <p>
            Upon completion this project will offer 1-4 bedroom homes, as well
            as study rooms, office space, a 24 hour gym & a beautiful outdoor
            area with a modern pool.
          </p>
          <v-img
            :alt="project.name"
            :src="project.img"
            :lazy-src="project.img"
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
                    <a href="https://oneforcetx.com/">OneForce Construction</a>
                  </td>
                </tr>
                <tr>
                  <td>Channel Partner</td>
                  <td><a href="https://www.danners.com/">Danner's Inc</a></td>
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
		   <iframe class="map" src="https://maps.google.com/maps?q=30.03204,-94.08829&z=15&output=embed" style="border:0"></iframe>
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
  head() {
    return {
      title: this.project.name,
    };
  },
  props: ["project_slug"],
  data() {
    return {
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
        }
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
