<template>
  <div class="body">
    <router-view></router-view>
    <Header></Header>

    <b-container class="text-center">
      <b-card
        title="Card Title"
        border-variant="primary"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        header-border-variant="primary"
        style="max-width: 40rem"
        class="mx-auto"
      >
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <b-dd-divider></b-dd-divider>
        <b-row>
          <b-col v-if="this.counter==1">
            <b-button @click="like" variant="primary">Like
              <i class="fas fa-thumbs-up"></i>
            </b-button>
          </b-col>
          <b-col v-else>
            <b-button @click="dislike" variant="primary">Like
              <i class="far fa-thumbs-down"></i>
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
    <b-container class="text-center">
      <b-card
        title="Card Title"
        border-variant="primary"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        header-border-variant="primary"
        style="max-width: 40rem"
        class="mx-auto"
      >
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <b-dd-divider></b-dd-divider>
        <b-row>
          <b-col v-if="this.counter==1">
            <b-button @click="like" variant="primary">Like
              <i class="fas fa-thumbs-up"></i>
            </b-button>
          </b-col>
          <b-col v-else>
            <b-button @click="dislike" variant="primary">Like
              <i class="far fa-thumbs-down"></i>
            </b-button>
          </b-col>
          <b-col>
            <b-button href="#" @click="comment" variant="primary">Comment
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
    <b-container class="text-center">
      <b-card
        border-variant="primary"
        tag="article"
        header-border-variant="primary"
        style="max-width: 40rem"
        class="mx-auto"
      >
        <b-embed
          type="iframe"
          aspect="16by9"
          src="http://techslides.com/demos/sample-videos/small.mp4"
          allowfullscreen
        ></b-embed>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <b-dd-divider></b-dd-divider>
        <b-row>
          <b-col v-if="this.counter==1">
            <b-button @click="like" variant="primary">Like
              <i class="fas fa-thumbs-up"></i>
            </b-button>
          </b-col>
          <b-col v-else>
            <b-button @click="dislike" variant="primary">Like
              <i class="far fa-thumbs-down"></i>
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
import Header from "@/components/header";
export default {
  data() {
    return {
      counter: 1
    };
  },
  components: {
    Header
  },
  methods: {
    comment() {
      document.getElementById("comment").classList.remove("invisible");
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
