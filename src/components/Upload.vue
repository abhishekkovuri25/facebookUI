<template>
        <div style="margin-top:7%;">
             <div>
                <b-card
                    tag="article"
                    style="max-width: 40rem;"
                    class="mx-auto">
                    <p class="card-text">
                     IF U WANT TO POST SOMETHIG THEN THIS IS THE RIGHT PLACE TO POST..))
                    </p>
                    <input type="textarea" rows="5" cols="50" @click="showText" placeholder="write something here..">
                    
                    <b-button @click="showImage" variant="primary">
                            Image
                    </b-button>
                    <b-button @click="showVideo" variant="primary">
                            Video
                    </b-button> 
                </b-card>
            </div>
            
            <b-modal ref="myTextRef" hide-footer title="Post Text here">
                    <textarea v-model="message" rows="10" cols="50" placeholder="write something here.."></textarea>
                    <div class="d-block text-center">
                    </div>
                    <b-button variant="outline-primary" v-on:click="postText">Post</b-button>
                    <b-button variant="outline-danger" @click="hideText">Cancel</b-button>
            </b-modal>

          <b-modal ref="myImageRef" hide-footer title="Post Images here">
            <textarea v-model="message" rows="5" cols="50" placeholder="write something here.."></textarea>
            <div class="d-block text-center">
                <div>
                    <label>File
                         <input type="file" id="files" v-on:change="onImageChange" ref="fileName"/>
                    </label>
                    <div id="preview" v-if="url">
                        <img v-if="url" :src="url"/>
                    </div>
                </div>
            </div>
            <b-button variant="outline-primary" v-on:click="postImage">Post</b-button>
            <b-button variant="outline-danger" @click="hideImage">Cancel</b-button>
          </b-modal>

          <b-modal ref="myVideoRef" hide-footer title="Post videos here">
                <textarea v-model="message" rows="5" cols="50" placeholder="write something here.."></textarea>
                <div class="d-block text-center">
                    <div>
                        <label>File
                             <input type="file" id="files" v-on:change="onVideoChange" ref="fileName"/>
                        </label>
                        <div id="preview" v-if="video">
                            <video  :src="video" autoplay></video>
                            <div>
                            <b-button variant="outline-primary" v-on:click="postVideo" >Post</b-button>
                            <b-button variant="outline-danger" @click="hideVideo">Cancel</b-button>
                            </div>
                        </div>
                    </div>
                </div>
              </b-modal>

        </div>
</template>
      <style>
          #preview {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            #preview img {
                max-width: 40%;
                max-height: 200px;
            }
            #preview video{
                width:40%;
              height: 200px;
            }
      </style>
      <script>
          var myImageUrl;
          var myVideoUrl;
          import firebase from "firebase";
    //    import { BASE_URL_POST } from "../config/EndPoints.js";
    //Initialize Firebase
    var config = {
    apiKey: 'AIzaSyBjzJ0BoylWfQlpsl5KFvpqq3u4OLh7u-0',
    authDomain: 'facebook-412df.firebaseapp.com',
    databaseURL: 'https://facebook-412df.firebaseio.com',
    projectId: 'facebook-412df',
    storageBucket: 'facebook-412df.appspot.com',
    messagingSenderId: '990244052470'
  };
  firebase.initializeApp(config);
 console.log("dsdsafbdahgfhda");
// //function to save file

    import axios from 'axios'
      export default {
          data(){
              return{
                  url:'',
                  video:'',
                  text:'',
                  message:'',
                  myImageUrl:"",
                  myVideoUrl:""
              }
          },
        methods: {
            showText(){
                this.$refs.myTextRef.show()
            },
          showImage () {
            this.$refs.myImageRef.show()
          },
          showVideo(){
            this.$refs.myVideoRef.show()
          },
          hideText(){
              this.message=''
            this.$refs.myTextRef.hide()
          },
          hideVideo(){
              this.video=''
            this.$refs.myVideoRef.hide()
          },
          hideImage () {
              this.url=''
            this.$refs.myImageRef.hide()
          },
          onImageChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            //alert(this.url)
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
          },
          onVideoChange(e){
            const file = e.target.files[0];
            this.video = URL.createObjectURL(file);
            //alert(this.video)
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
                    myVideoUrl = downloadURL;
                    //console.log(this.myImageUrl);
            });
            });
          },
          postText(){
              axios.post('http://10.177.7.137:8080/post/add',{
                     userId:"1",
                     url:"null",
                     type:"Text",
                     description:this.message,
                     createdBy:"3",
                     date:"29-1-2019"
              }).then(response =>{
                  console.log(response.data);
              })
          },
          postImage(){
              console.log()
              axios.post('http://10.177.7.137:8080/post/add',{
                     userId:"1",
                     url:myImageUrl,
                     type:"Image",
                     description:this.message,
                     createdBy:"3",
                     date:"29-1-2019"
              }).then(response =>{
                  console.log(response.data);
              })
          },
          postVideo(){
              axios.post('http://10.177.7.137:8080/post/add',{
                     userId:"1",
                     url:myVideoUrl,
                     type:"Video",
                     description:this.message,
                     createdBy:"3",
                     date:"29-1-2019"
              }).then(response =>{
                  console.log(response.data);
              })
          }
        }
      }
      </script>