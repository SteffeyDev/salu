<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/Salu-Pro-Logo.gif" width="170px" style="padding-bottom:40px">
    <div class="container">
      <form>
        <div class="form-group row justify-content-center">
          <label for="inputUsername" class="col-1 col-form-label">Username</label>
          <div class="col-4">
            <input type="text" class="form-control" id="inputUsername" placeholder="Please enter your username">
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <label for="inputPassword" class="col-1 col-form-label">Password</label>
          <div class="col-4">
            <input type="password" class="form-control" id="inputPassword" placeholder="Please enter your password">
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="col-3"><!--Empty column for right alignment--></div>
          <div class="col-2">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="confirmationCheckbox">Confirm Sign Up</label>
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="col-1"><!--Empty column for right alignment--></div>
          <button type="submit" class="col-2 mr-4 btn btn-primary">
            Sign Up
            <span class="fas fa-pencil-alt"><!--Reference icon from FontAwesome--></span>
          </button>
          <button type="submit" class="col-1 ml-4 btn btn-dark">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
