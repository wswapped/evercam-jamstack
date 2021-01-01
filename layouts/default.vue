<template>
	<v-app>
		<Menu />
		<div class="header-offset"></div>
		<v-main>
			<nuxt />
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Menu from '../components/Menu';
import Footer from '../components/Footer';
export default {
	name: 'HomeLayout',
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
			title: "Evercam",
		};
	},
	mounted(){
	},
	components:{
		Menu,
		Footer
	}
};
</script>
