<template>
  <v-app light>
    <v-toolbar class="white" height="84px">
      <v-toolbar-side-icon>
        <a href="http://localhost:8081/">
        <img src="../src/assets/logoEckerGmbH1.png" alt="Vuetify.js" @click='to="/"' width="100%">   </a>
      </v-toolbar-side-icon>
   
        <v-spacer></v-spacer>
        
      <v-toolbar-title class="mx-0 " v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/kontakt" text>Kontakt</v-btn>
        <v-btn to="/about" text class="blue lighten-3">Ueber uns</v-btn>
        <v-btn to="/community" text>Communtiy</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-main>
      <router-view />
    </v-main>



  </v-app>
</template>

<script>
import logo1 from "../src/assets/logo1.png"

export default {
  name: 'App',

  data() {
    return {
      title: "Ecker GmbH",
      imageLink: {
        main:
          // "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
          logo1, 
        sub_main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5",
        logo:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
        social_cover:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4"
      },
      email: "",
      emailRules: [
        v => {
          return !!v || "E-mail is required";
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      subscribed: false
    };
  },
}

</script>
