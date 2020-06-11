<template>
  <!-- table of tickets -->
  <div class="card" id="last_step">
    <div class="card-header space-out-children">
      <h3 class="card-title">
        <b>Create Tickets</b>
      </h3>
      <div style="width: 70%"></div>
      <button class="btn btn-success">Next</button>
    </div>
    <div class="card-body">
      <div class="pl-3 pr-3">
        <h6>Country and Currency</h6>
        <hr class="green-rule" />
      </div>
      <div class="pl-3 pr-3">
        <p class="remove-bottom-margin">In which country will you be paid?</p>
        <div class="custom-row">
          <Dropdown
            :options="countryOptions"
            :disabled="false"
            name="countdrop"
            :maxItem="256"
            placeholder="Country"
            ref="countdropdown"
            v-on:selected="onCountry"
          ></Dropdown>
          <Dropdown
            :options="currencyOptions"
            :disabled="false"
            name="curdrop"
            :maxItem="183"
            placeholder="Currency"
            ref="curdropdown"
            v-on:selected="onCurrency"
          ></Dropdown>
          <button class="btn btn-success" @click="saveCountryCurrency">
            Save
          </button>
        </div>
        <small>You cannot change country once your event is published</small>
      </div>
      <div class="card-header">
        <div>
          <h6>Tickets</h6>
          <hr class="green-rule" />
        </div>
        <div class="row">
          <div class="col-md-6">
            <p>Customize tickets and prices here</p>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <button
              type="button"
              class="btn btn-block btn-success btn-md next"
              data-toggle="modal"
              data-target="#modal-default"
            >
              <i class="fas fa-plus"></i> Create Ticket
            </button>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-6"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card-body p-0">
            <table class="table table-striped projects">
              <thead>
                <tr>
                  <th style="width: 15%">Ticket</th>
                  <th style="width: 1%">Price</th>
                  <th style="width: 30%">Fees</th>
                  <th style="width: 10%">Attendee Pays</th>
                  <th>Organizer (You) Get</th>
                  <th style="width: 12%">Ticket Sales</th>
                  <th style="width: 20%" class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 Day Badge</td>
                  <td>
                    <a>$100.00</a>
                  </td>
                  <td>
                    Paid by Attendee Registration Fee Processing Fee (By Stripe)
                    App Fee.
                  </td>
                  <td>
                    <a>$100.00</a>
                  </td>
                  <td>
                    <a>$60.00</a>
                  </td>
                  <td>
                    <a>0/200</a>
                  </td>
                  <td
                    style="display: flex; justify-content: space-evenly; padding-top: 30%; padding-bottom: 30%"
                  >
                    <button class="edit-btn">
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="del-btn">
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- default modal for free or paid ticket -->
      <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Create Ticket</h4>
              <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p style="text-align: center;">
                What type of Ticket are you creating ?
              </p>
              <div class="row" ref="setNewHMTL">
                <div class="col-md-5 col-sm-5 col-xm-5">
                  <button
                    :id="id"
                    type="button"
                    class="btn btn-block btn-success"
                    data-toggle="modal"
                    data-target="#free_Ticket"
                  >
                    Free Ticket
                  </button>
                </div>
                <div class="col-md-2 col-sm-2 col-xm-2">
                  <p style="text-align: center;">or</p>
                </div>
                <div class="col-md-5 col-sm-5 col-xm-5">
                  <button
                    type="button"
                    class="btn btn-block btn-success"
                    data-toggle="modal"
                    data-target="#paid_Ticket"
                  >
                    Paid Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- paid ticket modal ends -->

      <!-- ============Free tickets ============-->

      <div class="row">
        <div class="col-md-12">
          <div class="modal fade" id="free_Ticket">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header bg-success">
                  <h4 class="modal-title">Free Ticket</h4>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="col-md-12">
                    <div class>
                      <div class>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="exampleInputE">
                                Ticket Name
                                <span style="color: red;">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputE"
                                placeholder="e.g. Genenral Ticket"
                                v-model="freeTicketName"
                                v-bind:class="{
                                  'is-empty': invalidFreeTicketName,
                                }"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                              <label for="exampleInput">
                                Quantity Available
                                <span style="color: red;">*</span>
                              </label>
                              <input
                                v-bind:class="{
                                  'is-empty': invalidFreeQuantity,
                                }"
                                type="number"
                                class="form-control"
                                id="exampleInput"
                                placeholder="0"
                                v-model="freeTicketQuantity"
                              />
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label>
                                Limit Per Person
                                <span style="color: red;">*</span>
                              </label>
                              <select
                                v-bind:class="{ 'is-empty': invalidFreeLimit }"
                                v-model="freeTicketLimitPerson"
                                class="form-control select2"
                                style="width: 100%;"
                              >
                                <option disabled selected="selected"
                                  >...</option
                                >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <div class="form-group">
                              <label>
                                Ticket Sales Start
                                <span style="color: red;">*</span>
                              </label>

                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="far fa-calendar-alt"></i>
                                  </span>
                                </div>
                                <input
                                  v-model="freeTicketSaleStartDate"
                                  type="date"
                                  class="form-control"
                                  v-bind:class="{
                                    'is-empty': invalidFreeStartDate,
                                  }"
                                />
                              </div>
                              <!-- /.input group -->
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <label>time</label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="far fa-clock"></i>
                                  </span>
                                </div>
                                <input
                                  v-model="freeTicketSaleStartTime"
                                  class="form-control"
                                  type="time"
                                  v-bind:class="{
                                    'is-empty': invalidFreeStartTime,
                                  }"
                                />
                              </div>
                              <!-- /.input group -->
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <label>
                                Ticket Sales End
                                <span style="color: red;">*</span>
                              </label>

                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="far fa-calendar-alt"></i>
                                  </span>
                                </div>
                                <input
                                  v-model="freeTicketSaleEndDate"
                                  type="date"
                                  class="form-control"
                                  v-bind:class="{
                                    'is-empty': invalidFreeEndDate,
                                  }"
                                />
                              </div>
                              <!-- /.input group -->
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <label>time</label>

                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="far fa-clock"></i>
                                  </span>
                                </div>
                                <input
                                  v-model="freeTicketSaleEndTime"
                                  class="form-control"
                                  type="time"
                                  id="reservationtime"
                                  v-bind:class="{
                                    'is-empty': invalidFreeEndTime,
                                  }"
                                />
                              </div>
                              <!-- /.input group -->
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="ticket_visibility">
                              <h2 class="lead">
                                <b>Ticket Visibility</b>
                              </h2>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="visibility"
                                checked
                                @change="onAlwaysVisible"
                                id="always-visible"
                              />
                              <label
                                for="always-visible"
                                class="form-check-label"
                                >Always Visible</label
                              >
                            </div>

                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="visibility"
                                @change="onHiddenAtSpecificTimeSelected"
                                id="hide-at"
                              />
                              <label class="form-check-label" for="hide-at"
                                >Hidden at a specific time</label
                              >
                            </div>
                            <div
                              class="form-check ml-2"
                              v-if="showHiddenOptions"
                            >
                              <input
                                class="form-check-input"
                                id="until-start"
                                type="radio"
                                name="hide-specific"
                                @change="onUntilSalesStart"
                              />
                              <label class="form-check-label" for="until-start"
                                >Until Ticket sales start</label
                              >
                            </div>
                            <div
                              class="form-check ml-2"
                              v-if="showHiddenOptions"
                            >
                              <input
                                class="form-check-input"
                                id="until-end"
                                type="radio"
                                name="hide-specific"
                                @change="onUntilSalesEnd"
                              />
                              <label class="form-check-label" for="until-end"
                                >Until Ticket sales ends</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="onCreateFreeTicket"
                  >
                    Create
                  </button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
        </div>
      </div>

      <!-- ============free ticket ends -->
      <div class="row">
        <div class="col-md-12">
          <div class="modal fade" id="paid_Ticket">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header bg-success">
                  <h4 class="modal-title">Paid Ticket</h4>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="col-md-12">
                    <div class>
                      <div class>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="exampleInputEmail1">
                                Ticket Name
                                <span style="color: red;">*</span>
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter name"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                              <label>
                                Price
                                <span style="color: red;">*</span>
                              </label>
                              <input
                                type="number"
                                step="0.01"
                                class="form-control"
                                placeholder="0.00"
                              />
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label for>
                                Quantity Available
                                <span style="color: red;">*</span>
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                placeholder="0"
                              />
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label>
                                Limit Per Person
                                <span style="color: red;">*</span>
                              </label>
                              <select
                                class="form-control select2"
                                style="width: 100%;"
                              >
                                <option disabled selected="selected"
                                  >...</option
                                >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3">
                            <div class="form-group">
                              <label>
                                Ticket Sales Start
                                <span style="color: red;">*</span>
                              </label>

                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="far fa-calendar-alt"></i>
                                  </span>
                                </div>
                                <input
                                  type="date"
                                  class="form-control"
                                  id="reservation"
                                />
                              </div>
                              <!-- /.input group -->
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <label>time</label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="far fa-clock"></i>
                                  </span>
                                </div>
                                <input
                                  class="form-control"
                                  type="date"
                                  id="reservationtime"
                                />
                              </div>
                              <!-- /.input group -->
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <label>
                                Ticket Sales End
                                <span style="color: red;">*</span>
                              </label>

                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="far fa-calendar-alt"></i>
                                  </span>
                                </div>
                                <input
                                  type="date"
                                  class="form-control"
                                  id="reservation"
                                />
                              </div>
                              <!-- /.input group -->
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <label>time</label>

                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <i class="far fa-clock"></i>
                                  </span>
                                </div>
                                <input
                                  class="form-control"
                                  type="date"
                                  id="reservationtime"
                                />
                              </div>
                              <!-- /.input group -->
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="ticket_visibility">
                              <h2 class="lead">Ticket Visibility</h2>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                checked
                                id="paid-always"
                                name="top-level"
                                @change="onAlwaysVisible_paid"
                              />
                              <label class="form-check-label" for="paid-always"
                                >Always Visible</label
                              >
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                id="paid-hidden"
                                name="top-level"
                                @change="onHiddenAtSpecificTimeSelected_paid"
                              />
                              <label class="form-check-label" for="paid-hidden"
                                >Hidden at a specific time</label
                              >
                            </div>
                            <div
                              class="form-check ml-2"
                              v-if="showHiddenOptions_paid"
                            >
                              <input
                                class="form-check-input"
                                type="radio"
                                id="paid-start"
                                name="paid-hidden-end"
                              />
                              <label class="form-check-label" for="paid-start"
                                >Until Ticket sales start</label
                              >
                            </div>
                            <div
                              class="form-check ml-2"
                              v-if="showHiddenOptions_paid"
                            >
                              <input
                                class="form-check-input"
                                type="radio"
                                name="paid-hidden-end"
                                id="paid-end"
                              />
                              <label class="form-check-label" for="paid-end"
                                >Until Ticket sales ends</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group mt-2">
                              <label>
                                Fees
                                <span style="color: red;">*</span>
                              </label>
                              <select
                                class="form-control select2"
                                style="width: 100%;"
                              >
                                <option selected="selected"
                                  >pass fees on</option
                                >
                                <option>absorb</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <label style="visibility: hidden;">
                              Fees
                              <span style="color: red;">*</span>
                            </label>
                            <p class="p-as-label">
                              All fees will be paid by the attendee. The
                              organiser will receive money equal to the full
                              pocket price.
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div
                              class="fees_shade"
                              style="background-color: #f4f6f9"
                            >
                              <div style="padding: 0.2rem;">
                                <div class="space-out-children">
                                  <small>Registration fees:</small>
                                  <small>N/A</small>
                                </div>
                                <div class="space-out-children">
                                  <small>Processing fees (by Stripe):</small>
                                  <small>N/A</small>
                                </div>
                                <div class="space-out-children">
                                  <small>Attendees pays:</small>
                                  <small>N/A</small>
                                </div>
                                <div class="space-out-children">
                                  <small class="text-success text-secondary"
                                    >Organizer (you) gets:</small
                                  >
                                  <small class="text-success text-secondary"
                                    >N/A</small
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12 mt-2">
                            <p class="p-as-label">
                              <span style="color: red;">*</span> Stripe charges
                              a processing fee. This includes transaction fees
                              and bank transfer fees. This fee is beyond
                              Event360's control. Please refer to stripe website
                              for their fees
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" class="btn btn-success">Create</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- table of ticket ends -->
</template>

