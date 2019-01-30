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
    name : "Profile",
    data(){
        return {
            userList:{},
            followerList:[],
            followList:[],
            postList:[]
        }
    },
    mounted(){
        var userid="2";
        fetch("https://userprofilemicroservice.herokuapp.com/userProfile/getUser/"+userid).then(response => {
			  return response.json();
			}).then(data => {
			  // Work with JSON data here
		  	
          console.log(data);
          this.userList = data;
          
			}).catch(err => {console.log(err)
            });
            fetch("https://userprofilemicroservice.herokuapp.com/follow/getFollowerDetails/"+userid).then(response => {
			  return response.json();
			}).then(data => {
			  // Work with JSON data here
		  	
          console.log(data);
          this.followerList = data;
          
			}).catch(err => {console.log(err)
            });
            fetch("https://userprofilemicroservice.herokuapp.com/follow/getFollowDetails/"+userid).then(response => {
			  return response.json();
			}).then(data => {
			  // Work with JSON data here
		  	
          console.log(data);
          this.followList = data;
          
			}).catch(err => {console.log(err)
			});	
			 fetch("http://10.177.7.137:8080/post/findByUserId/"+userid).then(response => {
			  return response.json();
			}).then(data => {
			  // Work with JSON data here
		  	
          console.log(data);
          this.postList = data.postList;
          
			}).catch(err => {console.log(err)
			});	
    },
    components : { 
    Header,
    MyProfileBody,
    PostBody
    }
}
</script>
