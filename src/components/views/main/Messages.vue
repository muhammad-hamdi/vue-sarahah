<template>
  <div>
      <nav-bar></nav-bar>
      <div class="col-md-6 col-xs-12 col-md-offset-3">
          <div class="panel panel-primary">
          <div class="panel-heading text-center">
              <h5 class="panel-title">Messages <i class="fa fa-comments-o"></i></h5>
          </div>
          <div class="panel-body">
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#home">Sent</a></li>
                <li><a data-toggle="tab" href="#menu1">Received</a></li>
            </ul>

            <div class="tab-content">
                <div id="home" class="tab-pane fade in active">
                    <h3>Sent Messages</h3>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="msg in sent" v-if="sent">
                            <strong>to:</strong> {{msg.name}}
                            <br>
                            <br>
                            <strong>content:-</strong>
                            <br>
                            {{msg.content}}
                            <div class="text-right">{{msg.createdAt.slice(0, 10)}} / <strong>{{msg.createdAt.slice(11, 16)}}</strong></div>
                        </li>
                    </ul>
                </div>
                <div id="menu1" class="tab-pane fade">
                    <h3>Received Messages</h3>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="msg in received" v-if="sent">
                            {{msg.content}}
                            <div class="text-right">{{msg.createdAt.slice(0, 10)}} / <strong>{{msg.createdAt.slice(11, 16)}}</strong></div>
                        </li>
                    </ul>
                </div>
            </div>
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
            user_id: localStorage.getItem('user_id'),
            sent: [],
            received: [],
        };
    },
    created() {
        api.get(`messages/${this.user_id}`)
            .then((res) => {
                this.sent = res.data.sent;
                this.received = res.data.received;
            });
    },
    components: {
        NavBar,
    }
}
</script>