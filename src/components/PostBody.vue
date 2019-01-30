<template>
<div class="body" >
  <div v-for="(post,index) in postList" v-bind:key="index">
  <b-container class="text-center" v-if="post.type=='image'||post.type=='Image'">
    <b-card
      border-variant="primary"
      :img-src="post.url"
      img-alt="Image"
      img-top
      tag="article"
      header-border-variant="primary"
      style="max-width: 40rem"
      class="mx-auto"
    >
      <p
        class="card-text"
      >{{post.description}}<b-button  @click="del(post.postId,index)"  style="float:right;" ><i  class="fas fa-trash-alt"></i></b-button></p>
      <b-dd-divider></b-dd-divider>
      <b-row>
        <b-col>
          <b-button @click="like" variant="primary">Like
            <i class="fas fa-thumbs-up"></i>
          </b-button>
        </b-col>
        
        <b-col>
          <b-button @click="comment" variant="primary">Comment
            <i class="fas fa-comment-dots"></i>
          </b-button>
        </b-col>
        <b-col>
          <b-button href="#" variant="primary">Share
            <i class="fas fa-share-alt"></i>
          </b-button>
        </b-col>
      </b-row>
      <div class="invisible" id="comment">
        <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your comment"></b-form-input>
        <b-button class="btn btn-primary btn-lg pull-right">Post</b-button>
      </div>
    </b-card>
  </b-container>
  
  <b-container class="text-center" v-else-if="post.type=='text'">
    <b-card
      border-variant="primary"
      tag="article"
      header-border-variant="primary"
      style="max-width: 40rem"
      class="mx-auto"
    >
      <p
        class="card-text"
      >{{post.description}}<b-button  @click="del(post.postId,index)"  style="float:right;" ><i  class="fas fa-trash-alt"></i></b-button></p>
      <b-dd-divider></b-dd-divider>
      <b-row>
        <b-col>
          <b-button @click="like" variant="primary">Like
            <i class="fas fa-thumbs-up"></i>
          </b-button>
        </b-col>
        
        <b-col>
          <b-button variant="primary">Comment
            <i class="fas fa-comment-dots"></i>
          </b-button>
        </b-col>
        <b-col>
          <b-button href="#" variant="primary">Share
            <i class="fas fa-share-alt"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
  <b-container class="text-center" v-else>
    <b-card
      border-variant="primary"
      tag="article"
      header-border-variant="primary"
      style="max-width: 40rem"
      class="mx-auto"
    >
      <b-embed type="iframe"
           aspect="16by9"
           :src="post.url"
           allowfullscreen
      ></b-embed>
      <p
        class="card-text"
      >{{post.description}}<b-button  @click="del(post.postId,index)"  style="float:right;" ><i  class="fas fa-trash-alt"></i></b-button></p>
      <b-dd-divider></b-dd-divider>
      <b-row>
        <b-col>
          <b-button @click="like" variant="primary">Like
            <i class="fas fa-thumbs-up"></i>
          </b-button>
        </b-col>
        
        <b-col>
          <b-button variant="primary">Comment
            <i class="fas fa-comment-dots"></i>
          </b-button>
        </b-col>
        <b-col>
          <b-button href="#" variant="primary">Share
            <i class="fas fa-share-alt"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
  </div>
</div>
</template>
<style>
.card-text {
text-align: left;
}
.body {
background-image: "";
}
.invisible {
display: none;
}
</style>
<script>
export default {
name:"PostBody",
props: {
  postList:{
    type:Array,
    required:true
  }
},
data() {
  return {
    
  }
},
methods: {
  comment() {
    document.getElementById("comment").classList.remove("invisible");
  },
  del(postid,index){
    console.log(postid);
    fetch("http://10.177.7.137:8080/post/deletePost/"+postid, {
        method: "DELETE"
      }).then(response => response.json());
      this.postList.splice(index, 1);
  },
  like() {
    this.counter = 0;
  },
  dislike() {
    this.counter = 1;
  }
}
};
</script>
