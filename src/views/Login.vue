<template>
    <div class="hold-transition register-page">
         <vue-progress-bar></vue-progress-bar>
        <snackbar ref="snackbar" baseSize="50px"  :holdTime="5000" :multiple="true" :position="position"/>
        <div class="login-box">
            <div class="login-logo">
               <a href="https://event360-gh.com"> <img src="../assets/img/logo.png"></a>
            </div>

            <div class="card">
                <div class="card-body register-card-body">
                <h1></h1>
                <p class="login-box-msg">Sign in to event360</p>

                <form @submit="login">
                
                    <div class="input-group mb-3">
                    <input type="email" class="form-control" v-bind:class="{'is-empty': emailError}" v-model="email" placeholder="Email">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                    </div>
                    <div class="input-group mb-3">
                    <input type="password" class="form-control" v-bind:class="{'is-empty': passwordError}" v-model="password" placeholder="Password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                
                    <div class="row">
                    <div class="col-8">
                        <div class="icheck-primary">
                        <input style="margin-top: 5px !important; margin-right: 5px" type="checkbox" id="agreeTerms"  @change="rememberMe">
                        <label for="agreeTerms">
                        Keep me logged in
                        </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-4">
                        <button type="submit" class="btn btn-success btn-block">Login</button>
                    </div>
                    <!-- /.col -->
                    </div>
                </form>

                <div class="social-auth-links text-center">
                    <p>-or Sign in with -</p>

            <div class="row my_row">
                <div class="col-md-4 col-sm-4 col-xm-6" >
                        <a href="https://event360-gh.com/auth/facebook" class="fb fb2 connect2">Facebook</a>
                    </div>
            

                    <div class="col-md-4 col-sm-4 col-xm-6">
                    <a href="https://event360-gh.com/auth/google"> <div class="google-btn mx-auto">
                    
                    <div class="google-icon-wrapper">
                        <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p class="btn-text"><b>Google</b></p>
                    </div>
                </a>
                    </div>


                    <div class="col-md-4 col-sm-4 col-xm-6 float-right">
                    <a href="https://event360-gh.com/auth/linkedin" title="LinkedIn" class="btn btn-linkedin btn-lg"> <i class="fab fa-linkedin-in"></i> <p class="linked_text"><b>LinkedIn</b></p></a> 
                    </div>
            </div>
                
                <a href="https://event360-gh.com/auth/facebook" class="btn btn-block facebook">
                    <i class="fab fa-facebook-square"></i>
                    Facebook
                    </a>
                    <a href="https://event360-gh.com/auth/google" class="btn btn-block  google">
                    <i class="fab fa-google"></i>
                    oogle
                    </a>
                    <a href="https://event360-gh.com/auth/linkedin" class="btn btn-block linked">
                    
                    <i class="fab fa-linkedin"></i>
                    LinkedIn
                    </a>
                </div>

                <p>Don't have an account?<router-link to="sign-up" class="text-center"> Register</router-link></p>
                </div>
                <!-- /.form-box -->
             </div><!-- /.card -->
            </div>
            <!-- /.register-box -->
            </div>
</template>




<script>
import { apiUrl } from '../utils/config'
import Snackbar from 'vuejs-snackbar';

export default {
    name: 'Login',
    title: 'Login',
    components: {
        snackbar: Snackbar
    },
    methods: {
         validateFields(){
             this.emailError = this.passwordError = false
            if(!this.email){
                this.emailError = true
            }
            if(!this.password){
                this.passwordError = true
            }

            if(this.emailError || this.passwordError){
                return false
            }else return true

         },
         getPostBody(){
             const body = {
                 email: this.email,
                 password: this.password
             }

             return body;
         },
          login(evt){
             evt.preventDefault()
             if(!this.validateFields()){
                 this.$refs.snackbar.error('Provide both email and password')
                 return
             }
             this.loading = true;
             const body = this.getPostBody()

             this.$Progress.start()
             

             const options = {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(body)
             }

            let login_failed = false;
            fetch(`${apiUrl}/auth/local`, options)
            .then(res => {
               this.$Progress.finish()
                if(res.status === 401){
                   
                    this.$refs.snackbar.error('Invalid login credentials')
                    login_failed = true
                    return res.text()
                }

                return res.json()
            }).then(data => {
                if(!login_failed){
                    window.localStorage.setItem('token', data.token)
                    this.$router.push('/')
                }
            })
            .catch(err =>{
                this.$Progress.finish(); console.log(err); 
                this.$refs.snackbar.error('Network error please check your internet connection')
            })
            
             
         },
         rememberMe(evt){
             const value = evt.target.checked
             if(value){
                 window.localStorage.setItem('remember_me', 'true')
             }else{
                  window.localStorage.removeItem('remember_me')
             }
         },
    },
    data(){
        return {
            email: '',
            password: '',
            emailError: false,
            passwordError: false,
            position: 'top-right',
            loading : true,
        }
    },

    beforeCreate() {
        const remember_me = window.localStorage.getItem('remember_me')

        // verify token
        if(remember_me === 'true'){
            const token =`Bearer ${window.localStorage.getItem('token')}`;
          
           const options = {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({token: token})
           }
           fetch(`${apiUrl}/api/verify-login`, options)
           .then(res => {
               if(res.status === 208){
                   this.$router.push('/')
               }
           })
           .catch(err => {
               console.log("ERROR:",err)
               this.$refs.snackbar.error('Network error please check your internet connection');
           })
        }
    },
    mounted() {
        // check for resent login
        const message = window.localStorage.getItem('return_to_login_info')
        if(message){
            this.$refs.snackbar.info(message)
            window.localStorage.removeItem('return_to_login_info')
        }
        
    }
}
</script>


