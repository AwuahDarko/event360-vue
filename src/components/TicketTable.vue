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
          <button class="btn btn-success" @click="saveCountryCurrency">Save</button>
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
                  <th style="width: 1%">
                    Price
                    <span class="ghana-cedi" v-html="cedi">{{cedi}}</span>
                  </th>
                  <th style="width: 30%">Fees</th>
                  <th style="width: 10%">
                    Attendee Pays
                    <span class="ghana-cedi" v-html="cedi">{{cedi}}</span>
                  </th>
                  <th>
                    Organizer (You) Get
                    <span class="ghana-cedi" v-html="cedi">{{cedi}}</span>
                  </th>
                  <th style="width: 12%">Ticket Sales</th>
                  <th style="width: 20%" class="text-center">Action</th>
                </tr>
              </thead>
              <tbody v-if="createdTickets.length > 0">
                <tr v-for="ticket in createdTickets" :key="ticket.ticketId">
                  <td>{{ ticket.name }}</td>
                  <td>
                    <a>{{ ticket.price }}</a>
                  </td>
                  <td v-if="ticket.type === 'paid'">
                    <p
                      class="remove-bottom-margin"
                    >{{ ticket.fees_option === 1 ? 'Paid by Attendee:' : 'Absorbed by You' }}</p>
                    <p class="remove-bottom-margin">Registration Fee:</p>
                    <p class="remove-bottom-margin">Processing Fee (By Stripe):</p>
                    <p class="remove-bottom-margin">App Fee:</p>
                  </td>
                  <td v-else>Free</td>
                  <td>
                    <a>{{ ticket.attendeePays }}</a>
                  </td>
                  <td>
                    <a>{{ ticket.organizerAmt }}</a>
                  </td>
                  <td>
                    <a>0/{{ ticket.quantity }}</a>
                  </td>
                  <td
                    style="display: flex; justify-content: space-evenly; padding-top: 30%; padding-bottom: 30%"
                  >
                    <button
                      v-if="ticket.type ==='free'"
                      class="edit-btn"
                      data-toggle="modal"
                      data-target="#edit_free_Ticket"
                      :id="`open-free-ticket-btn-edit-${ticket.ticketId}`"
                      @click="editFreeTicket(ticket)"
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button
                      v-else
                      class="edit-btn"
                      data-toggle="modal"
                      data-target="#edit_paid_Ticket"
                      :id="`open-free-ticket-btn-edit-${ticket.ticketId}`"
                      @click="editFreeTicket(ticket)"
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="del-btn" @click="deleteTicket($event, ticket)">
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="7">Add tickets by clicking on "Create Ticket" button above</td>
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
            <div class="modal-header bg-success">
              <h4 class="modal-title">Create Ticket</h4>
              <button type="button" class="close" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p style="text-align: center;">What type of Ticket are you creating ?</p>
              <div class="row">
                <div class="col-md-5 col-sm-5 col-xm-5">
                  <button
                    type="button"
                    class="btn btn-block btn-success"
                    data-toggle="modal"
                    data-target="#free_Ticket"
                    data-dismiss="modal"
                    id="open-free-ticket-btn"
                  >Free Ticket</button>
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
                    id="open-paid-ticket-btn"
                    data-dismiss="modal"
                  >Paid Ticket</button>
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
          <div class="modal fade" data-backdrop="static" data-keyboard="false" id="free_Ticket">
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
                    <div class="row">
                      <div
                        class="alert alert-warning col-md-12 text-center"
                        v-if="showFreeTicketMessage"
                        role="alert"
                      >
                        <span class="mx-auto w-50 text-light font-weight-bold">New ticket created</span>
                      </div>
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
                            placeholder="e.g. General Ticket"
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
                            @keypress="isOnlyNumberKey($event)"
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
                              id="datetimepicker1"
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
                          <label for="always-visible" class="form-check-label">Always Visible</label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="visibility"
                            @change="onHiddenAtSpecificTimeSelected"
                            id="hide-at"
                          />
                          <label class="form-check-label" for="hide-at">Hidden at a specific time</label>
                        </div>
                        <div class="form-check ml-2" v-if="showHiddenOptions">
                          <input
                            class="form-check-input"
                            id="until-start"
                            type="radio"
                            name="hide-specific"
                            @change="onUntilSalesStart"
                          />
                          <label class="form-check-label" for="until-start">Until Ticket sales start</label>
                        </div>
                        <div class="form-check ml-2" v-if="showHiddenOptions">
                          <input
                            class="form-check-input"
                            id="until-end"
                            type="radio"
                            name="hide-specific"
                            @change="onUntilSalesEnd"
                          />
                          <label class="form-check-label" for="until-end">Until Ticket sales end</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    type="button"
                    class="btn btn-default"
                    :disabled="isFreeCloseDisable"
                    data-dismiss="modal"
                  >Close</button>
                  <button
                    type="button"
                    class="btn btn-success"
                    :disabled="isFreeCreateDisable"
                    @click="onCreateFreeTicket"
                  >Create</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
        </div>
      </div>

      <!-- ============free ticket ends -->

      <!-- EDIT FREE TICKET -->
      <div class="row">
        <div class="col-md-12">
          <div
            class="modal fade"
            data-backdrop="static"
            data-keyboard="false"
            id="edit_free_Ticket"
          >
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
                    <div class="row">
                      <!-- <div class="alert alert-warning col-md-12 text-center" role="alert">
                        <span class="mx-auto w-50 text-light font-weight-bold">New ticket created</span>
                      </div>-->
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>
                            Ticket Name
                            <span style="color: red;">*</span>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="e.g. General Ticket"
                            v-model="freeTicketName_edit"
                            v-bind:class="{
                                  'is-empty': invalidFreeTicketName_edit,
                                }"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>
                            Quantity Available
                            <span style="color: red;">*</span>
                          </label>
                          <input
                            v-bind:class="{
                                  'is-empty': invalidFreeQuantity_edit,
                                }"
                            type="number"
                            class="form-control"
                            placeholder="0"
                            @keypress="isOnlyNumberKey($event)"
                            v-model="freeTicketQuantity_edit"
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
                            v-bind:class="{ 'is-empty': invalidFreeLimit_edit }"
                            class="form-control select2"
                            style="width: 100%;"
                            v-model="freeTicketLimitPerson_edit"
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
                            <input
                              type="date"
                              class="form-control"
                              v-model="freeTicketSaleStartDate_edit"
                              v-bind:class="{
                                    'is-empty': invalidFreeStartDate_edit,
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
                              class="form-control"
                              type="time"
                              v-model="freeTicketSaleStartTime_edit"
                              v-bind:class="{
                                    'is-empty': invalidFreeStartTime_edit,
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
                              type="date"
                              class="form-control"
                              v-model="freeTicketSaleEndDate_edit"
                              v-bind:class="{
                                    'is-empty': invalidFreeEndDate_edit,
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
                              class="form-control"
                              type="time"
                              id="reservationtime"
                              v-model="freeTicketSaleEndTime_edit"
                              v-bind:class="{
                                    'is-empty': invalidFreeEndTime_edit,
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
                            name="visibility-e"
                            id="always-visible-e"
                            @change="onAlwaysVisible_edit"
                            :checked="freeAlways_edit"
                          />
                          <label for="always-visible-e" class="form-check-label">Always Visible</label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="visibility-e"
                            id="hide-at-e"
                            @change="onHiddenAtSpecificTimeSelected_edit"
                            :checked="hiddenAtSpecific"
                          />
                          <label class="form-check-label" for="hide-at-e">Hidden at a specific time</label>
                        </div>
                        <div class="form-check ml-2" v-if="showHiddenOptions_edit">
                          <input
                            class="form-check-input"
                            id="until-start-e"
                            type="radio"
                            name="hide-specific-e"
                            @change="onUntilSalesStart_edit"
                            :checked="freeEdit_start"
                          />
                          <label
                            class="form-check-label"
                            for="until-start-e"
                          >Until Ticket sales start</label>
                        </div>
                        <div class="form-check ml-2" v-if="showHiddenOptions_edit">
                          <input
                            class="form-check-input"
                            id="until-end-e"
                            type="radio"
                            name="hide-specific-e"
                            @change="onUntilSalesEnd_edit"
                            :checked="freeEdit_end"
                          />
                          <label class="form-check-label" for="until-end-e">Until Ticket sales end</label>
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
                    :disabled="isFreeCloseDisable_edit"
                  >Close</button>
                  <button
                    type="button"
                    class="btn btn-success"
                    :disabled="isFreeCreateDisable_edit"
                    @click="onCreateFreeTicket_edit"
                  >Update</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
        </div>
      </div>
      <!-- EDIT FREE TICKET ENDS -->

      <!-- Paid TICKET start here -->
      <div class="row">
        <div class="col-md-12">
          <div class="modal fade" data-backdrop="static" data-keyboard="false" id="paid_Ticket">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header bg-success">
                  <h4 class="modal-title">Paid Ticket</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="col-md-12">
                    <div class="row">
                      <div
                        class="alert alert-warning col-md-12 text-center"
                        v-if="showPaidTicketMessage"
                        role="alert"
                      >
                        <span class="mx-auto w-50 text-light font-weight-bold">New ticket created</span>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>
                            Ticket Name
                            <span style="color: red;">*</span>
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            v-model="paidTicketName"
                            placeholder="e.g. VIP Ticket"
                            v-bind:class="{
                                  'is-empty': invalidPaidTicketName,
                                }"
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
                            v-model="ticketPrice"
                            class="form-control"
                            placeholder="0.00"
                            @keypress="isNumberKey($event)"
                            @change="calculateFees"
                            v-bind:class="{
                                  'is-empty': invalidPaidTicketPrice,
                                }"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>
                            Quantity Available
                            <span style="color: red;">*</span>
                          </label>
                          <input
                            type="number"
                            step="1"
                            class="form-control"
                            v-model="paidTicketQuantity"
                            placeholder="0"
                            v-bind:class="{
                                  'is-empty': invalidPaidQuantity,
                                }"
                            @keypress="isOnlyNumberKey($event)"
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
                            v-bind:class="{ 'is-empty': invalidPaidLimit }"
                            class="form-control select2"
                            style="width: 100%;"
                            v-model="paidTicketLimitPerson"
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
                            <input
                              type="date"
                              class="form-control"
                              v-model="paidTicketSaleStartDate"
                              id="reservation"
                              v-bind:class="{
                                    'is-empty': invalidPaidStartDate,
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
                              class="form-control"
                              type="time"
                              v-model="paidTicketSaleStartTime"
                              id="reservationtime"
                              v-bind:class="{
                                    'is-empty': invalidPaidStartTime,
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
                              type="date"
                              v-model="paidTicketSaleEndDate"
                              class="form-control"
                              id="reservation"
                              v-bind:class="{
                                    'is-empty': invalidPaidEndDate,
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
                              class="form-control"
                              v-model="paidTicketSaleEndTime"
                              type="time"
                              id="reservationtime"
                              v-bind:class="{
                                    'is-empty': invalidPaidEndTime,
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
                          <label class="form-check-label" for="paid-always">Always Visible</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="paid-hidden"
                            name="top-level"
                            @change="onHiddenAtSpecificTimeSelected_paid"
                          />
                          <label
                            class="form-check-label"
                            for="paid-hidden"
                          >Hidden at a specific time</label>
                        </div>
                        <div class="form-check ml-2" v-if="showHiddenOptions_paid">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="paid-start"
                            name="paid-hidden-end"
                            @change="onUntilSalesStart_paid"
                          />
                          <label class="form-check-label" for="paid-start">Until Ticket sales start</label>
                        </div>
                        <div class="form-check ml-2" v-if="showHiddenOptions_paid">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="paid-hidden-end"
                            id="paid-end"
                            @change="onUntilSalesEnd_paid"
                          />
                          <label class="form-check-label" for="paid-end">Until Ticket sales end</label>
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
                            v-model="feeOption"
                            style="width: 100%;"
                            @change="onFeeOptionSelected"
                          >
                            <option value="1">Pass fees on</option>
                            <option value="2">Absorb</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <label style="visibility: hidden;">
                          Fees
                          <span style="color: red;">*</span>
                        </label>
                        <p class="p-as-label">{{ feeOptionMessage }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="fees_shade" style="background-color: #f4f6f9">
                          <div style="padding: 0.2rem;">
                            <div class="space-out-children">
                              <small>Registration fees:</small>
                              <small>{{ registrationFee === 0 ? 'N/A' : registrationFee }}</small>
                            </div>
                            <div class="space-out-children">
                              <small>Processing fees (by Stripe):</small>
                              <small>{{ processingFee === 0 ? 'N/A' : processingFee }}</small>
                            </div>
                            <div class="space-out-children">
                              <small>Attendees pays:</small>
                              <small>{{ attendeeFee === 0 ? 'N/A' : attendeeFee }}</small>
                            </div>
                            <div class="space-out-children">
                              <small class="text-success text-secondary">Organizer (you) gets:</small>
                              <small
                                class="text-success text-secondary"
                              >{{ organizerAmt === 0 ? 'N/A' : organizerAmt }}</small>
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
                    <!-- </div> -->
                    <!-- </div> -->
                  </div>
                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                    :disabled="isPaidCloseDisable"
                  >Close</button>
                  <button
                    type="button"
                    class="btn btn-success"
                    :disabled="isPaidCreateDisable"
                    @click="onCreatePaidTicket"
                  >Create</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
        </div>
      </div>
      <!-- paid Ticket ends -->

      <!-- EDIT PAID TICKET -->
      <div class="row">
        <div class="col-md-12">
          <div
            class="modal fade"
            data-backdrop="static"
            data-keyboard="false"
            id="edit_paid_Ticket"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header bg-success">
                  <h4 class="modal-title">Paid Ticket</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="alert alert-warning col-md-12 text-center" role="alert">
                        <span class="mx-auto w-50 text-light font-weight-bold">New ticket created</span>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>
                            Ticket Name
                            <span style="color: red;">*</span>
                          </label>
                          <input type="email" class="form-control" placeholder="e.g. VIP Ticket" />
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
                            @keypress="isNumberKey($event)"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>
                            Quantity Available
                            <span style="color: red;">*</span>
                          </label>
                          <input
                            type="number"
                            step="1"
                            class="form-control"
                            placeholder="0"
                            @keypress="isOnlyNumberKey($event)"
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
                            <input type="date" class="form-control" id="reservation2" />
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
                            <input class="form-control" type="time" id="reservationtime2" />
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
                            <input type="date" class="form-control" id="reservation2" />
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
                            <input class="form-control" type="time" id="reservationtime2" />
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
                            id="paid-always-p"
                            name="top-level-p"
                          />
                          <label class="form-check-label" for="paid-always-p">Always Visible</label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="paid-hidden-p"
                            name="top-level-p"
                          />
                          <label
                            class="form-check-label"
                            for="paid-hidden-p"
                          >Hidden at a specific time</label>
                        </div>
                        <div class="form-check ml-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="paid-start-p"
                            name="paid-hidden-end-p"
                          />
                          <label
                            class="form-check-label"
                            for="paid-start-p"
                          >Until Ticket sales start</label>
                        </div>
                        <div class="form-check ml-2">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="paid-hidden-end-p"
                            id="paid-end-p"
                          />
                          <label class="form-check-label" for="paid-end-p">Until Ticket sales end</label>
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
                          <select class="form-control select2" style="width: 100%;">
                            <option value="1">Pass fees on</option>
                            <option value="2">Absorb</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <label style="visibility: hidden;">
                          Fees
                          <span style="color: red;">*</span>
                        </label>
                        <p class="p-as-label">feeOptionMessage</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="fees_shade" style="background-color: #f4f6f9">
                          <div style="padding: 0.2rem;">
                            <div class="space-out-children">
                              <small>Registration fees:</small>
                              <small>registrationFee === 0 ? 'N/A' : registrationFee</small>
                            </div>
                            <div class="space-out-children">
                              <small>Processing fees (by Stripe):</small>
                              <small>processingFee === 0 ? 'N/A' : processingFee</small>
                            </div>
                            <div class="space-out-children">
                              <small>Attendees pays:</small>
                              <small>attendeeFee === 0 ? 'N/A' : attendeeFee</small>
                            </div>
                            <div class="space-out-children">
                              <small class="text-success text-secondary">Organizer (you) gets:</small>
                              <small
                                class="text-success text-secondary"
                              >organizerAmt === 0 ? 'N/A' : organizerAmt</small>
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
                    <!-- </div> -->
                    <!-- </div> -->
                  </div>
                </div>
                <div class="modal-footer justify-content-end">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-success">Create</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
        </div>
      </div>
      <!-- EDIT paid ticket ENDS -->
    </div>
  </div>
  <!-- table of ticket ends -->
</template>

<script>
import Dropdown from "vue-simple-search-dropdown";
import countries from "../utils/countries";
import currency from "../utils/currency";
import { mapGetters, mapActions } from "vuex";
import { apiUrl } from "../utils/config";
import $ from "jquery";

export default {
  name: "TicketTable",
  components: {
    Dropdown
  },

  props: {
    selectedCountry: Object,
    selectedCurrency: Object,
    token: String
  },

  data() {
    return {
      countryOptions: countries,
      currencyOptions: currency,
      showHiddenOptions: false,
      showHiddenOptions_paid: false,
      freeTicketName: "",
      freeTicketQuantity: "",
      freeTicketLimitPerson: "0",
      freeTicketSaleStartDate: "",
      freeTicketSaleStartTime: "",
      freeTicketSaleEndDate: "",
      freeTicketSaleEndTime: "",
      freeTicketVisibility: 1,
      invalidFreeQuantity: false,
      invalidFreeTicketName: false,
      invalidFreeLimit: false,
      invalidFreeStartDate: false,
      invalidFreeStartTime: false,
      invalidFreeEndDate: false,
      invalidFreeEndTime: false,
      showFreeTicketMessage: false,
      isFreeCloseDisable: false,
      isFreeCreateDisable: false,
      // edit free ticket
      showHiddenOptions_edit: false,
      freeTicketName_edit: "",
      freeTicketQuantity_edit: "",
      freeTicketLimitPerson_edit: "0",
      freeTicketSaleStartDate_edit: "",
      freeTicketSaleStartTime_edit: "",
      freeTicketSaleEndDate_edit: "",
      freeTicketSaleEndTime_edit: "",
      freeTicketVisibility_edit: 1,
      invalidFreeQuantity_edit: false,
      invalidFreeTicketName_edit: false,
      invalidFreeLimit_edit: false,
      invalidFreeStartDate_edit: false,
      invalidFreeStartTime_edit: false,
      invalidFreeEndDate_edit: false,
      invalidFreeEndTime_edit: false,
      showFreeTicketMessage_edit: false,
      isFreeCloseDisable_edit: false,
      isFreeCreateDisable_edit: false,
      freeEdit_start: false,
      freeEdit_end: false,
      hiddenAtSpecific: false,
      freeAlways_edit: false,
      // paid ticket data
      paidTicketName: "",
      ticketPrice: "",
      paidTicketQuantity: "",
      paidTicketLimitPerson: "0",
      paidTicketSaleStartDate: "",
      paidTicketSaleStartTime: "",
      paidTicketSaleEndDate: "",
      paidTicketSaleEndTime: "",
      paidTicketVisibility: 1,
      invalidPaidQuantity: false,
      invalidPaidTicketName: false,
      invalidPaidLimit: false,
      invalidPaidStartDate: false,
      invalidPaidStartTime: false,
      invalidPaidEndDate: false,
      invalidPaidEndTime: false,
      invalidPaidTicketPrice: false,
      showPaidTicketMessage: false,
      isPaidCloseDisable: false,
      isPaidCreateDisable: false,
      feeOption: 1,
      feeOptionMessage: `All fees will be paid by the attendee. The organiser will receive money equal to the full pocket price.`,
      registrationFee: 0,
      processingFee: 0,
      attendeeFee: 0,
      organizerAmt: 0,
      createdTickets: [],
      cedi: "(GH&#8373)",
      selectedTicket: null
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
      this.paidTicketVisibility = 1;
      this.showHiddenOptions_paid = false;
    },

    onUntilSalesStart_paid() {
      this.paidTicketVisibility = 2;
    },

    onUntilSalesEnd_paid() {
      this.paidTicketVisibility = 3;
    },

    onFeeOptionSelected() {
      if (this.feeOption == "1") {
        this.feeOptionMessage = `All fees will be paid by the attendee. The organiser will 
        receive money equal to the full pocket price.`;
      }

      if (this.feeOption == "2") {
        this.feeOptionMessage = `All fees will be paid by the organizer (you).
         The fee will be deducted from the ticket price.`;
      }

      this.calculateFees();
    },

    closeFreeTicketModal() {
      $("#free_Ticket")
        .modal()
        .hide();

      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();

      $("#open-free-ticket-btn").click();
    },

    closePaidTicketModal() {
      $("#paid_Ticket")
        .modal()
        .hide();

      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();

      $("#open-paid-ticket-btn").click();
    },

    onCreateFreeTicket() {
      if (!this.validateFreeTicket()) {
        return;
      }

      this.disableFreeBtn();

      const body = this.setFreeTicketPostBody();

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token
        },
        body: JSON.stringify(body)
      };

      fetch(`${apiUrl}/api/ticket`, options)
        .then(async res => {
          this.enableFreeBtn();

          if (res.status === 201) {
            const ticket = await res.json();
            // console.log(ticket);
            // add
            body.price = body.price.toFixed(2);
            body.attendeePays = this.attendeeFee.toFixed(2);
            body.organizerAmt = this.organizerAmt.toFixed(2);
            body.ticketId = ticket.ticket_id;

            this.createdTickets.push(body);

            // this.showFreeTicketMessage = true;
            // setTimeout(() => {
            //   this.showFreeTicketMessage = false;
            // }, 2000);

            this.resetFreeTicketData();

            this.closeFreeTicketModal();
          }
        })
        .catch(err => {
          console.log(err);
          this.enableFreeBtn();
        });
    },

    onCreatePaidTicket() {
      if (!this.validatePaidTicket()) {
        return;
      }

      this.disablePaidBtn();

      const body = this.setPaidTicketPostBody();

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token
        },
        body: JSON.stringify(body)
      };

      fetch(`${apiUrl}/api/ticket`, options)
        .then(async res => {
          this.enablePaidBtn();
          if (res.status === 201) {
            const ticket = await res.json();
            // console.log(ticket); // { ticket_id: 11 }

            // add
            const num = parseFloat(body.price);
            body.price = num.toFixed(2);
            body.attendeePays = this.attendeeFee;
            body.organizerAmt = this.organizerAmt;
            body.ticketId = ticket.ticket_id;

            this.createdTickets.push(body);

            this.resetPaidTicketData();

            // this.showPaidTicketMessage = true;
            // setTimeout(() => {
            //   this.showPaidTicketMessage = false;
            // }, 2000);

            this.closePaidTicketModal();
          }
        })
        .catch(err => {
          console.log(err);
          this.enablePaidBtn();
        });
    },

    setFreeTicketPostBody() {
      const body = {
        name: this.freeTicketName.trim(),
        price: 0,
        type: "free",
        event_key: "8a064820-0546-452f-b618-73a5d134758f", //window.localStorage.getItem("current_event_key")
        limit_per_person: this.freeTicketLimitPerson,
        sale_start: `${this.freeTicketSaleStartDate} ${this.freeTicketSaleStartTime}`.trim(),
        sale_end: `${this.freeTicketSaleEndDate} ${this.freeTicketSaleEndTime}`.trim(),
        visibility: this.freeTicketVisibility,
        fees_option: 3,
        quantity: this.freeTicketQuantity
      };

      return body;
    },

    setPaidTicketPostBody() {
      const body = {
        name: this.paidTicketName.trim(),
        price: this.ticketPrice,
        type: "paid",
        event_key: "8a064820-0546-452f-b618-73a5d134758f", //window.localStorage.getItem("current_event_key")
        limit_per_person: this.paidTicketLimitPerson,
        sale_start: `${this.paidTicketSaleStartDate} ${this.paidTicketSaleStartTime}`.trim(),
        sale_end: `${this.paidTicketSaleEndDate} ${this.paidTicketSaleEndTime}`.trim(),
        visibility: this.paidTicketVisibility,
        fees_option: this.feeOption,
        quantity: this.paidTicketQuantity
      };

      return body;
    },

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

    calculateFees() {
      if (
        this.ticketPrice === 0 ||
        this.ticketPrice === "" ||
        this.ticketPrice === undefined ||
        this.ticketPrice === null
      )
        return;

      const price = parseFloat(this.ticketPrice);
      const extra = 0.01 * price + 1;
      const amt = extra + price;
      this.registrationFee = amt.toFixed(2);

      if (this.feeOption == "1") {
        this.attendeeFee = amt.toFixed(2);
        this.organizerAmt = price.toFixed(2);
      }

      if (this.feeOption == "2") {
        this.attendeeFee = price.toFixed(2);
        this.organizerAmt = (price - extra).toFixed(2);
      }
    },

    disableFreeBtn() {
      this.isFreeCloseDisable = true;
      this.isFreeCreateDisable = true;
    },

    enableFreeBtn() {
      this.isFreeCloseDisable = false;
      this.isFreeCreateDisable = false;
    },

    disablePaidBtn() {
      this.isPaidCloseDisable = true;
      this.isPaidCreateDisable = true;
    },

    enablePaidBtn() {
      this.isPaidCloseDisable = false;
      this.isPaidCreateDisable = false;
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

      if (this.freeTicketQuantity == "") {
        this.invalidFreeQuantity = true;
      }

      if (this.freeTicketLimitPerson == "0") {
        this.invalidFreeLimit = true;
      }

      if (!this.freeTicketSaleStartDate) {
        this.invalidFreeStartDate = true;
      }

      // if (!this.freeTicketSaleStartTime) {
      //   this.invalidFreeStartTime = true;
      // }

      if (!this.freeTicketSaleEndDate) {
        this.invalidFreeEndDate = true;
      }

      // if (!this.freeTicketSaleEndTime) {
      //   this.invalidFreeEndTime = true;
      // }

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

    validatePaidTicket() {
      this.invalidPaidQuantity = false;
      this.invalidPaidTicketName = false;
      this.invalidPaidLimit = false;
      this.invalidPaidStartDate = false;
      this.invalidPaidStartTime = false;
      this.invalidPaidEndDate = false;
      this.invalidPaidEndTime = false;
      this.invalidPaidTicketPrice = false;

      if (!this.paidTicketName) {
        this.invalidPaidTicketName = true;
      }

      if (this.paidTicketQuantity == "") {
        this.invalidPaidQuantity = true;
      }

      if (this.paidTicketLimitPerson == "0") {
        this.invalidPaidLimit = true;
      }

      if (!this.paidTicketSaleStartDate) {
        this.invalidPaidStartDate = true;
      }

      // if (!this.paidTicketSaleStartTime) {
      //   this.invalidPaidStartTime = true;
      // }

      if (!this.paidTicketSaleEndDate) {
        this.invalidPaidEndDate = true;
      }

      // if (!this.paidTicketSaleEndTime) {
      //   this.invalidPaidEndTime = true;
      // }

      if (!this.ticketPrice) {
        this.invalidPaidTicketPrice = true;
      }

      if (
        this.invalidPaidEndTime ||
        this.invalidPaidEndDate ||
        this.invalidPaidStartTime ||
        this.invalidPaidStartDate ||
        this.invalidPaidLimit ||
        this.invalidPaidQuantity ||
        this.invalidPaidTicketName ||
        this.invalidPaidTicketPrice
      ) {
        return false;
      }

      return true;
    },

    resetFreeTicketData() {
      this.freeTicketName = "";
      this.freeTicketQuantity = "";
      this.freeTicketLimitPerson = "0";
      this.freeTicketSaleStartDate = "";
      this.freeTicketSaleStartTime = "";
      this.freeTicketSaleEndDate = "";
      this.freeTicketSaleEndTime = "";
      this.freeTicketVisibility = 1;
      this.invalidFreeQuantity = false;
      this.invalidFreeTicketName = false;
      this.invalidFreeLimit = false;
      this.invalidFreeStartDate = false;
      this.invalidFreeStartTime = false;
      this.invalidFreeEndDate = false;
      this.invalidFreeEndTime = false;
    },

    resetPaidTicketData() {
      this.paidTicketName = "";
      this.paidTicketQuantity = "";
      this.paidTicketLimitPerson = "0";
      this.paidTicketSaleStartDate = "";
      this.paidTicketSaleStartTime = "";
      this.paidTicketSaleEndDate = "";
      this.paidTicketSaleEndTime = "";
      this.paidTicketVisibility = 1;
      this.invalidPaidQuantity = false;
      this.invalidPaidTicketName = false;
      this.invalidPaidLimit = false;
      this.invalidPaidStartDate = false;
      this.invalidPaidStartTime = false;
      this.invalidPaidEndDate = false;
      this.invalidPaidEndTime = false;
      this.ticketPrice = "";
      this.registrationFee = 0;
      this.processingFee = 0;
      this.attendeeFee = 0;
      this.organizerAmt = 0;
    },

    saveCountryCurrency() {
      // const token = `Bearer ${window.localStorage.getItem("token")}`;
      const body = {
        event_key: "8a064820-0546-452f-b618-73a5d134758f", //window.localStorage.getItem("current_event_key"),
        country: this.ticketCountryOfPayment.name,
        currency: this.ticketCurrencyOfPayment.name
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token
        },
        body: JSON.stringify(body)
      };

      fetch(`${apiUrl}/api/event-pay-option`, options).catch(err => {
        console.log(err);
        this.$emit(
          "showFlagFromTicketTable",
          "Could not save, please check internet connection"
        );
      });
    },

    deleteTicket(evt, ticket) {
      this.$emit("showOrHideProgressBar", true);

      const options = {
        method: "DELETE",
        headers: {
          Authorization: this.token
        }
      };

      fetch(`${apiUrl}/api/ticket?id=${ticket.ticketId}`, options).then(res => {
        this.$emit("showOrHideProgressBar", false);

        if (res.status === 200) {
          // delete ticket from array
          const index = this.createdTickets.indexOf(ticket);
          if (index > -1) {
            this.createdTickets.splice(index, 1);
          }
        }
      });
    },

    setValuesToEdit_free(ticket) {
      const sale_start = ticket.sale_start.split(" ");
      let start = sale_start[0];
      let stime = "";
      if (sale_start.length > 1) {
        stime = sale_start[1];
      }

      const sale_end = ticket.sale_end.split(" ");
      let end = sale_start[0];
      let etime = "";
      if (sale_end.length > 1) {
        etime = sale_start[1];
      }

      this.freeTicketName_edit = ticket.name;
      this.freeTicketQuantity_edit = ticket.quantity;
      this.freeTicketLimitPerson_edit = ticket.limit_per_person;
      this.freeTicketSaleStartDate_edit = start;
      this.freeTicketSaleStartTime_edit = stime;
      this.freeTicketSaleEndDate_edit = end;
      this.freeTicketSaleEndTime_edit = etime;
      this.freeTicketVisibility_edit = ticket.visibility;
      this.invalidFreeQuantity_edit = false;
      this.invalidFreeTicketName_edit = false;
      this.invalidFreeLimit_edit = false;
      this.invalidFreeStartDate_edit = false;
      this.invalidFreeStartTime_edit = false;
      this.invalidFreeEndDate_edit = false;
      this.invalidFreeEndTime_edit = false;
      this.showFreeTicketMessage_edit = false;
      this.isFreeCloseDisable_edit = false;
      this.isFreeCreateDisable_edit = false;

      if (this.freeTicketVisibility_edit == "1") {
        this.freeAlways_edit = true;
        this.showHiddenOptions_edit = false;
        this.hiddenAtSpecific = false;
        this.freeEdit_end = false;
        this.freeEdit_start = false;
      }

      if (this.freeTicketVisibility_edit == "2") {
        this.freeAlways_edit = false;
        this.hiddenAtSpecific = true;
        this.showHiddenOptions_edit = true;
        this.freeEdit_start = true;
      }

      if (this.freeTicketVisibility_edit == "3") {
        this.freeAlways_edit = false;
        this.hiddenAtSpecific = true;
        this.showHiddenOptions_edit = true;
        this.freeEdit_end = true;
      }
    },

    onAlwaysVisible_edit() {
      this.freeTicketVisibility_edit = 1;
      this.showHiddenOptions_edit = false;
    },

    onHiddenAtSpecificTimeSelected_edit() {
      this.showHiddenOptions_edit = true;
    },

    onUntilSalesStart_edit() {
      this.freeTicketVisibility_edit = 2;
    },

    onUntilSalesEnd_edit() {
      this.freeTicketVisibility_edit = 3;
    },

    closeFreeTicketModal_edit(ticketId) {
      $("#edit_free_Ticket")
        .modal()
        .hide();

      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();

      $(`#open-free-ticket-btn-edit-${ticketId}`).click();
    },

    onCreateFreeTicket_edit() {
      if (!this.validateFreeTicket_edit()) {
        return;
      }

      const ticket = this.selectedTicket;
      this.disableFreeBtn_edit();

      const body = this.setFreeTicketPostBody_edit(ticket.ticketId);

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token
        },
        body: JSON.stringify(body)
      };

      fetch(`${apiUrl}/api/ticket`, options)
        .then(async res => {
          this.enableFreeBtn_edit();

          if (res.status === 200) {
            // update value in array
            let newVal = new Object();
            this.createdTickets.forEach((oneTicket, i) => {
              if (oneTicket.ticketId === ticket.ticketId) {
                newVal = body;
                newVal.price = body.price.toFixed(2);
                newVal.attendeePays = this.attendeeFee.toFixed(2);
                newVal.organizerAmt = this.organizerAmt.toFixed(2);
                newVal.ticketId = ticket.ticketId;

                this.createdTickets[i] = newVal;
              }
            });

            this.closeFreeTicketModal_edit(ticket.ticketId);
          }
        })
        .catch(err => {
          console.log(err);
          this.enableFreeBtn_edit();
        });
    },

    editFreeTicket(ticket) {
      this.selectedTicket = ticket;
      this.setValuesToEdit_free(ticket);
    },

    validateFreeTicket_edit() {
      this.invalidFreeQuantity_edit = false;
      this.invalidFreeTicketName_edit = false;
      this.invalidFreeLimit_edit = false;
      this.invalidFreeStartDate_edit = false;
      this.invalidFreeStartTime_edit = false;
      this.invalidFreeEndDate_edit = false;
      this.invalidFreeEndTime_edit = false;

      if (!this.freeTicketName_edit) {
        this.invalidFreeTicketName_edit = true;
      }

      if (this.freeTicketQuantity_edit === "") {
        this.invalidFreeQuantity_edit = true;
      }

      if (this.freeTicketLimitPerson_edit == "0") {
        this.invalidFreeLimit_edit = true;
      }

      if (!this.freeTicketSaleStartDate_edit) {
        this.invalidFreeStartDate_edit = true;
      }

      if (!this.freeTicketSaleEndDate_edit) {
        this.invalidFreeEndDate_edit = true;
      }

      if (
        this.invalidFreeEndTime_edit ||
        this.invalidFreeEndDate_edit ||
        this.invalidFreeStartTime_edit ||
        this.invalidFreeStartDate_edit ||
        this.invalidFreeLimit_edit ||
        this.invalidFreeQuantity_edit ||
        this.invalidFreeTicketName_edit
      ) {
        return false;
      }

      return true;
    },

    setFreeTicketPostBody_edit(id) {
      const body = {
        name: this.freeTicketName_edit.trim(),
        price: 0,
        type: "free",
        ticket_id: id,
        limit_per_person: this.freeTicketLimitPerson_edit,
        sale_start: `${this.freeTicketSaleStartDate_edit} ${this.freeTicketSaleStartTime_edit}`.trim(),
        sale_end: `${this.freeTicketSaleEndDate_edit} ${this.freeTicketSaleEndTime_edit}`.trim(),
        visibility: this.freeTicketVisibility_edit,
        fees_option: 3,
        quantity: this.freeTicketQuantity_edit
      };

      return body;
    },

    enableFreeBtn_edit() {
      this.isFreeCloseDisable_edit = false;
      this.isFreeCreateDisable_edit = false;
    },

    disableFreeBtn_edit() {
      this.isFreeCloseDisable_edit = true;
      this.isFreeCreateDisable_edit = true;
    }
  },

  computed: {
    ...mapGetters([
      "ticketCountryOfPayment",
      "ticketCurrencyOfPayment",
      "proceedToTicketTable"
    ])
  },

  mounted() {
    this.$refs.curdropdown.searchFilter = this.selectedCurrency.name;
    this.$refs.countdropdown.searchFilter = this.selectedCountry.name;
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

.ghana-cedi {
  font-size: 0.6rem !important;
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
