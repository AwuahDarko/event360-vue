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
          <button class="btn btn-success" @click="doMe">Save</button>
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
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p style="text-align: center;">What type of Ticket are you creating ?</p>
              <div class="row">
                <div class="col-md-5 col-sm-5 col-xm-5">
                  <div style="width: 60%; float: right;">
                    <button
                      type="button"
                      class="btn btn-block btn-success"
                      data-toggle="modal"
                      data-target="#free_Ticket"
                    >Free Ticket</button>
                  </div>
                </div>
                <div class="col-md-2 col-sm-5 col-xm-5">
                  <p style="text-align: center;">or</p>
                </div>
                <div class="col-md-5 col-sm-5 col-xm-5">
                  <div style="width: 60%">
                    <button
                      type="button"
                      class="btn btn-block btn-success"
                      data-toggle="modal"
                      data-target="#paid_Ticket"
                    >Paid Ticket</button>
                  </div>
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
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                                type="number"
                                class="form-control"
                                id="exampleInput"
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
                              <select class="form-control select2" style="width: 100%;">
                                <option selected="selected">...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
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
                                <input type="date" class="form-control" />
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
                                <input class="form-control" type="time" />
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
                                <input type="date" class="form-control" />
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
                                <input class="form-control" type="time" id="reservationtime" />
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
                              <input class="form-check-input" type="radio" name="visibility" />
                              <label class="form-check-label">Always Visible</label>
                            </div>

                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="visibility" />
                              <label class="form-check-label">Hidden at a specific time</label>
                            </div>
                            <div class="form-check ml-2">
                              <input class="form-check-input" type="checkbox" checked />
                              <label class="form-check-label">Until Ticket sales start</label>
                            </div>
                            <div class="form-check ml-2">
                              <input class="form-check-input" type="checkbox" checked />
                              <label class="form-check-label">Until Ticket sales ends</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer justify-content-between">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary">Create</button>
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
                <div class="modal-header">
                  <h4 class="modal-title">Paid Ticket</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                              <label for="exampleInputEmail1">
                                Price
                                <span style="color: red;">*</span>
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
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
                              <select class="form-control select2" style="width: 100%;">
                                <option selected="selected">...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
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
                                <input type="date" class="form-control" id="reservation" />
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
                                <input class="form-control" type="date" id="reservationtime" />
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
                                <input type="date" class="form-control" id="reservation" />
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
                                <input class="form-control" type="date" id="reservationtime" />
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
                              <input class="form-check-input" type="radio" />
                              <label class="form-check-label">Always Visible</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" />
                              <label class="form-check-label">Always Hidden</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" />
                              <label class="form-check-label">Hidden at a specific time</label>
                            </div>
                            <div class="form-check ml-2">
                              <input class="form-check-input" type="checkbox" checked />
                              <label class="form-check-label">Until Ticket sales start</label>
                            </div>
                            <div class="form-check ml-2">
                              <input class="form-check-input" type="checkbox" checked />
                              <label class="form-check-label">Until Ticket sales ends</label>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                              <label>
                                Fees
                                <span style="color: red;">*</span>
                              </label>
                              <select class="form-control select2" style="width: 100%;">
                                <option selected="selected">Pass Fees on</option>
                                <option>1</option>
                                <option>2</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <label style="visibility: hidden;">
                              Fees
                              <span style="color: red;">*</span>
                            </label>
                            <p>
                              All fees will be paid by the attendee. The organiser
                              will receive money equal to the full pocket price.
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3">
                            <div class="fees_shade" style="background-color: #f4f6f9">
                              <div style="padding: 0.2rem;">
                                <p>
                                  <small>
                                    Registration fees:
                                    <span class="float-right">N/A</span>
                                  </small>
                                </p>
                                <p>
                                  <small>
                                    Processing fees(By stripe):
                                    <span class="float-right">N/A</span>
                                  </small>
                                </p>
                                <p>
                                  <small>
                                    Attendees Pays:
                                    <span class="float-right">N/A</span>
                                  </small>
                                </p>
                                <p>
                                  <small>
                                    Organizer (you) gets:
                                    <span class="float-right">N/A</span>
                                  </small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12 mt-2">
                            <p>
                              <span style="color: red;">*</span> Stripe charges a
                              processing fee. This includes transaction fees and
                              bank transfer fees. This fee is beyond Event360's
                              control. Please refer to stripe website for their
                              fees
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer justify-content-between">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary">Create</button>
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
import Dropdown from "vue-simple-search-dropdown";
import countries from "../utils/countries";
import currency from "../utils/currency";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TicketTable",
  components: {
    Dropdown
  },
  data() {
    return {
      countryOptions: countries,
      currencyOptions: currency
    };
  },

  methods: {
    ...mapActions(["onCountryOfPaymentSet", "onCurrencyOfPaymentSet"]),

    onCountry(country) {
      this.onCountryOfPaymentSet(country);
    },

    onCurrency(currency) {
      this.onCurrencyOfPaymentSet(currency);
    },

    doMe() {
      console.log(this.ticketCurrencyOfPayment.name);
      console.log(this.ticketCountryOfPayment.id);
    }
  },

  mounted() {
    console.log(this.aticketCurrencyOfPayment.value);
    console.log(this.aticketCountryOfPayment.value);
    console.log(this.proceedToTicketTable);
    // this.$refs.curdropdown.searchFilter = this.ticketCurrencyOfPayment.name;
    // this.$refs.countdropdown.searchFilter = this.ticketCountryOfPayment.name;
  },

  beforeUpdate() {
    console.log(this.ticketCurrencyOfPayment.name);
    console.log(this.ticketCountryOfPayment.id);
  },

  computed: {
    ...mapGetters([
      "aticketCountryOfPayment",
      "aticketCurrencyOfPayment",
      "proceedToTicketTable"
    ])
  }
};
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

.custom-row {
  display: flex;
  justify-content: start;
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

.space-out-children {
  display: flex;
  justify-content: space-between;
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
