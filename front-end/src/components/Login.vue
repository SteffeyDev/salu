<template>
  <div id="login">
    <!--Gradient Background-->
    <div class="jumbotron-bg bg-gradient-light">

    <!--Login Screen-->
      <div class="container" v-if="loginScreen">
        <!--Logo-->
        <div class="row justify-content-center">
          <div class="col-2">
            <img alt="Salu.pro logo" src="../assets/Salu-Pro-Logo.gif" class="img-fluid pt-4 pb-3">
          </div>
        </div>

        <!--Align all content in the center - take up half of screen-->
        <div class="row justify-content-center">
          <div class="col-6 bg-light shadow-sm p-3 mb-5 rounded">
            <div class="row justify-content-center pb-2 h1 font-weight-normal">Salu.pro</div>
            <form>
              <!--Username-->
              <div class="form-group row">
                <label for="inputUsername" class="col-2 col-form-label" id="Login to Salu.Pro">Username</label>
                <div class="col">
                  <input type="text" class="form-control" id="inputUsername">
                </div>
              </div>
              <!--Password-->
              <div class="form-group row">
                <label for="inputPassword" class="col-2 col-form-label">Password</label>
                <div class="col">
                  <input type="password" class="form-control" id="inputPassword">
                </div>
              </div>
              <!--Buttons-->
              <div class="form-row justify-content-end">
                <!--Clicking signup button changes "loginScreen" variable-->
                <button type="button" class="col- mr-4 btn btn-primary p-xs-0 p-sm-1 p-md-2" v-on:click="loginScreen = false">
                  Sign Up
                  <span class="fas fa-pencil-alt"><!--Reference to icon from FontAwesome--></span>
                </button>
                <button type="submit" class="col- ml-4 btn btn-dark p-xs-0 p-sm-1 p-md-2 ">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!--Signup Screen-->
      <div class="container-fluid" v-if="!loginScreen">
        <div class="row">
          <div class="col-6 vertical-center">
            <img alt="Salu.pro logo" src="../assets/Salu-Pro-Logo.gif" class="img-fluid">
          </div>

          <div class="col">
            <!--Align all content in the center - take up 10/12ths of column-->
            <div class="row justify-content-center">
              <div class="col shadow-sm bg-light rounded force-full-height">

                <!--Return Button-->
                <div class="form-group row justify-content-end pr-2 pt-2">
                  <!--Clicking return button changes "loginScreen" variable-->
                  <button type="button" class="col- btn btn-light" v-on:click="loginScreen = true">
                    <span class="far fa-arrow-alt-circle-left"><!--Reference to icon from FontAwesome--></span>
                    Return To Login
                  </button>
                </div>
                <div class="row justify-content-center text-center h1">Sign Up For Salu.pro</div>

                <form>
                  <!--Username-->
                  <div class="form-group">
                    <label for="inputUsername">Username</label>
                    <input type="text" class="form-control" id="inputUsername">
                  </div>
                  <!--Password-->
                  <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword">
                  </div>
                  <!--Confirm Password-->
                  <div class="form-group">
                    <label for="inputPassword2">Confirm Password</label>
                    <input type="password" class="form-control" id="inputPassword">
                  </div>
                  <!--Email-->
                  <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="email@example.com" v-model="email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <!--Sign-up-->
                  <div class="form-group row justify-content-center">
                    <div class="col-1"><!--Empty column for right alignment--></div>
                    <!--Clicking signup button changes "loginScreen" variable-->
                    <button type="submit" class="col- btn btn-primary p-xs-0 p-sm-1 p-md-2" v-on:click="signup">
                      Sign Up
                      <span class="fas fa-pencil-alt"><!--Reference to icon from FontAwesome--></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'login',
    data: () => ({
      loginScreen: true,
      email: '',
      // Add the rest of the fields, and hook them up to the inputs using v-model (see https://vuejs.org/v2/guide/forms.html#Text)
      // Don't forget to change first/last name to just username
    }),
    methods: {
      signup() {
        axios.post("https://salu.pro/auth/create", {
          email: this.email,
          username: this.username,
          password: this.password
        }).then(userDetails => this.$store.commit('login', userDetails))
          .catch(() => alert("Error creating account"))
      },
      login() {
        // Make this just like signup, but send to salu.pro/auth/login, only send username & password, and hook it up to the appropriate button
      }
    },
    components: {
    }
  }
</script>

<style>
  
</style>
