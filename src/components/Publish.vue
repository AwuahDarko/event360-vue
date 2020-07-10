<template>
  <section>
    <h4 class="lab-my mx-auto">You're ready to publish!</h4>
    <h6 class="lab-ui mx-auto">
      <i class="fa fa-star text-success"></i> Remember, you can still edit your app after you publish it.
    </h6>
    <div class="card price-box">
      <div class="row p-4">
        <div class="col-md-5">
          <h6 class="text-bold big-text">Total Charge Due:</h6>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-3">
          <span class="ghana-cedi text-bold" v-html="cedi">{{ cedi }}</span>
          <strong class="big-text ml-1">0.00</strong>
        </div>
      </div>
    </div>
    <div style="height: 20px"></div>
    <div class="card price-box">
      <div class="card-header text-success text-bold">
        <div class="row">Event Management</div>
        <hr />
        <div class="row">
          <div class="col-md-5">
            <h6 class="text-bold">Basic price:</h6>
          </div>
          <div class="col-md-5"></div>
          <h6 class="col-md-2 text-sm text-dark">
            <span class="ghana-cedi-2" v-html="cedi">{{ cedi }}</span> 0.00
          </h6>
        </div>
      </div>
      <div class="card-body">
        <div class="row text-bold text-success">Subscriptions</div>
        <hr />
        <div class="col">
          <div class="row">
            <div class="col-md-5">
              <h6 class="text-bold tags">Sponsors and Exhibitors Hub:</h6>
            </div>
            <div class="col-md-5"></div>
            <h6 class="col-md-2 text-sm">
              <span class="ghana-cedi-2" v-html="cedi">{{ cedi }}</span> 0.00
            </h6>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-5">
              <h6 class="text-bold tags">Name Badge Printing:</h6>
            </div>
            <div class="col-md-5"></div>
            <h6 class="col-md-2 text-sm">
              <span class="ghana-cedi-2" v-html="cedi">{{ cedi }}</span> 0.00
            </h6>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-5">
              <h6 class="text-bold tags">Event Promotion:</h6>
            </div>
            <div class="col-md-5"></div>
            <h6 class="col-md-2 text-sm">
              <span class="ghana-cedi-2" v-html="cedi">{{ cedi }}</span> 0.00
            </h6>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-5">
              <h6 class="text-bold tags">Hotel Booking:</h6>
            </div>
            <div class="col-md-5"></div>
            <h6 class="col-md-2 text-sm">
              <span class="ghana-cedi-2" v-html="cedi">{{ cedi }}</span> 0.00
            </h6>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-5">
              <h6 class="text-bold tags">Airport Pick up Bookings:</h6>
            </div>
            <div class="col-md-5"></div>
            <h6 class="col-md-2 text-sm">
              <span class="ghana-cedi-2" v-html="cedi">{{ cedi }}</span> 0.00
            </h6>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-5">
              <h6 class="text-bold tags">Advertisement:</h6>
            </div>
            <div class="col-md-5"></div>
            <h6 class="col-md-2 text-sm">
              <span class="ghana-cedi-2" v-html="cedi">{{ cedi }}</span> 0.00
            </h6>
          </div>
          <hr />
        </div>
        <div class="row text-bold text-success">Add-ons</div>
        <hr />
        <div class="col">
          <div class="row">
            <div class="col-md-5">
              <h6 class="text-bold tags">
                Website and Flyers
                <small>
                  ( Event webpage generation
                  and hosting, template for website and flyers)
                </small>:
              </h6>
            </div>
            <div class="col-md-5"></div>
            <h6 class="col-md-2 text-sm">
              <span class="ghana-cedi-2" v-html="cedi">{{ cedi }}</span> 0.00
            </h6>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-5">
              <h6 class="text-bold tags">Participation Certificate:</h6>
            </div>
            <div class="col-md-5"></div>
            <h6 class="col-md-2 text-sm">
              <span class="ghana-cedi-2" v-html="cedi">{{ cedi }}</span> 0.00
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light price-box p-3 mt-2">
      <small>
        By submitting my event, I agree to Event360's
        <a href="#" target="_blank">Terms of Service</a> and
        <a href="https://event360-gh.com/privacy.html" target="_blank">Privacy Policies</a>.
        I also understand that Event360 may send emails to attendees with information about
        downloading and using the app.
        <a
          href="#"
          target="_blank"
        >Learn More</a>
      </small>
    </div>
    <div class="btn-con">
      <button class="btn btn-block btn-success mt-2 btn-my">Place Order & Add to App</button>
    </div>
    <div class="row btn-my mx-auto mt-1">
      <label>(You can still edit your event info after submitting)</label>
    </div>
  </section>
</template>



<script>
export default {
  name: "Publish",
  components: {},

  data() {
    return {
      cedi: "GH&#8373"
    };
  }
};
</script>


<style scoped>
.tags {
  font-size: 0.8rem;
}

.btn-con {
  display: flex;
  justify-content: center;
}

.lab-my {
  width: 65%;
  font-size: 1.2rem;
}

.lab-ui {
  width: 80%;
  font-size: 0.9rem;
}

.big-text {
  font-size: 1.2rem;
}

/* ========= MEDIA QUERY FOR LARGER SCREENS */
@media (min-width: 800px) {
  .price-box {
    width: 60%;
    margin: auto;
  }

  .btn-my {
    width: 40%;
  }

  .lab-my {
    width: 30%;
  }

  .lab-ui {
    width: 50%;
    font-size: 1rem;
  }
}
</style>