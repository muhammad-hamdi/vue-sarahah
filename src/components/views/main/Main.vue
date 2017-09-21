<template>
  <div>
      <nav-bar></nav-bar>
      <div class="container">
          <div class="row">
                <div class="col-xs-12">
                    <p class="lead">Get honest feedback from your coworkers and friends.</p>
                </div>
                <div class="col-md-6 col-xs-12">
                    <h3>At Work</h3>
                    <ul>
                        <li>Enhance your areas of strength</li>
                        <li>Strengthen Areas for Improvement</li>
                    </ul>
                    <router-link to="/register">Register</router-link> | <router-link to="/login">Login</router-link>
                </div>
                <div class="col-md-6 col-xs-12">
                    <h3>With Your Friends</h3>
                    <ul>
                        <li>Improve your friendship by discovering your strengths and areas for improvement</li>
                        <li>Let your friends be honest with you</li>
                    </ul>
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