<template>
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4 col-xs-12">
              <div class="panel panel-primary">
                <div class="panel-heading text-center">
                    <h3>Login</h3>
                </div>
                <div class="panel-body">
                    <div class="text-center">
                        <i class="fa fa-user-circle fa-5x"></i>
                    </div>
                    <br>
                    <br>
                    <form @submit.prevent="login">
                        <div class="md-form">
                            <i class="fa fa-envelope prefix grey-text"></i>
                            <input type="text" id="defaultForm-email" class="form-control" placeholder="Your email" v-model="user.email">
                        </div>

                        <div class="md-form">
                            <i class="fa fa-lock prefix grey-text"></i>
                            <input type="password" id="defaultForm-pass" class="form-control" placeholder="Your password" v-model="user.password">
                        </div>

                        <div class="text-center">
                            <button class="btn btn-default">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import {api} from '../../../config/axios'
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        created() {
            this.check();
        },
        methods: {
            check(){
                if (localStorage.getItem('token')) {
                    this.$router.push('/')
                } else {
                    return;
                }
            },
            login() {
                api.post('login', this.user)
                    .then((res) => {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('user_id', res.data.user_id);
                        this.$router.push('/');
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }
    }
</script>

<style scoped>
@media (min-width: 992px) {
    .col-md-4 {
        margin-top: 50px !important;
    }
}
</style>
