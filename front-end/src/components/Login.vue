<template>
  <div id="login">
    <img alt="Vue logo" src="../assets/Salu-Pro-Logo.gif" width="170px" style="padding-bottom:50px">

    <!--Login Screen-->
    <div class="container" v-if="loginScreen">
      <form>
        <!--Username-->
        <div class="form-group row justify-content-center">
          <label for="inputUsername" class="col-1 col-form-label">Username</label>
          <div class="col-4">
            <input type="text" class="form-control" id="inputUsername" placeholder="Please enter your username">
          </div>
        </div>
        <!--Password-->
        <div class="form-group row justify-content-center">
          <label for="inputPassword" class="col-1 col-form-label">Password</label>
          <div class="col-4">
            <input type="password" class="form-control" id="inputPassword" placeholder="Please enter your password">
          </div>
        </div>
        <!--Buttons-->
        <div class="form-group row justify-content-center">
          <div class="col-1"><!--Empty column for right alignment--></div>
          <!--Clicking signup button changes "loginScreen" variable-->
          <button type="submit" class="col-2 mr-4 btn btn-primary border-secondary" v-on:click="loginScreen = false">
            Sign Up
            <span class="fas fa-pencil-alt"><!--Reference icon from FontAwesome--></span>
          </button>
          <button type="submit" class="col-1 ml-4 btn btn-dark">Login</button>
        </div>
      </form>
    </div>

    <!--Signup Screen-->
    <div class="container" v-if="!loginScreen">
      <form>
        <!--Name-->
        <div class="form-group row justify-content-center">
          <label for="inputUsername" class="col-1 col-form-label">Username</label>
          <div class="col-4">
            <input type="text" class="form-control" id="inputUsername">
          </div>
        </div>
        <!--Username-->
        <div class="form-group row justify-content-center">
          <label for="inputUsername" class="col-1 col-form-label">Username</label>
          <div class="col-4">
            <input type="text" class="form-control" id="inputUsername">
          </div>
        </div>
        <!--Username-->
        <div class="form-group row justify-content-center">
          <label for="inputUsername" class="col-1 col-form-label">Username</label>
          <div class="col-4">
            <input type="text" class="form-control" id="inputUsername">
          </div>
        </div>
        <!--Password-->
        <div class="form-group row justify-content-center">
          <label for="inputPassword" class="col-1 col-form-label">Password</label>
          <div class="col-4">
            <input type="password" class="form-control" id="inputPassword">
            <small id="emailHelp" class="form-text text-muted">We'll never share your password with anyone else.</small>
          </div>
        </div>
        <!--Confirm Password-->
        <div class="form-group row justify-content-center align-items-center">
          <label for="inputPassword" class="col-1 col-form-label">Confirm Password</label>
          <div class="col-4">
            <input type="password" class="form-control" id="inputPassword">
          </div>
        </div>
        <!--Email-->
        <div class="form-group row justify-content-center">
          <label for="inputEmail" class="col-1 col-form-label">Email</label>
          <div class="col-4">
            <input type="email" class="form-control" id="inputEmail" placeholder="email@example.com">
          </div>
        </div>
        <!--Checkbox-->
        <div class="form-group row justify-content-center mt-n2">
          <div class="col-3"><!--Empty column for right alignment--></div>
          <div class="col-2">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="confirmationCheckbox">Confirm Sign Up!</label>
          </div>
        </div>
        <!--Buttons-->
        <div class="form-group row justify-content-center">
          <div class="col-1"><!--Empty column for right alignment--></div>
          <!--Clicking signup button changes "loginScreen" variable-->
          <button type="submit" class="col-2 mr-4 btn btn-primary border-secondary" v-on:click="loginScreen = false">
            Sign Up
            <span class="fas fa-pencil-alt"><!--Reference icon from FontAwesome--></span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data: () => ({
      loginScreen: false
    }),
    components: {
    }
  }
</script>

<style>
</style>
