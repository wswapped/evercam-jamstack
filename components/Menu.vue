<template>
  <div class="navbar" :class="isHome?'home-navbar':'default-navbar'">
    <div class="top-nav" v-if="!isHome">
      <v-container>
        <ul>
          <li class="d-inline">
            <a href="tel:+35315397227">+353 1 539 7227</a>
          </li>
          <li class="d-inline">
            <a href="/signin"><b> | Sign In</b></a>
          </li>
        </ul>
      </v-container>
    </div>
    <v-navigation-drawer v-model="sidebar" v-show="sidebar">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-tile-content :class="menuItemColor">{{
            item.title
          }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="transparent pl-15 pr-10">
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar"> </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <img :src="logoPath" :alt="appTitle" />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          :class="menuItemColor"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "NavBar",
  props: ["page"],
  computed:{
	  isHome(){
		  return this.page == 'home'
	  }
  },
  data() {
    return {
      appTitle: "Evercam",
      sidebar: false,
      menuItemColor: this.page == "home" ? "white--text" : "",
      logoPath:
        this.page == "home"
          ? "/evercam_logo_190x40.png"
          : "/evercam_color_logo_190x40.png",
      menuItems: [
        { title: "Projects", path: "/projects", icon: "mdi-home" },
        { title: "Pricing", path: "/pricing", icon: "face" },
        { title: "Blog", path: "/blogs", icon: "lock_open" },
        { title: "Contact", path: "/contact", icon: "lock_open" },
      ],
    };
  },
};
</script>
<style>
</style>
