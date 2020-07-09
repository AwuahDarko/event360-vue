<template>
  <section class="p-0">
    <article class="row">
      <div class="col-md-4 col-sm-4 col-xm-4">
        <div class="card">
          <article class="p-2">
            <div class="image-box">
              <div class="avatar bg-light">
                <img
                  src="https://img.icons8.com/color/96/000000/tear-off-calendar.png"
                  alt="subscription image"
                  class="subscription-image"
                />
              </div>
            </div>
            <h6 class="text-center">
              <strong>Manage Your Event</strong>
            </h6>
            <p class="text-center text-justify text-break text-wrap">
              Engage participants before, during and after the event through diverse channels. Manage your online registration and ticket.
              Enhance your attendees experience with Event360 Mobile App
            </p>
            <button
              class="btn btn-sm btn-success col-md-12"
              v-bind:class="{'btn-light text-dark': !manage_your_event_selected}"
              @click="manage_your_event_selected = !manage_your_event_selected"
            >{{ !manage_your_event_selected ? 'Subscribe' : 'Unsubscribe'}}</button>
          </article>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xm-4">
        <div class="card">
          <article class="col p-2">
            <div class="image-box">
              <div class="avatar bg-light">
                <img
                  src="https://img.icons8.com/dusk/80/000000/print.png"
                  alt="subscription image"
                  class="subscription-image"
                />
              </div>
            </div>
            <h6 class="text-center">
              <strong>Name Badges Printing</strong>
            </h6>
            <p
              class="text-center text-justify text-break text-wrap"
            >Generate your own customised badges and get it printed at affordable prices</p>
            <button
              style="margin-top: 40px"
              class="btn btn-sm btn-success col-md-12"
              v-bind:class="{'btn-light text-dark': !name_badge_printing_selected}"
              @click="name_badge_printing_selected = !name_badge_printing_selected"
            >{{ !name_badge_printing_selected ? 'Subscribe' : 'Unsubscribe'}}</button>
            <div class="red-badge">Coming Soon</div>
          </article>
        </div>
      </div>

      <div class="col-md-4 col-sm-4 col-xm-4">
        <div class="card">
          <article class="col p-2">
            <div class="image-box">
              <div class="avatar bg-light">
                <img
                  src="https://img.icons8.com/officel/80/000000/exhibitor.png"
                  alt="subscription image"
                  class="subscription-image"
                />
              </div>
            </div>
            <h6 class="text-center">
              <strong>Exhibitors and Sponsors Hub</strong>
            </h6>
            <p
              class="text-center text-justify text-break text-wrap"
            >Delight sponsors and exhibitors with a powerful mobile channel that generates more leads</p>
            <button
              style="margin-top: 40px"
              class="btn btn-sm btn-success col-md-12"
              v-bind:class="{'btn-light text-dark': !exhibitor_and_sponsors_hub_selected}"
              @click="exhibitor_and_sponsors_hub_selected = !exhibitor_and_sponsors_hub_selected"
            >{{ !exhibitor_and_sponsors_hub_selected ? 'Subscribe' : 'Unsubscribe'}}</button>
            <div class="blue-badge">New</div>
          </article>
        </div>
      </div>
    </article>
    <article class="row">
      <div class="col-md-4 col-sm-4 col-xm-4">
        <div class="card">
          <article class="p-2">
            <div class="image-box">
              <div class="avatar bg-light">
                <img
                  src="https://img.icons8.com/dusk/80/000000/ticket.png"
                  alt="subscription image"
                  class="subscription-image"
                />
              </div>
            </div>
            <h6 class="text-center">
              <strong>Event Promotion Center</strong>
            </h6>
            <p
              class="text-center text-justify text-break text-wrap"
            >Link your event social media channels and website to Event360 and seamlessly manage posts and impressions. Get templates for you posts and email marketing.</p>
            <button
              class="btn btn-sm btn-success col-md-12"
              v-bind:class="{'btn-light text-dark': !event_promotion_center_selected}"
              @click="event_promotion_center_selected = !event_promotion_center_selected"
            >{{ !event_promotion_center_selected ? 'Subscribe' : 'Unsubscribe'}}</button>
            <div class="blue-badge">New</div>
          </article>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xm-4">
        <div class="card">
          <article class="col p-2">
            <div class="image-box">
              <div class="avatar bg-light">
                <img
                  src="https://img.icons8.com/clouds/100/000000/4-star-hotel.png"
                  alt="subscription image"
                  class="subscription-image"
                />
              </div>
            </div>
            <h6 class="text-center">
              <strong>Manage Hotel Booking</strong>
            </h6>
            <p
              class="text-center text-justify text-break text-wrap"
            >Manage and monitor participants hotel books from your event dashboard</p>
            <button
              style="margin-top: 40px"
              class="btn btn-sm btn-success col-md-12"
              v-bind:class="{'btn-light text-dark': !hotel_booking_selected}"
              @click="hotel_booking_selected = !hotel_booking_selected"
            >{{ !hotel_booking_selected ? 'Subscribe' : 'Unsubscribe'}}</button>
            <div class="red-badge">Coming Soon</div>
          </article>
        </div>
      </div>

      <div class="col-md-4 col-sm-4 col-xm-4">
        <div class="card">
          <article class="col p-2">
            <div class="image-box">
              <div class="avatar bg-light">
                <img
                  src="https://img.icons8.com/dusk/80/000000/airport.png"
                  alt="subscription image"
                  class="subscription-image"
                />
              </div>
            </div>
            <h6 class="text-center">
              <strong>Manage Airport Pickup Bookings</strong>
            </h6>
            <p
              class="text-center text-justify text-break text-wrap"
            >Manage and monitor participants airport pickups from your event dashboard</p>
            <button
              style="margin-top: 40px"
              class="btn btn-sm btn-success col-md-12"
              v-bind:class="{'btn-light text-dark': !manage_airport_pickup_booking_selected}"
              @click="manage_airport_pickup_booking_selected = !manage_airport_pickup_booking_selected"
            >{{ !manage_airport_pickup_booking_selected ? 'Subscribe' : 'Unsubscribe'}}</button>
            <div class="red-badge">Coming Soon</div>
          </article>
        </div>
      </div>
    </article>
    <article class="row">
      <div class="col-md-4 col-sm-4 col-xm-4"></div>
      <div class="col-md-4 col-sm-4 col-xm-4">
        <div class="card">
          <article class="col p-2">
            <div class="image-box">
              <div class="avatar bg-light">
                <img
                  src="https://img.icons8.com/officel/80/000000/commercial.png"
                  alt="subscription image"
                  class="subscription-image"
                />
              </div>
            </div>
            <h6 class="text-center">
              <strong>Advertise Your Event</strong>
            </h6>
            <p
              class="text-center text-justify text-break text-wrap"
            >Get many to know about your event out there and boost your event participation by advertising with us.</p>
            <button
              style="margin-top: 40px"
              class="btn btn-sm btn-success col-md-12"
              v-bind:class="{'btn-light text-dark': advert_options.length === 0}"
              @click="onAdvertise"
            >{{ advert_options.length === 0 ? 'Subscribe' : 'Unsubscribe'}}</button>
            <div class="red-badge">Coming Soon</div>
          </article>
        </div>
      </div>

      <div class="col-md-4 col-sm-4 col-xm-4"></div>
    </article>
    <article class="send-right">
      <button v-if="!setForUpdate" class="btn btn-success" @click="onSave">Next</button>
      <button v-else class="btn btn-success" @click="onSave">Save</button>
    </article>
    <!-- MODAL STARTS HERE -->
    <modal
      name="advertise-your-event-modal"
      :width="width"
      :height="height"
      :reset="true"
      :styles="infoBoxStyles"
    >
      <div class="card">
        <div class="card-header bg-success">
          <div class="card-title">Advertisement options</div>
        </div>
        <div class="card-body">
          <div class="row">
            <input
              type="checkbox"
              id="billboard"
              @change="onAdvertSelected($event, 'Billboard')"
              v-model="bill"
            />
            <label for="billboard" class="ml-2">Billboard</label>
          </div>
          <div class="row">
            <input
              type="checkbox"
              id="radio"
              @change="onAdvertSelected($event, 'Radio')"
              v-model="radio"
            />
            <label for="radio" class="ml-2">Radio</label>
          </div>
          <div class="row">
            <input
              type="checkbox"
              id="television"
              @change="onAdvertSelected($event, 'Television')"
              v-model="tel"
            />
            <label for="television" class="ml-2">Television</label>
          </div>
          <div class="row">
            <input
              type="checkbox"
              id="newspaper"
              @change="onAdvertSelected($event, 'Newspaper')"
              v-model="news"
            />
            <label for="newspaper" class="ml-2">Newspaper</label>
          </div>
          <div class="row">
            <input
              type="checkbox"
              id="market"
              @change="onAdvertSelected($event, 'Event360 Event Marketing')"
              v-model="market"
            />
            <label for="market" class="ml-2">Event360 Event Marketing</label>
          </div>
        </div>
        <div class="card-footer">
          <div class="send-right">
            <button class="my-btn btn-success ml-2" @click="closeModal">Done</button>
          </div>
        </div>
      </div>
    </modal>
    <!-- MODAL ENDS HERE -->
  </section>
