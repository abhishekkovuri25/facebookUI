<template>
        <div style="margin-top:7%;">
             <div>
                <b-card
                    tag="article"
                    style="max-width: 40rem;"
                    class="mx-auto">
                    <input type="textarea" placeholder="write something here..">
                    <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <b-button @click="showImage" variant="primary">
                            Image
                    </b-button>
                    <b-button @click="showVideo" variant="primary">
                            Video
                    </b-button> 
                </b-card>
            </div>
            <!-- <div>
                <b-button @click="showModal">
                    Post Something
                </b-button>
            </div> -->
          <b-modal ref="myImageRef" hide-footer title="Post Images here">
            <div class="d-block text-center">
                <div>
                    <label>File
                         <input type="file" id="file" v-on:change="onImageChange" ref="fileName"/>
                    </label>
                    <div id="preview">
                        <img v-if="url" :src="url"/>
                    </div>
                </div>
            </div>
            <b-button variant="outline-primary">Post</b-button>
            <b-button variant="outline-danger" @click="hideImage">Cancel</b-button>
          </b-modal>

          <b-modal ref="myVideoRef" hide-footer title="Post videos here">
                <div class="d-block text-center">
                    <div>
                        <label>File
                             <input type="file" id="file" v-on:change="onVideoChange" ref="fileName"/>
                        </label>
                        <div id="preview" v-if="video">
                            <video v-if="video" :src="video" autoplay></video>
                            <div>
                            <b-button variant="outline-primary" >Post</b-button>
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
      export default {
          data(){
              return{
                  url:'',
                  video:''
              }
          },
        methods: {
          showImage () {
            this.$refs.myImageRef.show()
          },
          showVideo(){
            this.$refs.myVideoRef.show()
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
          },
          onVideoChange(e){
            const file = e.target.files[0];
            this.video = URL.createObjectURL(file);
            //alert(this.video)
          }
        }
      }
      </script>