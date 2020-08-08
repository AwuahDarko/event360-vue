<template>
  <section>
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
    <div class="container main-menu pb-4">
      <div class="row align-items-center justify-content-between d-flex on-big-screen">
        <div id="logo" class="on-big-screen">
          <a href="https://event360-gh.com">
            <img src="../assets/img/logo.png" alt="logo" width="80px" height="30px" />
          </a>
        </div>
        <nav class="on-big-screen">
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

          <div ref="myLink" id="myLinks">
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
          <a href="javascript:void(0);" class="icon" @click="toogleMobileNavBar">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </nav>
      <div class="dropdown ml-4" v-if="is_logged_in">
        <a>
          <img width="30" class="rounded-circle" src="../assets/img/logo.png" />
          <i class="fa fa-angle-down ml-2 opacity-10" style="color: #000;"></i>
        </a>
        <div class="dropdown-content">
          <a href="#">My Events</a>
          <router-link to="/create-event" tag="a">Create Event</router-link>
          <a href="#" @click="logout">Log Out</a>
        </div>
      </div>
    </div>

    <div class="header" ref="myHeader">
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

    <div class="content">
      <div class="row-me">
        <div class="banner-container">
          <div class="banner">
            <img src="../assets/img/back.png" class="banner-img" alt="event banner" />
          </div>
          <img src="../assets/img/avatar04.png" alt="event logo" class="logo-img" />
        </div>
        <div class="date-box">
          <label>
            <i class="fa fa-calendar mr-1"></i> Date and Time
          </label>
          <p class="ml-4">Wed, March 25-27, 2020</p>
          <p class="ml-4">9:00 - 13:00</p>

          <div style="height: 20px"></div>
          <label>
            <i class="fa fa-map-marker mr-1"></i>
            Venue
          </label>
          <p class="ml-4">Venue name</p>
          <p class="ml-4">Street</p>
          <p class="ml-4">State</p>
          <p class="ml-4">Country</p>

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
    </div>
    <div style="height: 60px"></div>
  </section>
</template>


<script>
export default {
  name: "EventDetails",
  title: "Event Details",
  components: {},

  data() {
    return {
      is_logged_in: false,
    };
  },

  methods: {
    toogleMobileNavBar() {
      var x = this.$refs.myLink;
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
  },

  mounted() {
    // fixed  header script
    window.onscroll = () => {
      const header = this.$refs.myHeader;
      const sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.add("add-shadow");
      } else {
        header.classList.remove("sticky");
        header.classList.remove("add-shadow");
      }
    };
  },
};
</script>


<style scoped>
@import url("../assets/css/browse-event.css");
@import url("../assets/css/fontawesome-free-5.13.1-web/css/all.min.css");
/* @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"); */

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

  /* .banner-img {
    width: inherit;
    height: inherit;
  } */

  /* .banner {
    width: 100%;
    height: 500px;
  } */

  .banner-container {
    width: 70%;
  }

  .date-box {
    width: 30%;
  }
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
</style>