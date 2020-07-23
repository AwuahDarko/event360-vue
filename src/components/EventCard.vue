<template>
  <div class="card" style="width: 16rem;">
    <div>
      <img class="img-fluid card-img-top" src="../assets/img/photo2.jpg" alt="Card image cap" />
    </div>
    <div class="card-body pt-4">
      <img src="../assets/img/user8-128x128.jpg" alt="event logo" class="avatar small-image" />
      <div class="meta">
        <ul class="row">
          <li class="col-md-6 col-sm-3 col-xm-3 pb-1">
            <span>
              <i class="far fa-clock text-success"></i>
              date
            </span>
          </li>

          <li class="col-md-6 col-sm-3 col-xm-3 pb-1">
            <span>
              <i class="fa fa-map-marker text-success" key="vunue2"></i>
              Venue
            </span>
          </li>
        </ul>
      </div>
      <h5 class="card-title">Event Name</h5>
      <p class="card-text">Short description</p>
      <div class="icon-block">
        <a href>
          <h6 class="card-title text-success">
            Read More
            <i class="fas fa-chevron-right" style="font-size: 12px;"></i>
          </h6>
        </a>
      </div>
      <div class="icon-block">
        <button type="button" class="btn btn-block btn-success btn-sm mt-2 mb-2">Get Tickets</button>
      </div>

      <div class="mt-1">
        <div class="items-in-row">
          <div>
            <button type="button" class="small-text btn btn-sm">
              <i class="fa fa-star text-success mr-1"></i>Interested
            </button>
          </div>
          <div>
            <button type="button" class="btn btn-sm small-text">
              <i class="far fa-check-circle text-success mr-1"></i>Going
            </button>
          </div>
          <div>
            <button type="button" class="btn btn-sm small-text">
              <i class="fas fa-share text-success mr-1"></i>Share
            </button>
          </div>
          <div>
            <button type="button" class="btn btn-sm small-text">
              <i class="far fa-save text-success mr-1"></i>Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {};
</script>


<style scoped>
.card-parent {
  position: relative;
}

.small-image {
  position: absolute;
  top: 28%;
  left: 25px;
}

.avatar {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.items-in-row {
  display: flex;
  justify-content: space-evenly;
}

.small-text {
  font-size: 0.7rem;
}

.nav-menu li a:hover {
  color: grey;
}

li {
  list-style-type: none;
}

.card-body {
  padding-bottom: 5px !important;
}

/* ANIMATIONS */
.card {
  overflow: hidden;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.8);
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: 0.3s;
}

.card:hover,
.card:focus,
.card:active {
  box-shadow: 0 5px 5px 3px rgba(0, 0, 0, 0.6);
  transform: translateY(-3px) scale(1.01) rotateX(15deg);
}
</style>