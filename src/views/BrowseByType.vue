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
      <!-- <div class="container main-menu">
        <div class="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="https://event360-gh.com">
              <img src="../assets/img/logo.png" alt="logo" width="80px" height="30px" />
            </a>
          </div>
          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li v-if="!is_logged_in">
                <router-link class="anchor" to="/create-event" tag="a">Create New Event</router-link>
              </li>

              <li v-if="!is_logged_in">
                <router-link to="/login" class="anchor" tag="a">Log In</router-link>
              </li>
              <li v-if="!is_logged_in">
                <router-link to="/sign-up" class="anchor" tag="a">Sign Up</router-link>
              </li>
              <div class="dropdown ml-4" v-if="is_logged_in">
                <a>
                  <img width="30" class="rounded-circle" src="../assets/img/avatar.png" />
                  <i class="fa fa-angle-down ml-2 opacity-10" style="color: #000;"></i>
                </a>
                <div class="dropdown-content">
                  <a href="#">My Events</a>
                  <router-link to="/create-event" tag="a">Create Event</router-link>
                  <a @click="logout">Log Out</a>
                </div>
              </div>
            </ul>

        </div>
      </div>-->
      <div class="container main-menu pb-4 set-as-row">
        <div class="row align-items-center justify-content-between d-flex on-big-screen w-100">
          <div id="logo" class="on-big-screen">
            <a href="https://event360-gh.com">
              <img src="../assets/img/logo.png" alt="logo" width="80px" height="30px" />
            </a>
          </div>
          <nav v-if="!is_logged_in" class="on-big-screen">
            <ul class="nav-menu">
              <li>
                <router-link to="/create-event" class="anchor" tag="a">Create Event</router-link>
              </li>
              <!-- <li>
                <router-link to="/browse-event" class="anchor" tag="a">Browse Events</router-link>
              </li>-->
              <li>
                <router-link to="/login" class="anchor" tag="a">Log In</router-link>
              </li>
              <li>
                <router-link to="/sign-up" class="anchor" tag="a">Sign Up</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <nav class="on-small-screen">
          <div class="topnav">
            <a id="logo" class="on-small-screen" href="https://event360-gh.com">
              <img src="../assets/img/logo.png" alt="logo" width="80px" height="30px" />
            </a>

            <div v-if="!is_logged_in" ref="myLink" id="myLinks">
              <router-link to="/create-event" class="anchor" tag="a">Create Event</router-link>
              <!-- <router-link to="/browse-event" class="anchor" tag="a">Browse Events</router-link> -->
              <router-link to="/login" class="anchor" tag="a">Log In</router-link>
              <router-link to="/sign-up" class="anchor" tag="a">Sign Up</router-link>
            </div>
            <div v-else ref="myLink" id="myLinks">
              <a href="#">My Events</a>
              <router-link to="/create-event" tag="a">Create Event</router-link>
              <!-- <router-link to="/browse-event" tag="a">Browse Events</router-link> -->
              <a href="#" @click="logout">Log Out</a>
            </div>
            <a href="javascript:void(0);" class="icon" @click="toogleMobileNavBar">
              <i class="fa fa-bars"></i>
            </a>
          </div>
        </nav>
        <div class="on-big-screen">
          <div class="dropdown ml-4" v-if="is_logged_in">
            <a>
              <img width="30" class="rounded-circle" src="../assets/img/avatar.png" />
              <i class="fa fa-angle-down ml-2 opacity-10" style="color: #000;"></i>
            </a>
            <div class="dropdown-content">
              <a href="#">My Events</a>
              <router-link to="/create-event" tag="a">Create Event</router-link>
              <!-- <router-link to="/browse-event" tag="a">Browse Events</router-link> -->
              <a @click="logout">Log Out</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section ref="toTop" class="banner-area relative" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="banner-content col-lg-12 col-md-12">
            <h1 class="label-name">{{ current_type }}</h1>
          </div>
        </div>
      </div>
    </section>
    <div style="height: 10px"></div>
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
    <div ref="upcome" style="height: 20px"></div>
    <section class="main-events bg-light pt-1 put-pad">
      <div v-if="events_to_display.length > 0" class="search-container mt-2">
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
    </section>
    <section class="pr-4 pl-4">
      <div v-if="events_to_display.length === 0 && ready_to_display" style="height: 50px">
        <p
          class="text-center m-5 text-bold"
        >Sorry there are no current events for {{ current_type }}</p>
      </div>
      <div v-else class="col mt-4">
        <article class="row card-container mb-4">
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
    </section>
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
import Snackbar from "vuejs-snackbar";
import { mapGetters, mapActions } from "vuex";
import EventCardSkeleton from "../components/EventCardSkeleton.vue";
import { divideArray } from "../utils/utility";
import EventCard from "../components/EventCard.vue";
import { apiUrl } from "../utils/config";

