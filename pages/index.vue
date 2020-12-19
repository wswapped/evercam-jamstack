<template>
<div>
	<div class="home-banner-container" > 
		<div id="home-banner">
			<v-container>
				<v-row>
					<v-col cols="12" md="7">
						<div class="white--text pl-10">
							<h1>CONSTRUCTION CAMERAS</h1>
							<p>At Evercam, we have built the most advanced camera software, so that you can concentrate on better management and speedy completion.</p>
							<v-btn
								color="primary white--text"
								nuxt
								tile
								to="/inspire"
							>
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
	<v-container class="section">
		<v-row class="pl-15">
			<v-col cols="12" >
				<h1 class="section-title primary--text">TIME-LAPSE & PROJECT MANAGEMENT CAMERAS</h1>
			</v-col>
			<v-col cols="4" >
				<div>
					<span class="sprite-icon icon-promote"></span>
					<h2 class="text-uppercase">Promote</h2>
				</div>
				
				<p>
					Showcase your work with construction time-lapse videos and live streaming.
				</p>
				<ul class="check-list">
					<li>Build brand exposure</li>
					<li>Reach a wider audience</li>
					<li>Enhance marketing/sales</li>
				</ul>
			</v-col>
			<v-col cols="4" >
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
			<v-col cols="4" >
				<div>
					<span class="sprite-icon icon-avoid-disputes"></span>
				</div>
				<h2 class="text-uppercase">AVOID DISPUTES</h2>
				<p>
					Don't just win arguments, avoid them. You own the evidence.
				</p>
				<ul class="check-list">
					<li>Own the evidence</li>
					<li>Share footage</li>
					<li>Entire project duration recorded</li>
				</ul>
			</v-col>
			
		</v-row>
	</v-container>
</div>

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
