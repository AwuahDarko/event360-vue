<template>
  <section>
    <vue-progress-bar></vue-progress-bar>
    <snackbar
      ref="snackbar"
      baseSize="50px"
      :holdTime="5000"
      :multiple="true"
      :position="position"
    />
    <header id="header">
      <div class="header-top bg-success">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
              <!-- <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-behance"></i>
                  </a>
                </li>
              </ul>-->
            </div>
            <div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
              <a href="tel:233242859665">+233 242 859 665</a>

              <a href="mailto:info@event360-gh.com">info@event360-gh.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container main-menu">
        <div class="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="https://event360-gh.com">
              <img src="../assets/img/logo.png" alt="logo" width="80px" height="30px" />
            </a>
          </div>
          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li>
                <router-link to="/create-event" tag="a">Create New Event</router-link>
              </li>

              <li>
                <router-link to="/login" tag="a">Log In</router-link>
              </li>
              <li>
                <router-link to="/sign-up" tag="a">Sign Up</router-link>
              </li>
            </ul>
          </nav>
          <!-- #nav-menu-container -->
        </div>
      </div>
    </header>
    <!-- #header -->

    <!-- start banner Area -->
    <section class="banner-area relative" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen d-flex align-items-center justify-content-center">
          <div class="banner-content col-lg-12 col-md-12">
            <!-- <h6 class="text-uppercase">Don’t look further, here is the key</h6> -->
            <h1>Network, expand your knowledge and find solutions to problems.</h1>
            <h5 class="text-white mb-4">
              Find and attend conferences, seminars, workshop, trade fair shows
              everywhere in Ghana
            </h5>
            <a
              @click="scrollMeTo('scrollhere')"
              class="btn btn-primary text-white p-2"
            >Browse Events</a>
          </div>
        </div>
      </div>
    </section>
    <div ref="scrollhere"></div>
    <!-- End banner Area -->
    <div style="height: 10px"></div>
    <!-- TOP LEVEL CATEGORIES -->
    <section>
      <div class="category-container pl-2 pr-2">
        <button
          v-for="category in allCategories"
          :key="`top-${category.id}`"
          class="btn btn-light border-secondary text-secondary mr-2 mt-1"
          @click="navigateToCategory(category.name)"
        >{{ category.name }}</button>
      </div>
    </section>
    <div style="height: 30px"></div>
    <section class="main-events bg-light pt-1 put-pad">
      <h3 ref="upcome">UPCOMING EVENTS</h3>
      <hr class="bg-success" style="width: 40px; height: 2px" />
      <div class="search-container">
        <div class="search-box">
          <input type="text" class="search-box-content text-field" placeholder="Search Event" />
          <button class="search-box-content search-btn">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div style="height: 20px"></div>
      <section v-if="!ready_to_display">
        <article class="row">
          <div class="col-md-3 pl-0 pr-0" v-for="(a, i) in temp" :key="`asdf-${i}`">
            <EventCardSkeleton />
          </div>
        </article>
      </section>
      <section v-else class="browse-parent">
        <button
          class="arrows arrows-left"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <i class="fa fa-caret-left"></i>
        </button>
        <!-- TAB HEADER STARTS HERE -->
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              @click="onAllEventsClicked"
            >All Event</a>
          </li>
          <div id="carouselExampleControls" class="carousel slide" data-interval="false">
            <div class="carousel-inner">
              <div
                v-for="(oneDay, number) in event_by_day_chunks"
                :key="`chunk-${number}`"
                class="carousel-item"
                v-bind:class="{'active': number === 0}"
              >
                <div class="row pr-3 pl-3">
                  <li
                    class="nav-item"
                    v-for="day in oneDay"
                    :key="`header-${day.day.split(' ').join('-')}`"
                  >
                    <a
                      class="nav-link"
                      ref="theTabs"
                      :id="`pills-profile-tab-${day.day.split(' ').join('-')}`"
                      data-toggle="pill"
                      :href="`#pills-profile-${day.day.split(' ').join('-')}`"
                      role="tab"
                      :aria-controls="`pills-profile-${day.day.split(' ').join('-')}`"
                      aria-selected="false"
                      @click="resetPageCount"
                    >{{ day.day }}</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </ul>
        <button
          class="arrows arrows-right"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <i class="fa fa-caret-right"></i>
        </button>
        <!-- TAB CONTENTS STARTS HERE -->
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div class="col">
              <article class="row card-container">
                <div
                  class="col-md-3 mb-4"
                  v-for="event in events_to_display[current_all_event_page]"
                  :key="`event-card-${event.event_key}`"
                >
                  <EventCard :event_data="event" />
                </div>
              </article>
              <!-- PAGINATION -->
              <div style="display: flex; justify-content: flex-end">
                <paginate
                  :page-count="events_to_display.length"
                  :page-range="1"
                  :margin-pages="1"
                  :click-handler="allEventsPaginationCallback"
                  :prev-text="'Prev'"
                  :next-text="'Next'"
                  :container-class="'pagination'"
                  :page-class="'page-item'"
                  :page-link-class="'page-link'"
                  :prev-link-class="'page-link'"
                  :next-link-class="'page-link'"
                ></paginate>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            :id="`pills-profile-${day.day.split(' ').join('-')}`"
            role="tabpanel"
            :aria-labelledby="
              `pills-profile-tab-${day.day.split(' ').join('-')}`
            "
            v-for="(day, i) in eventsByDay"
            :key="`body-${day.day.split(' ').join('-')}-${i}`"
          >
            <article class="row card-container">
              <div
                class="col-md-3 mb-4"
                v-for="(event, index) in divideArray(day.events, divide_number)[page_number_for_events_by_day]"
                :key="`event-card-by-day-${event.event_key}-${index}`"
              >
                <EventCard :event_data="event" />
              </div>
            </article>
            <div class="mt-4" style="display: flex; justify-content: flex-end">
              <paginate
                :page-count="divideArray(day.events, divide_number).length"
                :page-range="1"
                :margin-pages="1"
                :click-handler="clickCallbackForEventsByName"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
                :page-link-class="'page-link'"
                :prev-link-class="'page-link'"
                :next-link-class="'page-link'"
              ></paginate>
            </div>
          </div>
        </div>
        <!-- TAB CONTENTS ENDS HERE -->
        <div style="height: 40px"></div>
      </section>
    </section>
    <!-- <div style="height: 60px"></div> -->
    <footer class="footer-color pt-4">
      <section class="col">
        <h5>Browse by catergory:</h5>
        <div class="category-container mt-1 pl-1 pr-1">
          <button
            v-for="category in allCategories"
            :key="`down-${category.id}`"
            class="btn btn-primary border-primary text-white mr-2 mt-1"
            @click="navigateToCategory(category.name)"
          >{{ category.name }}</button>
        </div>
      </section>
      <div style="height: 20px"></div>
      <section class="col mt-6">
        <h5>Browse by type:</h5>
        <div class="category-container mt-1 pl-1 pr-1">
          <button
            v-for="(type, i) in event_types"
            :key="`type-${i}`"
            class="btn btn-primary border-primary text-white mr-2 mt-1"
            @click="navigateToType(type)"
          >{{ type }}</button>
        </div>
      </section>
      <div style="height: 60px"></div>
    </footer>
  </section>
