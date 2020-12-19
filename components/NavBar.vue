<template>
  
  <div class="navbar">
    <v-navigation-drawer v-model="sidebar" v-show="sidebar">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-content class="white--text">{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="transparent">
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
		  <img src="/evercam_logo_190x40.png" :alt="appTitle" />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
		  class="white--text"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
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
  data(){
    return {
      appTitle: 'Evercam',
      sidebar: false,
      menuItems: [
          { title: 'Projects', path: '/projects', icon: 'mdi-home' },
          { title: 'Pricing', path: '/pricing', icon: 'face' },
          { title: 'Blog', path: '/blog', icon: 'lock_open' },
          { title: 'Contact', path: '/contact', icon: 'lock_open' },
     ]
    }
  },
};
</script>
<style>

</style>
