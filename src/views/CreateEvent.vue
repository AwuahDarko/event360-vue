<template>
  <!-- <div > -->

  <div class="hold-transition sidebar-mini layout-fixed">
    <vue-progress-bar></vue-progress-bar>
    <snackbar
      ref="snackbar"
      baseSize="50px"
      :holdTime="5000"
      :multiple="true"
      :position="position"
    />
    <div class="wrapper">
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <div>
            <a href="https://event360-gh.com">
              <img src="../assets/img/logo.png" alt="e360 logo" width="60px" height="40px" />
            </a>
          </div>
        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
          <!--  </a> -->
          <!-- Messages Dropdown Menu -->
          <li class="nav-item dropdown">
            <!-- <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="far fa-comments"></i>
              <span class="badge badge-danger navbar-badge">3</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" class="dropdown-item">
                <div class="media">
                  <img
                    src="dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    class="img-size-50 mr-3 img-circle"
                  />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Brad Diesel
                      <span class="float-right text-sm text-danger">
                        <i class="fas fa-star"></i>
                      </span>
                    </h3>
                    <p class="text-sm">Call me whenever you can...</p>
                    <p class="text-sm text-muted">
                      <i class="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>

              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
            </div>-->
          </li>
          <!-- Notifications Dropdown Menu -->

          <div class="app-header__content mr-5">
            <div class="app-header-right">
              <div class="header-btn-lg pr-0">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left">
                      <!-- <div class="btn-group" style="text-decoration: none;">
                        <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          class="p-0 btn"
                        >
                          Help
                          <i class="fa fa-angle-down ml-2 opacity-10" style="color: #000;"></i>
                        </a>
                        <div
                          tabindex="-1"
                          role="menu"
                          aria-hidden="true"
                          class="dropdown-menu dropdown-menu-right"
                        >
                          <a href="#">
                            <button type="button" tabindex="0" class="dropdown-item">Product Update</button>
                          </a>
                          <a href="#">
                            <button
                              type="button"
                              tabindex="0"
                              class="dropdown-item"
                            >How do i create an event</button>
                          </a>
                          <a href="#">
                            <button
                              type="button"
                              tabindex="0"
                              class="dropdown-item"
                            >How does it cost to create an event?</button>
                          </a>
                          <div tabindex="-1" class="dropdown-divider"></div>
                          <a href="#">
                            <button type="button" tabindex="0" class="dropdown-item">Help Center</button>
                          </a>
                        </div>
                      </div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="app-header__content">
            <div class="app-header-right">
              <div class="header-btn-lg pr-0">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left">
                      <div class="btn-group" style="text-decoration: none;">
                        <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          class="p-0 btn"
                        >
                          <img width="30" class="rounded-circle" src="../assets/img/avatar.png" />
                          <i class="fa fa-angle-down ml-2 opacity-10" style="color: #000;"></i>
                        </a>
                        <div
                          tabindex="-1"
                          role="menu"
                          aria-hidden="true"
                          class="dropdown-menu dropdown-menu-right"
                        >
                          <!--  <div tabindex="-1" class="dropdown-divider"></div> -->
                          <a href="#">
                            <button type="button" tabindex="0" class="dropdown-item">My Events</button>
                          </a>
                          <a href="#">
                            <button type="button" tabindex="1" class="dropdown-item">Browse Events</button>
                          </a>
                          <a href="#">
                            <button
                              type="button"
                              tabindex="2"
                              class="dropdown-item"
                              @click="logout"
                            >Log Out</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <li class="nav-item">
            <a
              class="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <!--  <i class="fas fa-th-large"></i> -->
            </a>
          </li>
        </ul>
      </nav>

      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6"></div>
              <div class="col-sm-6"></div>
            </div>
          </div>
          <section class="content">
            <div class="container-fluid">
              <div class="row">
                <section class="col-lg-2 connectedSortable">
                  <button type="button" class="btn btn-block btn-default btn-lg">
                    <i style="font-size:16px;" class="fa">&#xf104;</i> Dashboard
                  </button>
                </section>
                <section class="col-lg-10 connectedSortable">
                  <!-- Map card -->
                  <div class="col-sm-12">
                    <div class="card card-primary card-tabss">
                      <div class="card-headers p-0 pt-1">
                        <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                          <li class="nav-item">
                            <a
                              v-if="event_profile_done"
                              class="nav-link active"
                              id="event-profile-tab"
                              data-toggle="pill"
                              href="#custom-tabs-one-home"
                              role="tab"
                              aria-controls="custom-tabs-one-home"
                              aria-selected="true"
                            >
                              <i class="far fa-check-circle" style="font-size: 1rem;"></i>
                              Event Profile
                            </a>
                            <a
                              v-else
                              class="nav-link active"
                              id="event-profile-tab"
                              data-toggle="pill"
                              href="#custom-tabs-one-home"
                              role="tab"
                              aria-controls="custom-tabs-one-home"
                              aria-selected="true"
                            >
                              <i class="far fa-circle" style="font-size: 1rem;"></i>
                              Event Profile
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              v-if="tickets_done"
                              class="nav-link"
                              id="tickets-tab"
                              data-toggle="pill"
                              href="#custom-tabs-one-profile"
                              role="tab"
                              aria-controls="custom-tabs-one-profile"
                              aria-selected="false"
                            >
                              <i class="far fa-check-circle" style="font-size: 1rem;"></i>
                              Tickets
                            </a>
                            <a
                              v-else
                              class="nav-link"
                              id="tickets-tab"
                              data-toggle="pill"
                              href="#custom-tabs-one-profile"
                              role="tab"
                              aria-controls="custom-tabs-one-profile"
                              aria-selected="false"
                            >
                              <i class="far fa-circle" style="font-size: 1rem;"></i>
                              Tickets
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              v-if="registration_done"
                              class="nav-link"
                              id="registration-tab"
                              data-toggle="pill"
                              href="#custom-tabs-one-messages"
                              role="tab"
                              aria-controls="custom-tabs-one-messages"
                              aria-selected="false"
                            >
                              <i class="far fa-check-circle" style="font-size: 1rem;"></i>
                              Registration
                            </a>
                            <a
                              v-else
                              class="nav-link"
                              id="registration-tab"
                              data-toggle="pill"
                              href="#custom-tabs-one-messages"
                              role="tab"
                              aria-controls="custom-tabs-one-messages"
                              aria-selected="false"
                            >
                              <i class="far fa-circle" style="font-size: 1rem;"></i>
                              Registration
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              v-if="subscription_done"
                              class="nav-link"
                              id="subscription-tab"
                              data-toggle="pill"
                              href="#custom-tabs-one-settings"
                              role="tab"
                              aria-controls="custom-tabs-one-settings"
                              aria-selected="false"
                            >
                              <i class="far fa-check-circle" style="font-size: 1rem;"></i>
                              Subscription
                            </a>
                            <a
                              v-else
                              class="nav-link"
                              id="subscription-tab"
                              data-toggle="pill"
                              href="#custom-tabs-one-settings"
                              role="tab"
                              aria-controls="custom-tabs-one-settings"
                              aria-selected="false"
                            >
                              <i class="far fa-circle" style="font-size: 1rem;"></i>
                              Subscription
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              id="publish-tab"
                              data-toggle="pill"
                              href="#custom-tabs-one-publish"
                              role="tab"
                              aria-controls="custom-tabs-one-publish"
                              aria-selected="false"
                            >Publish</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div class="row">
                <section class="col-lg-12 connectedSortable myyy">
                  <div>
                    <div class="tab-content" id="event_profile">
                      <div
                        class="tab-pane fade active show"
                        id="custom-tabs-one-home"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-home-tab"
                      >
                        <div class="row">
                          <div class="card-default card col-lg-8 col-md-8 col-sm-12">
                            <div class="card-header">
                              <h3 class="card-title event__info">
                                Event Information
                                <i class="fas fa-info-circle"></i>
                              </h3>
                            </div>
                            <div class="card-body">
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label for="exampleInputEmail1">
                                      Event Name
                                      <span style="color: red;">*</span>
                                    </label>
                                    <input
                                      type="email"
                                      class="form-control"
                                      v-bind:class="{
                                        'is-empty': invalidEventName,
                                      }"
                                      v-on:input="
                                        setEventPreview($event.target.value)
                                      "
                                      placeholder="Enter name"
                                    />
                                  </div>
                                </div>

                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label>
                                      Type
                                      <span style="color: red;">*</span>
                                    </label>
                                    <select
                                      v-bind:class="{
                                        'is-empty': invalidEventType,
                                      }"
                                      v-model="eventType"
                                      class="form-control select2"
                                      style="width: 100%;"
                                    >
                                      <!-- <option selected >Select event type</option> -->
                                      <option>Camp, Trip or Retreat</option>
                                      <option>Conference</option>
                                      <option>Convention</option>
                                      <option>Dinner or Gala</option>
                                      <option>Festival or Fair</option>
                                      <option>Forum</option>
                                      <option>Meeting or Networking Event</option>
                                      <option>Meetup</option>
                                      <option>Seminar or Talk</option>
                                      <option>Submit</option>
                                      <option>Tradeshow, Consumershow, Expo</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label>
                                      Category
                                      <span style="color: red;">*</span>
                                    </label>
                                    <select
                                      v-bind:class="{
                                        'is-empty': invalidCategory,
                                      }"
                                      v-model="category"
                                      class="form-control select2"
                                      style="width: 100%;"
                                    >
                                      <option
                                        :key="category.id"
                                        v-for="category in allCategories"
                                        :value="category.id"
                                      >{{ category.name }}</option>
                                    </select>
                                  </div>
                                </div>

                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label for="tags">
                                      Enter Tags
                                      <small
                                        style="font-weight: lighter; color: #6610f2"
                                      >(press spacebar after each tag)</small>
                                    </label>
                                    <ChipInput />
                                  </div>
                                </div>

                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label for="exampleInputEmail1">
                                      Organiser
                                      <span style="color: red;">*</span>
                                    </label>
                                    <input
                                      v-bind:class="{
                                        'is-empty': invalidOrganiser,
                                      }"
                                      v-model="orgainser"
                                      type="email"
                                      class="form-control"
                                      id="exampleInputEmail1"
                                      placeholder="Name of organiser"
                                    />
                                  </div>
                                </div>

                                <div class="flex-column">
                                  <div class="form-group flow-row">
                                    <label for="exampleFormControlSelect1">
                                      Number of Attendees
                                      <span style="color: red;">*</span>
                                    </label>
                                    <select
                                      v-model="numOfAttendees"
                                      class="form-control"
                                      id="exampleFormControlSelect1"
                                    >
                                      <option>Fewer than 500</option>
                                      <option>500 - 1500</option>
                                      <option>1500 - 3000</option>
                                      <option>3000 - 5000</option>
                                      <option>5000 - 10000</option>
                                      <option>10000 - 30000</option>
                                      <option>More than 30000</option>
                                    </select>
                                  </div>

                                  <div class="mb-2 mt-2">
                                    <input
                                      class="mr-2"
                                      id="checkboxPrimary3"
                                      type="checkbox"
                                      checked
                                      v-model="includeTicketsBtn"
                                    />
                                    <label
                                      for="checkboxPrimary3"
                                      style=" font-weight: lighter !important;"
                                    >Include a "Buy Tickets" button</label>
                                  </div>
                                </div>

                                <div class="col-md-12">
                                  <div class="form-group editor-box">
                                    <label>
                                      Description
                                      <span style="color: red;">*</span>
                                    </label>
                                    <editor
                                      api-key="phevds72510mw4s5asyx4exfqzdxg7cipelpwnvevcee9qx6"
                                      :init="{
                                        height: 400,
                                        paste_data_images: true,
                                        menubar: true,
                                        themes: 'modern',
                                        image_advtab: true,
                                        selector: 'textarea',
                                        plugins: [
                                          'advlist autolink lists link image charmap print preview anchor',
                                          'searchreplace visualblocks code fullscreen',
                                          'insertdatetime media table paste code help wordcount link code imagetools filepicker',
                                        ],
                                        toolbar:
                                          'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | ' +
                                          ' help image media table forecolor backcolor emoticons preview insertfile',
                                        file_picker_callback: callbaavkFile,
                                        file_picker_types: 'image',
                                      }"
                                      v-model="textEditorData"
                                      @onChange="getTextEditorData"
                                      v-bind:class="{
                                        'is-empty': invalidShortDescription,
                                      }"
                                    />
                                    <input name="image" type="file" id="upload" class="hidden" />
                                  </div>
                                </div>

                                <!-- date start -->
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label>
                                      Start Date
                                      <span style="color: red;">*</span>
                                    </label>
                                    <div class="input-group">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                          <i class="far fa-calendar-alt"></i>
                                        </span>
                                      </div>
                                      <!-- <input type="date" class="form-control float-right"  :value="startDate"> -->
                                      <input
                                        v-bind:class="{
                                          'is-empty': invalidStartDate,
                                        }"
                                        type="date"
                                        class="form-control float-right"
                                        v-model="startDate"
                                        @change="
                                          setStartDatePreview(
                                            $event.target.value
                                          )
                                        "
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label>
                                      End Date
                                      <span style="color: red;">*</span>
                                    </label>
                                    <div class="input-group">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                          <i class="far fa-calendar-alt"></i>
                                        </span>
                                      </div>
                                      <input
                                        v-bind:class="{
                                          'is-empty': invalidEndDate,
                                        }"
                                        type="date"
                                        v-model="endDate"
                                        class="form-control float-right"
                                        @change="
                                          setEndDatePreview($event.target.value)
                                        "
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label>
                                      Location
                                      <span style="color: red;">*</span>
                                    </label>
                                  </div>
                                </div>
                                <div class="row col-md-12">
                                  <div class="map-view col-md-6 card">
                                    <Map />
                                  </div>

                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        v-bind:class="{
                                          'is-empty': invalidVenue,
                                        }"
                                        ref="venueInput"
                                        @input="getVenue"
                                        v-model="getLocation.venue"
                                        placeholder="Venue name"
                                      />
                                    </div>
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        v-bind:class="{
                                          'is-empty': invalidStreet,
                                        }"
                                        ref="streetInput"
                                        v-model="getLocation.street"
                                        placeholder="Street"
                                      />
                                    </div>
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        v-bind:class="{
                                          'is-empty': invalidCity,
                                        }"
                                        ref="cityInput"
                                        v-model="getLocation.city"
                                        placeholder="City"
                                      />
                                    </div>
                                    <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <input
                                            type="text"
                                            class="form-control"
                                            v-bind:class="{
                                              'is-empty': invalidState,
                                            }"
                                            ref="stateInput"
                                            v-model="getLocation.state"
                                            placeholder="State"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <input
                                            type="text"
                                            class="form-control"
                                            v-bind:class="{
                                              'is-empty': invalidpostal_zip,
                                            }"
                                            v-model="postal_zip"
                                            @input="setPostalCode"
                                            placeholder="Postal/Zip Code"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      v-bind:class="{
                                        'country-empty': invalidCountry,
                                      }"
                                    >
                                      <Dropdown
                                        :options="allCountries"
                                        v-on:selected="getSelectedCountry"
                                        v-on:filter="getDropdownValues"
                                        :disabled="false"
                                        name="country"
                                        :maxItem="256"
                                        placeholder="Country"
                                        ref="dropdown"
                                      ></Dropdown>
                                    </div>
                                  </div>
                                </div>
                                <br />

                                <!-- IMAGE UPLOAD -->
                                <div class="col-md-12 mt-3">
                                  <div class="card card-widget">
                                    <div class="card-header">
                                      <h3 class="card-title event__info">
                                        Branding
                                        <i class="fas fa-info-circle"></i>
                                      </h3>
                                      <div class="card-tools"></div>
                                    </div>
                                    <div class="card-body">
                                      <div>
                                        <button
                                          type="button"
                                          class="btn btn-block btn-success btn-flat"
                                        >
                                          Add Banner Image
                                          <span
                                            class="badge badge-light"
                                          >{{ bannerName }}</span>
                                        </button>

                                        <div class="image-upload-wrap">
                                          <input
                                            class="file-upload-input bring-to-front"
                                            type="file"
                                            accept="image/*"
                                            @change="getSelectedBanner"
                                          />
                                          <div class="drag-text">
                                            <img
                                              :src="bannerSrc"
                                              v-if="bannerLoaded"
                                              class="logo-image"
                                            />
                                            <h3 class="bring-to-front-2">
                                              Drag and drop a file or select add
                                              Banner Image
                                            </h3>
                                          </div>
                                        </div>
                                        <div class="file-upload-content"></div>
                                      </div>
                                      <!-- NE UPLOAD END -->
                                    </div>
                                  </div>
                                  <!-- new logo -->
                                  <div class="card-body myLogocard mb-2" style="width: 50%;">
                                    <div style="width: 100%;">
                                      <button type="button" class="btn btn-block btn-success mb-2">
                                        Add logo
                                        <span class="badge badge-light">{{ logoName }}</span>
                                      </button>
                                    </div>
                                    <div class="image-upload-wrap2">
                                      <input
                                        class="file-upload-input2 bring-to-front"
                                        type="file"
                                        accept="image/*"
                                        @change="getSelectedLogo"
                                      />
                                      <div class="drag-text">
                                        <img :src="logoSrc" v-if="logoLoaded" class="logo-image" />
                                        <h5 class="bring-to-front-2">Drag or Add logo</h5>
                                      </div>
                                    </div>
                                    <div class="file-upload-content2" style="background-color: red">
                                      <img class="attachment-img" src="#" alt="your image" />
                                      <div class="image-title-wrap2">
                                        <button type="button" class="btn btn-default btn-sm mt-2">
                                          <i
                                            class="fa fa-fw"
                                            aria-hidden="true"
                                            title="Copy to use close"
                                          ></i>Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>

                                  <!-- ends -->
                                </div>

                                <!-- IMAGE UPLOAD ENDS -->

                                <!-- ACCESS MANAGEMENT -->
                                <div
                                  v-bind:class="{
                                    'access-empty': accessInvalid,
                                  }"
                                >
                                  <div class="col-md-12">
                                    <!-- <div class=""> -->
                                    <div class="card-header">
                                      <h3 class="card-title event__info">
                                        Access Management
                                        <i class="fas fa-info-circle"></i>
                                      </h3>
                                    </div>
                                    <!-- /.card-header -->
                                    <div>
                                      <div class="carousel slide" data-ride="carousel">
                                        <div class="col-md-12">
                                          <div class="card">
                                            <div class="card-body divBorder">
                                              <div class="row">
                                                <div class="col-md-9">
                                                  <h6>
                                                    <i
                                                      class="fa fa-fw"
                                                      aria-hidden="true"
                                                      title="Copy to use bullhorn"
                                                    ></i>
                                                    Open Access (Default)
                                                  </h6>
                                                  <p>
                                                    Anyone can search for and
                                                    join your event.
                                                  </p>
                                                </div>
                                                <div class="col-md-3">
                                                  <div
                                                    class="custom-control custom-switch float-right"
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      class="custom-control-input"
                                                      v-model="isopenAccess"
                                                      @change="setOpenAccess"
                                                      id="customSwitch1"
                                                    />
                                                    <label
                                                      class="custom-control-label"
                                                      for="customSwitch1"
                                                    ></label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <!-- second access -->
                                            <div class="card-body divBorder">
                                              <div class="row">
                                                <div class="col-md-9">
                                                  <h6>
                                                    <i
                                                      class="fa fa-fw"
                                                      aria-hidden="true"
                                                      title="Copy to use user"
                                                    ></i>
                                                    Attendee List
                                                  </h6>
                                                  <p>
                                                    Restrict Access to your
                                                    event by uploading a list of
                                                    authorized attendees.
                                                  </p>
                                                </div>
                                                <div class="col-md-3">
                                                  <div
                                                    class="custom-control custom-switch float-right"
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      class="custom-control-input"
                                                      v-model="isattendeeList"
                                                      @change="setAttendeeList"
                                                      id="customSwitch2"
                                                    />
                                                    <label
                                                      class="custom-control-label"
                                                      for="customSwitch2"
                                                    ></label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <!-- Third Access -->
                                            <div class="card-body divBorder">
                                              <div class="row">
                                                <div class="col-md-9">
                                                  <h6>
                                                    <i class="fas fa-lock"></i>
                                                    Event Code
                                                  </h6>
                                                  <p>
                                                    Restrict Access to your
                                                    event by using an event code
                                                    (Password).
                                                  </p>
                                                </div>
                                                <div class="col-md-3">
                                                  <div
                                                    class="custom-control custom-switch float-right"
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      class="custom-control-input"
                                                      v-model="iseventCode"
                                                      @change="setEventCode"
                                                      id="customSwitch3"
                                                    />
                                                    <label
                                                      class="custom-control-label"
                                                      for="customSwitch3"
                                                    ></label>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <div class="custom-control float-left" style="display: none;">
                                        <button
                                          type="button"
                                          class="btn btn-block btn-success btn-md"
                                        >Next</button>
                                      </div>
                                    </div>
                                    <div class="col-md-3">
                                      <!-- <h6><i class="fas fa-lock"></i>  Event Code</h6>
                                      <p>Restrict Access to your event by using an event code (Password).</p>-->
                                    </div>
                                    <div class="col-md-3">
                                      <!--  <h6><i class="fas fa-lock"></i>  Event Code</h6>
                                      <p>Restrict Access to your event by using an event code (Password).</p>-->
                                    </div>
                                    <div class="col-md-3">
                                      <div class="custom-control custom-switch float-right">
                                        <button
                                          type="button"
                                          class="btn btn-block btn-success btn-md next"
                                          @click="postEventProfile"
                                        >Next</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- <div class="card card-body col-md-4"> -->
                          <!-- PREVIEW -->
                          <section class="col-md-4 connectedSortable col-lg-4 col-sm-12">
                            <div class="card profile-card-2 js-sticky-header">
                              <div class="card-img-block" v-if="bannerLoaded">
                                <img class="img-fluid" :src="bannerSrc" alt="Card image cap" />
                              </div>
                              <div class="card-img-block" v-else>
                                <img
                                  class="img-fluid"
                                  src="../assets/img/photo2.jpg"
                                  alt="Card image cap"
                                />
                              </div>
                              <div class="card-body pt-5">
                                <img
                                  v-if="logoLoaded"
                                  :src="logoSrc"
                                  alt="profile-image"
                                  class="profile"
                                />
                                <img
                                  v-else
                                  src="../assets/img/user8-128x128.jpg"
                                  alt="profile-image"
                                  class="profile"
                                />
                                <div class="meta">
                                  <ul>
                                    <li>
                                      <span>
                                        <i class="far fa-clock"></i>
                                        {{ startDateData }} - {{ endDateData }}
                                      </span>
                                    </li>
                                    <li
                                      v-if="
                                        this.getLocation.venue === '' ||
                                          this.getLocation.venue === undefined
                                      "
                                      key="vunue1"
                                    >
                                      <span>
                                        <i class="fa fa-map-marker"></i> Venue
                                      </span>
                                    </li>
                                    <li v-else>
                                      <span>
                                        <i class="fa fa-map-marker" key="vunue2"></i>
                                        {{ this.getLocation.venue }}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <h5 class="card-title">{{ this.eventNameData }}</h5>
                                <p class="card-text">{{ decriptionExcerpt }}</p>
                                <div class="icon-block">
                                  <a href>
                                    <h6 class="card-title">
                                      Read More
                                      <i
                                        class="fas fa-chevron-right"
                                        style="font-size: 14px;"
                                      ></i>
                                    </h6>
                                  </a>
                                </div>
                                <div class="icon-block" v-if="includeTicketsBtn" key="includebtn">
                                  <button
                                    type="button"
                                    class="btn btn-block btn-success btn-sm mt-3 mb-3"
                                  >Get Tickets</button>
                                </div>

                                <div class="mt-1 float-left text-center">
                                  <div
                                    class="row icon-block sharethings"
                                    style="text-align: center; padding-right: 20px; padding-left: 0px; list-style: none;"
                                  >
                                    <div class="col-md-3 col-sm-3 col-xm-4">
                                      <ul style="display: inline;">
                                        <li>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                          <button type="button" class="btn btn-sm">Interested</button>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-xm-4">
                                      <ul style="display: inline;">
                                        <li>
                                          <i class="far fa-check-circle"></i>
                                        </li>
                                        <li>
                                          <button type="button" class="btn btn-sm">Going</button>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-xm-4">
                                      <ul style="display: inline;">
                                        <li>
                                          <i class="fas fa-share"></i>
                                        </li>
                                        <li>
                                          <button type="button" class="btn btn-sm">Share</button>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="col-md-3 col-sm-3 col-xm-4">
                                      <ul style="display: inline;">
                                        <li>
                                          <i class="far fa-bookmark"></i>
                                        </li>
                                        <li>
                                          <button type="button" class="btn btn-sm">Save</button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="card-footer bg-transparent">
                              <div class="row">
                                <div class="col-4 text-center">
                                  <div id="sparkline-1"></div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <!-- PREVIEW ENDS -->
                          <!-- </div> -->
                        </div>
                      </div>

                      <!-- ticket section -->

                      <div
                        class="tab-pane fade card card-body"
                        id="custom-tabs-one-profile"
                        role="tabpanel"
                        aria-labelledby="features"
                      >
                        <div v-if="proceedToTicketTable" key="til">
                          <TicketTable
                            :selectedCountry="ticketCountryOfPayment"
                            :selectedCurrency="ticketCurrencyOfPayment"
                            :token="token"
                            v-on:showFlagFromTicketTable="
                              showFlagsFromTicketTable
                            "
                            v-on:showOrHideProgressBar="showOrHideProgress"
                            v-on:onInvalidFields="
                              handleInvalidFieldFromPaymentInfo
                            "
                            v-on:showSuccessMessage="
                              handleShowMessageFromPaymentInfo
                            "
                            v-on:onTermsNotAccepted="handleTermsNotAccepted"
                            v-on:onSwitchTab="switchTabs"
                            v-on:showProgressFromPaymentInfo="
                              showOrHideProgress
                            "
                          />
                        </div>
                        <div v-else key="till">
                          <Tickets
                            v-on:showFlagFromTicket="showFlagsFromTicket"
                            v-on:onTicketDone="setTicketDone"
                          />
                        </div>
                      </div>

                      <!-- ticket section ends -->
                      <div
                        class="tab-pane fade card card-body"
                        id="custom-tabs-one-messages"
                        role="tabpanel"
                        aria-labelledby="messages"
                      >
                        <Registration
                          :token="token"
                          v-on:showProgress="showOrHideProgress"
                          v-on:showFlagFromRegistration="showFlagFromRegistration"
                          v-on:onSwitchTab="switchTabs"
                        />
                      </div>
                      <div
                        class="tab-pane fade card card-body"
                        id="custom-tabs-one-settings"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-one-settings-tab"
                      >
                        <Subscription
                          :token="token"
                          v-on:showProgress="showOrHideProgress"
                          v-on:onSwitchTab="switchTabs"
                          v-on:onShowMessage="showFlagFromSub"
                          v-on:onShowError="showErrorFromSub"
                        />
                      </div>
                      <div
                        class="tab-pane fade card card-body"
                        id="custom-tabs-one-publish"
                        role="tabpanel"
                        aria-labelledby="publish"
                      >
                        <Publish />
                      </div>
                    </div>
                  </div>
                  <!-- /.card -->
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer class="main-footer">
        <strong>
          Copyright &copy; 2020
          <a href="http://event-360gh.com">Event360</a>.
        </strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0
        </div>
      </footer>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import moment from "moment";