</template>


<script>
import { apiUrl } from "../utils/config";

export default {
  name: "Subscription",
  props: { token: String },
  components: {},

  data() {
    return {
      infoBoxStyles: "background: none;",
      width: "250px",
      height: "auto",
      manage_your_event_selected: false,
      name_badge_printing_selected: false,
      exhibitor_and_sponsors_hub_selected: false,
      event_promotion_center_selected: false,
      hotel_booking_selected: false,
      manage_airport_pickup_booking_selected: false,
      // advertise_your_event: false,
      advert_options: [],
      bill: false,
      radio: false,
      tel: false,
      news: false,
      market: false,
      setForUpdate: false,
      sub_id: 0
    };
  },

  methods: {
    onAdvertise() {
      this.$modal.show("advertise-your-event-modal");
    },

    closeModal() {
      this.$modal.hide("advertise-your-event-modal");
    },

    onAdvertSelected(evt, value) {
      if (evt.target.checked) {
        this.advert_options.push(value);
      } else {
        const index = this.advert_options.indexOf(value);
        if (index > -1) {
          this.advert_options.splice(index, 1);
        }
      }
    },

    getBody() {
      return {
        id: this.sub_id,
        event_key: window.localStorage.getItem("current_event_key"),
        event_management: this.manage_your_event_selected,
        name_badges: this.name_badge_printing_selected,
        event_promotion: this.exhibitor_and_sponsors_hub_selected,
        exhibitors: this.event_promotion_center_selected,
        hotel_booking: this.hotel_booking_selected,
        airport_pick_up: this.manage_airport_pickup_booking_selected,
        event_advertisement: {
          value: this.advert_options.length === 0 ? false : true,
          options: this.advert_options
        }
      };
    },

    onSave() {
      const event = window.localStorage.getItem("current_event_key");
      if (event === null || event === "") {
        this.$emit(
          "onShowError",
          "To add subscriptions you must first create an event"
        );
        return;
      }

      const options = {
        method: !this.setForUpdate ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token
        },
        body: JSON.stringify(this.getBody())
      };
      this.$emit("showProgress", true);

      fetch(`${apiUrl}/api/subscription`, options)
        .then(async res => {
          this.$emit("showProgress", false);
          if (!this.setForUpdate) {
            if (res.status === 201) {
              this.$emit("onSwitchTab", "publish-tab");
              this.setForUpdate = true;

              const sub = await res.json();
              this.sub_id = sub.sub_id;
            }
          } else {
            if (res.status === 200) {
              this.$emit("onShowMessage", "Subscriptions updated");
            }
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>


<style scoped>
.subscription-image {
  width: 70px;
  height: 70px;
  margin: auto;
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
}

.image-box {
  display: flex;
  justify-content: center;
}

.avatar {
  position: relative;
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

p {
  font-size: 0.8rem;
}

.card article {
  position: relative;
}

.m-badge {
  background-color: lawngreen;
  position: absolute;
  width: 150px;
  top: 20px;
  left: -18px;
  transform: rotate(-32deg);
  clip-path: polygon(9% 0%, 78% 0%, 100% 100%, 0 100%);
  text-align: center;
  color: white;
  background-color: red;
  font-weight: bold;
}

.red-badge {
  background-color: lawngreen;
  position: absolute;
  width: 50px;
  top: 0px;
  left: 0px;
  /* transform: rotate(-32deg);
  clip-path: polygon(9% 0%, 78% 0%, 100% 100%, 0 100%); */
  text-align: center;
  color: white;
  background-color: red;
  font-weight: bold;
  font-size: 0.7rem;
  border-top-left-radius: 5px;
}

.blue-badge {
  background-color: lawngreen;
  position: absolute;
  width: 50px;
  top: 0px;
  left: 0px;
  /* transform: rotate(-32deg);
  clip-path: polygon(9% 0%, 78% 0%, 100% 100%, 0 100%); */
  text-align: center;
  color: white;
  background-color: blue;
  font-weight: bold;
  font-size: 0.7rem;
  border-top-left-radius: 5px;
}

.send-right {
  display: flex;
  justify-content: flex-end;
}

.my-btn {
  width: 30%;
}

label {
  margin-bottom: 0;
}

@media (max-width: 280) {
  .my-btn {
    width: 50%;
  }
}
</style>