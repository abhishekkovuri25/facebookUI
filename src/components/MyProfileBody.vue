<template>
<div style="margin-top:7%;">
 <b-card

         style="max-width: 60rem;border:4px solid #D1CACA;"
         class="mx-auto ">
         <b-row>
     <!-- <b-img  v-if="url" :src="url" rounded="circle" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" /> -->
     <div class="col-md-6">
     <img  :src="userList.userImageURL" style="width: 50%; border-radius: 50%;border:2px solid black"/>
      </div>
      <div class="col-md-6" style="text-align: left;" >
          <div>
            <p> <b> {{userList.username}} </b></p>
          </div>
          <div>
            <p> <b> About: </b>{{userList.about}}</p>
          </div>
          <div>
            <p> <b> Interests:  </b> {{userList.interest}}</p>
          </div>
          <div>
              <p> <b> DOB : </b>{{date}}</p>
          </div>
          <div>
            <button class="btn btn-info" @click="myfunction">Edit Profile</button>
          </div>
        </div>
   </b-row>
   <div  id="image" style="display:none;">
   <div class="container" style="padding:2%;">
      <h2>Edit Profile</h2>

      <div class="form-group">
        <label for="Interests">Interests:</label>
        <input
          type="text"
          class="form-control"
          id="Interests"
          v-model="Interests"
          placeholder="Enter Interests"

        >
      </div>
      <div class="form-group">
        <label for="DOB">DOB</label>
        <br>
        <input
          type="date"
          placeholder="Enter DOB"
          class="form-control"
          v-model="DOB"
          id="DOB"
          rows="3"
        >
      </div>
      <div class="form-group">
          <input type="file" id="file" v-on:change="onImageChange" ref="fileName"/>
      </div>
      <button @click="myFunction1(userList.userId,userList.about,userList.username)" id="save" type="submit" class="btn btn-info">Save</button>
    </div>
   </div>
   <b-dd-divider></b-dd-divider>
   <b-row>
       <b-col>Posts <span class="badge badge-light">{{postList.length}}</span></b-col>
        <b-col>Followers <span class="badge badge-light">{{followerList.length}}</span></b-col>
         <b-col>Following <span class="badge badge-light">{{followList.length}}</span></b-col>
   </b-row>
 </b-card>
</div>
</template>

<script>
var myImageUrl;
import firebase from 'firebase';
var config = {
    apiKey: 'AIzaSyBjzJ0BoylWfQlpsl5KFvpqq3u4OLh7u-0',
    authDomain: 'facebook-412df.firebaseapp.com',
    databaseURL: 'https://facebook-412df.firebaseio.com',
    projectId: 'facebook-412df',
    storageBucket: 'facebook-412df.appspot.com',
    messagingSenderId: '990244052470'
  };
  firebase.initializeApp(config);

export default {
  name:"MyProfileBody",
  props: {
    userList:{
      type:Object,
      required:true
    },
    postList:{
        type:Array,
        required:true
    },
    followerList:{
        type:Array,
        required:true
    },
    followList:{
        type:Array,
        required:true
    }
  },
  data(){
    var myImageUrl;
    var date=new Date(this.userList.dateOfBirth);
    return {
      val:0,
      url:'',
      Interests:'',
      DOB:''
      
    }
  },
  
   methods:{
       myfunction (){
        var x = document.getElementById("image");
        if (x.style.display === "none") {
              x.style.display = "block";
        } else {
            x.style.display = "none";
        }
           
       },
       myFunction1 (id,ab,name){
           var x=document.getElementById("image")
           fetch("https://userprofilemicroservice.herokuapp.com/userProfile/updateUser/"+id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userId:id,
              userImageURL:myImageUrl,
              interest:this.Interests,
              dateOfBirth:this.DOB,
              about:ab,
              username:name
            })
          })
            .then(function(res) {
              //console.log(this.userList.about);
              return res.json();
            })
            .then(function(data) {
              window.location.reload();
              });
           x.style.display="none";
       },
       onImageChange(e){
        const file = e.target.files[0];
        this.userList.userImageURL = URL.createObjectURL(file);
        var storage = firebase.storage();
            var storageRef = firebase.storage().ref();
            var uploadTask = storageRef.child(file.name).put(file);
            uploadTask.on('state_changed', function(snapshot){
  
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
            }, function(error) {
            // Handle unsuccessful uploads
            }, function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    
                    console.log(downloadURL);
                    myImageUrl = downloadURL;
                    //console.log(this.myImageUrl);
            });
            });
       }

   }
}
</script>

<style>
.invisible {
 display: none;
}
</style>
