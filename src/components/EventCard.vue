<template>
  <div class="card" style="width: inherit;">
    <div>
      <div v-if="!there_is_banner" class="banner-holder bg-info"></div>
      <img v-else class="img-fluid" :src="banner_src" :alt="event_data.name" />
    </div>
    <div class="card-body pt-4">
      <div v-if="!there_is_logo" class="avatar small-image bg-secondary">
        <span class="initial-text">{{ organiser_initials }}</span>
      </div>
      <img v-else :src="logo_src" alt="logo" class="avatar small-image" />
      <div class="container">
        <ul class="row">
          <li class="col-md-12 pb-1 mt-3 pl-0 pr-0">
            <span class="small-label-2 small-label">
              <i class="far fa-clock text-success"></i>
              {{ date }}
            </span>
          </li>

          <li class="col-md-12 pb-1 pl-0 pr-0">
            <span class="small-label-2">
              <i class="fa fa-map-marker text-success" key="vunue2"></i>
              {{ event_data.venue_name }}
            </span>
          </li>
        </ul>
      </div>
      <h5 style="height: 62px" class="card-title">{{ event_name }}</h5>
      <div class="icon-block">
        <a @click="onReadMore">
          <h6 class="card-title text-success">
            Read More
            <i class="fas fa-chevron-right" style="font-size: 12px;"></i>
          </h6>
        </a>
      </div>
      <div v-if="event_data.buy_ticket_btn === 1" class="icon-block">
        <button
          type="button"
          class="btn btn-block btn-success btn-sm mt-2 mb-2"
          @click="onGetTickets"
        >Get Tickets</button>
      </div>
      <div v-else class="block-block mt-2 mb-2"></div>

      <div class="mt-1">
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
</template>



<script>
import { apiUrl } from "../utils/config";
import moment from "moment";

export default {
  name: "EventCard",
  props: {
    event_data: {
      type: Object,
    },
  },

  data() {
    return {
      there_is_banner: false,
      there_is_logo: false,
      banner_src: "",
      logo_src: "",
    };
  },

  methods: {
    getImageUrl() {
      // LOGO
      fetch(`${apiUrl}/api/event-logo?key=${this.event_data.event_key}`, {
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
      fetch(`${apiUrl}/api/event-banner?key=${this.event_data.event_key}`, {
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

    onReadMore() {
      this.$router.push({
        name: "EventDetails",
        params: { event_key: this.event_data.event_key },
      });
    },

    onGetTickets() {
      console.log("Ouch ticket");
    },
  },

  created() {
    this.getImageUrl();
  },

  computed: {
    date: function () {
      // moment(this.endDateData, "LL").format("YYYY-MM-DD")
      const st = this.event_data.start_date.split("T")[0];
      const start = moment(st, "YYYY-MM-DD").format("LL");

      // const ed = this.event_data.end_date.split("T")[0];
      // const end = moment(ed, "YYYY-MM-DD").format("LL");

      return start;
    },

    organiser_initials: function () {
      return this.event_data.organiser.substring(0, 2);
    },

    event_name: function () {
      if (this.event_data.name.length > 110) {
        let chip = this.event_data.name.substring(0, 106);
        return chip + "...";
      } else {
        return this.event_data.name;
      }
    },
  },
};
</script>


<style scoped>
.card-parent {
  position: relative;
}

.small-image {
  position: absolute;
  top: 31.5%;
  left: 22px;
}

.avatar {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.items-in-row {
  display: flex;
  justify-content: space-evenly;
}

.small-text {
  font-size: 0.7rem;
}

.nav-menu li a:hover {
  color: grey;
}

li {
  list-style-type: none;
}

.card-body {
  padding-bottom: 5px !important;
}

/* ANIMATIONS */
.card {
  overflow: hidden;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.8);
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: 0.3s;
}

.card:hover,
.card:focus,
.card:active {
  box-shadow: 0 5px 2px 3px rgba(0, 0, 0, 0.1);
  /* transform: translateY(-3px) scale(1.01) rotateX(15deg); */
}

.banner-holder {
  height: 165.677px;
}

.block-block {
  height: 31px;
}

li span {
  font-size: 0.8rem;
}

.init {
  position: relative;
}

.initial-text {
  text-transform: uppercase;
  font-size: 2rem;
  position: absolute;
  top: 32%;
  left: 19%;
  right: 5%;
  /* bottom: 50%; */
  color: white;
  font-weight: bold;
}

.img-fluid {
  height: 165.677px;
  width: 100%;
}

@media (max-width: 1034px) {
  .small-image {
    position: absolute;
    top: 28.5%;
    left: 22px;
  }
}
</style>