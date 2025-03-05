import {createStore} from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
export default createStore({

    state:{
        name:'Asif',
        utr:'#9871*****',
        key:''
    },

    mutations:{
        ChangeName(state,payload){
            this.state.name=payload

        },
        LoginApi(state, data) {
            state.key = data.user;
           
        },
        logout(state){
            state.key=null
        },
        LoginKey(state,Key){
            state.key=Key;
        }

      
        
    },
    actions:{
        

        LoginActions(context,payload){
            return new Promise((resolve,reject)=>{
                axios.post('https://api.drvenkysanimalhospital.com/api/login', payload).
                then(res=>{
                    context.commit('LoginKey',res.data);
                    resolve(res.data);
                }).catch(error=>{
                    reject(error)
                });

            });

        },











        changeNameAction(context,payload){
          
            return new Promise((resolve)=>{
                    context.commit('ChangeName',payload)
                    resolve("Complete");
            });
            
            // context.commit('ChangeName',payload);

        },

        LoginSubmit(context,payload){

            // console.log(payload);
            return new Promise((resolve,reject)=>{
             
             
                axios.post('https://api.drvenkysanimalhospital.com/api/login', payload)
                .then(res=>{
                    context.commit('LoginApi',res.data);
                    resolve(res.data);
                }).catch(error => {
                    reject(error.response ? error.response.data : 'Login failed');
                });  
             
                // context.commit('LoginApi',payload);
            });
        },
        logoutsubmit(context){
            context.commit('logout');

        }
        

    },
    plugins: [createPersistedState()] 






});