<script>
import Dropdown from 'vue-simple-search-dropdown';
import countries from '../utils/countries';
import currency from '../utils/currency';
import { mapGetters, mapActions } from 'vuex';
import { apiUrl } from '../utils/config';
import $ from 'jquery';

export default {
  name: 'TicketTable',
  components: {
    Dropdown,
  },

  props: {
    selectedCountry: Object,
    selectedCurrency: Object,
  },

  data() {
    return {
      countryOptions: countries,
      currencyOptions: currency,
      showHiddenOptions: false,
      showHiddenOptions_paid: false,
      freeTicketName: '',
      freeTicketQuantity: 0,
      freeTicketLimitPerson: '',
      freeTicketSaleStartDate: '',
      freeTicketSaleStartTime: '',
      freeTicketSaleEndDate: '',
      freeTicketSaleEndTime: '',
      freeTicketVisibility: 1,
      invalidFreeQuantity: false,
      invalidFreeTicketName: false,
      invalidFreeLimit: false,
      invalidFreeStartDate: false,
      invalidFreeStartTime: false,
      invalidFreeEndDate: false,
      invalidFreeEndTime: false,
      id: 1,
    };
  },

  methods: {
    ...mapActions(['onCountryOfPaymentSet', 'onCurrencyOfPaymentSet']),

    onCountry(country) {
      this.onCountryOfPaymentSet(country);
    },

    onCurrency(currency) {
      this.onCurrencyOfPaymentSet(currency);
    },

    onHiddenAtSpecificTimeSelected() {
      this.showHiddenOptions = true;
    },

    onAlwaysVisible() {
      this.freeTicketVisibility = 1;
      this.showHiddenOptions = false;
    },

    onUntilSalesStart() {
      this.freeTicketVisibility = 2;
    },

    onUntilSalesEnd() {
      this.freeTicketVisibility = 3;
    },

    onHiddenAtSpecificTimeSelected_paid() {
      this.showHiddenOptions_paid = true;
    },

    onAlwaysVisible_paid() {
      this.showHiddenOptions_paid = false;
    },

    onCreateFreeTicket() {
      if (this.validateFreeTicket()) {
        console.log(this.setPostBody());
        return;
      }

      // $('#free_Ticket').removeClass('show');
      // // $('#modal-default').removeClass('show');
      // // // $('.modal-backdrop').removeClass('show');
      // // $('#free_Ticket').removeAttr('aria-modal');
      // // $('#free_Ticket').attr('aria-modal', false);
      // // $('#free_Ticket').attr('aria-hidden', true);
      // // $('#free_Ticket').css({ display: 'none' });
      // // $('.modal-backdrop').css({ display: 'none' });
      // // $('.modal-backdrop').hide();
      // // $('#free_Ticket').hide();
      // // $('.wrapper').focus();
      // // $('#modal-default').hide()

      // // $(`#free_Ticket${this.id}`).removeAttr("aria-modal");
      // // $(`#free_Ticket${this.id}`).attr("aria-hidden", "true");
      // // $('.modal-backdrop').removeClass('show');
      // // $('.modal-backdrop').remove();
      // $(`#free_Ticket${this.id}`).css({ display: "none" });
      // // $(`#free_Ticket${this.id}`).remove();
      // const list = document.querySelectorAll('.modal-backdrop');
      // list[0].remove();

      // const bod = document.getElementsByTagName("body");
      // bod[0].classList.remove("modal-open");
      // bod[0].removeAttribute("style");
      // ++this.id;

      // $(`#free_Ticket`)
      //   .modal()
      //   .hide();
      // $('.modal-backdrop').remove();
      // $('#free_Ticket .close').click();
      $('#free_Ticket').modal('hide');
    },

    setPostBody() {
      const body = {
        name: this.freeTicketName,
        price: 0,
        type: 'free',
        event_key: '8a064820-0546-452f-b618-73a5d134758f', //window.localStorage.getItem("current_event_key")
        limit_per_person: this.freeTicketLimitPerson,
        sale_start: `${this.freeTicketSaleStartDate} ${this.freeTicketSaleStartTime}`,
        sale_end: `${this.freeTicketSaleEndDate} ${this.freeTicketSaleEndTime}`,
        visibility: this.freeTicketVisibility,
        fees_option: 3,
        quantity: this.freeTicketQuantity,
      };

      return body;
    },

    validateFreeTicket() {
      this.invalidFreeQuantity = false;
      this.invalidFreeTicketName = false;
      this.invalidFreeLimit = false;
      this.invalidFreeStartDate = false;
      this.invalidFreeStartTime = false;
      this.invalidFreeEndDate = false;
      this.invalidFreeEndTime = false;

      if (!this.freeTicketName) {
        this.invalidFreeTicketName = true;
      }

      if (this.freeTicketQuantity === 0) {
        this.invalidFreeQuantity = true;
      }

      if (!this.freeTicketLimitPerson) {
        this.invalidFreeLimit = true;
      }

      if (!this.freeTicketSaleStartDate) {
        this.invalidFreeStartDate = true;
      }

      if (!this.freeTicketSaleStartTime) {
        this.invalidFreeStartTime = true;
      }

      if (!this.freeTicketSaleEndDate) {
        this.invalidFreeEndDate = true;
      }

      if (!this.freeTicketSaleEndTime) {
        this.invalidFreeEndTime = true;
      }

      if (
        this.invalidFreeEndTime ||
        this.invalidFreeEndDate ||
        this.invalidFreeStartTime ||
        this.invalidFreeStartDate ||
        this.invalidFreeLimit ||
        this.invalidFreeQuantity ||
        this.invalidFreeTicketName
      ) {
        return false;
      }

      return true;
    },

    saveCountryCurrency() {
      const token = `Bearer ${window.localStorage.getItem('token')}`;
      const body = {
        event_key: '8a064820-0546-452f-b618-73a5d134758f', //window.localStorage.getItem("current_event_key"),
        country: this.ticketCountryOfPayment.name,
        currency: this.ticketCurrencyOfPayment.name,
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(body),
      };

      fetch(`${apiUrl}/api/event-pay-option`, options).catch((err) => {
        console.log(err);
        this.$emit(
          'showFlagFromTicketTable',
          'Could not save, please check internet connection'
        );
      });
    },
  },

  computed: {
    ...mapGetters([
      'ticketCountryOfPayment',
      'ticketCurrencyOfPayment',
      'proceedToTicketTable',
    ]),
  },

  mounted() {
    this.$refs.curdropdown.searchFilter = this.selectedCurrency.name;
    this.$refs.countdropdown.searchFilter = this.selectedCountry.name;
  },
}; //jQuery351083681624253124621
</script>

