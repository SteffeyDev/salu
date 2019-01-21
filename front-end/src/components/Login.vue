<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/Salu-Pro-Logo.gif" width="150px">
    <div class="container">
      <form>
        <div class="form-group">
          <div class="row">
            <div class="col-0 vcenter"><label for="username">Username</label></div>
            <div class="col"><input type="text" class="form-control" id="username1" aria-describedby="usernameHelp" placeholder="Enter your username"></div>
          </div>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
          <div class="form-group">
            <div class="row">
              <div class="col-0"><label for="exampleInputPassword1">Password</label></div>
              <div class="col"><input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></div>
            </div>
          </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="confirmationCheckbox">Check me out</label>
        </div>
        <div class="form-group ">
          <button type="submit" class="btn btn-primary">Login</button>
          <button type="submit" class="btn btn-primary">Sign Up</button>
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

  .vcenter {
    display: inline-block;
    vertical-align: middle;
    float: none;
  }
</style>
