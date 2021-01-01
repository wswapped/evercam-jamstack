<template>
  <div>
    <div class="home-banner-container">
      <div id="home-banner">
        <v-container>
          <v-row>
            <v-col cols="12" md="7">
              <div class="white--text pl-10">
                <h1 class="mb-3">CONSTRUCTION CAMERAS</h1>
                <p>
                  At Evercam, we have built the most advanced camera software,
                  so that you can concentrate on better management and speedy
                  completion.
                </p>
                <v-btn color="btn-style primary white--text" nuxt depressed tile to="/inspire">
                  Contact Us Now
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- Offsets for absolute position -->
    <div class="home-banner-after"></div>
    <v-container class="">
      <v-row class="pl-15 section">
        <v-col cols="12">
          <h1 class="section-title primary--text">
            TIME-LAPSE & PROJECT MANAGEMENT CAMERAS
          </h1>
        </v-col>
        <v-col cols="4">
          <div>
            <span class="sprite-icon sprite-icon-bg icon-promote"></span>
            <h2 class="text-uppercase mb-3">Promote</h2>
          </div>

          <p>
            Showcase your work with construction time-lapse videos and live
            streaming.
          </p>
          <ul class="check-list">
            <li>Build brand exposure</li>
            <li>Reach a wider audience</li>
            <li>Enhance marketing/sales</li>
          </ul>
        </v-col>
        <v-col cols="4">
          <div>
            <span class="sprite-icon sprite-icon-bg icon-collaborate"></span>
            <h2 class="text-uppercase mb-3">COLLABORATE</h2>
          </div>
          <p>
            Empower Project Managers with the right image at the right time.
          </p>
          <ul class="check-list">
            <li>Share progress</li>
            <li>Have live & immediate access</li>
            <li>Access anywhere</li>
          </ul>
        </v-col>
        <v-col cols="4">
          <div>
            <span class="sprite-icon sprite-icon-bg icon-avoid-disputes"></span>
          </div>
          <h2 class="text-uppercase mb-3">AVOID DISPUTES</h2>
          <p>Don't just win arguments, avoid them. You own the evidence.</p>
          <ul class="check-list">
            <li>Own the evidence</li>
            <li>Share footage</li>
            <li>Entire project duration recorded</li>
          </ul>
        </v-col>
      </v-row>

      <v-row class="pl-15 section">
        <v-col cols="12">
          <h1 class="section-title primary--text">EVERCAM USERS</h1>
        </v-col>
        <v-col cols="12">
          <ul class="happy-customers">
            <li
              v-for="(customer, custKey) in happyCustomers"
              :key="customer.custKey"
            >
              <img :alt="customer.name" :src="customer.img" />
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row class="pl-15 section">
        <v-col cols="6">
          <div class="embed-responsive">
            <iframe
              class="embed-responsive-item lazyloaded"
              title="vimeo242232239"
              name="fitvid0"
              allowfullscreen="allowfullscreen"
              data-src="https://player.vimeo.com/video/436930200?autoplay=1&amp;loop=1&amp;autopause=0&amp;title=0&amp;byline=0&amp;background=1"
            ></iframe>
          </div>
        </v-col>
        <v-col cols="6">
          <h1 class="section-title primary--text">
            PROJECTS POWERED BY EVERCAM
          </h1>
          <p class="text-right">
            With cameras live on the biggest construction projects in Ireland,
            UK, Australia, USA, Singapore and beyond.
            <br />
            Helping construction companies to communicate better and be more
            efficient.
          </p>
        </v-col>
      </v-row>
      <v-row class="pl-15 section">
        <v-col cols="8">
          <h1 class="section-title primary--text">
            EFFICIENCY, TRANSPARENCY & SAFETY, LIVE AT YOUR SITE
          </h1>
          <p>With Evercam you get a lot more in <b>1 system</b>.</p>
        </v-col>
        <v-col cols="4">
          <!-- Camera image Offset -->
        </v-col>

        <v-col cols="4">
          <div class="feature sprite-icon live-view">
            <h2 class="text-uppercase primary--text mb-3">LIVE VIEW</h2>
            <p>
              Enjoy a <strong>live view</strong> of your construction site from
              anywhere. Use your mobile, laptop or tablet from the office, on
              the road or even on-site.
            </p>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="feature sprite-icon share">
            <h2 class="text-uppercase primary--text mb-3">SHARE</h2>
            <p>
              Simply enter an email address to
              <strong> live or recorded footage</strong>. Our system is 100%
              secure.
            </p>
          </div>
        </v-col>
        <v-col cols="4">
          <!-- Camera image Offset -->
        </v-col>
        <v-col cols="4">
          <div class="feature sprite-icon record">
            <h2 class="text-uppercase primary--text mb-3">RECORD</h2>
            <p>
              <b>Record high-resolution images</b> for every second of the
              construction site progress. This gives you a full recording of the
              <strong> duration of the project</strong> from green field to
              handover.
            </p>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="feature sprite-icon snapmail">
            <h2 class="text-uppercase primary--text mb-3">Snapmail</h2>
            <p>
              Snapmail is a perfect way to send a regular, scheduled reminder
              about all the key <strong> and project milestones.</strong>
            </p>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="feature sprite-icon compare">
            <h2 class="text-uppercase primary--text mb-3">COMPARE</h2>
            <p>
              Compare <strong> before and after</strong> images from any point
              in time. Embed these neat visual aids on your website or
              promotional material.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="pl-15 section">
        <v-col cols="6">
          <div class="embed-responsive">
            <img class="img-fluid" src="/img/time-laps-ipad-min.jpg" />
          </div>
        </v-col>
        <v-col cols="6">
          <h1 class="section-title primary--text mb-3">TIME-LAPSE</h1>
          <p class="text-right">
            Make beautiful time-lapse videos of your construction project. Watch
            the build grow from start to finish in a couple of minutes.
            <br />
          </p>
          <v-btn
            color="primary white--text float-right"
            nuxt
            tile
			class="btn-style"
            to="/projects"
            >View projects</v-btn
          >
        </v-col>
      </v-row>
      <v-row class="pl-15 section">
        <v-col cols="12">
          <h1 class="section-title primary--text">SMARTEST CAMERAS</h1>
          <p class="text-right">
            At Evercam we have developed the most evolved construction camera
            software powered by
            <strong> intelligence, machine learning</strong> and this is just
            the beginning.
          </p>
        </v-col>
        <v-col cols="12">
          <!-- <client-only> -->
          <!-- <vueVimeoPlayer ref="player" video-id="381147583" :player-height="1000"/> -->
          <!-- </client-only> -->
          <div class="embed-responsive">
            <iframe
              class="embed-responsive-item lazyloaded"
              title="vimeo242232239"
              name="fitvid0"
              allowfullscreen="allowfullscreen"
              src="https://player.vimeo.com/video/381147583?autoplay=1&amp;loop=1&amp;autopause=0&amp;title=0&amp;byline=0"
            ></iframe>
          </div>
        </v-col>
      </v-row>
      <v-row class="pl-15 section">
        <v-col cols="12">
          <h1 class="section-title primary--text">
            TELL US ABOUT YOUR PROJECT
          </h1>
        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col cols="6">
              <img class="img-fluid" src="/img/vinni-q.jpg" />
            </v-col>
            <v-col cols="6">
              <p>I'm Vinnie</p>
              <p>
                Call me on <a href="tel://35315397227">+353 1 539 7227</a></strong> or complete the form
                and we will be in touch as soon as possible.
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
			<ContactForm />
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "~/assets/scss/home.scss";
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { vueVimeoPlayer } from "vue-vimeo-player";
import ContactForm from '@/components/ContactForm.vue';

