<template>
    <div>
        <Header></Header>
        <my-profile-body :userList="userList" :followerList="followerList" :followList="followList" :postList="postList"></my-profile-body>
        <post-body :postList="postList"></post-body>
    </div>
</template>

<script>
    import MyProfileBody from '@/components/MyProfileBody'
    import Header from '@/components/Header'
    import PostBody from '@/components/PostBody'

    export default {
        name: "Profile",
        data() {
            return {
                userList: {},
                followerList: [],
                followList: [],
                postList: [],
                name:JSON.parse(localStorage.getItem('name'))
            }
        },
        mounted() {
            // var userid = name.userId
            console.log("hi"+this.name.userId);
            fetch("http://10.177.7.124:8081/userProfile/getUser/" + this.name.userId).then(response => {
                return response.json();
            }).then(data => {
                // Work with JSON data here
                
                console.log(data);
                this.userList = data;
                console.log("hii"+this.userList);

            }).catch(err => {
                console.log(err)
            });
            fetch("http://10.177.7.124:8081/follow/getFollowerDetails/" + this.name.userId).then(response => {
                return response.json();
            }).then(data => {
                // Work with JSON data here

                console.log(data);
                this.followerList = data;

            }).catch(err => {
                console.log(err)
            });
            fetch("http://10.177.7.124:8081/follow/getFollowDetails/" + this.name.userId).then(response => {
                return response.json();
            }).then(data => {
                // Work with JSON data here

                console.log(data);
                this.followList = data;

            }).catch(err => {
                console.log(err)
            });
            fetch("http://10.177.7.137:8080/post/findByUserId/" + this.name.userId).then(response => {
                return response.json();
            }).then(data => {
                // Work with JSON data here

                console.log(data);
                this.postList = data.postList;

            }).catch(err => {
                console.log(err)
            });
        },
        components: {
            Header,
            MyProfileBody,
            PostBody
        }
    }
</script>