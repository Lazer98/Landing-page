<template>
  <v-main>
    <v-carousel
    cycle
    height="650"
    hide-delimiter-background
    show-arrows-on-hover
    src="../assets/community.webp"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
     
    >
    <v-parallax src="../assets/community.webp" height="650">
        <v-layout column align-center justify-center>
      <v-sheet
        height="50%"
       
      >
        <v-row
        class="fill-height"
          align="center"
          justify="center"
        >

  <v-card
  
    :loading="loading"
    
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="require('../../src/assets/'+slides[i].img_src)"
      ></v-img>

    <v-card-title>{{slides[i].name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
       
      >
        <v-rating
          :value="slides[i].rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="my-4 grey--text ms-4">
         {{slides[i].rating }}
        </div>
      </v-row>

      <div>{{ slides[i].text }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

  </v-card>
        </v-row>
      </v-sheet>
      </v-layout>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
  
    </v-main>
  </template>
  
  <script>

  
export default {
  name:"Community",
    data () {
      return {
        loading: false,
      selection: 1,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides:[
          {
            name:"Eli Leiner",
            rating: 4.9,
            img_src:"udo.jpg",
            text:"Super Platz zum Investieren!"
          },
          {
            name:"Barbara Kohlenbach",
            rating: 4.4,
            img_src:'barbara.jpg',
            text:"Super echt!"
          },
          {
            name:"Lennard Fritz",
            rating: 4.8,
            img_src:'lennard.jpg',
            text:"Einfach nur wow!"
          },
          {
            name:"Hans- Meier",
            rating: 4.5,
            img_src:'udo.jpg',
            text:" Ich bin immer noch baff!"
          },
          {
            name:"Sultan Hamili",
            rating: 4.5,
            img_src:'sultan.jpg',
            text:"Deutschland gute Wohnungen!"
          },
        ]
      }
    },
  }
</script>