import ChipInput from "../components/ChipInput.vue";
import Map from "../components/Map.vue";
import Dropdown from "vue-simple-search-dropdown";
import countries from "../utils/countries";
import { mapGetters, mapActions } from "vuex";
import Editor from "@tinymce/tinymce-vue";
import $ from "jquery";
import Snackbar from "vuejs-snackbar";
import { apiUrl } from "../utils/config";
import Tickets from "../components/Tickets.vue";
import TicketTable from "../components/TicketTable.vue";
import Registration from "../components/Registration.vue";
import Subscription from "../components/Subscriptions.vue";
import Publish from "../components/Publish.vue";

// setTitleMethod('title')
//  vue.$refs.snackbar.error('Error function triggered')
// vue.$refs.snackbar.warn('Warn function triggered')
// vue.$refs.snackbar.info('Info function triggered')
// vue.$refs.snackbar.open('Open function triggered')

export default {
  name: "CreateEvent",
  title: "Create Event",
  components: {
    ChipInput,
    Map,
    Dropdown,
    editor: Editor,
    snackbar: Snackbar,
    Tickets,
    TicketTable,
    Registration,
    Subscription,
    Publish
  },
  props: {},
  data() {
    return {
      position: "top-right",
      eventNameData: "Event name",
      startDateData: moment().format("LL"),
      startDate: "",
      endDate: "",
      endDateData: moment().format("LL"),
      logoSrc: "",
      logoName: "no logo added",
      logoLoaded: false,
      bannerSrc: "",
      bannerName: "no banner added",
      bannerLoaded: false,
      allCountries: countries,
      // venueName: 'Venue',
      street: "",
      city: "",
      state: "",
      postal_zip: "",
      selectedCountry: "",
      textEditorData: "",
      decriptionExcerpt: "The greatest event yet... Come one, come all",
      isopenAccess: true,
      isattendeeList: false,
      iseventCode: false,
      eventType: "",
      category: "",
      orgainser: "",
      numOfAttendees: 0,
      invalidEventName: false,
      invalidOrganiser: false,
      invalidShortDescription: false,
      invalidLongDescription: false,
      invalidStartDate: false,
      invalidEndDate: false,
      invalidVenue: false,
      invalidStreet: false,
      invalidCity: false,
      invalidState: false,
      invalidpostal_zip: false,
      invalidCountry: false,
      accessInvalid: false,
      event_profile_done: false,
      tickets_done: false,
      registration_done: false,
      subscription_done: false,
      loading: false,
      invalidCategory: false,
      invalidEventType: false,
      token: "",
      includeTicketsBtn: true,
      logoImage: null,
      bannerImage: null
    };
  },
  methods: {
    ...mapActions([
      "onLocationSelected",
      "fetchAllCategories",
      "onFetchAllCreatedEvents",
      "onFetchPreviousFormQuestion"
    ]),

    setEventPreview(value) {
      if (value === "") {
        this.eventNameData = "Event name";
      } else {
        this.eventNameData = value;
      }
    },

    setStartDatePreview(value) {
      this.startDateData = moment(value, "YYYY-MM-DD").format("LL");
    },

    setEndDatePreview(value) {
      this.endDateData = moment(value, "YYYY-MM-DD").format("LL");
    },

    logout() {
      this.getLocation = {};
      window.localStorage.removeItem("token");
      this.$router.push("login");
    },

    getSelectedLogo(event) {
      this.logoImage = event.target.files[0];

      this.logoSrc = URL.createObjectURL(event.target.files[0]);
      this.logoLoaded = true;
      this.logoName = event.target.files[0].name;
    },

    getSelectedBanner(event) {
      this.bannerImage = event.target.files[0];

      this.bannerSrc = URL.createObjectURL(event.target.files[0]);
      this.bannerLoaded = true;
      this.bannerName = event.target.files[0].name;
    },

    getSelectedCountry(country) {
      country;
      // console.log(country)
    },

    getDropdownValues(dropVal) {
      this.selectedCountry = dropVal;
    },

    showFlagsFromTicket(flag) {
      this.$refs.snackbar.open(flag);
    },

    showFlagFromRegistration(flag) {
      this.$refs.snackbar.open(flag);
    },

    showFlagFromSub(flag) {
      this.$refs.snackbar.info(flag);
    },

    showErrorFromSub(flag) {
      this.$refs.snackbar.open(flag);
    },

    showFlagsFromTicketTable(flag) {
      this.$refs.snackbar.error(flag);
    },

    getDescriptionExcerpt(event) {
      const value = event.target.value;
      if (value.length == 0) {
        this.decriptionExcerpt = "The greatest event yet... Come one, come all";
      } else {
        this.decriptionExcerpt = value;
      }
    },

    getVenue(event) {
      const loc = this.getLocation;
      loc.venue = event.target.value;
      this.onLocationSelected(loc);
    },

    callbaavkFile(callback, value, meta) {
      if (meta.filetype == "image") {
        $("#upload").trigger("click");
        $("#upload").on("change", function() {
          var file = this.files[0];
          var reader = new FileReader();
          reader.onload = function(e) {
            callback(e.target.result, {
              alt: ""
            });
          };
          reader.readAsDataURL(file);
        });
      }
    },

    async uploadLogo(event_key) {
      const formData = new FormData();
      formData.append("image", this.logoImage);
      formData.append("event_key", event_key);

      const options = {
        method: "POST",
        headers: {
          Authorization: this.token
          // 'Content-Type': 'multipart/form-data'
        },
        body: formData
      };

      return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/api/event-logo`, options)
          .then(res => resolve(res))
          .catch(err => reject(err));
      });
    },

    async uploadBanner(event_key) {
      const formData = new FormData();
      formData.append("image", this.bannerImage);
      formData.append("event_key", event_key);

      const options = {
        method: "POST",
        headers: {
          Authorization: this.token
          // 'Content-Type': 'multipart/form-data'
        },
        body: formData
      };

      return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/api/event-banner`, options)
          .then(res => resolve(res))
          .catch(err => reject(err));
      });
    },

    setOpenAccess(evt) {
      this.isopenAccess = evt.target.checked;
      if (this.isopenAccess) {
        this.iseventCode = false;
        this.isattendeeList = false;
      }

      if (!this.isattendeeList && !this.iseventCode && !this.isopenAccess) {
        this.isopenAccess = true;
      }
    },

    setAttendeeList(evt) {
      this.isattendeeList = evt.target.checked;
      if (this.isattendeeList) {
        this.iseventCode = false;
        this.isopenAccess = false;
      }

      if (!this.isattendeeList && !this.iseventCode && !this.isopenAccess) {
        this.isopenAccess = true;
      }
    },

    setEventCode(evt) {
      this.iseventCode = evt.target.checked;

      if (this.iseventCode) {
        this.isattendeeList = false;
        this.isopenAccess = false;
      }

      if (!this.isattendeeList && !this.iseventCode && !this.isopenAccess) {
        this.isopenAccess = true;
      }
    },

    validateFields() {
      this.invalidEventName = this.invalidOrganiser = this.invalidShortDescription = this.invalidStartDate = this.invalidEndDate = this.invalidVenue = this.invalidStreet = this.invalidCity = this.invalidState = this.invalidpostal_zip = this.invalidCountry = false;

      if (this.eventNameData === "Event Name") this.invalidEventName = true;
      if (this.orgainser === "") this.invalidOrganiser = true;
      if (
        this.decriptionExcerpt ===
        "The greatest event yet... Come one, come all"
      )
        this.invalidShortDescription = true;
      if (!this.startDate) this.invalidStartDate = true;
      if (!this.endDate) this.invalidEndDate = true;
      if (!this.$refs.venueInput) this.invalidVenue = true;
      if (!this.$refs.streetInput) this.invalidStreet = true;
      if (!this.$refs.cityInput) this.invalidCity = true;
      if (!this.$refs.stateInput) this.invalidState = true;
      if (!this.postal_zip) this.invalidpostal_zip = true;
      if (!document.querySelector(".dropdown-input").value)
        this.invalidCountry = true;
      if (!this.isopenAccess && !this.isattendeeList && !this.iseventCode)
        this.accessInvalid = true;
      if (!this.category || this.category === "Select category")
        this.invalidCategory = true;
      if (!this.eventType || this.eventType === "Select event type")
        this.invalidEventType = true;
      if (
        this.invalidEventName ||
        this.invalidOrganiser ||
        this.invalidShortDescription ||
        this.invalidStartDate ||
        this.invalidEndDate ||
        this.invalidVenue ||
        this.invalidStreet ||
        this.invalidCity ||
        this.invalidState ||
        this.invalidpostal_zip ||
        this.invalidCountry
      ) {
        return false;
      } else {
        return true;
      }
    },

    parseHTML(html) {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
    },

    setPostalCode() {
      const loc = this.getLocation;
      loc.postal_zip = this.postal_zip;
      this.onLocationSelected(loc);
    },

    getTextEditorData() {
      this.decriptionExcerpt = this.parseHTML(this.textEditorData)
        .trim()
        .substring(0, 45);
      if (this.getDescriptionExcerpt === "") {
        this.descriptionExcerpt =
          "The greatest event yet... Come one, come all";
      }
    },

    setPostBody() {
      const chips = this.allChips;
      let chipString = "";
      chips.forEach((oneChip, index) => {
        chipString += oneChip;
        if (index != chips.length - 1) {
          chipString += ",";
        }
      });

      let access;

      if (this.isopenAccess) {
        access = 1;
      } else if (this.isattendeeList) {
        access = 2;
      } else {
        access = 3;
      }

      const body = {
        event_name: this.eventNameData,
        type: this.eventType,
        category: this.category,
        hash_tag: chipString,
        organiser: this.orgainser,
        virtual: false,
        description: this.textEditorData,
        start_date: moment(this.startDateData, "LL").format("YYYY-MM-DD"),
        end_date: moment(this.endDateData, "LL").format("YYYY-MM-DD"),
        number_of_attendees: this.numOfAttendees,
        location: this.getLocation,
        welcome: "N/A",
        airport: 2,
        website: "N/A",
        access_management: access,
        topics: "N/A",
        attendee_location: "world",
        video_link: "",
        buy_ticket_btn: this.includeTicketsBtn
      };
      return body;
    },

    showOrHideProgress(which) {
      if (which) {
        this.$Progress.start();
      } else {
        this.$Progress.finish();
      }
    },

    postEventProfile() {
      if (!this.validateFields()) {
        this.$refs.snackbar.error("You missed some required fields");
        return;
      }
      const body = this.setPostBody();

      this.$Progress.start();

      const options = {
        method: "POST",
        headers: {
          Authorization: this.token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      };
      fetch(`${apiUrl}/api/event`, options)
        .then(res => {
          if (res.status === 201) {
            this.event_profile_done = true;
          }
          return res.json();
        })
        .then(async message => {
          // upload images
          await this.uploadLogo(message.event_key);
          await this.uploadBanner(message.event_key);

          // store event key
          window.localStorage.setItem("current_event_key", message.event_key);
          this.$refs.snackbar.info(message.message);
          this.switchTabs("tickets-tab");
          this.$Progress.finish();
        })
        .catch(err => {
          console.log(err);
          this.$refs.snackbar.error("Please check your internet connection");
          this.$Progress.finish();
        });
    },

    setTicketDone(flag) {
      this.tickets_done = flag;
    },

    handleInvalidFieldFromPaymentInfo() {
      this.$refs.snackbar.error("You missed some required fields");
    },

    handleShowMessageFromPaymentInfo(flag) {
      this.$refs.snackbar.info(flag);
    },

    handleTermsNotAccepted(flag) {
      this.$refs.snackbar.error(flag);
    },

    switchTabs(where) {
      $(`#${where}`).tab("show");
      if (where === "subscription-tab") {
        this.registration_done = true;
      } else if (where === "publish-tab") {
        this.subscription_done = true;
      }
    }
  },

  computed: {
    ...mapGetters([
      "getLocation",
      "allCategories",
      "allChips",
      "proceedToTicketTable",
      "ticketCountryOfPayment",
      "ticketCurrencyOfPayment"
    ])
  },

  beforeUpdate() {
    this.selectedCountry = this.getLocation.country;
    if (this.selectedCountry != undefined)
      document.querySelector(".dropdown-input").value = this.selectedCountry;
  },

  beforeDestroy() {},

  mounted() {
    this.token = `Bearer ${window.localStorage.getItem("token")}`;
    document.querySelector(".dropdown-input").classList.add("form-control");

    this.$Progress.start();
    this.onFetchAllCreatedEvents()
      .then(events => {
        this.onFetchPreviousFormQuestion(events)
          .then(() => {
            this.$Progress.finish();
          })
          .catch(err => {
            console.log(err);
            this.$Progress.finish();
          });
      })
      .catch(err => {
        console.log(err);
        this.$Progress.finish();
      });
  },

  beforeCreate() {
    // unset current event key
    window.localStorage.setItem("current_event_key", "");
    // check for authentication
    const token = window.localStorage.getItem("token");
    if (!token) {
      window.localStorage.setItem(
        "return_to_login_info",
        "Unauthorized access, please login to authenticate"
      );
      this.$router.push("login");
    } else {
      // verify token
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: `Bearer ${token}` })
      };
      fetch(`${apiUrl}/api/verify-login`, options)
        .then(res => {
          if (res.status !== 208) {
            window.localStorage.setItem(
              "return_to_login_info",
              "Sorry, your session has expired, please login"
            );
            this.$router.push("login");
          }
        })
        .catch(err => {
          console.log("ERROR: ", err);
          //if we can't authenticate, then go back to login
          this.$router.push("login");
        });
    }
  },

  created() {
    this.fetchAllCategories();
  }
};
</script>

