<template>
  <v-main>
    <section>
      <v-parallax src="../assets/contact-form2.jpg" height="300">
        <v-layout column align-center justify-center class="white--text">

        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-flex xs8 offset-xs2>
      <v-card class="elevation-0 transparent">
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <!-- @submit.prevent="saveEmail()"  -->
            <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

              <input type=hidden name="oid" value="00D680000036SFc">
              <input type=hidden name="retURL" value="http://google.com">
              <v-flex xs12 v-if="!subscribed">
                <v-text-field filled persistent-hint v-model="first_name" :rules=nameRules name="first_name" :counter="10"
                  label="Vorname" required></v-text-field>
              </v-flex>
              <v-flex xs12 v-if="!subscribed">
                <v-text-field filled persistent-hint v-model="last_name" :rules=nameRules name="last_name" :counter="10"
                  label="Nachname" required></v-text-field>
              </v-flex>
              <v-flex xs12 v-if="!subscribed">
                <v-text-field filled persistent-hint v-model="email" :rules=emailRules name="email" label="E-mail"
                  required></v-text-field>
              </v-flex>
              <input type=hidden v-model="company" name="company" value="web_lead">
              <v-flex xs12 v-if="!subscribed">
                <v-text-field filled persistent-hint v-model="description" name="description"
                  label="Nachricht"></v-text-field>
              </v-flex>
              <v-flex xs12 v-if="!subscribed">
                <v-checkbox v-model="allowed_newsletter__c" input_id="00N68000000htdS" name="00N68000000htdS"
                  :value="allowed_newsletter__c ? 1 : 0" label="Wollen sie regelmaessige Newsletter erhalten?"></v-checkbox>
              </v-flex>
              <v-flex xs12 v-if="!subscribed">
                <v-btn color="secondary" rounded class="me-4" name="submit" type="submit">
                  Let's go
                </v-btn>

                <v-btn color="error" rounded class="me-4" @click="reset">
                  Reset
                </v-btn>
              </v-flex>
            </form>
            <v-flex xs12 class="text-xs-center" v-if="subscribed">
              <v-btn class="green lighten-2 mb-5" dark large>Willkommen an Bord!</v-btn>
            </v-flex>
          </v-form>
        </v-card-text>
      </v-card>
      </v-flex>
    </section>


    <section>
      <v-tabs centered>
        <v-tab href="https://wa.me/+972584874474"><svg-icon type="mdi" :path="path1"></svg-icon> Whatsapp</v-tab>
        <v-tab @click="callViaIcon"> <svg-icon type="mdi" :path="path2"></svg-icon> Telefon</v-tab>
        <v-tab @click="sendEmailViaIcon"><svg-icon type="mdi" :path="path3"></svg-icon>Email</v-tab>
      </v-tabs>

    </section>

    <section>

    </section>
  </v-main>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiWhatsapp } from '@mdi/js';
import { mdiAccount } from '@mdi/js'
import { mdiAt } from '@mdi/js';

export default {
  name: "Kontakt",
  data: () => ({
    valid: true,
    path1: mdiWhatsapp,
    path2: mdiAccount,
    path3: mdiAt,
    imageLink: 'https://images.pexels.com/photos/4491443/pexels-photo-4491443.jpeg?auto=compress&cs=tinysrgb&w=600',
    first_name: '',
    company: 'web_lead',
    last_name: '',
    email: '',
    description: '',
    city: '',
    state: '',
    allowed_newsletter__c: false,

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

  }),

  methods: {
    saveEmail() {

      if (!this.$refs.form.validate()) {
        // Prevent the form from submitting
        e.preventDefault();
      }
      else {
        this.subscribed = true;
        console.log("USER CONTACT DETAILS " + this.email + ' ' + this.first_name + '' + this.last_name);
        if (this.checkbox) {
          console.log("USER WILLING TO BE ON THE LIST");
        }
        if (this.description) {
          console.log("USER HAS A MESSAGE FOR YOU");
        }
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    sendEmailViaIcon() {
      window.location.href = 'mailto:leinereliezer@gmail.com';
    },

    callViaIcon() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        window.location.href = "tel:+972584874474";
      } else {
        //window.open("tel:+972584874474", "Call us", "height=400,width=600");
        console.log("show telephone");
      }
    }
  },
  components: {
    SvgIcon
  },
}
</script>