export default {
  head: {
    title: "Construction Time-lapse & Project Management Live Cameras",
  },
  layout: 'home',
  data() {
    return {
      happyCustomers: [
        {
          name: "BodyGues",
          img: "https://evercam.io/wp-content/uploads/2020/09/bouygues-min.png",
        },
        {
          name: "Stewart Construction",
          img: "/img/stwart-min-1.png",
        },
        {
          name: "StructureTone",
          img: "/img/StructureTone_Logo-min.png",
        },
        {
          name: "BAM",
          img: "/img/bam-min.png",
        },
        {
          name: "Hines",
          img: "/img/1024px-Hines_Interests_Logo.svg-min.png",
        },
        {
          name: "scape",
          img: "/img/Scape_Pnk_hi-min.png",
        },
        {
          name: "ISG",
          img: "/img/ISG-min.png",
        },
        {
          name: "SISK Builders Contractors",
          img: "/img/pngegg_1-min.png",
        },
        {
          name: "Marlet",
          img: "/img/marlet-min.png",
        },
        {
          name: "JLL",
          img: "/img/JLL_logo-min.png",
        },
        {
          name: "Jean Paul Construction",
          img: "/img/JPC_1-min.png",
        },
        {
          name: "Berkeley Group",
          img: "/img/Image_1-min.png",
        },
        {
          name: "Hinton Group",
          img: "/img/Image_2-min.png",
        },
        {
          name: "Batra Capital Property Group",
          img: "/img/Bartra-Capital-Property-Group-e1469095990721-min-1.png",
        },
        {
          name: "CAIRN PLC",
          img: "/img/cairn-min-2.png",
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
