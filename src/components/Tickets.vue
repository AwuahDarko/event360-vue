<template>
  <div class="ticket_page">
    <div id="ticket_start">
      <div class="card-body center">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <div class="ticket">
              <p style="text-align: center; ">
                Create a ticketing webpage with lower registration fees in 5
                minutes.
                <br />
                <span style="color: #07a254">
                  Check how Event360 Cut your Event Registration Fee by
                  60%
                </span>
              </p>
              <h1>Ticketing Options</h1>
            </div>
          </div>

          <div class="col-md-1"></div>
        </div>
      </div>

      <div class="row d-flex align-items-stretch">
        <!-- <div class="col-md-1"></div> -->
        <div class="col-sm-6 col-md-6 align-items-stretch">
          <div class="card bg-light">
            <div class="card-header text-muted border-bottom text-center">
              <b>Free Tickets</b>
            </div>
            <div class="pt-4 border-bottom pb-4">
              <div class="row">
                <div class="col-12 text-center">
                  <h2 class="lead">
                    <b>Free for free tickets</b>
                  </h2>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="col-12 text-center">
                <div style="width: 293px; margin:auto">
                  <p class="text-left">Free Tickets Include:</p>
                  <ul class="text-left">
                    <li>Ticket creation</li>
                    <li>Custom question forms</li>
                    <li>Ticketing web page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-md-6 align-items-stretch">
          <div class="card bg-light">
            <div class="card-header text-muted border-bottom text-center">
              <b>Paid Tickets</b>
            </div>
            <div class="pt-4 border-bottom pb-4">
              <div class="row">
                <div class="col-12 text-center">
                  <h2 class="lead">
                    <b>1% + $0.99 per paid ticket</b>
                  </h2>
                  <span class="small">Capped at $5.00 per ticket</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="col-12 text-center">
                <h6 class>
                  <b>Paid tickets include:</b>
                </h6>

                <div style="width: 293px; margin:auto">
                  <p class="text-left">Paid Tickets Include:</p>
                  <ul class="text-left">
                    <li>Free tickets</li>
                    <li>Multi-type ticket creation</li>
                    <li>Custom question forms</li>
                    <li>Ticketing web page</li>
                    <li>Discount codes</li>
                    <li>Ticket sale tracking</li>
                  </ul>
                  <label class="important-message text-left">
                    Note: excludes the 3rd party credit card processing
                    fee
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-1"></div> -->
      </div>

      <!-- footer of ticket -->
      <div class="card-body center">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="ticket" style="text-align: center;">
              <button
                type="button"
                class="btn btn-info btn-lg mx-auto"
                @click="showTicketCountryCurrency"
                style="background-color: #07a254;"
              >Get Started</button>
            </div>
          </div>

          <div class="col-md-4"></div>
        </div>
      </div>
    </div>

    <!-- ========modals start here -->

    <section class="ticket_attendees">
      <modal name="ticket-country-currency" :height="height" :width="width" :reset="true">
        <div class="card" id="ticket_attend">
          <div class="card-header">
            <span class="heading">Tickets</span>
          </div>
          <div class="card-body">
            <h6>
              <b>Do your attendees need to pay to register for an event?</b>
            </h6>
            <div class="form-check pl-4">
              <input
                class="form-check-input"
                type="radio"
                name="pay-option"
                @change="markEventAsFree"
              />
              <label class="form-check-label">No, the event is free for everybody</label>
            </div>
            <div class="form-check pl-4">
              <input
                class="form-check-input"
                type="radio"
                name="pay-option"
                checked
                @change="markEventAsPaid"
              />
              <label class="form-check-label">Yes, attendees will be paying for registration</label>
            </div>
            <!-- country -->
            <h6 class="mt-2">
              <b>Select the country of your Bank to receive the payout</b>
            </h6>
            <div v-bind:class="{ 'is-empty': countryNotSet }" class="col-md-6">
              <div class="form-group">
                <Dropdown
                  :options="countryOptions"
                  :disabled="false"
                  name="countrydrop"
                  :maxItem="256"
                  placeholder="Country"
                  ref="countrydropdown"
                  v-on:selected="onCountry"
                ></Dropdown>
              </div>
            </div>
            <!-- currency -->
            <h6 class="mt-2">
              <b>Select the Currency to receive the payout</b>
            </h6>
            <div v-bind:class="{ 'is-empty': currencyNotSet}" class="col-md-6">
              <div class="form-group">
                <Dropdown
                  :options="currencyOptions"
                  :disabled="false"
                  name="currencydrop"
                  :maxItem="183"
                  placeholder="Currency"
                  ref="currencydropdown"
                  v-on:selected="onCurrency"
                ></Dropdown>
              </div>
            </div>
            <div class="col-md-8">
              <small>Please contact us if your country/currency is not listed</small>
            </div>
          </div>
          <div class="card-footer">
            <div class="send-right">
              <button
                type="button"
                class="btn btn-success my-btn"
                @click="onNextFromCountryCurrencyDialog"
              >Next</button>
            </div>
          </div>
        </div>
      </modal>
      <!-- =====ticket cost========== -->
      <modal
        name="ticket-info-box"
        :height="infoModalHeight"
        :width="width"
        :reset="true"
        :styles="infoBoxStyles"
      >
        <div class="card" id="ticket_cost">
          <div class="card-header">
            <span class="heading">Tickets</span>
          </div>
          <div class="card-body">
            <h6 class="text-center">
              <b>How much does the ticketing cost you?</b>
            </h6>
            <div class="form-check left-align-text">
              With Event360's registration, you can create both free and paid
              tickets.
            </div>
            <div class="form-check left-align-text mt-2">
              <h6>
                <b>Free Tickets</b>
              </h6>Event360 registration is free for free tickets
            </div>

            <div class="form-check left-align-text mt-2">
              <h6>
                <b>Paid Tickets</b>
              </h6>We will charge the Event360 registration fee directly from your
              ticket proceeds. This fee can pass onto the attendees as well.
            </div>
            <div class="form-check mt-2" style="background-color: #f4f6f9">
              <small>
                Event360 Registration Fee: 1% of ticket price + $0.99 per
                ticket (Capped at $5.00 per ticket)
              </small>
            </div>
            <div class="form-check" style="background-color: #f4f6f9">
              <small>
                Merchant Processing Fee: 3.4% of ticket price + $0.30 per
                ticket
                <span
                  style="color: red"
                >*</span>Subject to change by
                stripe
              </small>
            </div>
            <h6 class="text-center mt-3">
              <b>How will the payout work?</b>
            </h6>
            <div
              class="form-check left-align-text"
            >The Registration payout will be split into 2 payments</div>
            <div class="form-check left-align-text mt-2">
              <h6>
                <b>First payout</b>
              </h6>You will receive 50% of the ticket sales 2 weeks after the event
              ends.
            </div>
            <div class="form-check left-align-text mt-2">
              <h6>
                <b>Second payout</b>
              </h6>You will receive the remaining payment 1 month after the event
              ends.
              <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" @change="acceptTerms" />
                <label class="form-check-label">
                  I have read and understand the information presented
                  above.
                </label>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="send-right">
              <button
                type="button"
                class="btn btn-success my-btn"
                @click="onNextFromTicketInfoDialog"
              >Next</button>
            </div>
          </div>
        </div>
      </modal>
    </section>
  </div>
