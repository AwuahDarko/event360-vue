<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}

@media(max-width: 800px){
  .leaflet-control-geosearch.bar{
    width: 70% !important;
    margin-left: 20% !important;
  }
}

</style>
    