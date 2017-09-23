<template>
  <div>
      <nav-bar></nav-bar>
      <div class="container">
          <div class="row">
              <div class="col-sm-12">
                  <div class="jumbotron">
                    <h1 class="h1-responsive">Hello, world!</h1>
                    <p class="lead">Are you ready for a honest feedback from people around you ??!</p>
                    <hr class="my-2">
                    <router-link to="/register" class="btn btn-primary">Register</router-link>
                    <router-link to="/login" class="btn btn-primary">Login</router-link>
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
        return {};
    },
    components: {
        NavBar,
    }
}
</script>