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

.leaflet-control-geosearch.bar{
    width: 70% !important;
    margin-left: 20% !important;
  }


  .dropdown .dropdown-input{
    min-width: 100% !important;
    max-width: 100% !important;
    height: calc(2.25rem + 2px);
    font-size: 1rem;
  }


</style>
    