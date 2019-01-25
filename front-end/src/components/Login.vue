<template>
  <div id="login">
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
        <div class="col-6 shadow bg-gradient-light p-3 mb-5 rounded">
          <div class="text-dark row justify-content-center pb-2 h1 font-weight-normal">Salu.pro</div>
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
              <button type="button" class="col- mr-4 btn btn-primary border-secondary" v-on:click="loginScreen = false">
                Sign Up
                <span class="fas fa-pencil-alt"><!--Reference to icon from FontAwesome--></span>
              </button>
              <button type="submit" class="col- ml-4 btn btn-dark">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!--Signup Screen-->
    <div class="container-fluid" v-if="!loginScreen">
      <div class="row">
        <div class="col-5 vertical-center">
          <img alt="Salu.pro logo" src="../assets/Salu-Pro-Logo.gif" class="img-fluid">
        </div>

        <div class="col">
          <!--Align all content in the center - take up 10/12ths of column-->
          <div class="row justify-content-center">
            <div class="col-10 shadow bg-gradient-light p-3 mb-5 rounded">

              <!--Return Button-->
              <div class="form-group row justify-content-end pr-2">
                <!--Clicking return button changes "loginScreen" variable-->
                <button type="button" class="col- btn btn-light" v-on:click="loginScreen = true">
                  <span class="far fa-arrow-alt-circle-left"><!--Reference to icon from FontAwesome--></span>
                  Return To Login
                </button>
              </div>
              <div class="row justify-content-center h1 font-weight-normal">Sign Up For Salu.pro</div>

              <form>
                <!--Name-->
                <div class="form-row">
                  <div class="form-group col-6">
                    <label for="inputName">Name</label>
                    <input type="text" class="form-control" id="inputFirstName" placeholder="First Name">
                  </div>
                  <div class="form-group col-6">
                    <label for="inputName" class="invisible">Name</label> <!--Invisible label for alignment purposes-->
                    <input type="text" class="form-control" id="inputLastName" placeholder="Last Name">
                  </div>
                </div>
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
                  <input type="email" class="form-control" id="inputEmail" placeholder="email@example.com">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <!--Checkbox-->
                <div class="form-group ml-4 mt-n2">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="confirmationCheckbox">Confirm Sign Up!</label>
                </div>
                <!--Sign-up-->
                <div class="form-group row justify-content-center">
                  <div class="col-1"><!--Empty column for right alignment--></div>
                  <!--Clicking signup button changes "loginScreen" variable-->
                  <button type="submit" class="col- btn btn-primary border-secondary" v-on:click="loginScreen = false">
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
</template>

<script>

  export default {
    name: 'login',
    data: () => ({
      loginScreen: true
    }),
    components: {
    }
  }
</script>

<style>
  .bg-gradient-light {
    background: linear-gradient(white, #e9ecff)
  }

  .vertical-center {
    min-height: 100%; /* Fallback for browsers do NOT support vh unit */
    min-height: 100vh; /* These two lines are counted as one :-)       */
    display: flex;
    align-items: center;
  }
</style>
