<template>
  <v-main>
    <section>
      <v-parallax :src="imageLink.sub_main" height="600">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000;">
            Wir denken an die Zukunft und entwickeln Wohnkultur.
          </h1>
          <div class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">
            Immobilien Partner Ecker GmbH</div>
          <v-btn to="/kontakt" class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
            Lerne uns kennen!
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline"> Das Beste was Ihnen passieren kann!</h2>

          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-row>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Innovation</v-icon>
                    </v-card-text>

                    <v-card-text>

                      Immobilien Partner Landshut steht für anspruchsvolle Konzeptimmobilien in Nachhaltigkeit und
                      Design.
                      „Wohnraum und Architektur mit Charakter, Gebäude mit einer energiebewussten, zukunftsweisenden
                      eigenen Identität zu schaffen, ohne die Traditionen der Menschen zu vernachlässigen, die diese
                      bewohnen.“

                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Nachhaltigkeit</v-icon>
                    </v-card-text>

                    <v-card-text>
                      Seien es nun Gemeinschaftsflächen und ein Car-Sharing in einem Wohnen 50+. Oder das
                      Freiraum-Denken
                      in großzügigen Flächen mit einem Intelligenten von Außen nach Innen in einem licht + loft. Oder
                      das
                      innovative Nachhaltige, in Holzständerbauweise mit Pelletsheizung in KFW40 in Kombination mit
                      einer
                      Fülle an Fördermittel für den Käufer bei der wohnschdød.

                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Einfallsreichtum</v-icon>
                    </v-card-text>

                    <v-card-text>
                      Immobilien Partner Landshut denkt eben innovativ mit hohen Ansprüchen:
                      „Ökologisch und ökonomisch gut zu sein und das in Lagen, die wir brauchen! ist doch das Beste, was
                      einem Immobilienkäufer passieren kann.“


                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-row>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>


    <section>
      <v-container grid-list-md>


        <v-layout row wrap>
          <v-flex xs12 text-xs-center class="mt-5">
            <div class="headline text-center">Wollen sie mit uns in Kontakt treten?</div>
            <br>
            <div>Wir wuerden uns sehr freuen mit ihnen in Kontak zu bleiben und uns von
              unseren unglaublichen Angeboten zu ueberzeugen!</div>
          </v-flex>
          <v-flex xs8 offset-xs2>

            <v-card class="elevation-0 transparent">

              <v-card-text>
                <v-form ref="form" lazy-validation>
                  <!-- @submit.prevent="saveEmail()"  -->
                  <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

                    <input type=hidden name="oid" value="00D680000036SFc">
                    <input type=hidden name="retURL" value="http://google.com">
                    <v-flex xs12 v-if="!subscribed">
                      <v-text-field  filled persistent-hint v-model="first_name" :rules=nameRules name="first_name" :counter="10" label="Ihr Name" required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 v-if="!subscribed">
                      <v-text-field filled persistent-hint v-model="email" :rules=emailRules name="email" label="E-mail" required></v-text-field>
                    </v-flex>
                    <input type=hidden v-model="last_name" name="last_name" value="web_lead">
                    <input type=hidden v-model="description" name="description" value="web_lead">
                    <input type=hidden v-model="company" name="company" value="web_lead">
                    <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                    <v-btn class="blue lighten-2 mb-5" dark large type="submit">Let's go</v-btn>
                  </v-flex>
                  
                  </form>
                  <v-flex xs12 class="text-xs-center" v-if="subscribed">
                    <v-btn class="green lighten-2 mb-5" dark large>Willkommen an Bord!</v-btn>
                  </v-flex>
                </v-form>
              </v-card-text>

            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-parallax :src="imageLink.social_cover" height="380">
        <v-layout column align-center justify-center>
          <!-- <div class="headline white--text mb-3 text-xs-center"> Planning
            </div> -->
        </v-layout>

      </v-parallax>
    </section>




    <v-footer dark padless fluid>
      <v-card text fluid tile class=" lighten-1 white--text text-center" min-width="100%">
        <v-card-text >
          <v-row align="center">
          <v-col cols="12">
            <div class="d-flex justify-center">
          <v-btn v-for="icon in icons" :key="icon.name" class="mx-4 white--text" icon.name
            @click="chooseMethodOfIcon(icon.method1)">
            <v-icon small size="24px">
              {{ icon.name }}
            </v-icon>
          </v-btn>
          </div> 
          </v-col>
          </v-row>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          <v-tabs centered small>
            <v-dialog width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-tab v-bind="attrs" v-on="on" v-clipboard="adress">{{ adress }}</v-tab>

              </template>
              <template v-slot:default="showDialog" color="white">
                <v-card color="white">
                  <v-card-title class="black--text">Finde uns auf Google Maps</v-card-title>
                  <v-card-text>
                    <GoogleMaps />
                    <v-btn @click="showDialog.value = false">Schliessen</v-btn>
                  </v-card-text>
                </v-card>
              </template>
            </v-dialog>

            <v-tab @click="callViaIcon" v-clipboard="telephone" min-width="20">{{ telephone }}</v-tab>
            <v-tab v-clipboard="telephone" min-width="20">{{ fax }} </v-tab>
            <v-tab @click="sendEmailViaIcon" v-clipboard="email" min-width="20"><svg-icon type="mdi" :path="path3"></svg-icon> eckmdf@web.de</v-tab>
          </v-tabs>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <strong> Seit 1975</strong>
        </v-card-text>
      </v-card>
    </v-footer>


  </v-main>