</template>

<script>
import Dropdown from "vue-simple-search-dropdown";
import countries from "../utils/countries";
import currency from "../utils/currency";
import { mapActions } from "vuex";

export default {
  name: "Ticket",
  components: {
    Dropdown
  },
  data() {
    return {
      width: "50%",
      height: "422px",
      infoModalHeight: "600",
      countryOptions: countries,
      currencyOptions: currency,
      infoBoxStyles: "overflow: auto; background-color: rgb(0,0,0,0)",
      countryNotSet: false,
      currencyNotSet: false,
      termsAccepted: false
    };
  },
  methods: {
    ...mapActions([
      "onEventPaymentTypeSet",
      "onCountryOfPaymentSet",
      "onCurrencyOfPaymentSet",
      "onProceedToTicketTable"
    ]),

    showTicketCountryCurrency() {
      this.countryNotSet = false;
      this.currencyNotSet = false;
      this.onEventPaymentTypeSet(true);
      this.$modal.show("ticket-country-currency");
    },

    hideTicketCountryCurrency() {
      this.$modal.hide("ticket-country-currency");
    },

    showTicketInfoBox() {
      this.hideTicketCountryCurrency();
      this.$modal.show("ticket-info-box");
    },

    hideTicketInfoBox() {
      this.$modal.hide("ticket-info-box");
    },

    markEventAsFree() {
      this.onEventPaymentTypeSet(false);
    },

    markEventAsPaid() {
      this.onEventPaymentTypeSet(true);
    },

    onNextFromCountryCurrencyDialog() {
      this.countryNotSet = false;
      this.currencyNotSet = false;

      const country = this.$refs.countrydropdown.selected;
      const currency = this.$refs.currencydropdown.selected;

      // if (Object.keys(country).length === 0 && country.constructor === Object) {
      //   this.countryNotSet = true;
      //   return;
      // }

      // if (
      //   Object.keys(currency).length === 0 &&
      //   currency.constructor === Object
      // ) {
      //   this.currencyNotSet = true;
      //   return;
      // }

      this.onCountryOfPaymentSet({ id: country.id, name: country.name });
      this.onCurrencyOfPaymentSet({ id: currency.id, name: currency.name });
      this.showTicketInfoBox();
    },

    onNextFromTicketInfoDialog() {
      if (this.termsAccepted) {
        this.onProceedToTicketTable(true);
        this.hideTicketInfoBox();
      }
    },

    acceptTerms(evt) {
      this.termsAccepted = evt.target.checked;
    },

    onCountry(country) {
      this.onCountryOfPaymentSet(country);
    },

    onCurrency(currency) {
      this.onCurrencyOfPaymentSet(currency);
    }
  },

  mounted() {
    const mq = window.matchMedia("(max-width: 800px)");
    if (mq.matches) {
      this.width = "80%";
      this.height = "530px";
    }

    const media = window.matchMedia("(min-width: 411px)");
    if (media.matches) {
      this.height = "420px";
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/adminlte.min.css");
@import url("../assets/css/fontawesome-free/css/all.min.css");
/*@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css');*/

body {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
}

.is-empty {
  border-color: rgb(238, 59, 59) !important;
}

.important-message {
  font-size: 1rem;
  margin: 0;
  padding-right: 30px;
  font-weight: 800 !important;
}

.content-header h1 {
  text-align: center !important;
}

.heading {
  font-size: 1.3rem;
}

.left-align-text {
  padding-left: 0px !important;
}

@media (min-width: 850px) {
  .send-right {
    display: flex;
    justify-content: flex-end;
  }

  .my-btn {
    width: 30%;
  }
}

@media (max-width: 849px) {
  .my-btn {
    width: 100%;
  }
}
</style>
