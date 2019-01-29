<template>
    <div>
    <v-container>
        <v-layout row align-center justify-center class="mt-5">
        <v-flex xs4 class="grey lighten-4">
            <v-container style="position: relative;top: 13%;" class="text-xs-center">
            <v-card flat>
                <v-card-title primary-title>
                <h2>Login</h2>
                </v-card-title>
                <v-form>
                <v-text-field prepend-icon="person" name ="Username" label="Username" type="email" v-model="emailId" :rules="emailRules"></v-text-field><br>
                <v-text-field prepend-icon="lock" label="Password" name="password" type="password" v-model="password"></v-text-field>
                <v-card-actions>
                <v-btn dark primary large block >Login</v-btn>
                </v-card-actions>
                </v-form>
                </v-card>
            </v-container>
        </v-flex>
        </v-layout>
        <!-- <p class="a" id="signin">{{displayerror}}</p> -->
    </v-container>
    </div>
    </template>
    <style>
    .a{
        text-align: center;
        color: red;
    }
    </style>
    
    <script>
    import {mapGetters, mapActions} from 'vuex'
    import axios from 'axios'
    export default {
    name: "Login",
    data () {
        return {
            emailId: "",
            password: "",
            emailRules:[],
        }
    },
    watch: {
        emailId: function (mail) { // e_Mail is the exact name used in v-model
            if (mail !== '') {
                this.emailRules = [ v => (v.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || 'Invalid Email address']
            } else if (mail === '') {
                this.emailRules = []
            }
        }
    },
    methods: {
        Login () {
        // this.postAuthData(this.authDetails)
        // axios.post('http://allstore.herokuapp.com/users/login',
        //   this.authDetails
        this.$store.dispatch('loginMethod',{
            emailId:this.emailId,
            password:this.password
        })
        }
    },
    computed :{
        ...mapGetters(['loginMethod','displayerror'])
    }
    }
    </script>
    