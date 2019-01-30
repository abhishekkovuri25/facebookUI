<template>
<div style="margin-top:7%;">
 <b-card
         style="max-width: 60rem;border:4px solid #D1CACA;"
         class="mx-auto ">
 <b-img rounded="circle" thumbnail fluid src="https://picsum.photos/250/250/?image=54"/>


    <b-row>
        <b-col>
  <p class="float-center">Name:<br>
     Number:</p>
        </b-col>
    </b-row>
        <b-row>
        <b-col>
            <b-dd-divider></b-dd-divider>
   <b-button  variant="primary" @click="follow">Follow</b-button>
   <b-dd-divider></b-dd-divider>
    <b-row>
       <b-col>Posts <span class="badge badge-light">0</span></b-col>
        <b-col>Followers <span class="badge badge-light">0</span></b-col>
         <b-col>Following <span class="badge badge-light">0</span></b-col>
   </b-row>
        </b-col>
    </b-row>
 </b-card>
</div>

</template>

<script>
import axios from 'axios'
export default {
      name:"OthersProfileBody",
      
      methods:{
          follow(){
              fetch("http://10.177.7.124:8081/follow/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({userId:"2",followerId:"5"})
            })
              .then(function(res) {
                alert("You will be notified when product is available");
              })
              .then(function(data) {})
          .catch(function(error) {
            console.log(error);
          });
      }
    }
}
</script>

<style>

</style>
