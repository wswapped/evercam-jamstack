<template>
  <div>
    <div class="home-banner-container">
      <div id="home-banner">
        <v-container>
          <v-row>
            <v-col cols="12" md="7">
              <div class="white--text pl-10">
                <h1>CONSTRUCTION CAMERAS</h1>
                <p>
                  At Evercam, we have built the most advanced camera software,
                  so that you can concentrate on better management and speedy
                  completion.
                </p>
                <v-btn color="primary white--text" nuxt tile to="/inspire">
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
            <span class="sprite-icon icon-promote"></span>
            <h2 class="text-uppercase">Promote</h2>
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
            <span class="sprite-icon icon-collaborate"></span>
            <h2 class="text-uppercase">COLLABORATE</h2>
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
            <span class="sprite-icon icon-avoid-disputes"></span>
          </div>
          <h2 class="text-uppercase">AVOID DISPUTES</h2>
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

	  
    </v-container>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  head: {
    title: "Construction Time-lapse & Project Management Live Cameras",
  },
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
          img: "/img/mBartra-Capital-Property-Group-e1469095990721-min-1.png",
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
  },
};
</script>
