<template>
  <div class="foobar1" id="leafletmap">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
      <v-geosearch class="search-bar" :options="geosearchOptions"></v-geosearch>
    </l-map>
  </div>
</template>


<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import * as Vue2Leaflet from "vue2-leaflet";
const { LMap, LTileLayer, LMarker } = Vue2Leaflet;
import VGeosearch from "vue2-leaflet-geosearch";
import { OpenStreetMapProvider /*GeoSearchControl*/ } from "leaflet-geosearch";
// import $ from 'jquery'
import { mapActions } from "vuex";

//GeoSearchControl

delete L.Icon.Default.prototype._getIconUrl;
// eslint-disable-next-line
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const provider = new OpenStreetMapProvider();

// const searchControl = new GeoSearchControl({
//   provider: provider,
//   // style: 'bar',
//   autoComplete: true,
//   autoCompleteDelay: 250,
//   showMarker: true, // optional: true|false  - default true
//   showPopup: true, // optional: true|false  - default false
//   marker: {
//     // optional: L.Marker    - default L.Icon.Default
//     icon: new L.Icon.Default(),
//     draggable: false,
//   },
//   autoClose: true,
//   searchLabel: 'Enter address',
//    keepResult: true,
//   popupFormat: ({ query, result }) => {
//     console.log(query);
//     console.log(result);
//     return result.label
//   },
// })

export default {
  name: "Map",
  components: { LMap, LTileLayer, LMarker, VGeosearch },
  data() {
    return {
      zoom: 13,
      center: L.latLng(52.4925725, 4.8033412),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(52.4925725, 4.8033412),
      geosearchOptions: {
        // Important part Here
        provider: provider,
        style: "bar",
        showMarker: true,
        showPopup: true,
        autoClose: true,
        retainZoomLevel: false,
        animateZoom: true,
        keepResult: true,
        searchLabel: "search location",
        popupFormat: ({ result }) => {
          const selected = {
            city: "",
            state: "",
            country: "",
            label: ""
          };

          selected.longitude = result.raw.lon;
          selected.latitude = result.raw.lat;
          selected.label = result.label;
          const list = result.label.split(",");

          switch (list.length) {
            case 1: {
              selected.country = list[0];
              break;
            }

            case 2: {
              selected.country = list[1];
              selected.state = list[0];
              break;
            }

            case 3: {
              selected.country = list[list.length - 1];
              selected.city = list[0];
              selected.state = list[1];
              break;
            }
            default: {
              selected.country = list[list.length - 1];
              selected.state = list[list.length - 3];
              selected.city = list[list.length - 4];
              (selected.street = list[1]), (selected.venue = list[0]);
            }
          }

          console.log(selected);
          this.getNewLocation(selected);
          return result.label;
        }
      }
    };
  },
  methods: {
    ...mapActions(["onLocationSelected"]),

    getNewLocation(loc) {
      this.onLocationSelected(loc);
    }
  },
  computed: {},
  mounted() {
    const mq = window.matchMedia("(max-width: 800px)");
    if (mq.matches) {
      this.geosearchOptions.style = "button";
    } else {
      this.geosearchOptions.style = "bar";
    }
    // const map = new L.Map('leafletmap');
    // map.addControl(searchControl);
    // // map.on('geosearch/showlocation', function (selected) {
    // //   console.log(selected)
    // // });

    // map.on('geosearch/marker/dragend', (as) => {
    //   console.log('=================================')
    //   console.log(as)
    // });

    // const form = document.querySelector('form');
    //   const input = form.querySelector('input[type="text"]');
    //   form.addEventListener('submit', async (event) => {
    //     event.preventDefault();

    //     const results = await provider.search({ query: input.value });
    //     console.log(results); // » [{}, {}, {}, ...]
    //   });
  },
  created() {
    // setTimeout(function () {$('.pointer').fadeOut('slow');}, 3400);
  }
};
</script>



<style scoped>
.foobar1 {
  width: 100%;
  height: 100%;
}
</style>