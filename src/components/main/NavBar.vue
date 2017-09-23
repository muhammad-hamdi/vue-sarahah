<template>
    <nav class="navbar navbar-default navbar-sticky">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link to="/main" class="navbar-brand">
        <img alt="Brand" src="../../assets/logo.png">
      </router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li v-if="!token"><router-link to="/register">Register</router-link></li>
        <li v-if="!token"><router-link to="/login">Login</router-link></li>
        <li><router-link to="/join">About Us</router-link></li>
        <li><router-link to="/join">About Us</router-link></li>
        <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Dropdown<span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li @click="logOut"><a href="#"><i class="fa fa-sign-out"></i> Sign Out</a></li>
          <li><a href="#"><i class="fa fa-cog"></i> Profile Settings</a></li>
          <li class="divider"></li>
          <li><a href="https://github.com/muhammad-hamdi" target="_blank"><i class="fa fa-github"></i>  GitHub</a></li>          
        </ul>
      </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container -->
</nav>
</template>

<script>
    export default {
        data() {
            return {
                token: localStorage.getItem('token'),
            };
        },
        methods: {
          logOut() {
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');
          }
        }
    }
</script>