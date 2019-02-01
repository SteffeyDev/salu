<template>
  <div id="login">
    <!--Gradient Background-->
    <div class="bg-gradient-light jumbotron-bg">

      <!--Login Screen-->
      <b-container fluid v-if="loginScreen">
        <!--Logo-->
        <b-row align-h="center">
          <b-col cols="4" sm="3" md="2">
            <img alt="Salu.pro logo" src="../assets/saluLogo.png" class="img-fluid pt-4 pb-2">
          </b-col>
        </b-row>
        <center class="text-white">
          <h1 class="mb-1">Salu.pro</h1>
          <p>Professional Contact Manager</p>
        </center>

        <!--Align all content in the center - take up half of container-->
        <b-row align-h="center">
          <b-col cols="11" sm="8" md="6" lg="5" class="bg-light shadow-sm p-3 mb-5 rounded">
            <b-form>
              <!--Username-->
              <b-form-group class="d-none d-md-block">
                <b-form-row class="text-right">
                  <b-col cols="2" align-self="center" class="mr-3 ml-n2">
                    <label class="m-0" for="inputUsername">Username<br>or Email</label>
                  </b-col>
                  <b-col align-self="center">
                    <b-input type="text" id="inputUsername" v-model="username" />
                  </b-col>
                </b-form-row>
              </b-form-group>
              <b-form-group class="d-block d-md-none">
                <label for="inputUsername2">Username or Email</label>
                <b-input type="text" id="inputUsername2" v-model="username" />
              </b-form-group>
              <!--Password-->
              <b-form-group class="d-none d-md-block">
                <b-form-row class="text-right">
                  <b-col cols="2" align-self="center" class="mr-3 ml-n2">
                    <label class="m-0" for="inputPassword">Password</label>
                  </b-col>
                  <b-col align-self="center">
                    <b-input type="password" id="inputPassword" v-model="password" />
                  </b-col>
                </b-form-row>
              </b-form-group>
              <b-form-group class="d-block d-md-none">
                <label for="inputPassword2">Password</label>
                <b-input type="password" id="inputPassword2" v-model="password" />
              </b-form-group>
              <!--Buttons-->
              <div class="d-flex justify-content-end">
                <!--Clicking signup button changes "loginScreen" variable-->
                <b-button variant="info" class="mr-2" v-on:click="loginScreen = false"><i class="fas fa-pencil-alt"></i> Sign Up</b-button>
                <b-button type="button" variant="dark" class="ml-1" v-on:click="login"><i class="fas fa-sign-in-alt"></i> Login</b-button>
              </div>
            </b-form>
          </b-col>
        </b-row>
      </b-container>

      <!--Signup Screen-->
      <b-container fluid v-if="!loginScreen">
        <b-row class="force-full-height">
          <b-col sm="6" align-self="center" class="d-none d-sm-block">
            <center class="text-white">
              <img alt="Salu.pro logo" src="../assets/saluLogo.png" style="width: 70%">
              <h1 class="mb-1">Salu.pro</h1>
              <p>Professional Contact Manager</p>
            </center>
          </b-col>

          <b-col>
            <!--Align all content in the center-->
            <b-row class="justify-content-center h-100">
              <b-col class="shadow-sm bg-light h-100">

                <!--Return Button-->
                <b-row class="pt-1 mb-2">
                  <b-col>
                    <!--Clicking return button changes "loginScreen" variable-->
                    <b-button type="button" variant="light" v-on:click="loginScreen = true">
                      <span class="far fa-arrow-alt-circle-left"><!--Reference to icon from FontAwesome--></span>
                      Return To Login
                    </b-button>
                  </b-col>
                </b-row>
                <!--Logo-->
                <b-row align-h="center"  class="d-sm-none">
                  <!--Hidden medium size devices and up-->
                  <b-row>
                    <img alt="Salu.pro logo" src="../assets/saluLogo.png" height="80px">
                  </b-row>
                </b-row>
                <!--Header-->
                <b-row align-h="center">
                  <h3>Sign Up</h3>
                </b-row>

                <b-form>
                  <!--Email-->
                  <b-form-group>
                    <label for="inputEmail">Email</label>
                    <b-input type="email" id="inputEmail" placeholder="email@example.com" v-model="email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </b-form-group>
                  <!--Username-->
                  <b-form-group>
                    <label for="inputUsername">Username</label>
                    <b-input type="text" id="inputUsername" v-model="username" />
                  </b-form-group>
                  <!--Password-->
                  <b-form-group>
                    <label for="inputPassword">Password</label>
                    <b-input type="password" id="inputPassword" v-model="password" />
                  </b-form-group>
                  <!--Confirm Password-->
                  <b-form-group>
                    <label for="inputPassword2">Confirm Password</label>
                    <b-input type="password" id="inputPassword2" v-model="password2" />
                  </b-form-group>
                  <!--Sign-up Button-->
                  <b-form-group>
                    <b-row align-h="center">
                      <b-col cols="1"><!--Empty column for right alignment--></b-col>
                      <!--Clicking signup button changes "loginScreen" variable-->
                      <b-button type="button" variant="info" v-on:click="signup">
                        <span class="fas fa-pencil-alt"><!--Reference to icon from FontAwesome--></span>
                        Sign Up
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
  import { api } from '../config.js'

  export default {
    name: 'login',
    data: () => ({
      loginScreen: true,
      username: '',
      password: '',
      password2: '',
      email: '',
    }),
    methods: {
      signup() {
        if (this.password === this.password2) {
          axios.post(api + "/auth/create", {
            email: this.email,
            username: this.username,
            password: this.password
          }, { withCredentials: true }).then(({ data }) => this.$store.commit('login', data))
            .catch(() => alert("Error creating account"))
        } else {
          alert("Passwords do not match")
        }
      },
      login() {
        // Like signup, but send to salu.pro/auth/login, only send username & password, and hook it up to the appropriate button
        axios.post(api + "/auth/login", {
          username: this.username,
          password: this.password
        }, { withCredentials: true }).then(({ data }) => this.$store.commit('login', data))
          .catch(() => alert("Error logging in"))
      }
    },
    components: {
    }
  }
</script>

<style>

</style>
