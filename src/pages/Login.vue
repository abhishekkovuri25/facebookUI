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
                                <v-text-field prepend-icon="person" name="Username" label="Username" type="email"
                                    v-model="emailId" :rules="emailRules"></v-text-field>
                                <br>
                                <v-text-field prepend-icon="lock" label="Password" name="password" type="password"
                                    v-model="password"></v-text-field>
                                <v-card-actions>
                                    <v-btn primary large block @click="login">Login</v-btn>
                                </v-card-actions>
                            </v-form>
                        </v-card>
                    </v-container>
                    <p id="invalid" style="color:red;"></p>
                </v-flex>
            </v-layout>
            <!-- <p class="a" id="signin">{{displayerror}}</p> -->
        </v-container>
    </div>
</template>
<style>
    .a {
        text-align: center;
        color: red;
    }
</style>

<script>
    import axios from "axios";
    export default {
        name: "Login",
        data() {
            return {
                emailId: "",
                password: "",
                emailRules: [],
                // authId: ""
            };
        },
        watch: {
            emailId: function (mail) {
                // e_Mail is the exact name used in v-model
                if (mail !== "") {
                    this.emailRules = [
                        v =>
                            v.match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            ) || "Invalid Email address"
                    ];
                } else if (mail === "") {
                    this.emailRules = [];
                }
            }
        },
        methods: {
            login() {
                axios
                    .post("http://10.177.7.82:8080/login", {
                        userName: this.emailId,
                        password: this.password
                    })
                    .then(response => {
                        localStorage.setItem("authId", response.data.Authorization);
                        this.$router.push('/home')

                    })
                    .catch(response => {
                        document.getElementById("invalid").innerHTML = "* Unauthorized user credentials";
                    });
                axios
                    .get("http://10.177.7.82:8080/users/getData?userName=" + this.emailId, {
                        headers: {
                            Authorization: localStorage.getItem("authId")
                        }
                    })
                    .then(response => {
                        console.log(response.data);
                        localStorage.setItem("name", JSON.stringify(response.data));
                    })
                    .catch(response => {
                        console.log("error response");
                    });
            }
        }
    };
</script>