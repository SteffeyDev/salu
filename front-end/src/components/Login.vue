<template>
  <div id="login">
    <!--Gradient Background-->
    <div class="jumbotron-bg   bg-gradient-light">

    <!--Login Screen-->
      <b-container fluid v-if="loginScreen">
        <!--Logo-->
        <b-row class="justify-content-center">
          <b-col cols="2">
            <img alt="Salu.pro logo" src="../assets/saluLogo.png" class="img-fluid pt-4 pb-3">
          </b-col>
        </b-row>

        <!--Align all content in the center - take up half of container-->
        <b-row class="justify-content-center">
          <b-col cols="6" class="bg-light shadow-sm p-3 mb-5 rounded">
            <b-row class="justify-content-center pb-2 h1 font-weight-normal">Salu.pro</b-row>
            <b-form>
              <!--Username-->
              <b-form-group>
                <b-row>
                  <b-col cols="2">
                    <label for="inputUsername">Username</label>
                  </b-col>
                  <b-col>
                    <b-input type="text" id="inputUsername" />
                  </b-col>
                </b-row>
              </b-form-group>
              <!--Password-->
              <b-form-group>
                <b-row>
                  <b-col cols="2">
                    <label for="inputPassword">Password</label>
                  </b-col>
                  <b-col>
                    <b-input type="password" id="inputPassword" />
                  </b-col>
                </b-row>  
              </b-form-group>
              <!--Buttons-->
              <b-form-row class="justify-content-end">
                <!--Clicking signup button changes "loginScreen" variable-->
                <b-button variant="primary" class="mr-4 p-xs-0 p-sm-1 p-md-2" v-on:click="loginScreen = false">
                  Sign Up
                  <span class="fas fa-pencil-alt"><!--Reference to icon from FontAwesome--></span>
                </b-button>
                <b-button type="submit" variant="dark" class="col- ml-4 p-xs-0 p-sm-1 p-md-2">Login</b-button>
              </b-form-row>
            </b-form>
          </b-col>
        </b-row>
      </b-container>

      <!--Signup Screen-->
      <b-container fluid v-if="!loginScreen">
        <b-row>
          <b-col cols="6" class="vertical-center">
            <img alt="Salu.pro logo" src="../assets/saluLogo.png" class="img-fluid">
          </b-col>

          <b-col>
            <!--Align all content in the center - take up 10/12ths of column-->
            <b-row class="justify-content-center">
              <b-col class="shadow-sm bg-light force-full-height">

                <!--Return Button-->
                <b-form-group>
                  <b-row class="justify-content-end pr-2 pt-2">
                    <!--Clicking return button changes "loginScreen" variable-->
                    <b-button type="button" variant="light" v-on:click="loginScreen = true">
                      <span class="far fa-arrow-alt-circle-left"><!--Reference to icon from FontAwesome--></span>
                      Return To Login
                    </b-button>
                  </b-row>
                </b-form-group>
                <b-row class="justify-content-center text-center h1">Sign Up For Salu.pro</b-row>

                <b-form>
                  <!--Username-->
                  <b-form-group>
                    <label for="inputUsername">Username</label>
                    <b-input type="text" id="inputUsername" />
                  </b-form-group>
                  <!--Password-->
                  <b-form-group>
                    <label for="inputPassword">Password</label>
                    <b-input type="password" id="inputPassword" />
                  </b-form-group>
                  <!--Confirm Password-->
                  <b-form-group>
                    <label for="inputPassword2">Confirm Password</label>
                    <b-input type="password" id="inputPassword" />
                  </b-form-group>
                  <!--Email-->
                  <b-form-group>
                    <label for="inputEmail">Email</label>
                    <b-input type="email" id="inputEmail" placeholder="email@example.com" v-model="email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </b-form-group>
                  <!--Sign-up-->
                  <b-form-group>
                    <b-row class="justify-content-center">
                      <b-col cols="1"><!--Empty column for right alignment--></b-col>
                      <!--Clicking signup button changes "loginScreen" variable-->
                      <b-button type="submit" variant="primary" class="p-xs-0 p-sm-1 p-md-2" v-on:click="signup">
                        Sign Up
                        <span class="fas fa-pencil-alt"><!--Reference to icon from FontAwesome--></span>
                      </b-button>
                    </b-row>
                  </b-form-group>
                </b-form>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
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
