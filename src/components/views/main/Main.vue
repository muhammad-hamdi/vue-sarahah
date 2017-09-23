<template>
  <div>
      <nav-bar></nav-bar>
      <div class="container">
          <div class="row">
              <div class="col-sm-12">
                  <div class="jumbotron" v-if="!token">
                    <h1 class="h1-responsive">Hello, world!</h1>
                    <p class="lead">Are you ready for a honest feedback from people around you ??!</p>
                    <hr class="my-2">
                    <router-link to="/register" class="btn btn-primary">Register</router-link>
                    <router-link to="/login" class="btn btn-primary">Login</router-link>
                  </div>
                  <div class="jumbotron" v-if="token">
                    <h1 class="h1-responsive">Welcome Back.</h1>
                    <p class="lead">see the messages from you friends now!</p>
                    <hr class="my-2">
                    <router-link to="/messages" class="btn btn-primary">Messages</router-link>
                  </div>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
import NavBar from '../../main/NavBar.vue';
export default {
    data() {
        return {
            token: localStorage.getItem('token'),
        };
    },
    components: {
        NavBar,
    }
}
</script>