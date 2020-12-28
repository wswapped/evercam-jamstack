<template>
	<v-app>
		<Menu page="home" />
		<v-main>
			<nuxt />
		</v-main>
		<v-footer :absolute="!fixed" app>
			<span>&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
import Menu from '../components/Menu';
export default {
	name: 'MainLayout',
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
		console.log(this)
	},
	components:{
		Menu
	}
};
</script>
