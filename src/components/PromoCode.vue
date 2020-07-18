<template>
  <div class="card">
    <div class="card-body">
      <hr class="green-rule" />
      <div class="row">
        <div class="col-md-12">
          <p>Create codes to offer discounts to registrants.</p>
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
            data-target="#promo_code"
            id="create-code-btn"
            @click="setForUpdate = false"
          >
            <i class="fas fa-plus"></i> Create Code
          </button>
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-6"></div>
      </div>
    </div>

    <div class="row">
      <div class="container">
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col-ev col-a">Code</div>
            <div class="col-ev col-b">Discount</div>
            <div class="col-ev col-c">Start</div>
            <div class="col-ev col-c">End</div>
            <div class="col-ev col-c">Usage</div>
            <div class="col-ev col-e">Actions</div>
          </li>
          <div v-if="promo_codes.length > 0">
            <li
              class="table-row border border-success mb-4"
              v-for="promo in promo_codes"
              :key="promo.promo_id"
            >
              <div class="col-ev col-a" data-label="Code">{{ promo.code }}</div>
              <div
                class="col-ev col-b"
                data-label="Discount"
              >{{ promo.discount_type === 'per' ? `${promo.discount}%`: `GH\u20B5 \n ${promo.discount}` }}</div>
              <div class="col-ev col-c" data-label="Start">{{ promo.start_date }}</div>
              <div class="col-ev col-c" data-label="End">{{ promo.end_date }}</div>
              <div
                class="col-ev col-c"
                data-label="Usage"
              >{{ promo.limit ? `0/${promo.limit}` : `unlimited` }}</div>
              <div class="col-ev col-e" data-label="Actions">
                <button
                  class="edit-btn mr-2"
                  data-toggle="modal"
                  data-target="#promo_code"
                  @click="setValuesOnEdit(promo)"
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>

                <button class="del-btn ml-2" @click="deletePromoCode(promo)">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </li>
          </div>
          <div v-else>
            <li class="table-row border border-success">
              <div class="col-ev col-f" data-label>Add codes by clicking "Create Code" button above</div>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <!-- Create Promo code modal -->
    <div class="row">
      <div class="col-md-12">
        <div class="modal fade" data-backdrop="static" data-keyboard="false" id="promo_code">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header bg-success">
                <h4 class="modal-title">Create Promo Code</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  @click="reset"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-v4">
                  <div class="page-content">
                    <div class="form-v4-content">
                      <div class="form-detail" action="#" method="post" id="myform">
                        <div class="mb-2">
                          <label for="code">
                            Code
                            <span class="important">*</span>
                          </label>
                          <input
                            type="text"
                            id="code"
                            class="form-control"
                            v-model="code"
                            v-bind:class="{
                                  'is-empty': invalid_code,
                                }"
                          />
                        </div>
                        <div
                          class="mb-2"
                          v-bind:class="{
                                  'is-empty': invalid_ticket,
                                }"
                        >
                          <label for="tickets-box">
                            Applies To
                            <span class="important">*</span>
                          </label>
                          <multiselect
                            v-model="ticket_value"
                            :options="filteredTickets"
                            :multiple="true"
                            :close-on-select="true"
                            :clear-on-select="true"
                            :preserve-search="true"
                            placeholder="Select Ticket(s)"
                            label="name"
                            track-by="ticketId"
                            :preselect-first="false"
                            @input="calculateEarnings"
                          >
                            <template slot="selection" slot-scope="{ values, search, isOpen }">
                              <span
                                class="multiselect__single"
                                v-if="values.length &amp;&amp; !isOpen"
                              >{{ values.length }} tickets selected</span>
                            </template>
                          </multiselect>
                        </div>
                        <div class="m-root mb-2">
                          <label>
                            Discount Amount
                            <span class="important">*</span>
                          </label>
                          <div
                            class="m-body"
                            v-bind:class="{
                                    'is-empty': invalid_discount
                                  }"
                          >
                            <div class="form-groupy">
                              <span>
                                <input
                                  type="radio"
                                  name="nam"
                                  ref="activateamountradio"
                                  checked
                                  @change="activateAmount"
                                />
                              </span>
                              <span class="ghana-cedi" v-html="cedi">{{ cedi }}</span>
                              <input
                                class="form-fieldy"
                                type="number"
                                placeholder="0.00"
                                step="0.01"
                                :disabled="disable_amount"
                                @keypress="isNumberKey"
                                v-model="amount_discount"
                                @input="calculateEarnings"
                              />
                            </div>
                            <div class="form-groupy">
                              <span>
                                <input
                                  type="radio"
                                  name="nam"
                                  ref="activatepercentradio"
                                  @change="activatePercentage"
                                />
                              </span>
                              <input
                                class="form-fieldy"
                                type="number"
                                placeholder="0.00"
                                step="0.01"
                                :disabled="disable_percent"
                                @keypress="isNumberKey"
                                v-model="percent_discount"
                                @input="calculateEarnings"
                              />
                              <span>%</span>
                            </div>
                          </div>
                        </div>
                        <div class="mb-2">
                          <label>
                            Start
                            <span class="important">*</span>
                          </label>
                          <div class="m-row-2">
                            <div class="m-row">
                              <div class="icon-box">
                                <i class="far fa-calendar-alt"></i>
                              </div>
                              <input
                                class="date-picker"
                                type="date"
                                v-model="start_date"
                                v-bind:class="{
                                    'is-empty': invalid_start_date,
                                  }"
                              />
                            </div>
                            <div class="m-row ml-2">
                              <div class="icon-box">
                                <i class="far fa-clock"></i>
                              </div>
                              <vue-timepicker
                                close-on-complete
                                :input-class="input"
                                v-model="start_time"
                              ></vue-timepicker>
                            </div>
                          </div>
                        </div>
                        <div class="mb-2">
                          <label>
                            End
                            <span class="important">*</span>
                          </label>
                          <div class="m-row-2">
                            <div class="m-row">
                              <div class="icon-box">
                                <i class="far fa-calendar-alt"></i>
                              </div>
                              <input
                                class="date-picker"
                                type="date"
                                v-model="end_date"
                                v-bind:class="{
                                    'is-empty': invalid_end_date,
                                  }"
                              />
                            </div>
                            <div class="m-row ml-2">
                              <div class="icon-box">
                                <i class="far fa-clock"></i>
                              </div>
                              <vue-timepicker
                                close-on-complete
                                :input-class="input"
                                v-model="end_time"
                              ></vue-timepicker>
                            </div>
                          </div>
                        </div>

                        <div class="mb-2">
                          <label>Uses</label>
                          <div>
                            <div class="row">
                              <input
                                class="ml-2"
                                type="radio"
                                name="uses"
                                id="unlimited"
                                ref="unlimitedcheck"
                                checked
                                @change="activateUnLimited"
                              />
                              <label class="remove-bottom-margin ml-2" for="unlimited">Unlimited</label>
                            </div>
                            <div class="row mb-2">
                              <input
                                class="ml-2"
                                type="radio"
                                name="uses"
                                id="limited"
                                ref="limitedcheck"
                                @change="activateLimited"
                              />
                              <label class="remove-bottom-margin ml-2" for="limited">Limited to:</label>
                            </div>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="eg: 10"
                              v-model="limited_number"
                              :disabled="disable_limited"
                              v-bind:class="{
                                    'is-empty': invalid_limit,
                                  }"
                              @keypress="isOnlyNumberKey"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-left">
                        <label>Applied To:</label>
                        <hr />

                        <div v-if="summary_data.length > 0">
                          <div v-for="(data, index) in summary_data" :key="index">
                            <div class="m-header">{{ data.title }}</div>
                            <table class="table table-striped">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Original Price</td>
                                  <td>{{ data.original }}</td>
                                </tr>

                                <tr>
                                  <td>You Earn</td>
                                  <td>{{ data.you_earn }}</td>
                                </tr>
                                <tr class="table-light" style="height: 40px">
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>With Discount</td>
                                  <td>{{ data.with_discount }}</td>
                                </tr>
                                <tr>
                                  <td>You Earn</td>
                                  <td>{{ data.you_earn_after_discount }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div v-else>Select a ticket to view how much you will earn after discount</div>
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
                  :disabled="isCloseDisable"
                  @click="reset"
                >Close</button>
                <button
                  type="button"
                  class="btn btn-success"
                  @click="onCreatePromoCode"
                  :disabled="isCreateDisable"
                >Create</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
      </div>
    </div>
    <!-- Create Promo code modal ends-->
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import { apiUrl } from "../utils/config";
import { mapGetters } from "vuex";
import $ from "jquery";

export default {
  name: "PromoCode",
  components: {
    VueTimepicker,
    Multiselect
  },

  data() {
    return {
      cedi: "GH&#8373",
      input: "ev-time-picker",
      // ticket_options: this.createdTickets,
      ticket_value: [],
      disable_percent: true,
      disable_amount: false,
      disable_limited: true,
      promo_codes: [],
      code: "",
      amount_discount: "",
      percent_discount: "",
      start_date: "",
      start_time: "00:00",
      end_date: "",
      end_time: "00:00",
      unlimited: true,
      limited: false,
      limited_number: "",
      invalid_code: false,
      invalid_ticket: false,
      invalid_discount: false,
      invalid_start_date: false,
      invalid_end_date: false,
      invalid_limit: false,
      summary_data: [],
      isCloseDisable: false,
      isCreateDisable: false,
      setForUpdate: false
    };
  },

  computed: {
    ...mapGetters(["createdTickets"]),

    filteredTickets: function() {
      return this.createdTickets.filter(oneTick => oneTick.type === "paid");
    }
  },

  methods: {
    isNumberKey(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    isOnlyNumberKey(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        (charCode > 31 && (charCode < 48 || charCode > 57)) ||
        charCode == 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    activatePercentage() {
      this.disable_percent = false;
      this.disable_amount = true;
      this.amount_discount = "";
    },

    activateAmount() {
      this.disable_percent = true;
      this.disable_amount = false;
      this.percent_discount = "";
    },

    activateLimited() {
      this.limited = true;
      this.unlimited = false;
      this.disable_limited = false;
    },

    activateUnLimited() {
      this.limited = false;
      this.unlimited = true;
      this.disable_limited = true;
    },

    validateInputs() {
      this.invalid_code = false;
      this.invalid_ticket = false;
      this.invalid_discount = false;
      this.invalid_start_date = false;
      this.invalid_end_date = false;
      this.invalid_limit = false;

      if (!this.code) {
        this.invalid_code = true;
      }

      if (!this.amount_discount && !this.percent_discount) {
        this.invalid_discount = true;
      }

      if (!this.start_date) {
        this.invalid_start_date = true;
      }

      if (!this.end_date) {
        this.invalid_end_date = true;
      }

      if (this.limited && !this.limited_number) {
        this.invalid_limit = true;
      }

      if (this.ticket_value.length === 0) {
        this.invalid_ticket = true;
      }

      if (
        this.invalid_code ||
        this.invalid_ticket ||
        this.invalid_discount ||
        this.invalid_start_date ||
        this.invalid_end_date ||
        this.invalid_limit
      ) {
        return false;
      }

      return true;
    },

    setPostBody() {
      const bodyList = [];

      for (const ticket of this.ticket_value) {
        const body = {
          ticket_id: ticket.ticketId,
          code: this.code,
          discount: this.disable_percent
            ? parseFloat(this.amount_discount).toFixed(2)
            : this.percent_discount,
          discount_type: this.disable_percent ? "amt" : "per",
          start_date: `${this.start_date} ${this.start_time}`.trim(),
          end_date: `${this.end_date} ${this.end_time}`.trim(),
          limit: this.limited ? this.limited_number : ""
        };

        bodyList.push(body);
      }

      return bodyList;
    },

    onCreatePromoCode() {
      if (!this.validateInputs()) return;

      this.disableBtn();

      const bodyList = this.setPostBody();

      bodyList.forEach((oneBody, index) => {
        const options = {
          method: !this.setForUpdate ? "POST" : "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`
          },
          body: JSON.stringify(oneBody)
        };

        fetch(`${apiUrl}/api/promo-ticket`, options)
          .then(async res => {
            this.enableBtn();
            if (res.status == 201) {
              if (index === bodyList.length - 1) {
                const ans = await res.json();
                oneBody.promo_id = ans.promo_id;
                oneBody.tickets = this.ticket_value;

                this.promo_codes.push(oneBody);
                this.reset();
                this.closeModal();
              }
            }
          })
          .catch(err => {
            console.log(err);
            this.enableBtn();
          });
      });
    },

    disableBtn() {
      this.isCloseDisable = true;
      this.isCreateDisable = true;
    },

    enableBtn() {
      this.isCloseDisable = false;
      this.isCreateDisable = false;
    },

    calculateEarnings() {
      // console.log(this.ticket_value);
      if (this.ticket_value.length === 0) return;

      this.summary_data.length = 0;
      this.ticket_value.forEach(oneTick => {
        const earnings = new Object();
        earnings.title = oneTick.name;

        const attendee = parseFloat(oneTick.attendeePays).toFixed(2);
        const organizer = parseFloat(oneTick.organizerAmt).toFixed(2);

        earnings.original = attendee;
        earnings.you_earn = organizer;

        const result = this.calculateAmount(earnings.you_earn);
        earnings.you_earn_after_discount = result.you_earn_after_discount;
        earnings.with_discount = (attendee - result.discount).toFixed(2);

        this.summary_data.push(earnings);
      });
    },

    calculateAmount(amt) {
      const original = parseFloat(amt);
      let finalAmt = new Object();

      if (this.disable_percent) {
        if (this.amount_discount !== "") {
          const discount = parseFloat(this.amount_discount);

          finalAmt.you_earn_after_discount = (original - discount).toFixed(2);
          finalAmt.discount = discount;
        } else {
          finalAmt.you_earn_after_discount = original.toFixed(2);
          finalAmt.discount = 0.0;
        }
      } else {
        if (this.percent_discount !== "") {
          const discount = (parseFloat(this.percent_discount) / 100) * original;
          finalAmt.you_earn_after_discount = (original - discount).toFixed(2);
          finalAmt.discount = discount;
        } else {
          finalAmt.you_earn_after_discount = original.toFixed(2);
          finalAmt.discount = 0.0;
        }
      }

      return finalAmt;
    },

    reset() {
      this.ticket_value = [];
      this.disable_percent = true;
      this.disable_amount = false;
      this.disable_limited = true;
      this.code = "";
      this.amount_discount = "";
      this.percent_discount = "";
      this.start_date = "";
      this.start_time = "00:00";
      this.end_date = "";
      this.end_time = "00:00";
      this.unlimited = true;
      this.limited = false;
      this.limited_number = "";
      this.invalid_code = false;
      this.invalid_ticket = false;
      this.invalid_discount = false;
      this.invalid_start_date = false;
      this.invalid_end_date = false;
      this.invalid_limit = false;
      this.summary_data = [];

      this.activateUnLimited();
      this.$refs.unlimitedcheck.checked = true;

      this.activateAmount();
      this.$refs.activateamountradio.checked = true;
    },

    closeModal() {
      $("#promo_code")
        .modal()
        .hide();

      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();

      $(`#create-code-btn`).click();
    },

    deletePromoCode(promo) {
      this.$emit("showOrHideProgressBar", true);

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      };

      const tick = promo.tickets;

      tick.forEach((oneTick, i) => {
        fetch(
          `${apiUrl}/api/promo-ticket?code=${promo.code}&ticket_id=${oneTick.ticketId}`,
          options
        ).then(res => {
          if (res.status === 200) {
            if (i === tick.length - 1) {
              this.$emit("showOrHideProgressBar", false);
              // delete ticket from array
              const index = this.promo_codes.indexOf(promo);
              if (index > -1) {
                this.promo_codes.splice(index, 1);
              }
            }
          }
        });
      });
    },

    setValuesOnEdit(promo) {
      this.ticket_value = promo.tickets;

      if (promo.discount_type === "per") {
        this.disable_percent = false;
        this.disable_amount = true;
        this.percent_discount = promo.discount;
        this.$refs.activatepercentradio.checked = true;
      }

      if (promo.discount_type === "amt") {
        this.disable_amount = false;
        this.disable_percent = true;
        this.amount_discount = promo.discount;
        this.$refs.activateamountradio.checked = true;
      }

      if (promo.limit === "") {
        this.activateUnLimited();
        this.$refs.unlimitedcheck.checked = true;
      } else {
        this.activateLimited();
        this.limited_number = promo.limit;
        this.$refs.limitedcheck.checked = true;
      }

      this.code = promo.code;

      const li = promo.start_date.split(" ");

      this.start_date = li[0];

      if (li.length > 1) {
        this.start_time = li[1];
      }

      const lin = promo.end_date.split(" ");

      this.end_date = lin[0];

      if (lin.length > 1) {
        this.end_time = li[1];
      }

      this.calculateEarnings();

      this.setForUpdate = true;
    }
  }
};
</script>

<style scoped>
.table td,
.table th {
  padding: 0.2rem !important;
}

.is-empty {
  border-color: red !important;
  border-style: solid !important;
  border-width: 1px;
}

.m-header {
  background-color: rgb(78, 199, 8);
  border-style: solid;
  border-width: 1px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  border-color: #28a745;
}

.icon-box {
  /* border-style: solid; */
  border-radius: 5px 0 0 5px;
  border-width: 1px;
  border-color: rgb(195, 192, 192);
  margin: 0;
  padding: 5px 10px 5px 10px;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
}

.date-picker {
  margin: 0;
  border-radius: 0 5px 5px 0;
  border-style: solid;
  border-width: 1px;
}

.m-row {
  display: flex;
  justify-content: flex-start;
}

.m-row-2 {
  display: flex;
  justify-content: flex-start;
}

.m-form {
  flex: 2;
  padding-right: 20px;
}

.m-preview {
  flex: 1;
}

.in-col {
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 28px;
  padding-right: 28px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}

.responsive-table li {
  border-radius: 3px;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 25px; */
}
.responsive-table li div {
  font-size: 0.8rem !important;
}
.responsive-table .table-header {
  /* background-color: #5de0ef; */
  font-size: 14px;
  text-transform: capitalize;
  letter-spacing: 0.03em;
}
.responsive-table .table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
.responsive-table .col-a {
  flex-basis: 20%;
}
.responsive-table .col-b {
  flex-basis: 20%;
}
.responsive-table .col-c {
  flex-basis: 30%;
}
.responsive-table .col-e {
  flex-basis: 20%;
}

.responsive-table .col-f {
  flex-basis: 100%;
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

.green-rule {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid rgb(120, 229, 30);
  margin: 1em 0;
  padding: 0;
}

.ev-time-picker {
  border-radius: 5px !important;
  width: 95px !important;
}

.important {
  color: red;
}

/* discount boxes style */
.form-fieldy {
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  /* border-radius: 6px; */
  -webkit-appearance: none;
  /* color: var(--input-color); */
  border: 1px solid var(--input-border);
  background: var(--input-background);
  -webkit-transition: border 0.3s ease;
  transition: border 0.3s ease;
}
.form-fieldy::-webkit-input-placeholder {
  color: var(--input-placeholder);
}
.form-fieldy::-moz-placeholder {
  color: var(--input-placeholder);
}
.form-fieldy:-ms-input-placeholder {
  color: var(--input-placeholder);
}
.form-fieldy::-ms-input-placeholder {
  color: var(--input-placeholder);
}
.form-fieldy::placeholder {
  color: var(--input-placeholder);
}
.form-fieldy:focus {
  outline: none;
  border-color: var(--input-border-focus);
}

.form-groupy {
  position: relative;
  display: -webkit-box;
  display: flex;
  width: 100%;
  height: 35px;
}
.form-groupy > span,
.form-groupy .form-fieldy {
  white-space: nowrap;
  display: block;
}
.form-groupy > span:not(:first-child):not(:last-child),
.form-groupy .form-field:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.form-groupy > span:first-child,
.form-groupy .form-fieldy:first-child {
  border-radius: 6px 0 0 6px;
}
.form-groupy > span:last-child,
.form-groupy .form-fieldy:last-child {
  border-radius: 0 6px 6px 0;
}
.form-groupy > span:not(:first-child),
.form-groupy .form-fieldy:not(:first-child) {
  margin-left: -1px;
}
.form-groupy .form-fieldy {
  position: relative;
  z-index: 1;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  width: 1%;
  margin-top: 0;
  margin-bottom: 0;
}
.form-groupy > span {
  text-align: center;
  padding: 8px 8px;
  font-size: 11px;
  line-height: 17px;
  color: black;
  background: white;
  border: 1px solid var(--group-border);
  -webkit-transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  background-color: #e9ecef;
}
.form-groupy:focus-within > span {
  color: black;
  background: var(--group-background-focus);
  border-color: var(--group-border-focus);
}

.m-root {
  --input-color: #0d0d0e;
  --input-border: #d7dadf;
  --input-background: white;
  --input-placeholder: #080809;
  --input-border-focus: #f2f3f1;
  --group-color: rgba(251, 246, 246, 0.251);
  --group-border: var(--input-border);
  --group-background: white;
  --group-color-focus: #fff;
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: white;
}

.m-body {
  /* min-height: 100vh; */
  font-family: "Mukta Malar", Arial;
  /* display: -webkit-box; */
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  /* -webkit-box-align: center; */
  /* align-items: center; */
  /* -webkit-box-orient: vertical; */
  /* -webkit-box-direction: normal; */
  flex-direction: column;
  /* background: #f5f9ff; */
}
.m-body .form-groupy {
  max-width: 190px;
}
.m-body .form-groupy:not(:last-child) {
  margin-bottom: 4px;
}

/* ======================== FORM CONTENT ============================ */
.page-content {
  width: 100%;
  margin: 0 auto;
  /* background: #75e2e9; */
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -o-justify-content: center;
  -ms-justify-content: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
}
.form-v4-content {
  background: #fff;
  width: 100%;
  border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  /* box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); */
  /* -o-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); */
  /* -ms-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); */
  /* -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); */
  /* -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); */
  /* margin: 175px 0; */
  position: relative;
  display: flex;
  display: -webkit-flex;
  font-family: "Open Sans", sans-serif;
}
.form-v4-content h2 {
  font-weight: 700;
  font-size: 30px;
  padding: 6px 0 0;
  margin-bottom: 34px;
}
.form-v4-content .form-left {
  /* background: #3786bd; */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 20px 40px;
  position: relative;
  width: 100%;
  color: inherit;
  border-style: solid;
  border-width: 1px;
  border-color: #28a745;
}
.form-v4-content .form-left p {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.5;
}
.form-v4-content .form-left span {
  font-weight: 700;
}
.form-v4-content .form-left .text-2 {
  margin: 20px 0 25px;
}
.form-v4-content .form-left .account {
  background: #fff;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 180px;
  border: none;
  margin: 15px 0 50px 0px;
  cursor: pointer;
  color: #333;
  font-weight: 700;
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  appearance: unset;
  -moz-appearance: unset;
  -webkit-appearance: unset;
  -o-appearance: unset;
  -ms-appearance: unset;
  outline: none;
  -moz-outline: none;
  -webkit-outline: none;
  -o-outline: none;
  -ms-outline: none;
}
.form-v4-content .form-left .account:hover {
  background: #e5e5e5;
}
.form-v4-content .form-left .form-left-last input {
  padding: 15px;
}
.form-v4-content .form-detail {
  padding: 0px 20px;
  position: relative;
  width: 100%;
}
.form-v4-content .form-detail h2 {
  color: #3786bd;
}
.form-v4-content .form-detail .form-group {
  display: flex;
  display: -webkit-flex;
  margin: 0 -8px;
}
.form-v4-content .form-detail .form-row {
  width: 100%;
  position: relative;
}
.form-v4-content .form-detail .form-group .form-row.form-row-1 {
  width: 50%;
  padding: 0 8px;
}
.form-v4-content .form-detail label {
  font-weight: 600;
  font-size: 15px;
  color: #666;
  display: block;
  margin-bottom: 8px;
}
.form-v4-content .form-detail .form-row label#valid {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  background: #53c83c;
}
.form-v4-content .form-detail .form-row label#valid::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 1px;
  width: 3px;
  height: 8px;
  border: 1px solid #fff;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
}
.form-v4-content .form-detail .form-row label.error {
  padding-left: 0;
  margin-left: 0;
  display: block;
  position: absolute;
  bottom: -5px;
  width: 100%;
  background: none;
  color: red;
}
.form-v4-content .form-detail .form-row label.error::after {
  content: "\f343";
  font-family: "LineAwesome";
  position: absolute;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  right: 10px;
  top: -31px;
  color: red;
  font-size: 18px;
  font-weight: 900;
}
.form-v4-content .form-detail .input-text {
  margin-bottom: 27px;
}
.form-v4-content .form-detail input[type="text"] {
  width: 100%;
  padding: 11.5px 15px;
  border: 1px solid #e5e5e5;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  appearance: unset;
  -moz-appearance: unset;
  -webkit-appearance: unset;
  -o-appearance: unset;
  -ms-appearance: unset;
  outline: none;
  -moz-outline: none;
  -webkit-outline: none;
  -o-outline: none;
  -ms-outline: none;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: #333;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
.form-v4-content .form-detail .form-row input:focus {
  border: 1px solid #53c83c;
}
.form-v4-content .form-detail .form-checkbox {
  margin-top: 1px;
  position: relative;
}
.form-v4-content .form-detail .form-checkbox input {
  position: absolute;
  opacity: 0;
}
.form-v4-content .form-detail .form-checkbox .checkmark {
  position: absolute;
  top: 13px;
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid #ccc;
  cursor: pointer;
}
.form-v4-content .form-detail .form-checkbox .checkmark::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 1px;
  width: 3px;
  height: 8px;
  border: 1px solid #3786bd;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  display: none;
}
.form-v4-content .form-detail .form-checkbox input:checked ~ .checkmark::after {
  display: block;
}
.form-v4-content .form-detail .form-checkbox p {
  margin-left: 34px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
}
.form-v4-content .form-detail .form-checkbox .text {
  font-weight: 700;
  color: #3786bd;
  text-decoration: underline;
}
.form-v4-content .form-detail .register {
  background: #3786bd;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 130px;
  border: none;
  margin: 6px 0 50px 0px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
}
.form-v4-content .form-detail .register:hover {
  background: #2f73a3;
}
.form-v4-content .form-detail .form-row-last input {
  padding: 12.5px;
}

/* Responsive */
@media screen and (max-width: 991px) {
  .form-v4-content {
    /* margin: 180px 20px; */
    flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
  }
  .form-v4-content .form-left {
    width: auto;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
  }
  .form-v4-content .form-detail {
    padding: 30px 20px 30px 20px;
    width: auto;
  }
}
@media screen and (max-width: 575px) {
  .form-v4-content .form-detail .form-group {
    flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    margin: 0;
  }
  .form-v4-content .form-detail .form-group .form-row.form-row-1 {
    width: 100%;
    padding: 0;
  }
}

/**======================================RESPONSIVE==================================== */
@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }
  .responsive-table li {
    display: block;
  }
  .responsive-table .col-ev {
    flex-basis: 100%;
  }
  .responsive-table .col-ev {
    display: flex;
    padding: 10px 0;
  }
  .responsive-table .col-ev:before {
    color: #6c7a89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }
}

@media (max-width: 360px) {
  .m-row-2 {
    display: flex;
    justify-content: flex-start;
    flex-direction: column !important;
    align-items: flex-start;
  }

  .m-row-2 .ml-2 {
    margin-left: 0 !important;
  }
}

.remove-bottom-margin {
  margin-bottom: 0 !important;
}
</style>
