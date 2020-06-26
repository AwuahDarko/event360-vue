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
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
            aria-labelledby="questionmodal"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header bg-success">
                  <h4 class="modal-title" id="questionmodal">Create Question</h4>
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
                    <div class="col pt-2">
                      <label>Question Type</label>
                      <div class="row">
                        <select class="form-control col-md-12" @change="onQuestionTypeSelected">
                          <option value="1">Multiple choice</option>
                          <option value="2">Dropdown menu</option>
                          <option value="3">Checkbox</option>
                          <option value="4">One line text</option>
                          <option value="5">Paragraph</option>
                          <option value="6">Additional terms</option>
                        </select>
                      </div>
                    </div>
                    <div class="col pt-3">
                      <label>
                        Question
                        <span class="text-danger">*</span>
                      </label>
                      <div class="row">
                        <input class="form-control col-md-12" placeholder="Enter question" />
                      </div>
                    </div>
                    <div class="col pt-3">
                      <label>Help Text</label>
                      <div class="row">
                        <input class="form-control col-md-12" placeholder="Enter help text" />
                      </div>
                    </div>
                    <div class="col pt-3" v-if="is_multiple_or_dropdown_or_checkbox">
                      <label>Answer Options</label>
                      <div
                        class="row mb-2"
                        v-for="(opt, i) in number_of_options"
                        :key="i"
                        :id="`opt-${i}`"
                      >
                        <div class="input-group">
                          <input
                            class="form-control col-md-12"
                            :placeholder="`Option ${i + 1}`"
                            v-model="number_of_options[i]"
                          />
                          <div class="input-group-append" v-if="showDeleteBtn">
                            <button
                              class="btn btn-outline-secondary"
                              type="button"
                              @click="onDeleteOption"
                            >
                              <i class="fa fa-trash-alt"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <small class="text-success add-cursor" @click="addAnswerOption">
                        <i class="fa fa-plus"></i> Add Answer Option
                      </small>
                      <!-- CONDTIONAL SUB QUESTIONS -->
                      <div class="col mb-2 mt-1">
                        <div class="row">
                          <input
                            type="checkbox"
                            id="sub-question"
                            class="mr-1"
                            v-model="add_conditional_sub_question"
                            @change="onAddConditionalSubQuestion"
                          />
                          <label for="sub-question">Add Conditional Sub-questions</label>
                        </div>
                        <div class="col" v-if="add_conditional_sub_question">
                          <section
                            v-for="(sub_question , num) in conditional_sub_questions"
                            :key="`all-sub-${num}`"
                          >
                            <div class="row">
                              <small class="ml-2 mt-1">
                                Sub-Question {{ num + 1 }}
                                <button
                                  class="text-danger ml-1"
                                  style="border: none; background: transparent"
                                  @click="callDeleteModal(sub_question)"
                                >
                                  <i class="fa fa-trash-alt text-danger"></i>
                                  Delete
                                </button>
                              </small>
                            </div>
                            <div class="col pt-1">
                              <label>If the attendee chooses</label>
                              <div class="row">
                                <select class="form-control col-md-12">
                                  <option
                                    :value="sub_question.options[index]"
                                    v-for="(oneOpt, index) in sub_question.attendee_choose"
                                    :key="index"
                                  >{{ number_of_options[index] }}</option>
                                </select>
                              </div>
                            </div>
                            <div class="col pt-1">
                              <label>Ask the question</label>
                              <div class="row">
                                <input class="form-control col-md-12" />
                              </div>
                            </div>
                            <div class="col pt-1">
                              <label>Question Type</label>
                              <div class="row">
                                <select
                                  class="form-control col-md-12"
                                  @change="onSubQuestionTypeSelected($event.target.value, sub_question)"
                                >
                                  <option value="1">Multiple choice</option>
                                  <option value="2">Dropdown menu</option>
                                  <option value="3">Checkbox</option>
                                  <option value="4">One line text</option>
                                  <option value="5">Paragraph</option>
                                </select>
                              </div>
                            </div>
                            <div
                              class="col pt-1"
                              v-if=" sub_question.is_multiple_or_dropdown_or_checkbox"
                            >
                              <label>Answer Options</label>
                              <div
                                class="row mb-2"
                                v-for="(sub_opt, sub) in sub_question.options"
                                :key="sub"
                                :id="`sub-opt-${sub + num}`"
                              >
                                <div class="input-group">
                                  <input
                                    class="form-control col-md-12"
                                    :placeholder="`Option ${sub + 1}`"
                                    v-model="sub_question.options[sub]"
                                  />
                                  <div class="input-group-append" v-if="sub_question.showDelBtn">
                                    <button
                                      class="btn btn-outline-secondary"
                                      type="button"
                                      @click="onDeleteSubQuestionOption(sub_question, sub_opt)"
                                    >
                                      <i class="fa fa-trash-alt"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <small
                                class="text-success add-cursor"
                                @click="addSubQuestionAnswerOption(sub_question)"
                              >
                                <i class="fa fa-plus"></i> Add Answer Option
                              </small>
                            </div>
                          </section>
                          <small class="text-success add-cursor" @click="addSubQuestion">
                            <i class="fa fa-plus"></i> Add Another Sub-Question
                          </small>
                        </div>
                      </div>
                      <!-- CONSTIONAL SUB QUESTIONS ENDS HERE -->
                    </div>
                    <div v-else-if="is_additional_terms" class="col mt-3">
                      <label class="p-0">
                        Terms Title
                        <span class="text-danger">*</span>
                      </label>
                      <div class="row">
                        <input type="text" class="form-control col-md-12 mb-2 p-0" />
                      </div>
                      <label>
                        Terms Content
                        <span class="text-danger">*</span>
                      </label>
                      <div class="row">
                        <textarea cols="30" rows="5" class="col-md-12 form-control"></textarea>
                      </div>
                    </div>
                    <div class="col">
                      <label>
                        <strong>Optional Settings</strong>
                      </label>
                      <div class="row">
                        <input type="checkbox" id="specify-ticket" class="mr-1" />
                        <label
                          for="specify-ticket"
                        >Show this question only for specific ticket types</label>
                      </div>
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
        <!-- DELETE MODAL -->
        <modal
          name="delete-question-modal"
          :width="width"
          :height="infoModalHeight"
          :reset="true"
          :styles="infoBoxStyles"
        >
          <div class="card">
            <div class="card-body">
              <p>Are you sure you want to delete this?</p>
            </div>
            <div class="card-footer">
              <div class="send-right">
                <button class="my-btn btn-info" @click="closeDeleteModal">No</button>
                <button class="my-btn btn-danger ml-2" @click="deleteSubQuestion">Yes</button>
              </div>
            </div>
          </div>
        </modal>
      </div>
    </div>
  </section>