<style scoped>
@import url("../assets/css/adminlte.min.css");
/* @import url("../assets/css/fontawesome-free/css/all.min.css"); */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");

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

.md-progress-bar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

.connectedSortable {
  min-height: 80px !important;
}

.hidden {
  display: none;
}

.map-view {
  height: 300px;
}

.is-empty {
  border-color: rgb(238, 59, 59) !important;
}

.country-empty,
.access-empty {
  border: 1px solid;
  border-radius: 5px;
  border-color: rgb(238, 59, 59) !important;
}

.flex-column {
  width: 98%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.flow-row {
  display: flex;
  flex-direction: column;
}

.logo-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.bring-to-front {
  position: relative;
  top: 0;
  z-index: 50;
}

.bring-to-front-2 {
  position: relative;
  top: 0;
  z-index: 25;
}

.vueditor {
  min-height: 380px !important;
  min-width: 100% !important;
}

.btn-group:hover .dropdown-menu {
  display: block;
  font-size: 14px;
}

li {
  list-style-type: none;
}
.tooltip-inner {
  background-color: #f4f6f9 !important;
  color: #000 !important;
}

.file-upload-btn:active {
  border: 0;
  transition: all 0.2s ease;
}

.file-upload-content {
  display: none;
  text-align: center;
}
.file-upload-content2 {
  display: none;
  text-align: center;
}

.file-upload-input {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}
.file-upload-input2 {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}

.image-upload-wrap {
  margin-top: 20px;
  border: 3px dashed #1fb264;
  position: relative;
}
.image-upload-wrap2 {
  margin-top: 20px;
  border: 3px dashed #1fb264;
  position: relative;
}

.image-dropping,
.image-upload-wrap:hover {
  background-color: #f4f6f9;
  border: 2px dashed #ffffff;
}

.image-dropping2,
.image-upload-wrap2:hover {
  background-color: #f4f6f9;
  border: 1px dashed #ffffff;
}

.image-title-wrap {
  padding: 0 15px 15px 15px;
  color: #222;
}

.drag-text {
  text-align: center;
}
.drag-text2 {
  text-align: center;
}

.drag-text h3 {
  font-weight: 100;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #15824b;
  padding: 60px 0;
}
/*for logo*/
.drag-text h5 {
  font-weight: 100;
  font-size: 1rem;
  text-transform: uppercase;
  color: #15824b;
  padding: 50px 0;
}
/*ends*/

.file-upload-image {
  max-height: 200px;
  max-width: 200px;
  margin: auto;
  padding: 20px;
}

.remove-image {
  width: 200px;
  margin: 0;
  color: #fff;
  background: #cd4535;
  border: none;
  padding: 10px;
  border-radius: 4px;
  border-bottom: 4px solid #b02818;
  transition: all 0.2s ease;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
}

.remove-image:hover {
  background: #c13b2a;
  color: #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;
}

.remove-image:active {
  border: 0;
  transition: all 0.2s ease;
}

.content-header h1 {
  font-size: 1.4rem !important;
  margin: 0;
  text-align: center;
}

/**************************************************************************** */
body:not(.sidebar-mini-md) .content-wrapper,
body:not(.sidebar-mini-md) .main-footer,
body:not(.sidebar-mini-md) .main-header {
  transition: margin-left 0.3s ease-in-out;
  margin-left: 10px !important;
}
/*
.profile-card-2.myeventcard {
  
}*/
.fees_shade {
  background-color: red;
}

/*tab header*/

.card.card-tabss {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  border-radius: 5px !important;
}
.card-primary:not(.card-outline) > .card-headers,
.card-primary:not(.card-outline) > .card-headers a {
  color: #fff;
}
.card-primary:not(.card-outline) > .card-headers {
  background-color: #07a254;
  border-radius: 2px;
}
.card-primary:not(.card-outline) > .card-headers a.active {
  color: #1f2d3d;
}
.p-0 {
  padding: 0 !important;
}
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
  border-color: none !important;
}

