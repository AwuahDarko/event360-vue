<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <snackbar
      ref="snackbar"
      baseSize="50px"
      :holdTime="5000"
      :multiple="true"
      :position="position"
    />
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
            <a class="text-small" href="tel:233242859665">+233 242 859 665</a>

            <a class="text-small" href="mailto:info@event360-gh.com">info@event360-gh.com</a>
          </div>
        </div>
      </div>
    </div>
    <section class="pl-2 pr-2">
      <!-- header section -->

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
              <li>
                <router-link to="/browse-event" class="anchor" tag="a">Browse Events</router-link>
              </li>
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
              <router-link to="/browse-event" class="anchor" tag="a">Browse Events</router-link>
              <router-link to="/login" class="anchor" tag="a">Log In</router-link>
              <router-link to="/sign-up" class="anchor" tag="a">Sign Up</router-link>
            </div>
            <div v-else ref="myLink" id="myLinks">
              <a href="#">My Events</a>
              <router-link to="/create-event" tag="a">Create Event</router-link>
              <router-link to="/browse-event" tag="a">Browse Events</router-link>
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
              <router-link to="/browse-event" tag="a">Browse Events</router-link>
              <a @click="logout">Log Out</a>
            </div>
          </div>
        </div>
      </div>

      <div class="header hide" ref="myHeader">
        <div class="header-content">
          <aside class="fav-btn">
            <div data-toggle="tooltip" data-placement="bottom" title="Interested">
              <i class="fa fa-star mr-1"></i>
            </div>
            <div data-toggle="tooltip" data-placement="bottom" title="Going">
              <i class="far fa-check-circle mr-1"></i>
            </div>
            <div data-toggle="tooltip" data-placement="bottom" title="Share">
              <i class="fas fa-share mr-1"></i>
            </div>
            <div data-toggle="tooltip" data-placement="bottom" title="Save">
              <i class="far fa-save mr-1"></i>
            </div>
          </aside>
          <aside class="ticket-btn">
            <label class="cash-label">GHc100.00 - GHc 1000.00</label>
            <button class="btn btn-success ticket">Tickets</button>
          </aside>
        </div>
      </div>
      <!-- header section ends -->
      <!-- body section -->
      <div v-if="loading" class="pl-5 pr-5">
        <EventDetailsSkeleton />
      </div>
      <div v-else-if="no_data_available">
        <Event404 />
      </div>
      <div v-else-if="event_has_expired">
        <div class="w-50 mx-auto">
          <div class="bg-warning expired">event ended</div>
        </div>
      </div>
      <div v-else class="content">
        <div class="row-me">
          <div class="banner-container">
            <div v-if="there_is_banner" class="banner">
              <img :src="banner_src" class="banner-img" alt="event banner" />
            </div>
            <div v-else class="banner">
              <div class="banner-img bg-info"></div>
            </div>
            <img v-if="there_is_logo" :src="logo_src" alt="event logo" class="logo-img" />
            <div v-else class="logo-img bg-secondary">
              <span class="initial-text">{{ organiser_initials }}</span>
            </div>
          </div>

          <div class="date-box">
            <label>
              <i class="fa fa-calendar mr-1"></i> Date and Time
            </label>
            <p class="ml-4">
              <strong>Starts on:</strong>
              {{ start_date }}
            </p>
            <p class="ml-4 mb-2">{{ start_time }} {{ start_time == '' ? '' : 'UTC' }}</p>

            <p class="ml-4">
              <strong>Ends on:</strong>
              {{ end_date }}
            </p>
            <p class="ml-4">{{ end_time }} {{ end_time == '' ? '' : 'UTC' }}</p>

            <div style="height: 20px"></div>
            <label>
              <i class="fa fa-map-marker mr-1"></i>
              Venue
            </label>
            <p class="ml-4">{{ venue }}</p>
            <p class="ml-4">{{ street }}</p>
            <p class="ml-4">{{ state }}</p>
            <p class="ml-4">{{ country }}</p>

            <div style="height: 100px"></div>
            <div class="items-in-row">
              <div>
                <button type="button" class="small-text btn btn-sm">
                  <i class="fa fa-star text-success mr-1"></i>Interested
                </button>
              </div>
              <div>
                <button type="button" class="btn btn-sm small-text">
                  <i class="far fa-check-circle text-success mr-1"></i>Going
                </button>
              </div>
              <div>
                <button type="button" class="btn btn-sm small-text">
                  <i class="fas fa-share text-success mr-1"></i>Share
                </button>
              </div>
              <div>
                <button type="button" class="btn btn-sm small-text">
                  <i class="far fa-save text-success mr-1"></i>Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 30px"></div>
        <!-- EVENT TITLE AND TICKET BUTTON -->
        <div class="row" ref="ticketBox">
          <div class="max-label-box">
            <h3>{{ name }}</h3>
          </div>
          <div class="max-btn-box put-margin-on-me">
            <button class="btn btn-success w-100">Tickets</button>
          </div>
        </div>
        <div class="row mt-4">
          <h5>About</h5>
        </div>
        <section class="row">
          <article class="description-box" v-html="event.description"></article>
        </section>
      </div>
    </section>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Snackbar from "vuejs-snackbar";