</template>




<script>
export default {
  name: "Registration",
  components: {},

  data() {
    return {
      infoBoxStyles: "background: none;",
      width: "50%",
      height: "50px",
      is_multiple_or_dropdown_or_checkbox: true,
      number_of_options: ["", ""],
      showDeleteBtn: false,
      is_additional_terms: false,
      selectedOption: "1",
      add_conditional_sub_question: false,
      conditional_sub_questions: [],
      selected_sub_question: new Object()
    };
  },

  methods: {
    onQuestionTypeSelected(evt) {
      this.selectedOption = evt.target.value;
      if (
        this.selectedOption === "1" ||
        this.selectedOption === "2" ||
        this.selectedOption === "3"
      ) {
        this.is_multiple_or_dropdown_or_checkbox = true;
        this.is_additional_terms = false;

        if (this.number_of_options.length > 1 && this.selectedOption === "3") {
          this.showDeleteBtn = true;
        } else if (
          (this.selectedOption === "1" || this.selectedOption === "2") &&
          this.number_of_options.length < 2
        ) {
          this.number_of_options.push("");
        }
        // =========================================
      } else if (this.selectedOption === "6") {
        this.is_additional_terms = true;
        this.is_multiple_or_dropdown_or_checkbox = false;
      } else {
        this.is_additional_terms = false;
        this.is_multiple_or_dropdown_or_checkbox = false;
      }
    },

    addAnswerOption() {
      this.number_of_options.push("");
      this.showDeleteBtn = true;
    },

    onDeleteOption(opt) {
      const index = this.number_of_options.indexOf(opt);
      this.number_of_options.splice(index, 1);

      if (
        this.number_of_options.length === 2 &&
        (this.selectedOption == "1" || this.selectedOption == "2")
      ) {
        this.showDeleteBtn = false;
        return;
      }

      if (this.number_of_options.length === 1 && this.selectedOption == "3") {
        this.showDeleteBtn = false;
        return;
      }
    },

    onAddConditionalSubQuestion(evt) {
      this.add_conditional_sub_question = evt.target.checked;
      if (evt.target.checked) {
        this.addSubQuestion();
      } else {
        this.conditional_sub_questions = [];
      }
    },

    addSubQuestion() {
      const sub_question = new Object();
      sub_question.attendee_choose = this.number_of_options;
      sub_question.options = ["", ""];
      sub_question.showDelBtn = false;
      sub_question.question_type = "1";
      sub_question.is_multiple_or_dropdown_or_checkbox = true;
      this.conditional_sub_questions.push(sub_question);
    },

    onSubQuestionTypeSelected(value, sub_question) {
      sub_question.question_type = value;

      if (
        sub_question.question_type === "1" ||
        sub_question.question_type === "2" ||
        sub_question.question_type === "3"
      ) {
        sub_question.is_multiple_or_dropdown_or_checkbox = true;

        if (
          sub_question.options.length > 1 &&
          sub_question.question_type === "3"
        ) {
          sub_question.showDelBtn = true;
        } else if (
          (sub_question.question_type === "1" ||
            sub_question.question_type === "2") &&
          sub_question.options.length < 2
        ) {
          sub_question.options.push("");
        }
        // =========================================
      } else {
        sub_question.is_multiple_or_dropdown_or_checkbox = false;
      }
    },

    addSubQuestionAnswerOption(sub_question) {
      sub_question.options.push("");
      sub_question.showDelBtn = true;
    },

    onDeleteSubQuestionOption(sub_question, opt) {
      const index = sub_question.options.indexOf(opt);
      sub_question.options.splice(index, 1);

      if (
        sub_question.options.length === 2 &&
        (sub_question.question_type == "1" || sub_question.question_type == "2")
      ) {
        sub_question.showDelBtn = false;
        return;
      }

      if (
        sub_question.options.length === 1 &&
        sub_question.question_type == "3"
      ) {
        sub_question.showDelBtn = false;
        return;
      }
    },

    callDeleteModal(sub_question) {
      this.selected_sub_question = sub_question;
      this.$modal.show("delete-question-modal");
    },

    closeDeleteModal() {
      this.$modal.hide("delete-question-modal");
    },

    deleteSubQuestion() {
      const index = this.conditional_sub_questions.indexOf(
        this.selected_sub_question
      );
      this.conditional_sub_questions.splice(index, 1);

      if (this.conditional_sub_questions.length === 0) {
        this.add_conditional_sub_question = false;
      }

      this.$modal.hide("delete-question-modal");
    }
  }
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

label:not(.form-check-label):not(.custom-file-label) {
  font-weight: normal;
}

label {
  margin-bottom: 0;
}

.add-cursor {
  cursor: pointer;
}

.vm--container {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999999;
}
.vm--modal {
  box-shadow: none;
}

.send-right {
  display: flex;
  justify-content: flex-end;
}

.my-btn {
  width: 30%;
}

@media (max-width: 575px) {
  .dialog-btn-image {
    width: 100%;
    height: 200px;
  }
}

@media (max-width: 280) {
  .my-btn {
    width: 50%;
  }
}
</style>