<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
		<div class="home-banner-container" > 
		<div id="home-banner">
			<div class="row">
				<v-col cols="12" md="7">
					<div class="white--text pl-10">
						<h1>CONSTRUCTION CAMERAS</h1>
						<p>At Evercam, we have built the most advanced camera software, so that you can concentrate on better management and speedy completion.</p>
						<v-btn
							color="red white--text"
							nuxt
							tile
							to="/inspire"
						>
							Contact Us Now
						</v-btn>
					</div>
				</v-col>
				
			</div>
		</div>
		</div>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  head: {
    title: "Construction Time-lapse & Project Management Live Cameras"
  },
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