<style scoped>
.green-rule {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid rgb(120, 229, 30);
  margin: 1em 0;
  padding: 0;
}

.is-empty {
  border-color: red !important;
  border-style: solid !important;
  border-width: 1px;
}

.custom-row {
  display: flex;
  justify-content: flex-start;
  width: 40%;
}

.remove-bottom-margin {
  margin-bottom: 0;
}

.custom-row button {
  width: 50%;
  margin-left: 5px;
}

.card-body {
  overflow: auto;
}

.edit-btn {
  background-color: transparent;
  border: none;
  color: rgb(10, 171, 189);
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}

.edit-btn:active {
  color: rgb(211, 249, 253);
}

table thead tr th,
table tbody tr td {
  font-weight: normal;
  font-size: 0.8rem;
}

.del-btn {
  background-color: transparent;
  border: none;
  color: rgb(235, 48, 48);
  font-size: 16px;
  cursor: pointer;
}

.del-btn:active {
  color: rgb(243, 193, 193);
}

label:not(.form-check-label):not(.custom-file-label) {
  font-weight: inherit;
}

.space-out-children {
  display: flex;
  justify-content: space-between;
}

.p-as-label {
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .custom-row button {
    width: 100%;
    margin-left: 0px;
  }

  .custom-row {
    display: inline;
    columns: 150px;
  }
}
</style>
