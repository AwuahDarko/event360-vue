<template>
  <section>
    <div>
      <div class="card-header space-out-children">
        <h3 class="card-title">
          <b>Registration Form</b>
        </h3>
        <div style="width: 70%; "></div>
        <button class="btn btn-success" style="display: none">Next</button>
      </div>
      <div class="card-body">
        <div class="pl-3 pr-3">
          <p>
            Specify the questions your attendees will answer when registering for your event.
            Please note: attendees will have a 24 hour window in which they can edit their answers
          </p>
        </div>
        <div class="row">
          <div class="col-md-4">
            <button
              type="button"
              class="btn btn-block btn-success btn-md next"
              data-toggle="modal"
              data-target="#option-modal"
            >
              <i class="fas fa-plus"></i> Add Question
            </button>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-6"></div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card-body p-0">
              <table class="table table-hover table-responsive">
                <thead>
                  <tr>
                    <th style="width: 80%">Questions</th>
                    <th style="width: 5%">Included</th>
                    <th style="width: 5%">Required</th>
                    <th style="width: 10%">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Prefix</td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>First Name and Last Name</td>
                    <td class="align-content-center">
                      <input type="checkbox" disabled checked />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" disabled checked />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td class="align-content-center">
                      <input type="checkbox" disabled checked />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" disabled checked />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Birth Date</td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Home Phone</td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Book Hotel</td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Book Airport Pick up</td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Job Title</td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Cell Phone</td>
                    <td class="align-content-center">
                      <input type="checkbox" />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Work Phone</td>
                    <td class="align-content-center">
                      <input type="checkbox" />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>

                  <tr>
                    <td>Company</td>
                    <td class="align-content-center">
                      <input type="checkbox" />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr class="special-tr"></tr>
                  <tr>
                    <td>Custom Question</td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td class="align-content-center">
                      <input type="checkbox" checked />
                    </td>
                    <td>
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
      </div>
      <!-- MODALS HERE -->
      <!-- OPTION MODAL HERE FIRST -->
      <div class="modal fade" id="option-modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-success">
              <h4 class="modal-title">Create Question</h4>
              <button type="button" class="close" aria-label="Close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-xm-6">
                  <button
                    type="button"
                    class="btn btn-block bg-light"
                    data-toggle="modal"
                    data-target="#free_Ticket"
                    data-dismiss="modal"
                    id="open-free-ticket-btn"
                  >
                    <img
                      class="dialog-btn-image"
                      src="../assets/img/recycle.png"
                      alt="recycle image"
                    />
                    <small>Reuse a previous event's questions saved in Event360</small>
                  </button>
                </div>

                <div class="col-md-6 col-sm-6 col-xm-6">
                  <button
                    type="button"
                    class="btn btn-block bg-light"
                    data-toggle="modal"
                    data-target="#new-question-modal"
                    id="open-paid-ticket-btn"
                    data-dismiss="modal"
                  >
                    <img class="dialog-btn-image" src="../assets/img/scroll.png" alt="scroll image" />
                    <small>Start a new question from scratch</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- OPTION MODAL ENDS HERE -->
      <!-- QUESTION MODAL -->
      <div class="row">
        <div class="col-md-12">
          <div
            class="modal fade"
            data-backdrop="static"
            data-keyboard="false"
            id="new-question-modal"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header bg-success">
                  <h4 class="modal-title">Create Question</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="col-md-12">
                    <div>
                      <input type="checkbox" id="req" />
                      <label class="ml-2" for="req">Required</label>
                    </div>
                    <div class="col">
                      <label>Question Type</label>
                      <div class="row">
                        <select class="form-control col-md-12">
                          <option value>Multiple choice</option>
                          <option value>Dropdown menu</option>
                          <option value>Checkbox</option>
                          <option value>One line text</option>
                          <option value>Paragraph</option>
                          <option value>Additional terms</option>
                        </select>
                      </div>
                    </div>
                    <div class="col">
                      <label>
                        Question
                        <span class="text-danger">*</span>
                      </label>
                      <div class="row">
                        <input class="form-control col-md-12" placeholder="Enter question" />
                      </div>
                    </div>
                    <div class="col">
                      <label>Help Text</label>
                      <div class="row">
                        <input class="form-control col-md-12" placeholder="Enter help text" />
                      </div>
                    </div>
                    <div>
                      <!-- TODO: SHOW CONTENT BASED ON SELECTED-->
                    </div>
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
    </div>
  </section>
</template>




<script>
export default {
  name: "Registration",
  components: {},

  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped>
@import url("../assets/css/fontawesome-free-5.13.1-web/css/all.min.css");
/* @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"); */

table thead tr th {
  font-weight: 500;
  font-size: 0.8rem;
}

table tbody tr td {
  font-weight: normal;
  font-size: 0.8rem;
}

.align-content-center {
  text-align: center;
}

.ruler {
  display: block;
  height: 2px;
  border: 0;
  border-top: 1px solid rgb(120, 229, 30);
  margin: 0 0;
  padding: 0;
}

.special-tr {
  border-width: 3px;
  border-color: lightgrey;
  border-top-style: solid;
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

.dialog-btn-image {
  width: 100%;
  height: 90%;
}
</style>