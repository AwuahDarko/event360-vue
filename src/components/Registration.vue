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
            Specify the questions your attendees will answer when registering
            for your event. Please note: attendees will have a 24 hour window in
            which they can edit their answers
          </p>
        </div>
        <div class="row">
          <div class="col-md-4">
            <button
              type="button"
              class="btn btn-block btn-success btn-md next"
              id="add-question-btn"
              @click="verifyLegality"
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
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionInclude(
                            'Prefix',
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionRequired(
                            'Prefix',
                            $event.target.checked ? 'required' : 'not required'
                          )
                        "
                      />
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
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionInclude(
                            'Gender',
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionRequired(
                            'Gender',
                            $event.target.checked ? 'required' : 'not required'
                          )
                        "
                      />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Birth Date</td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionInclude(
                            'Birth Date',
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionRequired(
                            'Birth Date',
                            $event.target.checked ? 'required' : 'not required'
                          )
                        "
                      />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Home Phone</td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionInclude(
                            'Home Phone',
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionRequired(
                            'Home Phone',
                            $event.target.checked ? 'required' : 'not required'
                          )
                        "
                      />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Cell Phone</td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionInclude(
                            'Cell Phone',
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionRequired(
                            'Cell Phone',
                            $event.target.checked ? 'required' : 'not required'
                          )
                        "
                      />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Work Phone</td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionInclude(
                            'Work Phone',
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionRequired(
                            'Work Phone',
                            $event.target.checked ? 'required' : 'not required'
                          )
                        "
                      />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Job Title</td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionInclude(
                            'Job Title',
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionRequired(
                            'Job Title',
                            $event.target.checked ? 'required' : 'not required'
                          )
                        "
                      />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Company</td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionInclude(
                            'Company',
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionRequired(
                            'Company',
                            $event.target.checked ? 'required' : 'not required'
                          )
                        "
                      />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Book Hotel</td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionInclude(
                            'Book Hotel',
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionRequired(
                            'Book Hotel',
                            $event.target.checked ? 'required' : 'not required'
                          )
                        "
                      />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr>
                    <td>Book Airport Pick up</td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionInclude(
                            'Book Airport Pick up',
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        @change="
                          updateMainQuestionRequired(
                            'Book Airport Pick up',
                            $event.target.checked ? 'required' : 'not required'
                          )
                        "
                      />
                    </td>
                    <td>
                      <!-- LEAVE EMPTY -->
                    </td>
                  </tr>
                  <tr class="special-tr"></tr>
                  <tr v-if="formQuestions.length === 0" style="visibility: hidden">
                    <td>This is a hidden row</td>
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
                  <tr v-for="custom_question in formQuestions" :key="custom_question.formId">
                    <td>{{ custom_question.field }}</td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        :checked="custom_question.include_this"
                        @change="
                          setCustomQuestionRequiredInclude(
                            custom_question,
                            custom_question.option,
                            $event.target.checked ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td class="align-content-center">
                      <input
                        type="checkbox"
                        :checked="
                          custom_question.option === 'required' ? true : false
                        "
                        @change="
                          setCustomQuestionRequiredInclude(
                            custom_question,
                            $event.target.checked ? 'required' : 'not required',
                            custom_question.include_this ? 1 : 0
                          )
                        "
                      />
                    </td>
                    <td>
                      <button
                        class="edit-btn"
                        data-toggle="modal"
                        data-target="#new-question-modal"
                        :id="`edit-btn-${custom_question.formId}`"
                        @click="onEditOrReviewQuestion(custom_question)"
                      >
                        <i class="fas fa-pencil-alt"></i>
                      </button>
                      <button
                        class="del-btn"
                        @click="setCustomQuestionToBeDeleted(custom_question)"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style="display: flex; justify-content: flex-end; margin-top: 10px">
                <div>
                  <button
                    class="btn btn-block btn-success"
                    @click="$emit('onSwitchTab', 'subscription-tab')"
                  >Next</button>
                </div>
              </div>
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
                    data-target="#recycle-modal"
                    id="open-recycle-modal-btn"
                  >
                    <img
                      class="dialog-btn-image"
                      src="../assets/img/recycle.png"
                      alt="recycle image"
                    />
                    <p>Reuse a previous event's questions saved in Event360</p>
                  </button>
                </div>

                <div class="col-md-6 col-sm-6 col-xm-6">
                  <button
                    type="button"
                    class="btn btn-block bg-light"
                    data-toggle="modal"
                    data-target="#new-question-modal"
                    id="open-scratch-btn"
                  >
                    <img
                      class="dialog-btn-image-2"
                      src="../assets/img/scroll.png"
                      alt="scroll image"
                    />
                    <p>Start a new question from scratch</p>
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
                  <div class="col-md-12">
                    <div>
                      <input type="checkbox" id="req" v-model="required" />
                      <label class="ml-2" for="req">Required</label>
                    </div>
                    <div class="col pt-2">
                      <label>Question Type</label>
                      <div class="row">
                        <select
                          class="form-control col-md-12"
                          v-model="selectedOption"
                          @change="onQuestionTypeSelected"
                        >
                          <option value="1">Multiple choice</option>
                          <option value="2">Dropdown menu</option>
                          <option value="3">Checkbox</option>
                          <option value="4">One line text</option>
                          <option value="5">Paragraph</option>
                          <option value="6">Additional terms</option>
                        </select>
                      </div>
                    </div>
                    <div class="col pt-3" v-if="selectedOption !== '6'">
                      <label>
                        Question
                        <span class="text-danger">*</span>
                      </label>
                      <div class="row" v-bind:class="{ 'is-empty': invalidQuestion }">
                        <input
                          class="form-control col-md-12"
                          placeholder="Enter question"
                          v-model="main_question"
                          @input="invalidQuestion = false"
                        />
                      </div>
                    </div>
                    <div class="col pt-3" v-if="selectedOption !== '6'">
                      <label>Help Text</label>
                      <div class="row">
                        <input
                          class="form-control col-md-12"
                          placeholder="Enter help text"
                          v-model="help_text"
                        />
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
                        <div
                          class="input-group"
                          v-bind:class="{ 'is-empty': invalidMainOptions[i] }"
                        >
                          <input
                            class="form-control col-md-12"
                            :placeholder="`Option ${i + 1}`"
                            v-model="number_of_options[i]"
                            @input="invalidMainOptions[i] = false"
                          />
                          <div class="input-group-append" v-if="showDeleteBtn">
                            <button
                              class="btn btn-outline-secondary"
                              type="button"
                              @click="onDeleteOption(opt)"
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
                            v-for="(sub_question,
                            num) in conditional_sub_questions"
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
                                <select
                                  class="form-control col-md-12"
                                  @change="
                                    onSelected(
                                      $event.target.value,
                                      sub_question
                                    )
                                  "
                                  v-model="sub_question.choice"
                                >
                                  <option
                                    :value="sub_question.attendee_choose[index]"
                                    v-for="(oneOpt,
                                    index) in sub_question.attendee_choose"
                                    :key="`option-${index}`"
                                  >{{ oneOpt }}</option>
                                </select>
                              </div>
                            </div>
                            <div class="col pt-1">
                              <label>Ask the question</label>
                              <div
                                class="row"
                                v-bind:class="{
                                  'is-empty': sub_question.invalidQuestion,
                                }"
                              >
                                <input
                                  class="form-control col-md-12"
                                  v-model="sub_question.question"
                                  @input="sub_question.invalidQuestion = false"
                                />
                              </div>
                            </div>
                            <div class="col pt-1">
                              <label>Question Type</label>
                              <div class="row">
                                <select
                                  class="form-control col-md-12"
                                  @change="
                                    onSubQuestionTypeSelected(
                                      $event.target.value,
                                      sub_question
                                    )
                                  "
                                  v-model="sub_question.question_type"
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
                              v-if="
                                sub_question.is_multiple_or_dropdown_or_checkbox
                              "
                            >
                              <label>Answer Options</label>
                              <div
                                class="row mb-2"
                                v-for="(sub_opt, sub) in sub_question.options"
                                :key="sub"
                                :id="`sub-opt-${sub + num}`"
                              >
                                <div
                                  class="input-group"
                                  v-bind:class="{
                                    'is-empty':
                                      sub_question.invalidOptions[sub],
                                  }"
                                >
                                  <input
                                    class="form-control col-md-12"
                                    :placeholder="`Option ${sub + 1}`"
                                    v-model="sub_question.options[sub]"
                                    @input="
                                      sub_question.invalidOptions[sub] = false
                                    "
                                  />
                                  <div class="input-group-append" v-if="sub_question.showDelBtn">
                                    <button
                                      class="btn btn-outline-secondary"
                                      type="button"
                                      @click="
                                        onDeleteSubQuestionOption(
                                          sub_question,
                                          sub_opt
                                        )
                                      "
                                    >
                                      <i class="fa fa-trash-alt"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <small
                                class="text-success add-cursor"
                                @click="
                                  addSubQuestionAnswerOption(sub_question)
                                "
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
                        <input
                          type="text"
                          class="form-control col-md-12 mb-2 p-0"
                          v-model="terms_title"
                          @input="invalidTermsTitle = false"
                          v-bind:class="{ 'is-empty': invalidTermsTitle }"
                        />
                      </div>
                      <label>
                        Terms Content
                        <span class="text-danger">*</span>
                      </label>
                      <div class="row" v-bind:class="{ 'is-empty': invalidTermsContent }">
                        <textarea
                          cols="30"
                          rows="5"
                          class="col-md-12 form-control"
                          v-model="terms_content"
                          @input="invalidTermsContent = false"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col">
                      <label>
                        <strong>Optional Settings</strong>
                      </label>
                      <div class="row">
                        <input
                          type="checkbox"
                          id="specify-ticket"
                          class="mr-1"
                          v-model="add_to_specific_ticket"
                        />
                        <label for="specify-ticket">
                          Show this question only for specific ticket
                          types
                        </label>
                      </div>
                      <div class="ml-2" v-if="add_to_specific_ticket">
                        <div v-for="ticket in createdTickets" :key="ticket.ticketId">
                          <input
                            type="checkbox"
                            :id="`tick-${ticket.ticketId}`"
                            :checked="
                              specifiedTickets.has(String(ticket.ticketId))
                            "
                            @change="
                              addSpecifiedTickets(
                                $event.target.checked,
                                ticket.ticketId
                              )
                            "
                          />
                          <label class="ml-2" :for="`tick-${ticket.ticketId}`">{{ ticket.name }}</label>
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
                    :disabled="disableCloseBtn"
                    @click="reset"
                  >Close</button>
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="createForm"
                    :disabled="disableCreateBtn"
                  >{{ setForUpdate ? 'Update' : 'Create' }}</button>
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
          :height="height"
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
        <modal
          name="delete-custom-question-modal"
          :width="width"
          :height="height"
          :reset="true"
          :styles="infoBoxStyles"
        >
          <div class="card">
            <div class="card-body">
              <p>Are you sure you want to delete this?</p>
            </div>
            <div class="card-footer">
              <div class="send-right">
                <button class="my-btn btn-info" @click="closeCustomQuestionModal">No</button>
                <button class="my-btn btn-danger ml-2" @click="deleteCustomQuestion">Yes</button>
              </div>
            </div>
          </div>
        </modal>
      </div>

      <!-- RECYCLE MODAL STARTS -->
      <div class="row">
        <div class="col-md-12">
          <div class="modal fade" data-backdrop="static" data-keyboard="false" id="recycle-modal">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header bg-success">
                  <h4 class="modal-title">Reuse Past Questions</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <!-- ==================================== -->
                  <a-steps :current="current_step" size="small">
                    <a-step title="Select"></a-step>
                    <a-step title="Review"></a-step>
                    <a-step title="Import"></a-step>
                  </a-steps>
                  <article class="row" v-if="current_step === 0">
                    <div class="col-md-6">
                      <div class="col-md-12 mt-3">
                        <p>
                          <strong>Select Previous Event</strong>
                        </p>
                      </div>
                      <select
                        class="form-control col-md-12"
                        @change="onEventSelected"
                        v-model="the_event"
                      >
                        <option value="0">--Choose One--</option>
                        <option
                          :value="event.event_key"
                          v-for="event in createdEvents"
                          :key="event.event_key"
                        >{{ event.name }}</option>
                      </select>
                      <section v-if="selected_events_questions.length > 0">
                        <div class="col-md-12 mt-3">
                          <p>
                            <strong>Select Past Created Questions</strong>
                          </p>
                        </div>
                        <div
                          class="row pl-2"
                          v-for="form in selected_events_questions"
                          :key="`form-${form._id}`"
                        >
                          <input
                            type="checkbox"
                            :id="`question-${form._id}`"
                            class="mr-2"
                            @change="
                              onQuestionSelected($event.target.checked, form)
                            "
                          />
                          <label :for="`question-${form._id}`">{{ form.field }}</label>
                        </div>
                      </section>
                      <section style="height: 50px"></section>
                      <small class="mt-3">
                        You will be able to edit selected questions on the next
                        screen
                      </small>
                      <!-- <div style="height: 50px"></div> -->
                    </div>
                  </article>
                  <!-- PREVIOUS QUESTIONS EDIT HERE -->
                  <article v-if="current_step === 1">
                    <div class="col-md-12 mt-4">
                      <p>
                        <strong>
                          {{
                          `Review questions: ${current_index} of ${selected_questions.length}`
                          }}
                        </strong>
                      </p>
                      <div>
                        <input type="checkbox" id="req" v-model="required" />
                        <label class="ml-2" for="req">Required</label>
                      </div>
                      <div class="col pt-2">
                        <label>Question Type</label>
                        <div class="row">
                          <select
                            class="form-control col-md-12"
                            v-model="selectedOption"
                            @change="onQuestionTypeSelected"
                          >
                            <option value="1">Multiple choice</option>
                            <option value="2">Dropdown menu</option>
                            <option value="3">Checkbox</option>
                            <option value="4">One line text</option>
                            <option value="5">Paragraph</option>
                            <option value="6">Additional terms</option>
                          </select>
                        </div>
                      </div>
                      <div class="col pt-3" v-if="selectedOption !== '6'">
                        <label>
                          Question
                          <span class="text-danger">*</span>
                        </label>
                        <div class="row" v-bind:class="{ 'is-empty': invalidQuestion }">
                          <input
                            class="form-control col-md-12"
                            placeholder="Enter question"
                            v-model="main_question"
                            @input="invalidQuestion = false"
                          />
                        </div>
                      </div>
                      <div class="col pt-3" v-if="selectedOption !== '6'">
                        <label>Help Text</label>
                        <div class="row">
                          <input
                            class="form-control col-md-12"
                            placeholder="Enter help text"
                            v-model="help_text"
                          />
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
                          <div
                            class="input-group"
                            v-bind:class="{ 'is-empty': invalidMainOptions[i] }"
                          >
                            <input
                              class="form-control col-md-12"
                              :placeholder="`Option ${i + 1}`"
                              v-model="number_of_options[i]"
                              @input="invalidMainOptions[i] = false"
                            />
                            <div class="input-group-append" v-if="showDeleteBtn">
                              <button
                                class="btn btn-outline-secondary"
                                type="button"
                                @click="onDeleteOption(opt)"
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
                              v-for="(sub_question,
                              num) in conditional_sub_questions"
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
                                  <select
                                    class="form-control col-md-12"
                                    @change="
                                      onSelected(
                                        $event.target.value,
                                        sub_question
                                      )
                                    "
                                    v-model="sub_question.choice"
                                  >
                                    <option
                                      :value="
                                        sub_question.attendee_choose[index]
                                      "
                                      v-for="(oneOpt,
                                      index) in sub_question.attendee_choose"
                                      :key="`option-${index}`"
                                    >{{ oneOpt }}</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col pt-1">
                                <label>Ask the question</label>
                                <div
                                  class="row"
                                  v-bind:class="{
                                    'is-empty': sub_question.invalidQuestion,
                                  }"
                                >
                                  <input
                                    class="form-control col-md-12"
                                    v-model="sub_question.question"
                                    @input="
                                      sub_question.invalidQuestion = false
                                    "
                                  />
                                </div>
                              </div>
                              <div class="col pt-1">
                                <label>Question Type</label>
                                <div class="row">
                                  <select
                                    class="form-control col-md-12"
                                    @change="
                                      onSubQuestionTypeSelected(
                                        $event.target.value,
                                        sub_question
                                      )
                                    "
                                    v-model="sub_question.question_type"
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
                                v-if="
                                  sub_question.is_multiple_or_dropdown_or_checkbox
                                "
                              >
                                <label>Answer Options</label>
                                <div
                                  class="row mb-2"
                                  v-for="(sub_opt, sub) in sub_question.options"
                                  :key="sub"
                                  :id="`sub-opt-${sub + num}`"
                                >
                                  <div
                                    class="input-group"
                                    v-bind:class="{
                                      'is-empty':
                                        sub_question.invalidOptions[sub],
                                    }"
                                  >
                                    <input
                                      class="form-control col-md-12"
                                      :placeholder="`Option ${sub + 1}`"
                                      v-model="sub_question.options[sub]"
                                      @input="
                                        sub_question.invalidOptions[sub] = false
                                      "
                                    />
                                    <div class="input-group-append" v-if="sub_question.showDelBtn">
                                      <button
                                        class="btn btn-outline-secondary"
                                        type="button"
                                        @click="
                                          onDeleteSubQuestionOption(
                                            sub_question,
                                            sub_opt
                                          )
                                        "
                                      >
                                        <i class="fa fa-trash-alt"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <small
                                  class="text-success add-cursor"
                                  @click="
                                    addSubQuestionAnswerOption(sub_question)
                                  "
                                >
                                  <i class="fa fa-plus"></i> Add Answer Option
                                </small>
                              </div>
                            </section>
                            <small class="text-success add-cursor" @click="addSubQuestion">
                              <i class="fa fa-plus"></i> Add Another
                              Sub-Question
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
                          <input
                            type="text"
                            class="form-control col-md-12 mb-2 p-0"
                            v-model="terms_title"
                            @input="invalidTermsTitle = false"
                            v-bind:class="{ 'is-empty': invalidTermsTitle }"
                          />
                        </div>
                        <label>
                          Terms Content
                          <span class="text-danger">*</span>
                        </label>
                        <div class="row" v-bind:class="{ 'is-empty': invalidTermsContent }">
                          <textarea
                            cols="30"
                            rows="5"
                            class="col-md-12 form-control"
                            v-model="terms_content"
                            @input="invalidTermsContent = false"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col">
                        <label>
                          <strong>Optional Settings</strong>
                        </label>
                        <div class="row">
                          <input
                            type="checkbox"
                            id="specify-ticket"
                            class="mr-1"
                            v-model="add_to_specific_ticket"
                          />
                          <label for="specify-ticket">
                            Show this question only for specific ticket
                            types
                          </label>
                        </div>
                        <div class="ml-2" v-if="add_to_specific_ticket">
                          <div v-for="ticket in createdTickets" :key="ticket.ticketId">
                            <input
                              type="checkbox"
                              :id="`tick-${ticket.ticketId}`"
                              :checked="
                                specifiedTickets.has(String(ticket.ticketId))
                              "
                              @change="
                                addSpecifiedTickets(
                                  $event.target.checked,
                                  ticket.ticketId
                                )
                              "
                            />
                            <label class="ml-2" :for="`tick-${ticket.ticketId}`">{{ ticket.name }}</label>
                          </div>
                        </div>
                        <div
                          v-if="current_step === 1"
                          style="display: flex; justify-content: flex-end"
                        >
                          <div class="badge badge-danger">{{current_index}}</div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <!-- PREVIOUS QUESTIONS EDIT END -->

                  <article v-if="current_step === 2">
                    <table class="table mt-4">
                      <thead class="bg-info">
                        <tr>
                          <th>
                            <strong>Question</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(body, i) in review_bodies" :key="`summary-${i}`">
                          <td>{{ body.field }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div style="height: 10px"></div>
                  </article>

                  <!-- ==================================== -->
                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    type="button"
                    class="btn btn-default"
                    @click="onPrevious"
                    :disabled="disable_prev_btn"
                  >{{ current_step === 0 ? 'Close' : 'Previous' }}</button>
                  <button
                    type="button"
                    class="btn btn-success"
                    v-if="current_step === 2"
                    :disabled="disable_import_btn"
                    @click="onImport"
                  >
                    <img
                      v-if="disable_import_btn"
                      src="../assets/img/load.gif"
                      width="15px"
                      height="15px"
                      alt="load"
                    />
                    Import
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    :disabled="disable_next_step"
                    v-else
                    @click="onNext"
                  >Next</button>
                </div>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
      </div>
    </div>
    <!-- RECYCLE MODAL ENDS -->
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { apiUrl } from "../utils/config";
import $ from "jquery";
import { objectIsEmpty } from "../utils/utility";

export default {
  name: "Registration",
  props: {
    token: String
  },
  components: {},

  data() {
    return {
      infoBoxStyles: "background: none;",
      width: "50%",
      height: "auto",
      is_multiple_or_dropdown_or_checkbox: true,
      number_of_options: ["", ""],
      showDeleteBtn: false,
      is_additional_terms: false,
      selectedOption: "1",
      add_conditional_sub_question: false,
      conditional_sub_questions: [],
      selected_sub_question: new Object(),
      invalidQuestion: false,
      invalidMainOptions: [false, false],
      main_question: "",
      terms_title: "",
      terms_content: "",
      invalidTermsTitle: false,
      invalidTermsContent: false,
      required: false,
      help_text: "",
      add_to_specific_ticket: false,
      specifiedTickets: new Set(),
      disableCloseBtn: false,
      disableCreateBtn: false,
      custom_question_to_be_deleted: new Object(),
      setForUpdate: false,
      selected_question_for_edit: new Object(),
      // STEPPER
      current_step: 0,
      disable_next_step: true,
      selected_events_questions: new Array(),
      selected_questions: new Array(),
      the_event: "0",
      current_index: 0,
      review_bodies: [],
      disable_import_btn: false,
      disable_prev_btn: false,
      first_time: true
    };
  },

  methods: {
    ...mapActions([
      "onFormQuestionCreated",
      "onFormQuestionDeleted",
      "onUpdateFormQuestion"
    ]),

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
        this.number_of_options = ["", ""];
      } else {
        this.is_additional_terms = false;
        this.is_multiple_or_dropdown_or_checkbox = false;
        this.number_of_options = ["", ""];
      }
    },

    addAnswerOption() {
      this.number_of_options.push("");
      this.invalidMainOptions.push(false);
      this.showDeleteBtn = true;
    },

    onDeleteOption(opt) {
      const index = this.number_of_options.indexOf(opt);
      this.number_of_options.splice(index, 1);
      this.invalidMainOptions.splice(index, 1);

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
        const sub_question = new Object();
        sub_question.attendee_choose = this.number_of_options;
        sub_question.options = ["", ""];
        sub_question.showDelBtn = false;
        sub_question.question_type = "1";
        sub_question.invalidQuestion = false;
        sub_question.question = "";
        sub_question.choice = this.number_of_options[0];
        sub_question.invalidOptions = [false, false];
        sub_question.is_multiple_or_dropdown_or_checkbox = true;
        this.conditional_sub_questions.push(sub_question);
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
      sub_question.invalidQuestion = false;
      sub_question.question = "";
      sub_question.choice = this.number_of_options[0];
      sub_question.invalidOptions = [false, false];
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
      sub_question.invalidOptions.push(false);
      sub_question.showDelBtn = true;
    },

    onDeleteSubQuestionOption(sub_question, opt) {
      const index = sub_question.options.indexOf(opt);
      sub_question.options.splice(index, 1);
      sub_question.invalidOptions.splice(index, 1);

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
    },

    onSelected(value, sub_question) {
      sub_question.choice = value;
    },

    validateFields() {
      if (this.selectedOption == "6") {
        /**
         * * validate terms title
         */
        if (this.terms_title === "") {
          this.invalidTermsTitle = true;
        }

        /**
         * * validate terms contents
         */
        if (this.terms_content === "") {
          this.invalidTermsContent = true;
        }

        return !this.invalidTermsContent && !this.invalidTermsTitle;
      } else if (this.selectedOption == "4" || this.selectedOption == "5") {
        if (this.main_question === "") {
          this.invalidQuestion = true;
        }
        return this.invalidQuestion ? false : true;
      } else {
        let proceed = true;

        /**
         * * validate question
         *  */
        if (this.main_question === "") {
          this.invalidQuestion = true;
          proceed = false;
        }

        /**
         * * validate options
         * */
        this.number_of_options.forEach((opt, i) => {
          if (opt === "") {
            this.invalidMainOptions[i] = true;
            proceed = false;
          }
        });

        this.conditional_sub_questions.forEach(one_sub_ques => {
          /**
           * * validate sub question
           *  */
          if (one_sub_ques.question === "") {
            one_sub_ques.invalidQuestion = true;
            proceed = false;
          }

          /**
           * * validate sub options
           *  */
          if (
            one_sub_ques.question_type == "1" ||
            one_sub_ques.question_type == "2" ||
            one_sub_ques.question_type == "3"
          ) {
            one_sub_ques.options.forEach((opt, index) => {
              if (opt === "") {
                one_sub_ques.invalidOptions[index] = true;
                proceed = false;
              }
            });
          }
        });

        return proceed;
      }
    },

    addSpecifiedTickets(value, ticketId) {
      if (value) this.specifiedTickets.add(ticketId);
    },

    getBody() {
      let type = "";
      // set the type based on the option selected for question type
      switch (this.selectedOption) {
        case "1":
          type = "multiple";
          break;
        case "2":
          type = "select";
          break;
        case "3":
          type = "checkbox";
          break;
        case "4":
          type = "text";
          break;
        case "5":
          type = "textarea";
          break;
        case "6":
          type = "terms";
          break;
        default:
          type = "text";
          break;
      }

      // check if has options
      let has_options = false;
      this.number_of_options.forEach(one => {
        if (one.length > 0) {
          has_options = true;
        }
      });

      // set the tickets to attach question to
      let ticks = "";
      this.specifiedTickets.forEach((tick, i) => {
        ticks += tick;

        if (i != this.specifiedTickets.length - 1) {
          ticks += ";";
        }
      });

      const choices = new Array();

      if (
        this.selectedOption == "1" ||
        this.selectedOption == "2" ||
        this.selectedOption == "3"
      ) {
        // if there are no sub conditional questions
        if (this.conditional_sub_questions.length === 0) {
          this.number_of_options.forEach(oneOpt => {
            choices.push({
              value: oneOpt,
              conditional_question: {}
            });
          });
        } else {
          // if there are sub-question
          this.conditional_sub_questions.forEach(sub_question => {
            let type = "";
            switch (sub_question.question_type) {
              case "1":
                type = "multiple";
                break;
              case "2":
                type = "select";
                break;
              case "3":
                type = "checkbox";
                break;
              case "4":
                type = "text";
                break;
              case "5":
                type = "textarea";
                break;
              case "6":
                type = "terms";
                break;
              default:
                type = "text";
                break;
            }
            // check if has options
            let has_option = false;
            sub_question.options.forEach(one => {
              if (one.length > 0) {
                has_option = true;
              }
            });

            choices.push({
              value: sub_question.choice,
              conditional_question: {
                sub_field: sub_question.question,
                sub_type: type,
                sub_has_options: has_option,
                sub_choice: sub_question.options
              }
            });
          });
        }

        // check those options which did not have sub-questions and add then too
        const temp = [];
        this.conditional_sub_questions.forEach(one => {
          temp.push(one.choice);
        });

        this.number_of_options.map(oneOpt => {
          if (!temp.includes(oneOpt)) {
            choices.push({
              value: oneOpt,
              conditional_question: {}
            });
          }
        });
      }

      const body = {
        event_key: window.localStorage.getItem("current_event_key"),
        field:
          this.selectedOption == "6" ? this.terms_title : this.main_question,
        type: type,
        option: this.required ? "required" : "not required",
        placeholder:
          this.selectedOption == "6" ? this.terms_content : this.help_text,
        has_options: has_options,
        ticket_id: ticks,
        include_this: true,
        choice: choices
      };

      if (this.setForUpdate) {
        /**
         * ? i have a naming conflict here; the backend expects form_id but this frontend used formId
         * ? i don't want to go back and make changes hennce i have both property availabe with the same value
         */
        body.form_id = this.selected_question_for_edit.formId;
        body.formId = this.selected_question_for_edit.formId;
      }

      return body;
    },

    createForm() {
      if (!this.validateFields()) return;

      const body = this.getBody();

      const options = {
        method: !this.setForUpdate ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token
        },
        body: JSON.stringify(body)
      };

      this.disableBtn();
      this.$emit("showProgress", true);

      fetch(`${apiUrl}/api/registration-form`, options)
        .then(async res => {
          console.log(res);
          this.$emit("showProgress", false);
          this.enableBtn();

          if (res.status === 202) {
            if (!this.setForUpdate) {
              const form = await res.json();
              body.formId = form._id;
              this.onFormQuestionCreated(body);
              this.closeModals();
            } else {
              this.onUpdateFormQuestion(body);
              this.setForUpdate = false;
              this.closeModal2();
            }

            this.reset();
          }

          if (res.status === 400) {
            const t = await res.text();
            console.log(t);
          }
        })
        .catch(err => console.log(err));
    },

    reset() {
      this.is_multiple_or_dropdown_or_checkbox = true;
      this.number_of_options = ["", ""];
      this.showDeleteBtn = false;
      this.is_additional_terms = false;
      this.selectedOption = "1";
      this.add_conditional_sub_question = false;
      this.conditional_sub_questions = [];
      this.selected_sub_question = new Object();
      this.invalidQuestion = false;
      this.invalidMainOptions = [false, false];
      this.main_question = "";
      this.terms_title = "";
      this.terms_content = "";
      this.invalidTermsTitle = false;
      this.invalidTermsContent = false;
      this.required = false;
      this.help_text = "";
      this.add_to_specific_ticket = false;
      this.specifiedTickets = new Set();
      this.setForUpdate = false;
    },

    closeModals() {
      //  for option modal
      $("#option-modal")
        .modal()
        .hide();

      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();

      // $(`#add-question-btn`).click();

      // for question modal
      $("#new-question-modal")
        .modal()
        .hide();

      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();

      $(`#open-scratch-btn`).click();
    },

    closeModal2() {
      $("#new-question-modal")
        .modal()
        .hide();

      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();

      $(`#edit-btn-${this.selected_question_for_edit.formId}`).click();
    },

    disableBtn() {
      this.disableCloseBtn = true;
      this.disableCreateBtn = true;
    },

    enableBtn() {
      this.disableCloseBtn = false;
      this.disableCreateBtn = false;
    },

    updateMainQuestionRequired(field, option) {
      const event_key = window.localStorage.getItem("current_event_key");

      const options = {
        method: "GET",
        headers: {
          Authorization: this.token
        }
      };

      fetch(
        `${apiUrl}/api/registration-form?event_key=${event_key}&option=${option}&field=${field}`,
        options
      ).catch(err => console.log(err));
    },

    updateMainQuestionInclude(field, include) {
      const event_key = window.localStorage.getItem("current_event_key");

      const options = {
        method: "GET",
        headers: {
          Authorization: this.token
        }
      };

      fetch(
        `${apiUrl}/api/registration-form?event_key=${event_key}&include=${include}&field=${field}`,
        options
      ).catch(err => console.log(err));
    },

    setCustomQuestionRequiredInclude(question, option, include) {
      const options = {
        method: "GET",
        headers: {
          Authorization: this.token
        }
      };

      fetch(
        `${apiUrl}/api/custom-registration-form?id=${question.formId}&option=${option}&include=${include}`,
        options
      )
        .then(() => {
          question.include_this = include == 1 ? true : false;
          question.option = option;
          this.onUpdateFormQuestion(question);
        })
        .catch(err => console.log(err));
    },

    closeCustomQuestionModal() {
      this.$modal.hide("delete-custom-question-modal");
    },

    deleteCustomQuestion() {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: this.token
        }
      };

      this.$emit("showProgress", true);

      fetch(
        `${apiUrl}/api/registration-form?form_id=${this.custom_question_to_be_deleted.formId}`,
        options
      )
        .then(res => {
          this.$emit("showProgress", false);
          if (res.status === 200) {
            this.onFormQuestionDeleted(this.custom_question_to_be_deleted);
          }

          this.$modal.hide("delete-custom-question-modal");
        })
        .catch(err => console.log(err));
    },

    setCustomQuestionToBeDeleted(question) {
      this.custom_question_to_be_deleted = question;
      this.$modal.show("delete-custom-question-modal");
    },

    onEditOrReviewQuestion(custom_question, edit = true) {
      if (edit) {
        this.setForUpdate = true;
        this.selected_question_for_edit = custom_question;
      }

      this.conditional_sub_questions = [];

      if (
        custom_question.type === "multiple" ||
        custom_question.type === "select" ||
        custom_question.type === "checkbox"
      ) {
        this.is_multiple_or_dropdown_or_checkbox = true;
        this.main_question = custom_question.field;
        this.help_text = custom_question.placeholder;
        this.number_of_options = [];

        switch (custom_question.type) {
          case "multiple":
            this.selectedOption = "1";
            break;
          case "select":
            this.selectedOption = "2";
            break;
          case "checkbox":
            this.selectedOption = "3";
            break;
        }

        if (custom_question.choice.length > 0) {
          this.add_conditional_sub_question = true;
        } else {
          this.add_conditional_sub_question = false;
        }

        custom_question.choice.forEach(oneChoice => {
          this.number_of_options.push(oneChoice.value);
          if (
            custom_question.type === "checkbox" &&
            this.number_of_options.length > 1
          ) {
            this.showDeleteBtn = true;
          } else if (
            (custom_question.type === "multiple" ||
              custom_question.type === "select") &&
            this.number_of_options.length > 2
          ) {
            this.showDeleteBtn = true;
          }

          if (!objectIsEmpty(oneChoice.conditional_question)) {
            // this.add_conditional_sub_question = true;

            const sub_question = new Object();
            sub_question.attendee_choose = this.number_of_options; // wait a cotton pickin minute
            sub_question.options = oneChoice.conditional_question.sub_choice;

            if (
              sub_question.options.length > 1 &&
              oneChoice.conditional_question.sub_type === "checkbox"
            ) {
              sub_question.showDelBtn = true;
            } else if (
              sub_question.options.length > 2 &&
              (oneChoice.conditional_question.sub_type === "select" ||
                oneChoice.conditional_question.sub_type === "multiple")
            ) {
              sub_question.showDelBtn = true;
            }

            switch (oneChoice.conditional_question.sub_type) {
              case "multiple":
                sub_question.question_type = "1";
                sub_question.is_multiple_or_dropdown_or_checkbox = true;
                break;
              case "select":
                sub_question.question_type = "2";
                sub_question.is_multiple_or_dropdown_or_checkbox = true;
                break;
              case "checkbox":
                sub_question.question_type = "3";
                sub_question.is_multiple_or_dropdown_or_checkbox = true;
                break;
              case "text":
                sub_question.question_type = "4";
                break;
              case "textarea":
                sub_question.question_type = "5";
                break;
              case "terms":
                sub_question.question_type = "6";
                break;
            }

            sub_question.invalidQuestion = false;
            sub_question.question = oneChoice.conditional_question.sub_field;
            sub_question.choice = oneChoice.value;
            sub_question.invalidOptions = [false, false];

            this.conditional_sub_questions.push(sub_question);
          }
        });
      } else if (
        custom_question.type === "text" ||
        custom_question.type === "textarea"
      ) {
        this.is_multiple_or_dropdown_or_checkbox = false;
        this.main_question = custom_question.field;
        this.help_text = custom_question.placeholder;

        switch (custom_question.type) {
          case "text":
            this.selectedOption = "4";
            break;
          case "textarea":
            this.selectedOption = "5";
            break;
        }
      } else if (custom_question.type === "terms") {
        this.is_multiple_or_dropdown_or_checkbox = false;
        this.selectedOption = "6";

        this.terms_title = custom_question.field;
        this.terms_content = custom_question.placeholder;
      }

      this.required = custom_question.option === "required" ? true : false;

      this.invalidQuestion = false;
      this.invalidMainOptions = [false, false];

      this.invalidTermsTitle = false;
      this.invalidTermsContent = false;

      if (custom_question.ticket_id === "") {
        this.add_to_specific_ticket = false;
        this.specifiedTickets = new Set();
      } else {
        this.specifiedTickets = new Set();
        this.add_to_specific_ticket = true;
        const list = custom_question.ticket_id.split(";");
        this.specifiedTickets.add(...list);
      }
    },

    onEventSelected(evt) {
      const key = evt.target.value;
      this.selected_questions = [];

      if (key === "0") return;

      const list = this.previousFormQuestion.filter(form => form.key === key);

      const all_questions = list[0].value;

      this.selected_events_questions = all_questions.filter(
        oneQues =>
          oneQues.field != "Prefix" &&
          oneQues.field != "First Name and Last Name" &&
          oneQues.field != "Email" &&
          oneQues.field != "Gender" &&
          oneQues.field != "Birth Date" &&
          oneQues.field != "Home Phone" &&
          oneQues.field != "Cell Phone" &&
          oneQues.field != "Work Phone" &&
          oneQues.field != "Job Title" &&
          oneQues.field != "Company" &&
          oneQues.field != "Book Hotel" &&
          oneQues.field != "Book Airport Pick up"
      );
    },

    onQuestionSelected(value, question) {
      if (value) {
        this.selected_questions.push(question);
      } else {
        const index = this.selected_questions.indexOf(question);
        this.selected_questions.splice(index, 1);
      }

      if (this.selected_questions.length != 0) this.disable_next_step = false;
      else this.disable_next_step = true;
    },

    onNext() {
      // validate
      if (this.current_step === 1 && !this.validateFields()) return;

      if (
        this.current_step == 1 &&
        this.current_index < this.selected_questions.length
      ) {
        // create body first
        this.createReviewBody();
        // insert new data into files
        this.onEditOrReviewQuestion(
          this.selected_questions[this.current_index],
          false
        );
        ++this.current_index;
      } else {
        // no data has been pushed by the if stateent above, don't add yet
        if (!this.first_time) {
          this.createReviewBody();
        }

        this.first_time = false;

        this.onEditOrReviewQuestion(this.selected_questions[0], false);

        this.current_step += 1;

        ++this.current_index;
      }
    },

    onPrevious() {
      if (this.current_step === 0) {
        this.closeModal3();
        return;
      }

      if (
        this.current_step === 1 &&
        this.current_index <= this.selected_questions.length &&
        this.current_index > 1
      ) {
        this.current_index -= 1;
        this.review_bodies.pop();

        this.onEditOrReviewQuestion(
          this.selected_questions[this.current_index - 1],
          false
        );
      } else {
        this.current_step -= 1;
        this.current_index -= 1;
        this.onEditOrReviewQuestion(
          this.selected_questions[this.selected_questions.length - 1],
          false
        );
        this.review_bodies.pop();
      }

      if (this.current_step == 0) {
        this.selected_questions = [];
        this.current_index = 0;
        this.review_bodies = [];
        this.disable_next_step = true;
        this.first_time = true;
      }
    },

    closeModal3() {
      //  for option modal
      $("#option-modal")
        .modal()
        .hide();

      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();

      // $(`#add-question-btn`).click();

      $("#recycle-modal")
        .modal()
        .hide();

      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();

      $(`#open-recycle-modal-btn`).click();
    },

    createReviewBody() {
      this.review_bodies.push(this.getBody());
    },

    onImport() {
      this.review_bodies.forEach((one_body, i) => {
        this.disable_import_btn = true;
        this.disable_prev_btn = true;
        this.doImport(one_body);

        if (i === this.review_bodies.length - 1) {
          this.disable_import_btn = false;
          this.disable_prev_btn = false;
          // reset
          this.current_step = 0;
          this.disable_next_step = true;
          this.selected_events_questions = new Array();
          this.selected_questions = new Array();
          this.the_event = "0";
          this.current_index = 0;
          this.review_bodies = [];
          this.first_time = true;

          this.closeModal3();

          this.reset();
        }
      });
    },

    doImport(body) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token
        },
        body: JSON.stringify(body)
      };

      fetch(`${apiUrl}/api/registration-form`, options)
        .then(async res => {
          if (res.status === 202) {
            const form = await res.json();
            body.formId = form._id;
            this.onFormQuestionCreated(body);
          }

          if (res.status === 400) {
            const t = await res.text();
            console.log(t);
          }
        })
        .catch(err => console.log(err));
    },

    verifyLegality() {
      this.event_key = window.localStorage.getItem("current_event_key");
      if (this.event_key === null || this.event_key === "") {
        this.$emit(
          "showFlagFromRegistration",
          "To add a question you must first create an event."
        );
        return;
      }
      $("#option-modal")
        .modal()
        .show();
    }
  },

  computed: {
    ...mapGetters([
      "createdTickets",
      "formQuestions",
      "createdEvents",
      "previousFormQuestion"
    ])
  },

  mounted() {}
};
</script>

<style scoped>
/* @import url("../assets/css/fontawesome-free-5.13.1-web/css/all.min.css"); */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");

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

.is-empty {
  border-color: red !important;
  border-style: solid !important;
  border-width: 1px;
  border-radius: 5px;
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
  width: 70%;
  height: 9.5rem;
}

.dialog-btn-image-2 {
  width: 70%;
  height: 9.5rem;
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
