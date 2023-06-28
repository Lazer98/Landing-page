<template>
    <div>
        <GmapMap :center='center' :zoom='15' style='width:100%;  height: 400px;'>
            <Gmap-Marker
        :key="index"
        v-for="(gmp, index) in markers"
        :position="gmp"
        @click="center=gmp"
      ></Gmap-Marker>
    </GmapMap>
    </div>
</template>
  
<script>
export default {
    name: 'GoogleMap',
    data() {
        return {
            center: { lat: 48.212711, lng: 11.1769832 },
            markers: [{
              lat: 48.2126174,
              lng: 11.1754246,
              label: 'Ecker GmbH'
          }],
            // currentPlace: 'Gewerbegebiet südlich Bahnhof Nannhofen, Oskar-von-Miller-Straße 12, 82291 Mammendorf, Germany',
        }
    },
    mounted() {
        this.addMarker();
    },
    methods: {
        addMarker() {
            let currentPlace = new google.maps.places.PlaceResult({
                geometry: {
                    location: new google.maps.LatLng({ lat: 48.2126174, lng: 11.1754246 }),
                },
            })
            let marker = {
                lat: currentPlace.geometry.location.lat(),
                lng: currentPlace.geometry.location.lng(),
            };
            this.markers.push({ position: marker });
            this.places.push(currentPlace);
            this.center = marker;
        },
    },
};
</script>