export default {
  name: "BrowseByType",
  title: "Browse by Event Type",
  components: {
    snackbar: Snackbar,
    EventCardSkeleton,
    EventCard,
  },
  data() {
    return {
      position: "top-right",
      ready_to_display: false,
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
      current_type: "",
      current_all_event_page: 0,
      allEventsByType: [],
      is_logged_in: false,
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

    async navigateToCategory(category) {
      const item = category.split(" ").join("+");
      this.$router.push({
        name: "BrowseByCategory",
        params: { category: item },
      });
    },

    toogleMobileNavBar() {
      const x = this.$refs.myLink;
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },

    fetchAllEventsByType(type) {
      return new Promise((resolve, reject) => {
        if (type === "") {
          // commit('setEventsByCategory', []);
          resolve([]);
          return;
        }
        fetch(`${apiUrl}/api/browse/by-type?type=${type}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            //   commit('setEventsByCategory', data);
            resolve(data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },

    async navigateToType(type) {
      try {
        const item = type.split(" ").join("+");
        this.setHistory(item);
        this.$router.replace({ name: "BrowseByType", params: { type: item } });
        this.current_type = type;
        this.$Progress.start();
        this.allEventsByType = await this.fetchAllEventsByType(
          this.current_type
        );
        this.$refs.toTop.scrollIntoView();
        this.$Progress.finish();
      } catch (err) {
        console.log(err);
        this.$Progress.finish();
      }
    },

    setHistory(param) {
      window.localStorage.setItem("current_location_name", "BrowseByCategory");
      window.localStorage.setItem("current_location_param", param);
      window.localStorage.setItem("current_location_type", "category");
    },

    allEventsPaginationCallback(pageNum) {
      this.$refs.upcome.scrollIntoView();
      this.current_all_event_page = pageNum - 1;
    },

    logout() {
      window.localStorage.removeItem("token");
      this.is_logged_in = false;
    },
  },

  mounted() {
    // check login
    const token = window.localStorage.getItem("token");
    if (token == null || token === "") {
      this.is_logged_in = false;
    } else {
      this.is_logged_in = true;
    }
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
      return divideArray(this.allEventsByType, 8);
    },
  },

  async created() {
    const type = this.$route.params.type;
    this.current_type = type.split("+").join(" ");

    this.setHistory(type);

    if (this.allCategories.length === 0) {
      this.fetchAllCategories();
    }

    try {
      this.allEventsByType = await this.fetchAllEventsByType(this.current_type);
      this.ready_to_display = true;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700");
@import url("https://cdn.linearicons.com/free/1.0.0/icon-font.min.css");
@import url("../assets/css/browse-event.css");
/* @import url('../assets/css/fontawesome-free/css/all.min.css'); */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");

#home {
  height: 300px;
}

.label-name {
  position: absolute;
  top: 100px;
}

.text-bold {
  font-weight: bold;
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

.main-events {
  width: 100%;
  margin: auto;
}

.put-pad {
  padding-left: 5%;
  padding-right: 5%;
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

.nav-menu .anchor {
  border-style: solid;
  border-color: #28a745;
  border-width: 1px;
  border-radius: 3px;
}

.nav-menu .aanchor:hover {
  color: #28a745;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-transform: capitalize;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

/* ================================================== */
.on-big-screen {
  display: none;
}

.on-small-screen {
  display: block;
}

.topnav {
  overflow: hidden;
  position: relative;
}

.topnav #myLinks {
  display: none;
}

.topnav a {
  color: rgb(0, 0, 0);
  padding: 10px 10px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a.icon {
  background: white;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  border: solid 1px #28a745;
  border-radius: 5px;
}

.dropdown a {
  /* padding: 0 8px 0px 8px; */
  text-decoration: none;
  display: inline-flex;
  color: #222;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  outline: none;
  align-items: center;
}

.dropdown a i {
  font-size: 0.8rem;
}

.dropdown-content a {
  color: black;
  padding: 12px 12px;
  text-decoration: none;
  display: block;
  text-transform: capitalize;
}

/* BIG SCREEN */
@media (min-width: 800px) {
  .on-big-screen {
    display: block;
  }

  .on-small-screen {
    display: none;
  }

  .set-as-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}

/* ======================================================= */

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
</style>