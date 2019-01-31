<template>
    <div>
        <Header></Header>
        <others-profile-body :userList="userList" :followList="followList" :postList="postList" :followerList="followerList"></others-profile-body>
        <post-body :postList="postList"></post-body>
    </div>
</template>


<script>
    import PostBody from '@/components/PostBody'
    import OthersProfileBody from '@/components/OthersProfileBody'
    import Header from '@/components/Header'

    export default {
        name: "OthersProfile",
        components: {
            Header,
            OthersProfileBody,
            PostBody
        },
        data() {
            return {
                userList: {},
                followList: [],
                followerList: [],
                postList: []
            }
        },
        mounted() {
            fetch("http://10.177.7.124:8081/userProfile/getUser/" + this.$route.params.userId).then(response => {
                return response.json();
            }).then(data => {
                // Work with JSON data here

                console.log(data);
                this.userList = data;

            }).catch(err => {
                console.log(err)
            });
            fetch("http://10.177.7.124:8081/follow/getFollowerDetails/" + this.$route.params.userId).then(response => {
                return response.json();
            }).then(data => {
                // Work with JSON data here

                console.log(data);
                this.followerList = data;

            }).catch(err => {
                console.log(err)
            });
            fetch("http://10.177.7.124:8081/follow/getFollowDetails/" + this.$route.params.userId).then(response => {
                return response.json();
            }).then(data => {
                // Work with JSON data here

                console.log(data);
                this.followList = data;

            }).catch(err => {
                console.log(err)
            });
            fetch("http://10.177.7.137:8080/post/findByUserId/" + this.$route.params.userId).then(response => {
                return response.json();
            }).then(data => {
                // Work with JSON data here

                console.log(data);
                this.postList = data.postList;

            }).catch(err => {
                console.log(err)
            });
        }
    }
</script>