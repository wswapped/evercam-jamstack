<template>
  <v-app dark>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <h5 v-if="error.statusCode === 404">
            You'll be redicted to the live server in
          </h5>
          <p>{{ redirectIn }}</p>
          <NuxtLink to="/"> Home page </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      redirectIn: 5,
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  mounted() {
    if (this.error.statusCode === 404) {
      setInterval(() => {
        if (this.redirectIn > 0) this.redirectIn = this.redirectIn - 1;
      }, 1000);
    }
  },
  watch: {
    redirectIn() {
      console.log(this.redirectIn);
      if (this.redirectIn <= 0) {
        location.href = `https://evercam.io/${location.pathname}`;
      }
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
