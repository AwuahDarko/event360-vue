<template>
  <div class="card">
    <div class="card-body">
      <hr class="green-rule" />
      <div class="row">
        <div class="col-md-6">
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
            <div class="col-ev col-e">End</div>
            <div class="col-ev col-c">Usage</div>
            <div class="col-ev col-e">Actions</div>
          </li>
          <li class="table-row border border-success" v-if="false">
            <div class="col-ev col-a" data-label="Code">42235</div>
            <div class="col-ev col-b" data-label="Discount">John Doe</div>
            <div class="col-ev col-c" data-label="Start">$350</div>
            <div class="col-ev col-e" data-label="End">Pending</div>
            <div class="col-ev col-c" data-label="Usage">$350</div>
            <div class="col-ev col-e" data-label="Actions">
              <button
                class="edit-btn mr-2"
                data-toggle="modal"
                data-target="#edit_free_Ticket"
              >
                <i class="fas fa-pencil-alt"></i>
              </button>

              <button class="del-btn ml-2">
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </li>
          <li class="table-row border border-success" v-else>
            <div class="col-ev col-f" data-label>
              Add codes by clicking "Create Code" button above
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Create Promo code modal -->
    <div class="row">
      <div class="col-md-12">
        <div
          class="modal fade"
          data-backdrop="static"
          data-keyboard="false"
          id="promo_code"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header bg-success">
                <h4 class="modal-title">Create Promo Code</h4>
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
                          placeholder="e.g. Early Bird"
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
                        <select
                          class="form-control select2"
                          style="width: 100%;"
                        >
                          <option disabled value="0">...</option>
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
                            <vue-timepicker
                              close-on-complete
                              :input-class="input"
                            ></vue-timepicker>
                          </div>
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
                          id="always-visible"
                        />
                        <label for="always-visible" class="form-check-label"
                          >Always Visible</label
                        >
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="visibility"
                          id="hide-at"
                        />
                        <label class="form-check-label" for="hide-at"
                          >Hidden at a specific time</label
                        >
                      </div>
                      <div class="form-check ml-2">
                        <input
                          class="form-check-input"
                          id="until-start"
                          type="radio"
                          name="hide-specific"
                        />
                        <label class="form-check-label" for="until-start"
                          >Until Ticket sales start</label
                        >
                      </div>
                      <div class="form-check ml-2">
                        <input
                          class="form-check-input"
                          id="until-end"
                          type="radio"
                          name="hide-specific"
                        />
                        <label class="form-check-label" for="until-end"
                          >Until Ticket sales end</label
                        >
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
                  Close
                </button>
                <button type="button" class="btn btn-success">
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
    <!-- Create Promo code modal ends-->
  </div>
</template>

<script>
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';

export default {
  name: 'PromoCode',
  components: {
    VueTimepicker,
  },

  data() {
    return {
      input: 'ev-time-picker',
    };
  },
};
</script>

<style scoped>
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
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 25px; */
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
  flex-basis: 25%;
}
.responsive-table .col-e {
  flex-basis: 25%;
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
</style>
