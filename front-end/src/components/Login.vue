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
          <b-col cols="10" sm="7" md="5" lg="4" class="bg-light shadow-sm p-3 mb-5 rounded">
            <b-form @submit.prevent="login">
              <!--Username-->
              <b-form-group>
                <label class="d-none" for="inputUsername2">Username or Email</label>
                <b-input type="text" id="inputUsername2" v-model="username" placeholder="Username or email" required />
              </b-form-group>
              <!--Password-->
              <b-form-group>
                <label class="d-none" for="inputPassword2">Password</label>
                <b-input type="password" id="inputPassword2" v-model="password" placeholder="Password" required />
              </b-form-group>
              <!--Buttons-->
              <div class="d-flex justify-content-end">
                <!--Clicking signup button changes "loginScreen" variable-->
                <b-button variant="info" class="mr-2" v-on:click="loginScreen = false"><i class="fas fa-pencil-alt"></i> Sign Up</b-button>
                <b-button type="submit" variant="dark" class="ml-1"><i class="fas fa-sign-in-alt"></i> Login</b-button>
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
              <img alt="Salu.pro logo" src="../assets/saluLogo.png" style="width: 70%; max-width: 300px;">
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

                <b-form @submit.prevent="signup" style="max-width: 450px" class="d-flex flex-column align-items-stretch m-auto">
                  <!--Email-->
                  <b-form-group>
                    <label for="inputEmail">Email</label>
                    <b-input type="email" id="inputEmail" placeholder="email@example.com" v-model="email" required />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </b-form-group>
                  <!--Username-->
                  <b-form-group>
                    <label for="inputUsername">Username</label>
                    <b-input type="text" id="inputUsername" v-model="username" required />
                  </b-form-group>
                  <!--Password-->
                  <b-form-group>
                    <label for="inputPassword">Password</label>
                    <b-input type="password" id="inputPassword" v-model="password" required />
                  </b-form-group>
                  <!--Confirm Password-->
                  <b-form-group>
                    <label for="inputPassword2">Confirm Password</label>
                    <b-input type="password" id="inputPassword2" v-model="password2" required />
                  </b-form-group>
                  <!--Sign-up Button-->
                  <b-form-group>
                    <b-row align-h="center">
                      <b-col cols="1"><!--Empty column for right alignment--></b-col>
                      <!--Clicking signup button changes "loginScreen" variable-->
                      <b-button type="submit" variant="info">
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
          .then(() => this.$store.dispatch('fetchContacts'))
          .catch(() => alert("Error logging in"))
      }
    },
    components: {
    }
  }
</script>

<style>

</style>
