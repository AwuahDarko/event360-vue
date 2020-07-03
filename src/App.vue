<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529 !important;
  text-align: left;
}

@media (max-width: 800px) {
  .leaflet-control-geosearch.bar {
    width: 70% !important;
    margin-left: 20% !important;
  }
}

.leaflet-control-geosearch.bar {
  width: 70% !important;
  margin-left: 20% !important;
}

.dropdown .dropdown-input {
  min-width: 100% !important;
  max-width: 100% !important;
  height: calc(2.25rem + 2px);
  font-size: 1.1rem !important;
}

._cov-progress {
  opacity: 100 !important;
}

.ghana-cedi {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: lighter;
}

.ghana-cedi-2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  font-weight: lighter;
}

.vue__time-picker {
  display: inline-block;
  position: relative;
  font-size: 1em;
  width: 5em !important;
  font-family: sans-serif;
  vertical-align: middle;
}

.vue__time-picker input.display-time {
  border: 1px solid #d2d2d2;
  width: 5em !important;
  height: 2.4rem !important;
  padding: 0.3em 0.5em;
  font-size: 1em;
  border-radius: 0 5px 5px 0;
}

.vm--modal {
  box-shadow: none !important;
}

h4 {
  margin-top: 0;
  margin-bottom: 0.5em;
  color: inherit !important;
  font-weight: 500;
}

.snack-bar-wrap {
  z-index: 999999999 !important;
}
</style>
