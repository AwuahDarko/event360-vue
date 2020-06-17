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
  font-size: 0.9rem;
  font-weight: lighter;
}

.vue__time-picker input.display-time {
  border: 1px solid #d2d2d2;
  width: 8em;
  height: 2.2em;
  padding: 0.3em 0.5em;
  font-size: 1em;
  border-radius: 0 5px 5px 0;
}
</style>