.card.card-tabbs {
  border-radius: 5px !important;
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  font-size: 1.15rem;
}

/*.nav-tabs .nav-item {
    margin-bottom: -1px;
    text-align: center;
     flex: 0 auto;

}*/

/*select 2*/

.card-header {
  background-color: transparent;
  border-bottom: none;
  padding: 0.75rem 1.25rem;
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.divBorder {
  border: solid #dcdcdc 1px;
}

.event__info {
  color: #07a254;
  font-size: 20px;
}

.form-group label {
  font-weight: lighter !important;
  color: #000;
}

/*PREVIEW*/
element.style {
  display: inline-block;
  visibility: visible;
  animation-name: fadeIn;
}
.preview .col-lg-3 {
  padding: 0 10px;
  margin-bottom: 25px;
}
.mix {
  display: none;
}
.hvr-float-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.img-holder {
  overflow: hidden;
  position: relative;
}

.content-wrap.mycontent {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  line-height: 24px;
}

.img-holder:before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 0;
  opacity: 0.85;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s ease;
  background: #1eb089;
  background: -moz-linear-gradient(
    left,
    #1eb089 0%,
    #7c49ab 100%,
    #7db9e8 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0%, #1eb089),
    color-stop(100%, #7c49ab),
    color-stop(100%, #7db9e8)
  );
  background: -webkit-linear-gradient(
    left,
    #1eb089 0%,
    #7c49ab 100%,
    #7db9e8 100%
  );
  background: -o-linear-gradient(left, #1eb089 0%, #7c49ab 100%, #7db9e8 100%);
  background: -ms-linear-gradient(left, #1eb089 0%, #7c49ab 100%, #7db9e8 100%);
  background: linear-gradient(to right, #1eb089 0%, #7c49ab 100%, #7db9e8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1eb089', endColorstr='#7db9e8', GradientType=1);
}
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.img-holder:after {
  content: " ";
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  /* background: transparent url(img/gallery/overlay-bg.png) center center no-repeat; */
  transition: all 0.3s ease 0.1s;
}

/*Profile card 2*/
.profile-card-2 .card-img-block {
  float: left;
  width: 100%;
  height: 180px;
  overflow: hidden;
}
.profile-card-2 .card-body {
  position: relative;
}
.profile-card-2 .profile {
  border-radius: 50%;
  position: absolute;
  top: -42px;
  left: 15%;
  max-width: 75px;
  border: 3px solid rgba(255, 255, 255, 1);
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}
.profile-card-2 h5 {
  font-weight: 600;
  color: #000;
  margin-bottom: 10px !important;
}

.profile-card-2 h6 {
  font-weight: 600;
  color: #6ab04c;
}
.profile-card-2 .card-text {
  font-weight: 300;
  font-size: 15px;
}
.profile-card-2 .icon-block {
  float: left;
  width: 100%;
}
.profile-card-2 .icon-block a {
  text-decoration: none;
}
.profile-card-2 i {
  display: inline-block;
  font-size: 16px;
  color: #6ab04c;
  text-align: center;
  /*border: 1px solid #6ab04c;*/
  width: 30px;
  height: 30px;
  line-height: 30px;
  /*    border-radius: 50%;*/
  margin: 0 5px;
}

/*mine*/
.meta {
  margin-bottom: 10px;
  margin-top: 15px;
}

.meta ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.meta li {
  display: inline;
}
.meta2 li {
  display: inline;
}
.meta ul li span {
  display: inline-block;
  color: #666666;
  /* margin-right: 10px; */
}

/*hover effects*/
.card.profile-card-2:hover {
  box-shadow: 0 0 0 1px #00d8b7;
}
.content-wrap:hover {
  box-shadow: 0 0 0 1px #00d8b7;
}

/*logo*/
.attachment-block {
  background: #fff;
  border: 1px solid #fff !important;
  margin-bottom: 10px;
  padding: 5px;
}
/*logo ends*/
#stickThis.stick {
  margin-top: 0;

  top: 0;
  z-index: 9999;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/*image uploads*/

#filedrag {
  display: none;
  font-weight: bold;
  text-align: center;
  padding: 1em 0;
  margin: 1em 0;
  color: #555;
  border: 2px dashed #555;
  border-radius: 7px;
  cursor: default;
}

#filedrag.hover {
  color: #f00;
  border-color: #f00;
  border-style: solid;
  box-shadow: inset 0 3px 4px #888;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #28a745 !important;
  box-shadow: none;
}

.sharethings {
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
}

.register-box {
  width: 560px !important;
}

.login-box {
  width: 480px !important;
}
/*facebook*/
a.fb {
  font-family: Lucida Grande, Helvetica Neue, Helvetica, Arial, sans-serif;
  display: inline-block;
  font-size: 14px;
  padding: 11px 28px 13px 43px;
  background: #3a5a97;
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 20, 0.4);
  text-decoration: none;
  line-height: 1;
  position: relative;
  border-radius: -1px;
}

a.fb.fb2 {
  font-family: Lucida Grande, Helvetica Neue, Helvetica, Arial, sans-serif;
  display: inline-block;
  font-size: 14px;
  padding: 12px 26px 11px 43px !important;
  background: #3a5a97;
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 20, 0.4);
  text-decoration: none;
  line-height: 1;
  position: relative;
  border-radius: -1px;
}

.connect2:before {
  display: inline-block;
  position: absolute;
  background-image: url(data:image/png;base64,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);
  height: 23px;
  background-repeat: no-repeat;
  background-position: 0px 3px;
  text-indent: -9999px;
  text-align: center;
  width: 29px;
  line-height: 23px;
  margin: -8px 7px -7px -30px;
  padding: 2 25px 0 0;
  content: "f";
}

.connect:before {
  display: inline-block;
  position: relative;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAKzGlDQ1BJQ0MgUHJvZmlsZQAASA2tlndUU8kXx+e99EZLqFJCb9JbAOk19I5gIySBhBJjIIjYEFlcgbUgIgKKIEtVcC2ArAURxcKi2FBBF2RRUNfFgg2V3wOWuOd3fvvfb96Zmc+7c+fOnTkz53wBIPeyhMIUWAaAVEG6KMzHnb40JpaOewwgQADSQBVQWew0oVtISAD41/L+HuKNlNsms7H+1e1/D8hyuGlsAKAQZDiek8ZORfjkbGULRekAoHiIXXttunCWCxGmiZAEET40y4nzjPgDWvw8X5nziQjzQHyGAMCTWSxRIgCkccROz2AnInHIeITNBRy+AGEGws5sHouDcCbCi1NTV89yDcIG8f+Ik/gPZrHiJTFZrEQJz+8FmYks7MlPE6aw1s39/D+b1BQxcl5zRRNpyTyRbxjSKyFnVpG82l/Cgvig4AU7H9nRAvPEvpELzE7zQM5yfi6H5em/wOLkSLcFZokQ+tuHn86MWGDR6jBJfEFK0Oz9mMuBx2VKmJvmFb5gT+B7Mxc4ixcRvcAZ/KigBU5LDpfkkMXzkNhF4jBJzgkib8keU9OQmX+vy2Z9XyudF+G7YOdwPb0WmCuIlOQjTHeXxBGmzN3vufy5KT4Se1pGuGRuuihCYk9i+c3e1zl/YXqI5EyAJ/ACAchHB5bAGpgDBogG3iAknZuJ3DsAPFYL14n4ibx0uhvyUrh0poBtuphuaW5hDcDsu5v1AeDt/bn3BCngv9uqKgAIsEIGB7/bzHYAUO2EXP0d3226RwCQ3QXA2W62WJQxFw6gZzsMICLvmQaUgTrQBgbABMnQFjgCVyRjPxAMIkAMWAnYgAdSgQisBRvAFpAHCsAusBeUgUpwGNSDo+A4aANnwAVwGVwHN8FdMAiGwRh4ASbBezANQRAOokBUSBnSgHQhY8gSYkDOkBcUAIVBMVAclAgJIDG0AdoKFUBFUBlUBTVAv0CnoQvQVagfegCNQBPQG+gzjILJMA1Wg/VgM5gBu8H+cAS8Ak6E18BZcC68Ay6Fq+EjcCt8Ab4O34WH4RfwFAqgSCgFlCbKBMVAeaCCUbGoBJQItQmVjypBVaOaUR2oHtRt1DDqJeoTGoumouloE7Qj2hcdiWaj16A3oQvRZeh6dCu6G30bPYKeRH/DUDCqGGOMA4aJWYpJxKzF5GFKMLWYU5hLmLuYMcx7LBargNXH2mF9sTHYJOx6bCH2ALYF24ntx45ip3A4nDLOGOeEC8axcOm4PNx+3BHcedwt3BjuI56E18Bb4r3xsXgBPgdfgm/En8Pfwj/DTxNkCLoEB0IwgUNYR9hJqCF0EG4QxgjTRFmiPtGJGEFMIm4hlhKbiZeIQ8S3JBJJi2RPCiXxSdmkUtIx0hXSCOkTWY5sRPYgLyeLyTvIdeRO8gPyWwqFokdxpcRS0ik7KA2Ui5THlI9SVClTKaYUR2qzVLlUq9QtqVfSBGldaTfpldJZ0iXSJ6RvSL+UIcjoyXjIsGQ2yZTLnJYZkJmSpcpayAbLpsoWyjbKXpUdl8PJ6cl5yXHkcuUOy12UG6WiqNpUDyqbupVaQ71EHaNhafo0Ji2JVkA7SuujTcrLyVvLR8lnypfLn5UfVkAp6CkwFVIUdiocV7in8FlRTdFNkau4XbFZ8ZbiB6VFSq5KXKV8pRalu0qflenKXsrJyruV25QfqaBVjFRCVdaqHFS5pPJyEW2R4yL2ovxFxxc9VIVVjVTDVNerHlbtVZ1SU1fzUROq7Ve7qPZSXUHdVT1JvVj9nPqEBlXDWYOvUaxxXuM5XZ7uRk+hl9K76ZOaqpq+mmLNKs0+zWktfa1IrRytFq1H2kRthnaCdrF2l/akjoZOoM4GnSadh7oEXYYuT3efbo/uBz19vWi9bXpteuP6SvpM/Sz9Jv0hA4qBi8Eag2qDO4ZYQ4ZhsuEBw5tGsJGNEc+o3OiGMWxsa8w3PmDcvxiz2H6xYHH14gETsombSYZJk8mIqYJpgGmOaZvpKzMds1iz3WY9Zt/MbcxTzGvMBy3kLPwsciw6LN5YGlmyLcst71hRrLytNlu1W722NrbmWh+0vm9DtQm02WbTZfPV1s5WZNtsO2GnYxdnV2E3wKAxQhiFjCv2GHt3+832Z+w/Odg6pDscd/jL0cQx2bHRcXyJ/hLukpolo05aTiynKqdhZ7pznPMh52EXTReWS7XLE1dtV45rreszN0O3JLcjbq/czd1F7qfcP3g4eGz06PREefp45nv2ecl5RXqVeT321vJO9G7ynvSx8Vnv0+mL8fX33e07wFRjspkNzEk/O7+Nft3+ZP9w/zL/JwFGAaKAjkA40C9wT+BQkG6QIKgtGAQzg/cEPwrRD1kT8msoNjQktDz0aZhF2IawnnBq+KrwxvD3Ee4ROyMGIw0ixZFdUdJRy6Maoj5Ee0YXRQ8vNVu6cen1GJUYfkx7LC42KrY2dmqZ17K9y8aW2yzPW35vhf6KzBVXV6qsTFl5dpX0KtaqE3GYuOi4xrgvrGBWNWsqnhlfET/J9mDvY7/guHKKORNcJ24R91mCU0JRwniiU+KexAmeC6+E95LvwS/jv07yTapM+pAcnFyXPJMSndKSik+NSz0tkBMkC7pXq6/OXN0vNBbmCYfXOKzZu2ZS5C+qTYPSVqS1p9MQgdMrNhD/IB7JcM4oz/i4NmrtiUzZTEFm7zqjddvXPcvyzvp5PXo9e33XBs0NWzaMbHTbWLUJ2hS/qWuz9ubczWPZPtn1W4hbkrf8lmOeU5Tzbmv01o5ctdzs3NEffH5oypPKE+UNbHPcVvkj+kf+j33brbbv3/4tn5N/rcC8oKTgSyG78NpPFj+V/jSzI2FH307bnQd3YXcJdt3b7bK7vki2KKtodE/gntZienF+8bu9q/ZeLbEuqdxH3CfeN1waUNq+X2f/rv1fynhld8vdy1sqVCu2V3w4wDlw66DrweZKtcqCys+H+IfuV/lUtVbrVZccxh7OOPy0Jqqm52fGzw21KrUFtV/rBHXD9WH13Q12DQ2Nqo07m+AmcdPEkeVHbh71PNrebNJc1aLQUnAMHBMfe/5L3C/3jvsf7zrBONF8UvdkxSnqqfxWqHVd62Qbr224Paa9/7Tf6a4Ox45Tv5r+WndG80z5WfmzO88Rz+WemzmfdX6qU9j58kLihdGuVV2DF5devNMd2t13yf/Slcvely/2uPWcv+J05cxVh6unrzGutV23vd7aa9N76jeb30712fa13rC70X7T/mZH/5L+c7dcbl247Xn78h3mnet3g+7234u8d39g+cDwfc798QcpD14/zHg4PZg9hBnKfyTzqOSx6uPq3w1/bxm2HT474jnS+yT8yeAoe/TFH2l/fBnLfUp5WvJM41nDuOX4mQnviZvPlz0feyF8Mf0y70/ZPyteGbw6+ZfrX72TSyfHXotez7wpfKv8tu6d9buuqZCpx+9T309/yP+o/LH+E+NTz+foz8+m137BfSn9avi145v/t6GZ1JkZIUvEmtMCKKSFExIAeFMHACUGAOpNAIhS87p4zgOa1/IIQ3/XWfN/8bx2nh1ANAQ4kg1AaCciqZHfk0ivh/Qy2QCEuAIQ4QpgKytJRUZmS1qCleUcQKQ2RJqUzMy8RfQgzhCArwMzM9NtMzNfaxH9/hCAzvfzenzWWwbRNoeMrDw9w7sVjbPn5v+j+Q+WawDovrJFEQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAdVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj4xPC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPjI8L3RpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjl0tmoAAAEMSURBVDgRY8hu3Pj/xevP/ykFIDNAZjE+ffnxv5QYHwM1wLNXnxgYQS4jx7C/f/8xMDMzYWhlwRDBI/DyzReGWatOMRw5+5Dh6/dfDOxsLAyiQtwMK/oi4LqINvDFm88MqTXrGd5/+g7X/PPXH4YnLz7C+SAG0QbOXnUaxTBhAS4GYUEuBl4udvIMPHnpMVxjY64Lg7OlMpyPzMAMVWRZJPaHTz/gPFyGgRQQbSDcNAIMvMnGJmomAe0MDAJ8HAxbZsTD1VHsQgVpQbhhIAbFBirKCKEYiNfLyCqRvX9kWTqyFAqbYheimAbkjBqIHiKk85lAhSK1AMgsprYZBxhevf1CsZnPX39mAJkFAN8bnc6Q9Jq4AAAAAElFTkSuQmCC);
  height: 23px;
  background-repeat: no-repeat;
  background-position: 0px 3px;
  text-indent: -9999px;
  text-align: center;
  width: 29px;
  line-height: 23px;
  margin: -8px 7px -7px -30px;
  padding: 2 25px 0 0;
  content: "f";
}