import { apiUrl } from "../utils/config";
import moment from "moment";
import EventDetailsSkeleton from "../components/EventDetailSkeleton.vue";
import Event404 from "../components/Event404.vue";

export default {
  name: "EventDetails",
  title: "Event Details",
  components: {
    snackbar: Snackbar,
    EventDetailsSkeleton,
    Event404,
  },

  data() {
    return {
      position: "top-right",
      is_logged_in: false,
      loading: true,
      there_is_banner: false,
      there_is_logo: false,
      logo_src: "",
      banner_src: "",
      event: new Object(),
      name: "",
      description: "",
      start_time: "",
      start_date: "",
      end_date: "",
      end_time: "",
      venue: "",
      street: "",
      state: "",
      country: "",
      organiser_initials: "",
      no_data_available: false,
      event_has_expired: false,
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

    toogleMobileNavBar() {
      const x = this.$refs.myLink;
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },

    setHistory(param) {
      window.localStorage.setItem("current_location_name", "EventDetails");
      window.localStorage.setItem("current_location_param", param);
      window.localStorage.setItem("current_location_type", "event_key");
    },

    logout() {
      window.localStorage.removeItem("token");
      this.is_logged_in = false;
    },

    getSingleEvent(event_key) {
      return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/api/single-event?key=${event_key}`, {
          method: "GET",
        })
          .then(async (res) => {
            // console.log(res);
            if (res.status == 404) {
              return null;
            }

            if (res.status === 200) {
              return res.json();
            }

            return null;
          })
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },

    getImageUrl(event_key) {
      // LOGO
      fetch(`${apiUrl}/api/event-logo?key=${event_key}`, {
        method: "GET",
      })
        .then(async (res) => {
          if (res.status == 200) {
            const logo = await res.json();
            // this.logo_src = `${apiUrl}/api/images/?img=${logo.image_url}`;
            if (logo.image_url != "") {
              this.logo_src = `${apiUrl}/api/images/?img=${logo.image_url}`;
              this.there_is_logo = true;
            } else {
              this.there_is_logo = false;
            }
          }

          if (res.status == 404) {
            this.there_is_logo = false;
          }
        })
        .catch((err) => console.log(err));

      // BANNER
      fetch(`${apiUrl}/api/event-banner?key=${event_key}`, {
        method: "GET",
      })
        .then(async (res) => {
          if (res.status == 200) {
            const banner = await res.json();
            this.banner_src = `${apiUrl}/api/images/?img=${banner.image_url}`;
            if (banner.image_url != "") {
              this.banner_src = `${apiUrl}/api/images/?img=${banner.image_url}`;
              this.there_is_banner = true;
            } else {
              this.there_is_banner = false;
            }
          }

          if (res.status == 404) {
            this.there_is_banner = false;
          }
        })
        .catch((err) => console.log(err));
    },

    setThePageUp(data) {
      this.loading = false;

      if (data == null) {
        this.no_data_available = true;
      } else {
        if (data.status !== "expired") {
          this.event = data;
          this.name = data.name;
          this.venue = data.venue_name;
          this.street = data.street;
          this.state = data.state;
          this.country = data.country;

          // date and time
          const slist = data.start_date.split("T");
          const elist = data.end_date.split("T");
          this.start_date = moment(slist[0], "YYYY-MM-DD").format("LL");
          this.end_date = moment(elist[0], "YYYY-MM-DD").format("LL");
          const st = slist[1].split(".")[0];
          if (st !== "00:00:00") {
            const a = st.split(":");
            this.start_time = `at: ${a[0]}:${a[1]}`;
          }

          const et = elist[1].split(".")[0];
          if (et !== "00:00:00") {
            const a = et.split(":");
            this.end_time = `at: ${a[0]}:${a[1]}`;
          }
          this.organiser_initials = data.organiser.substring(0, 2);
        } else {
          this.event_has_expired = true;
        }
      }
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

    // fixed  header script
    window.onscroll = () => {
      const header = this.$refs.myHeader;
      const ticketBox = this.$refs.ticketBox;
      if (ticketBox != undefined) {
        const sticky = ticketBox.offsetTop;
        if (window.pageYOffset > sticky) {
          header.classList.remove("hide");
          header.classList.add("sticky");
          header.classList.add("add-shadow");
          header.classList.add("show");
        } else {
          header.classList.remove("show");
          header.classList.add("hide");
          header.classList.remove("sticky");
          header.classList.remove("add-shadow");
        }
      }
    };
  },

  created() {
    const event_key = this.$route.params.event_key;

    this.setHistory(event_key);

    if (this.allEvents.length === 0) {
      this.loading = true;

      this.getSingleEvent(event_key)
        .then((data) => {
          this.setThePageUp(data);
        })
        .catch((err) => {
          this.$Progress.finish();
          console.log(err);
        });
    } else {
      // find in all events
      for (let event of this.allEvents) {
        if (event.event_key === event_key) {
          this.setThePageUp(event);
          break;
        }
      }
    }

    this.getImageUrl(event_key);
  },

  computed: {
    ...mapGetters([
      "allCategories",
      "eventsByDay",
      "allEvents",
      "eventsByCategory",
      "eventsByType",
    ]),
  },
};
</script>


<style scoped>
@import url("../assets/css/browse-event.css");
/* @import url("../assets/css/fontawesome-free-5.13.1-web/css/all.min.css"); */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");

.top-container {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -15px;
  left: 40px;
  border-radius: 5px;
}

.header {
  padding: 10px 50px;
  background: rgba(255, 255, 255, 0.9);
  color: #f1f1f1;
  border-top-style: solid;
  border-top-color: #d6d3d3;
  border-top-width: 1px;
  z-index: 100;
}

.content {
  padding: 16px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.sticky + .content {
  padding-top: 102px;
}

.nav-menu .anchor {
  border-style: solid;
  border-color: #28a745;
  border-width: 1px;
  border-radius: 3px;
}

.nav-menu .anchor:hover {
  color: #28a745;
}

.dropdown a {
  padding: 0 8px 0px 8px;
  text-decoration: none;
  display: inline-flex;
  color: #222;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  outline: none;
  align-items: center;
}

.text-small {
  font-size: 0.7rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
}

.column {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.row-me {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.add-shadow {
  /* box-shadow: 2px 2px 5px rgb(70, 68, 68); */
  box-shadow: 0 8px 20px -9px rgba(0, 0, 0, 0.3);
}

.fav-btn {
  display: flex;
  justify-content: space-between;
  width: 10%;
  align-items: center;
}

div i {
  font-size: 1.2rem;
  color: #28a745;
}

button i {
  font-size: 0.8rem;
  color: #289db8 !important;
}

.small-text.btn {
  color: #289db8 !important;
}

.small-text {
  font-size: 0.7rem;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.cash-label {
  color: black;
  font-size: 0.8rem;
}

.ticket-btn {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.cash-label {
  align-self: center;
  width: 50%;
}

.ticket {
  width: 100%;
}

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

.banner-img {
  width: inherit;
  height: inherit;
  border-radius: 5px 0 0 5px;
}

.banner {
  width: 100%;
  height: 450px;
}

.banner-container {
  width: 100%;
  position: relative;
}

.content {
  padding: 5px 5%;
}

.date-box {
  width: 100%;
  background-color: rgb(225, 225, 255);
  border-radius: 0 5px 5px 0;
  display: flex;
  flex-direction: column;
  padding: 20px 2%;
}

.date-box p {
  margin-bottom: 0;
  font-size: 0.8rem;
}

.items-in-row {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.max-btn-box {
  width: 100%;
}

.max-label-box {
  width: 100%;
}

.put-margin-on-me {
  margin-top: 20px;
}

.show {
  display: block;
  opacity: 1;
  transition: opacity 2s;
  transition-timing-function: ease-in;
}

.hide {
  display: none;
  opacity: 0;
  transition: opacity 2s;
  transition-timing-function: ease-out;
}

.description-box {
  width: 100%;
  margin-top: 20px;
  text-align: justify;
}

/* Dropdown Button */
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
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
  padding: 12px 12px;
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

.dropdown a i {
  font-size: 0.8rem;
}

.initial-text {
  text-transform: uppercase;
  font-size: 2.5rem;
  position: absolute;
  top: 35%;
  left: 20%;
  right: 5%;
  color: white;
  font-weight: bold;
}

strong {
  font-size: medium;
}

.expired {
  width: 100px;
  text-align: center;
  border-radius: 5px;
  margin-top: 20px;
}

@media (max-width: 800px) {
  .fav-btn {
    position: fixed;
    bottom: 0px;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    background-color: white;
    padding: 20px 5px;
    flex-wrap: wrap;
    z-index: 90;
  }

  .banner-img {
    border-radius: 5px;
  }
}

/* BIG SCREEN */
@media (min-width: 800px) {
  .ticket-btn {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .cash-label {
    width: 30%;
  }

  .ticket {
    width: 60%;
  }

  .on-big-screen {
    display: block;
  }

  .on-small-screen {
    display: none;
  }

  .banner-container {
    width: 70%;
  }

  .date-box {
    width: 30%;
  }

  .max-btn-box {
    width: 30%;
  }

  .max-label-box {
    width: 70%;
  }

  .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .put-margin-on-me {
    margin-top: 0px;
  }

  .description-box {
    width: 70%;
  }

  .set-as-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>