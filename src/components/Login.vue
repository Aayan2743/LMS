<template>
    <div class="container">
            <div class="form-group">
                <label for="email"> email</label>
                <input type="text"  class="form-control" id="email" v-model="frmLgn.email" name="email" />
                <span v-if="errors.email" class="text-danger">{{errors.email[0]  }}</span>
            </div>

            <div class="form-group">
                <label for="Password"> Password</label>
                <input type="Password"  class="form-control" id="Password" v-model="frmLgn.password" name="Password" />
                <span v-if="errors.password" class="text-danger">{{errors.password[0] }}</span>
            </div>

 
            <div class="form-group mt-2">
                <button class="btn btn-primary" v-on:click="LoginAction">Login</button>
            </div>

            <span v-if="errors.message" class="text-danger">{{ errors.message }}</span>
    </div>

</template>

<script>
export default{
    name:'Login',
    data(){
        return{
            frmLgn:{
                email:'',
                password:''
            },
            errors:{}
        }  
    },
    methods:{
        LoginAction(){
            this.$store.dispatch('LoginActions',this.frmLgn).then(res=>{
                console.log(res);
            }).catch(err=>{

                this.errors=err.response.data;
                console.log("eeree",err.response.data);
            });
        }
    }
    
}

</script>