<template>
  <div class="body">
    <div v-for="(post,index) in postList" v-bind:key="index">
      <b-container class="text-center" v-if="post.type=='image'||post.type=='Image'">
        <b-card border-variant="primary" :img-src="post.url" img-alt="Image" img-top tag="article"
          header-border-variant="primary" style="max-width: 40rem" class="mx-auto">
          <p class="card-text">{{post.description}}<b-button @click="del(post.postId,index)" style="float:right;"><i
                class="fas fa-trash-alt"></i></b-button>
          </p>
          <b-dd-divider></b-dd-divider>
          <b-row>
            <b-col>
              <b-button @click="like" variant="primary">Like
                {{post.postLikes.length}}&nbsp;<i class="fas fa-thumbs-up"></i>
              </b-button>
            </b-col>

            <b-col>
              <b-button @click="comment" variant="primary">Comment
                <i class="fas fa-comment-dots"></i>
              </b-button>
            </b-col>
            <b-col class="invisible" id="comment">
                <div v-for="(comment,index) in post.postsComments" v-bind:key="index">
                 <p> {{comment}}</p><br>
                </div>
                </b-col>
          </b-row>
        </b-card>
      </b-container>

      <b-container class="text-center" v-else-if="post.type=='text'|| post.type=='Text'">
          <b-card
          border-variant="primary"
          tag="article"
          header-border-variant="primary"
          style="max-width: 40rem"
          class="mx-auto"
        >
          <p>{{post.description}}<b-button @click="del(post.postId,index)" style="float:right;"><i
                class="fas fa-trash-alt"></i></b-button>
          </p>
          <b-dd-divider></b-dd-divider>
          <b-row>
            <b-col>
              <b-button @click="like" variant="primary">Like
                  {{post.postLikes.length}}&nbsp;<i class="fas fa-thumbs-up"></i>
              </b-button>
            </b-col>

            <b-col>
              <b-button @click="comment" variant="primary">Comment
                <i class="fas fa-comment-dots"></i>
              </b-button>
            </b-col>
            <b-col class="invisible" id="comment">
            <div v-for="(comment,index) in post.postsComments" v-bind:key="index">
             <p> {{comment}}</p><br>
            </div>
            </b-col>
          </b-row>
        </b-card>
      </b-container>
      <b-container class="text-center" v-else>
        <b-card border-variant="primary" tag="article" header-border-variant="primary" style="max-width: 40rem" class="mx-auto">
          <b-embed type="iframe" aspect="16by9" :src="post.url" allowfullscreen></b-embed>
          <p class="card-text">{{post.description}}<b-button @click="del(post.postId,index)" style="float:right;"><i
                class="fas fa-trash-alt"></i></b-button>
          </p>
          <b-dd-divider></b-dd-divider>
          <b-row>
            <b-col>
              <b-button @click="like" variant="primary">Like
                  {{post.postLikes.length}}&nbsp;<i class="fas fa-thumbs-up"></i>
              </b-button>
            </b-col>

            <b-col>
              <b-button @click="comment"variant="primary">Comment
                <i class="fas fa-comment-dots"></i>
              </b-button>
            </b-col>
            <b-col class="invisible" id="comment">
                <div v-for="(comment,index) in post.postsComments" v-bind:key="index">
                 <p> {{comment}}</p><br>
                </div>
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
    name: "PostBody",
    props: {
      postList: {
        type: Array,
        required: true
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
      del(postid, index) {
        console.log(postid);
        fetch("http://10.177.7.137:8080/post/deletePost/" + postid, {
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