</template>

<script>
import GoogleMaps from './GoogleMaps.vue'
import { mdiAt } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon';




export default {

  name: "HomePage",
  data: function () {
    return {
      title: "Ecker GmbH",
      path3: mdiAt,
      showDialog: false,
      telephone: "+49 8145 997558",
      fax:"F 0871 92360-10",
      email: "eckmdf@web.de",
      adress: "Oskar-von-Miller-Straße 12, 82291 Mammendorf",
      center: { lat: 45.508, lng: -73.587 },
      icons: [
        { name: 'mdi-facebook', method1: "facebookIcon" },
        { name: 'mdi-twitter', method1: "twitterIcon" },
        { name: 'mdi-linkedin', method1: "linkedIcon" },
        { name: 'mdi-instagram', method1: "instagramIcon" },
      ],
      first_name: '',
      company: 'web_lead',
      last_name: ' ',
      email: '',
      description: 'home-page',
      city: '',
      state: '',
      allowed_newsletter__c: false,
      imageLink: {
        sub_main:
          "https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        logo:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
        social_cover:
          "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      subscribed: false
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {

    saveEmail() {

      if (!this.$refs.form.validate()) {
        // Prevent the form from submitting
        e.preventDefault();
      }
      else {
        this.subscribed = true;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    facebookIcon() {
      console.log("facebook");
    },
    instagramIcon() {
      console.log("instagram");
    },
    linkedinIcon() {
      console.log("linkedin");
    },
    twitterIcon() {
      console.log("twitter");
    },
    chooseMethodOfIcon(name2Find) {
      var index = this.icons.findIndex(e => e.method1 === name2Find);
      if (index === 0) {
        this.facebookIcon();
      } else if (index === 1) {
        this.twitterIcon();
      } else if (index === 2) {
        this.linkedinIcon();
      } else if (index === 3) {
        this.instagramIcon();
      }

    },
    sendEmailViaIcon() {
      window.location.href = 'mailto:leinereliezer@gmail.com';
    },

    callViaIcon() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        window.location.href = "tel:+972584874474";
      } else {
        // window.open("tel:+972584874474", "Call us", "height=400,width=600");
        console.log("show telephone");
      }
    },
    openOnGoogleMaps() {
      console.log("here a pop up is gonna be seen");
    }
  },
  components: {
    GoogleMaps,
    SvgIcon
  }



};
</script>

<style scoped>
.icon-container {
  display: flex;
  align-items: center;
}

.icon-container .v-icon {
  font-size: 16px;
  
} 
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
