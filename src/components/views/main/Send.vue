<template>
<div>
    <nav-bar></nav-bar>
    <div class="col-md-6 col-xs-12 col-md-offset-3">
        <div class="panel panel-primary">
            <div class="panel-heading text-center">
                <h4 class="panel-title">Send your Message <i class="fa fa-paper-plane-o"></i></h4>
            </div>
            <div class="panel-body">
                <form @submit.prevent="sendMessage">
                    <transition name="slide">
                        <div class="alert alert-danger" v-if="error">
                            <p><strong>Message</strong> Can't be Empty!!</p>
                        </div>
                    </transition>
                    <br>
                    <div class="md-form">
                        <textarea @input="clearError" v-model="message" class="md-textarea" placeholder="Make your message constructive :)" id="message-textarea"></textarea>
                        <label for="message-textarea" class="active">Message</label>
                    </div>
                    <div class="text-right">
                        <button class="btn btn-primary">
                            Send  <i class="fa fa-paper-plane-o"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>  
</div>  
</template>

<script>
import NavBar from '../../main/NavBar.vue';
import {api} from '../../../config/axios';

export default {
    data() {
        return {
            message: '',
            sender_id: localStorage.getItem('user_id') || null,
            username: this.$route.params.username,
            error: false,
        }
    },
    methods: {
        sendMessage() {
            if (this.message === '') {
                this.error = true;
            } else {
                var reqBody = {
                    content: this.message,
                    sender_id: this.sender_id,
                    username: this.username
                };
            api.post('message', reqBody)
                .then(() => {
                    this.$router.push('/thanks');
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        },
        clearError() {
            this.error = false;
        }
    },
    components: {
        NavBar
    }
}
</script>

<style>
.slide-enter, .slide-leave {
    height: 0;
    opacity: 0;
}
.slide-enter-active, .slide-leave-active {
    transition: all .5s ease-in-out;
}
</style>
