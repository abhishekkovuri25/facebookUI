<template>
    <div style="margin-top:7%;">
        <b-card style="max-width: 60rem;border:4px solid #D1CACA;" class="mx-auto ">
            <b-img rounded="circle" Style="height:100px; width:100px" thumbnail fluid :src="userList.userImageURL" />


            <b-row>
                <b-col>
                    <p class="float-center">Name: {{userList.username}}<br>About:{{userList.about}}<br>Interests:
                        {{userList.interest}}
                    </p>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-dd-divider></b-dd-divider>
                    <div v-if="followerList"> 
                    <b-button variant="primary" @click="follow()">Follow</b-button>
                    </div>
                    <b-dd-divider></b-dd-divider>
                    <b-row>
                        <b-col>Posts <span class="badge badge-light">{{postList.length}}</span></b-col>
                        <b-col>Followers <span class="badge badge-light">{{followList.length}}</span></b-col>
                        <b-col>Following <span class="badge badge-light">{{followerList.length}}</span></b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-card>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: "OthersProfileBody",
        data:{
            return :{
                name:JSON.parse(localStorage.getItem('name'))
            }
        },
        props: {
            userList: Object,
            followList: Array,
            followerList: Array,
            postList: Array
        },
        methods: {
            follow() {
                var id=JSON.parse(localStorage.getItem('name')).userId;
                console.log("dsafdofhidhfid");
                console.log(id +this.userList.userId);
                fetch("http://10.177.7.124:8081/follow/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ userId:id , followerId: this.userList.userId})
                })
                    .then(function (res) {
                        alert("You are following");
                    })
                    .then(function (data) { })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style>

</style>