</template>

<script>
import EventCard from "../components/EventCard.vue";
import { mapGetters, mapActions } from "vuex";
import Snackbar from "vuejs-snackbar";
import EventCardSkeleton from "../components/EventCardSkeleton.vue";
import { divideArray } from "../utils/utility";

//  vue.$refs.snackbar.error('Error function triggered')
// vue.$refs.snackbar.warn('Warn function triggered')
// vue.$refs.snackbar.info('Info function triggered')
// vue.$refs.snackbar.open('Open function triggered')

export default {
  name: "BrowseEvent",
  title: "Browse Event",
  components: {
    EventCard,
    snackbar: Snackbar,
    EventCardSkeleton,
  },

  data() {
    return {
      position: "top-right",
      temp: [1, 2, 3, 4, 5, 6, 7, 8],
      event_types: [
        "Camp, Trip or Retreat",
        "Conference",
        "Convention",
        "Dinner or Gala",
        "Festival or Fair",
        "Forum",
        "Meeting or Networking Event",
        "Meetup",
        "Seminar or Talk",
        "Submit",
        "Tradeshow, Consumershow, Expo",
        "Virtual Event",
      ],
      ready_to_display: false,
      current_all_event_page: 0,
      page_number_for_events_by_day: 0,
      divide_number: 8,
    };
  },

  methods: {
    ...mapActions([
      "fetchAllCategories",
      "getAllEvents",
      "getAllEventsByDay",
      "getAllEventsByType",
      "getAllEventsByCategory",
    ]),

    loadExternalScripts() {
      //   this.$loadScript("./js/jquery-2.2.4.min.js");
      // this.$loadScript("./js/bootstrap.min.js");
      // this.$loadScript("./js/superfish.min.js");
      // this.$loadScript("./js/jquery.magnific-popup.min.js");
      // this.$loadScript("./js/jquery.nice-select.min.js");
      // this.$loadScript("./js/jquery.counterup.min.js");
      // this.$loadScript("./js/waypoints.min.js");
      // this.$loadScript("./js/main.js");
    },

    async fetchAllNeededData() {
      try {
        this.$Progress.start();
        await this.getAllEvents();
        await this.getAllEventsByDay();
        this.ready_to_display = true;
        this.$Progress.finish();
      } catch (err) {
        console.log(err);
        this.$Progress.finish();
      }
    },

    allEventsPaginationCallback(pageNum) {
      this.$refs.upcome.scrollIntoView();
      this.current_all_event_page = pageNum - 1;
    },

    clickCallbackForEventsByName(pageNum) {
      this.page_number_for_events_by_day = pageNum - 1;
    },

    scrollMeTo(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;

      window.scrollTo(0, top);
    },

    divideArray: divideArray,

    resetPageCount() {
      this.page_number_for_events_by_day = 0;
      this.$refs.theTabs.forEach((oneItem) => {
        oneItem.setAttribute("class", "nav-link");
      });
    },

    onAllEventsClicked() {
      this.$refs.theTabs.forEach((oneItem) => {
        oneItem.setAttribute("class", "nav-link");
      });
    },

    navigateToCategory(category) {
      const item = category.split(" ").join("+");
      this.$router.push({
        name: "BrowseByCategory",
        params: { category: item },
      });
    },

    navigateToType(type) {
      const item = type.split(" ").join("+");
      this.$router.push({
        name: "BrowseByType",
        params: { type: item },
      });
    },
  },

  beforeCreate() {
    window.localStorage.setItem("current_location_name", "browse-event");
    window.localStorage.setItem("current_location_param", "");
    window.localStorage.setItem("current_location_type", "");
  },

  created() {
    if (this.allCategories.length === 0) {
      this.fetchAllCategories();
    }
  },

  mounted() {
    this.fetchAllNeededData();
  },

  computed: {
    ...mapGetters([
      "allCategories",
      "eventsByDay",
      "allEvents",
      "eventsByCategory",
      "eventsByType",
    ]),

    events_to_display: function () {
      return divideArray(this.allEvents, 8);
    },

    event_by_day_chunks: function () {
      return divideArray(this.eventsByDay, 13); // 15
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700");
@import url("https://cdn.linearicons.com/free/1.0.0/icon-font.min.css");
@import url("../assets/css/browse-event.css");
/* @import url('../assets/css/fontawesome-free/css/all.min.css'); */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");

html,
body {
  overflow-x: hidden;
}

.category-container {
  overflow: auto;
  white-space: nowrap;
  padding-bottom: 10px;
}

.category-container li {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

.search-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.search-box {
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: flex-end;
  width: 200px;
  padding: 5px 10px;
  border-color: rgb(149, 146, 146);
}

.search-box-content {
  background: none;
  border-style: none;
}

.text-field {
  width: 90%;
}

.search-btn {
  width: 10%;
}

.nav-pills .nav-link.active {
  background-color: #28a745;
  color: white;
}

.nav-pills .nav-link {
  border-radius: 0;
  background-color: white;
  text-transform: uppercase;
  margin-right: 2px;
  font-weight: 600;
  color: black;
}

.browse-parent {
  position: relative;
}

.arrows {
  width: 20px;
  color: white;
  background-color: rgb(0, 93, 207);
  border: none;
}

.arrows:active {
  background-color: rgb(44, 44, 245);
}

.arrows:hover {
  background-color: rgb(66, 66, 170);
}

.arrows-left {
  position: absolute;
  left: -30px;
  top: 5px;
}

.arrows-right {
  position: absolute;
  right: -5px;
  top: 8px;
}

.footer-color {
  background-color: rgb(255, 255, 255);
}

.center-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.put-pad {
  padding-left: 5%;
  padding-right: 5%;
}

.main-events {
  width: 100%;
  margin: auto;
}

a span.fa {
  color: blue;
  font-size: 1.2rem;
}

.carousel-control-next {
  right: 40px;
}

.carousel-control-prev {
  left: 40px;
}

.nav-menu a {
  border-style: solid;
  border-color: #28a745;
  border-width: 1px;
  border-radius: 3px;
}

.nav-menu a:hover {
  color: #28a745;
}

@media (max-width: 1034px) {
  .card-container .col-md-3 {
    -ms-flex: 0 0 33.333333333%;
    flex: 0 0 33.333333333%;
    max-width: 33.333333333%;
  }
}

@media (max-width: 763px) {
  .card-container .col-md-3 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 496px) {
  .card-container .col-md-3 {
    -ms-flex: 0 0 90%;
    flex: 0 0 90%;
    max-width: 90%;
    margin: auto;
  }
}

@media (max-width: 300px) {
  .card-container .col-md-3 {
    -ms-flex: 0 0 95%;
    flex: 0 0 95%;
    max-width: 95%;
    margin: auto;
  }
}

@media (max-width: 800px) {
  .category-container {
    width: 100%;
    height: 60px;
    margin: auto;
    padding: 10px;
    overflow-x: auto;
  }
}

@media (max-width: 638px) {
  .arrows-left {
    position: absolute !important;
    left: -5px !important;
    top: 5px !important;
  }
}
</style>