<style scoped>
@import url('../assets/css/adminlte.min.css');
@import url('../assets/css/fontawesome-free/css/all.min.css');



body:not(.sidebar-mini-md) .content-wrapper, body:not(.sidebar-mini-md) .main-footer, body:not(.sidebar-mini-md) .main-header {
    transition: margin-left .3s ease-in-out;
    margin-left: 10px !important;
}


.md-progress-bar {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 150;
  }

.is-empty{
  border-color: rgb(238, 59, 59) !important;
}

.fees_shade {
    background-color: red;
    
}

/*tab header*/

.card.card-tabss {

    box-shadow: 0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);
    margin-bottom: 1rem;
    border-radius: 5px !important;

}
.card-primary:not(.card-outline) > .card-headers, .card-primary:not(.card-outline) > .card-headers a {
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
.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
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
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
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
    padding: .75rem 1.25rem;
    position: relative;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
}

.divBorder {border: solid #DCDCDC 1px;}


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
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    line-height: 24px;
}


.img-holder:before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 0;
    opacity: .85;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all .3s ease;
    background: #1eb089;
    background: -moz-linear-gradient(left, #1eb089 0%, #7c49ab 100%, #7db9e8 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, #1eb089), color-stop(100%, #7c49ab), color-stop(100%, #7db9e8));
    background: -webkit-linear-gradient(left, #1eb089 0%, #7c49ab 100%, #7db9e8 100%);
    background: -o-linear-gradient(left, #1eb089 0%, #7c49ab 100%, #7db9e8 100%);
    background: -ms-linear-gradient(left, #1eb089 0%, #7c49ab 100%, #7db9e8 100%);
    background: linear-gradient(to right, #1eb089 0%, #7c49ab 100%, #7db9e8 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1eb089', endColorstr='#7db9e8', GradientType=1);
}
:after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.img-holder:after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    /* background: transparent url(img/gallery/overlay-bg.png) center center no-repeat; */
    transition: all .3s ease .1s;
}




/*Profile card 2*/
.profile-card-2 .card-img-block{
    float:left;
    width:100%;
    height:180px;
    overflow:hidden;

}
.profile-card-2 .card-body{
    position:relative;

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
.profile-card-2 h5{
    font-weight:600;
    color:#000;
    margin-bottom: 35px !important;
}

.profile-card-2 h6{
    font-weight:600;
    color:#6ab04c;
}
.profile-card-2 .card-text{
    font-weight:300;
    font-size:15px;
}
.profile-card-2 .icon-block{
    float:left;
    width:100%;
}
.profile-card-2 .icon-block a{
    text-decoration:none;
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
    margin:0 5px;
}


/*mine*/
 .meta {
    margin-bottom: 25px;
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
    margin-right: 10px;
}

/*hover effects*/
.card.profile-card-2:hover {
   
    box-shadow: 0 0 0 1px #00D8B7;
   
    
}
.content-wrap:hover {
    box-shadow: 0 0 0 1px #00D8B7;
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

#filedrag
{
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

#filedrag.hover
{
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

.login-box{
width: 480px !important;
}
/*facebook*/
a.fb {
    font-family: Lucida Grande, Helvetica Neue, Helvetica, Arial, sans-serif;
    display: inline-block;
    font-size: 14px;
    padding: 11px 28px 13px 43px;
    background: #3A5A97;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,20,.4);
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
    background: #3A5A97;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,20,.4);
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
    background: #1669f2;;
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
.btn-group-lg > .btn, .btn-lg {

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
    background: #3A5A97;
    border-color: #3A5A97 !important;
        color:  #fff  !important;  
        display: none; 

}

.google {
    background-color: #4285f4;
    border-color: #4285f4 !important;
        color:  #fff  !important;   
        display: none;

}

.linked {
    background-color: #0e76a8;
        border-color: #0e76a8 !important;
        color:  #fff  !important; 
        display: none;  
}
@import url(https://fonts.googleapis.com/css?family=Roboto:500);



.login-page, .register-page {
    background-color: #f6f7f7;
}


/*====================================Tickets Section============================================*/



/*=====================================================================================================================================*/

/*my queries*/

@media screen and (max-width: 600px) {
.login-box, .register-box {

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
	.container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
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


</style>