/*google*/
/*$white: #fff;
$google-blue: #4285f4;
$button-active-blue: #1669f2;*/

.google-btn {
  width: 131px;
  height: 37px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
}
.google-icon-wrapper {
  position: absolute;
  margin-top: 4px;
  margin-left: 6px;
  width: 30px;
  height: 28px;
  border-radius: 2px;
  background-color: #fff;
}
.google-icon {
  position: absolute;
  margin-top: 7px;
  margin-left: -10px;
  width: 18px;
  height: 16px;
}
.btn-text {
  color: #fff;
  font-size: 13px;
  letter-spacing: 0.2px;
  font-family: "Roboto";
  text-align: center;
  position: absolute;
  top: 8px;
  left: 61px;
}

.linked_text {
  position: absolute;
  top: 6px;
  left: 81px;
  font-size: 16px;
  font-weight: lighter;
}
.fa-linkedin-in {
  position: absolute;
  top: 8px;
  left: 53px;
}
.google-btn:hover {
  box-shadow: 0 0 6px #4285f4;
}
.google-btn:active {
  background: #1669f2;
}

html {
  margin: 40px auto;
  text-align: center;
}
.btn-linkedin {
  background: #0e76a8;
  color: #fff;
  width: 140px;
  height: 37px;

  border-style: solid;
  border-color: #084461;
}
.btn-linkedin:link,
.btn-linkedin:visited {
  color: #fff;
}
.btn-linkedin:active,
.btn-linkedin:hover {
  background: #084461;
  color: #fff;
}

