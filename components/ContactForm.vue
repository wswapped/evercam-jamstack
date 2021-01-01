<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      s
      :rules="nameRules"
      label="Full Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field v-model="email" label="Phone *" required></v-text-field>

    <v-textarea
      name="input-7-4"
      label="Message"
      value=""
      hint="Type in your message"
    ></v-textarea>

    <v-btn
      class="btn-style"
      color="primary white--text text-center"
      nuxt
      tile
      to="/projects"
      @click="validate"
      >Send</v-btn
    >
  </v-form>
</template>

<script>
export default {
  name: "ContactForm",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
