<template>
  <!-- table of tickets -->
  <div class="card" id="last_step">
    <div class="card-header">
      <h3 class="card-title">
        <b>Tickets</b>
      </h3>
    </div>
    <div class="card-header">
      <div class="row">
        <div class="col-md-6">
          <p>Customize tickets and prices here</p>
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div style="width: 90%;">
            <button
              type="button"
              class="btn btn-block btn-success btn-md next"
              data-toggle="modal"
              data-target="#modal-default"
            >
              <i class="fas fa-plus"></i> Create Ticket
            </button>
          </div>
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
                <td class="project-actions text-right">
                  <a class="btn btn-info btn-sm" href="#">
                    <i class="fas fa-pencil-alt"></i>
                    Edit
                  </a>
                  <a class="btn btn-danger btn-sm" href="#">
                    <i class="fas fa-trash"></i>
                    Delete
                  </a>
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
            <p style="text-align: center;">
              What type of Ticket are you creating ?
            </p>
            <div class="row">
              <div class="col-md-5 col-sm-5 col-xm-5">
                <div style="width: 60%; float: right;">
                  <button
                    type="button"
                    class="btn btn-block btn-success"
                    data-toggle="modal"
                    data-target="#free_Ticket"
                  >
                    Free Ticket
                  </button>
                </div>
              </div>
              <div class="col-md-2 col-sm-5 col-xm-5">
                <p style="text-align: center;">Or</p>
              </div>
              <div class="col-md-5 col-sm-5 col-xm-5">
                <div style="width: 60%">
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
    </div>

    <!-- paid ticket modal ends -->

    <!-- ============Free tickets ============-->

    <div class="row">
      <div class="col-md-12">
        <div class="modal fade" id="free_Ticket">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
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
                              <input class="form-control" type="date" />
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
                            <h2 class="lead">
                              <b>Ticket Visibility</b>
                            </h2>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" />
                            <label class="form-check-label"
                              >Always Visible</label
                            >
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" />
                            <label class="form-check-label"
                              >Always Hidden</label
                            >
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" />
                            <label class="form-check-label"
                              >Hidden at a specific time</label
                            >
                          </div>
                          <div class="form-check ml-2">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />
                            <label class="form-check-label"
                              >Until Ticket sales start</label
                            >
                          </div>
                          <div class="form-check ml-2">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />
                            <label class="form-check-label"
                              >Until Ticket sales ends</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-between">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
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
                            <select
                              class="form-control select2"
                              style="width: 100%;"
                            >
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
                            <h2 class="lead">
                              <b>Ticket Visibility</b>
                            </h2>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" />
                            <label class="form-check-label"
                              >Always Visible</label
                            >
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" />
                            <label class="form-check-label"
                              >Always Hidden</label
                            >
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" />
                            <label class="form-check-label"
                              >Hidden at a specific time</label
                            >
                          </div>
                          <div class="form-check ml-2">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />
                            <label class="form-check-label"
                              >Until Ticket sales start</label
                            >
                          </div>
                          <div class="form-check ml-2">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />
                            <label class="form-check-label"
                              >Until Ticket sales ends</label
                            >
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
                            <select
                              class="form-control select2"
                              style="width: 100%;"
                            >
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
                          <div
                            class="fees_shade"
                            style="background-color: #f4f6f9"
                          >
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
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
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
  <!-- table of ticket ends -->
</template>

<script>
export default {};
</script>

<style scoped></style>