/*=====*/
.btn-group-lg > .btn,
.btn-lg {
  padding: -0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0px;
}

.my_row {
  margin-right: 15px;
  margin-left: 15px;
}

/*large mobile icons*/
.facebook {
  background: #3a5a97;
  border-color: #3a5a97 !important;
  color: #fff !important;
  display: none;
}

.google {
  background-color: #4285f4;
  border-color: #4285f4 !important;
  color: #fff !important;
  display: none;
}

.linked {
  background-color: #0e76a8;
  border-color: #0e76a8 !important;
  color: #fff !important;
  display: none;
}
@import url(https://fonts.googleapis.com/css?family=Roboto:500);

.login-page,
.register-page {
  background-color: #f6f7f7;
}

/*====================================Tickets Section============================================*/

/*=====================================================================================================================================*/

/*my queries*/

@media screen and (max-width: 600px) {
  .login-box,
  .register-box {
    width: 360px !important;
  }

  .my_row {
    margin-right: 1px !important;
    margin-left: 1px !important;
  }
  .facebook {
    display: block;
  }

  .google {
    display: block;
  }

  .linked {
    display: block;
  }

  .my_row {
    display: none;
  }
}

@media screen and (min-width: 1000px) {
  .container-fluid,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    width: 100%;
    padding-right: 150px;
    padding-left: 150px;
    margin-right: auto;
    margin-left: auto;
  }
  .nav-tabs .nav-item {
    margin-bottom: -1px;
    flex: 1 auto;
    text-align: center;
  }
}

@media screen and (max-width: 1234px) {
  .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 0.55rem !important;
  }

  .myLogocard {
    width: 60% !important;
  }
}

@media (max-width: 500px) {
  .flex-column {
    width: 96%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
