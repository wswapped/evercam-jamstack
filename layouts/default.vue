<template>
	<v-app dark>
		<Navbar></Navbar>
		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>
		<v-footer :absolute="!fixed" app>
			<span>&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
import Navbar from '../components/NavBar';
export default {

	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: "mdi-apps",
					title: "Welcome",
					to: "/",
				},
				{
					icon: "mdi-chart-bubble",
					title: "Inspire",
					to: "/inspire",
				},
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: "Vuetify.js",
		};
	},
	components:{
		Navbar
	}
};
</script>
