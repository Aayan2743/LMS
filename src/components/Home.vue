<template>

    <div class="container">

            <h5>Login</h5>

           
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" v-model="loginFrm.email" id="email" name="email" placeholder="Email"/>
                    <span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>
                </div>


                <div class="form-group">
                    <label for="Password">Password</label>
                    <input type="Password" class="form-control" v-model="loginFrm.password" id="Password" name="Password" placeholder="Password"/>
                    <span v-if="errors.password" class="text-danger"> {{ errors.password[0] }}</span>
                </div>

                <div class="form-group mt-2">
                    <button class="btn btn-primary" v-on:click="loginfrm">Login</button>
                    <button class="btn btn-primary" v-on:click="logoutsubmit">Logut</button>

                </div>

                <div>
                    <span v-if="errors.message"> {{ errors.message }}</span>
                </div>

                <h1>{{ $store.state.key}}</h1>

         
    </div>
</template>

<script>
        export default {
            name:'Home',
            data(){
                return{
                   loginFrm:{
                    email:'',
                    password:''
                   },
                   errors:{}     
                }
            },  
            computed:{
               

                newName(){
                    // this.$store.commit('ChangeName','Asif New Name')
                    this.$store.dispatch('changeNameAction','Good Bye').then((res)=>console.log(res));
                }
            },
            methods:{
                loginfrm(){
                    // console.log(this.loginFrm);`

                            this.$store.dispatch('LoginSubmit',this.loginFrm).then(response => {
                            console.log("Login Success:", response);
                                    })
                            .catch(error => {
                             
                                    this.errors = error; // Store validation errors
                                

                                console.error("Login Error:", error);
                            });
                },

                logoutsubmit(){
                    this.$store.dispatch('logoutsubmit');
                }
            }
        }
</script>