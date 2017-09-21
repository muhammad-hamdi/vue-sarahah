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
                    <form class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="email"><i class="fa fa-user fa-2x"></i></label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" placeholder="Enter email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="pwd"><i class="fa fa-lock fa-2x"></i></label>
                        <div class="col-sm-10"> 
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password">
                        </div>
                    </div>
                    <div class="form-group"> 
                        <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                            <label><input type="checkbox"> Remember me</label>
                        </div>
                        </div>
                    </div>
                    <div class="form-group"> 
                        <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary">Login</button>
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
    
</script>

<style scoped>
@media (min-width: 992px) {
    .col-md-4 {
        margin-top: 50px !important;
    }
}
</style>
