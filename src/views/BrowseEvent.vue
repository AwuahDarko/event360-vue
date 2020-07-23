<template>
  <section>
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
              <a href="tel:+233 419 444 5555">+233 419 444 5555</a>

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
                <a href="#">Create New Event</a>
              </li>

              <li>
                <a href="#">Log In</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
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
            <a href="#" class="btn btn-primary text-white p-2">Browse Events</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End banner Area -->
    <div style="height: 10px"></div>
    <!-- TOP LEVEL CATEGORIES -->
    <section>
      <div class="category-container top-cat">
        <button
          v-for="(num, i) in temp"
          :key="i"
          class="btn btn-light border-secondary text-secondary mr-2"
        >Technology</button>
      </div>
    </section>
    <div style="height: 30px"></div>
    <section class="w-80 mx-auto bg-light pl-5 pr-5 pt-1">
      <h3>UPCOMING EVENTS</h3>
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
      <section class="browse-parent">
        <button class="arrows arrows-left">
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
            >All Event</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >Profile</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >Contact</a>
          </li>
        </ul>
        <button class="arrows arrows-right">
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
            <EventCard />
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <EventCard />
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <EventCard />
          </div>
        </div>
        <!-- TAB CONTENTS ENDS HERE -->
        <div style="height: 40px"></div>
      </section>
    </section>
    <!-- <div style="height: 60px"></div> -->
    <footer class="greay-color pt-4">
      <section class="col">
        <h5>Browse By Catergory:</h5>
        <div class="category-container mt-1">
          <button
            v-for="(num, i) in temp"
            :key="i"
            class="btn btn-light border-secondary text-secondary mr-2"
          >Technology</button>
        </div>
      </section>
      <div style="height: 20px"></div>
      <section class="col mt-6">
        <h5>Browse by Type:</h5>
        <div class="category-container mt-1">
          <button
            v-for="(type, i) in event_types"
            :key="`type-${i}`"
            class="btn btn-light border-secondary text-secondary mr-2"
          >{{ type }}</button>
        </div>
      </section>
      <div style="height: 60px"></div>
    </footer>
  </section>
</template>

<script>
import EventCard from "../components/EventCard.vue";
export default {
  name: "BrowseEvent",
  title: "Browse Event",
  components: {
    EventCard
  },

  data() {
    return {
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
        "Virtual Event"
      ]
    };
  },

  methods: {
    loadExternalScripts() {
      //   this.$loadScript("./js/jquery-2.2.4.min.js");
      // this.$loadScript("./js/bootstrap.min.js");
      // this.$loadScript("./js/superfish.min.js");
      // this.$loadScript("./js/jquery.magnific-popup.min.js");
      // this.$loadScript("./js/jquery.nice-select.min.js");
      // this.$loadScript("./js/jquery.counterup.min.js");
      // this.$loadScript("./js/waypoints.min.js");
      // this.$loadScript("./js/main.js");
    }
  },

  mounted() {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700");
@import url("https://cdn.linearicons.com/free/1.0.0/icon-font.min.css");
@import url("../assets/css/browse-event.css");
/* @import url('../assets/css/fontawesome-free/css/all.min.css'); */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");

.category-container {
  overflow: auto;
  white-space: nowrap;
  padding-bottom: 10px;
}

.top-cat {
  display: flex;
  justify-content: center;
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
  justify-content: end;
}

.search-box {
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: end;
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
  top: 8px;
}

.arrows-right {
  position: absolute;
  right: 30%;
  top: 8px;
}

.greay-color {
  background-color: rgb(243, 239, 239);
}

@media (max-width: 1000px) {
  .top-cat {
    display: flex;
    justify-content: flex-start;
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

  .arrows-right {
    position: absolute;
    right: 5%;
    top: 8px;
  }
}

@media (max-width: 340px) {
  section.pl-5 {
    padding-left: 5% !important;
    padding-right: 5% !important;
  }

  .arrows-left {
    position: absolute !important;
    right: 10px !important;
    top: 16px !important;
  }
}
</style>
