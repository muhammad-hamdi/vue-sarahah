<template>
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4 col-xs-12">
              <div class="panel panel-primary">
                <div class="panel-heading text-center">
                    <h3>Register</h3>
                </div>
                <div class="panel-body">
                    <div class="text-center">
                        <i class="fa fa-user-circle fa-5x"></i>
                    </div>
                    <br>
                    <div class="alert alert-danger" v-if="error">
                        <p><strong>Passwords</strong> don't Match!</p>
                    </div>
                    <br>
                    <form class="form-horizontal" @submit.prevent="register">
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email"><i class="fa fa-envelope-o fa-2x"></i></label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="user.email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="pwd"><i class="fa fa-lock fa-2x"></i></label>
                        <div class="col-sm-10"> 
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="user.password">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="pwd2"><i class="fa fa-unlock-alt fa-2x"></i></label>
                        <div class="col-sm-10"> 
                        <input type="password" class="form-control" id="pwd2" placeholder="Confirm password" v-model="pwdConfirm">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="user"><i class="fa fa-user fa-2x"></i></label>
                        <div class="col-sm-10"> 
                        <input type="text" class="form-control" id="user" placeholder="Username" v-model="user.username">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="name"><i class="fa fa-user-o fa-2x"></i></label>
                        <div class="col-sm-10"> 
                        <input type="text" class="form-control" id="name" placeholder="Name" v-model="user.name">
                        </div>
                    </div>
                    <div class="form-group"> 
                        <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                            <label><input type="checkbox">Notifications</label>
                        </div>
                        </div>
                    </div>
                    <div class="form-group"> 
                        <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary">Register</button>
                        </div>
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
                    name: '',
                    email: '',
                    username: '',
                    password: ''
                },
                pwdConfirm: '',
                error: false
            }
        },
        created() {
            var token = localStorage.getItem('token');
            if (token) {
                this.$router.push('/')
            }
        },
        methods: {
            register(){
                if (this.user.password != this.pwdConfirm) {
                    this.error = true;
                } else {
                    api.post('register', this.user)
                    .then((res) => {
                        localStorage.setItem('token', res.token);
                        localStorage.setItem('user_id', res.user_id);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                }
            }
        }
    }
</script>

<style scoped>
@media (min-width: 992px) {
    .col-md-4 {
        margin-top: 30px !important;
    }
}
</style>
