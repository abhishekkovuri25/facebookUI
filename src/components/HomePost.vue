<template>
    <div class="row">
        <div class="col-md-3">
            <h1>Followers</h1>
            <div v-for="(follow,index) in followList" v-bind:key="index">
                <router-link :to="'/othersprofile/'+follow.userId">{{follow.userImageURL}}</router-link>
                <br />
            </div>
        </div>
        <!-- <div class='col-md-3'></div> -->
        <div class="col-md-6 body">
            <div v-for="Post in posts" :key="Post">
                <b-container class="text-center" v-if="Post.post.type=='image'|| Post.post.type=='Image'">
                    <b-card border-variant="primary" :img-src="Post.post.url" img-alt="Image" img-top tag="article"
                        header-border-variant="primary" style="max-width: 40rem;" class="mx-auto">
                        <!-- <img :src="Post.post.url"></img> -->
                        <h4 class="float-left">{{Post.image}}</h4>
                        <!-- <b-dd-divider></b-dd-divider> -->
                        <br>
                        <p class="card-text">{{Post.post.description}}</p>

                        <b-dd-divider></b-dd-divider>
                        <b-row>
                            <b-col>
                                <b-button v-on:click="like(Post.post.postId)" variant="primary">Like
                                    {{Post.post.postlikes.length}}<i class="fas fa-thumbs-up"></i>
                                </b-button>
                            </b-col>
                            <!-- <b-col v-else>
            <b-button @click="dislike" variant="primary">Like
              <i class="far fa-thumbs-down"></i>
            </b-button>
          </b-col> -->
                            <b-col>
                                <button v-bind:value="Post.post.postId" v-on:click="comment(Post.post)" class="btn btn-primary">Comment
                                    <i class="fas fa-comment-dots"></i>
                                </button>
                            </b-col>
                            <b-col>
                                <b-button variant="primary" v-on:click="share(Post.post.postId)">Share
                                    <i class="fas fa-share-alt"></i>
                                </b-button>
                            </b-col>
                        </b-row>
                        <div id="comment">
                            <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your comment"
                                v-model="comment"></b-form-input>
                            <b-button class="btn btn-primary btn-lg pull-right" v-on:click="postComment(Post.post.postId)">Post</b-button>
                        </div>
                        <div v-for="postComments in Post.post.postsComments" :key="postComments">
                            <p>{{postComments.username}}: &nbsp;{{postComments.description}}</p>
                        </div>
                    </b-card>
                </b-container>
                <!--video starting-->
                <b-container class="text-center" v-if="Post.post.type=='video'">
                    <b-card border-variant="primary" header-border-variant="primary" style="max-width: 40rem" class="mx-auto">
                        <b-embed type="iframe" aspect="16by9" :src="Post.post.url" allowfullscreen></b-embed>
                        <!-- <img :src="Post.post.url"></img> -->
                        <h4 class="float-left">{{Post.username}}</h4>
                        <!-- <b-dd-divider></b-dd-divider> -->
                        <br>
                        <br>
                        <p class="card-text">{{Post.post.description}}</p>


                        <b-dd-divider></b-dd-divider>
                        <b-row>
                            <b-col>
                                <b-button v-on:click="like(Post.post.postId)" variant="primary">Like
                                        {{Post.post.postlikes.length}}<i class="fas fa-thumbs-up"></i>
                                </b-button>
                            </b-col>
                            <!-- <b-col v-else>
            <b-button @click="dislike" variant="primary">Like
              <i class="far fa-thumbs-down"></i>
            </b-button>
          </b-col> -->
                            <b-col>
                                <button v-bind:value="Post.post.postId" v-on:click="comment(Post.post)" class="btn btn-primary">Comment
                                    <i class="fas fa-comment-dots"></i>
                                </button>
                            </b-col>
                            <b-col>
                                <b-button variant="primary" v-on:click="share(Post.post.postId)">Share
                                    <i class="fas fa-share-alt"></i>
                                </b-button>
                            </b-col>
                        </b-row>
                        <div id="comment">
                            <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your comment"
                                v-model="comment"></b-form-input>
                            <b-button class="btn btn-primary btn-lg pull-right" v-on:click="postComment(Post.post.postId)">Post</b-button>
                        </div>
                        <div v-for="postComments in Post.post.postsComments" :key="postComments">
                            <p>{{postComments.username}}: &nbsp;{{postComments.description}}</p>
                        </div>
                    </b-card>
                </b-container>
                <b-container class="text-center" v-if="Post.post.type=='text'||Post.post.type=='Text'">
                        <b-card border-variant="primary" header-border-variant="primary" style="max-width: 40rem" class="mx-auto">
                            <!-- <img :src="Post.post.url"></img> -->
                            <h4 class="float-left">{{Post.username}}</h4>
                            <!-- <b-dd-divider></b-dd-divider> -->
                            <br>
                            <br>
                            <p class="card-text">{{Post.post.description}}</p>
    
    
                            <b-dd-divider></b-dd-divider>
                            <b-row>
                                <b-col>
                                    <b-button v-on:click="like(Post.post.postId)" variant="primary">Like
                                            {{Post.post.postlikes.length}}<i class="fas fa-thumbs-up"></i>
                                    </b-button>
                                </b-col>
                                <!-- <b-col v-else>
                <b-button @click="dislike" variant="primary">Like
                  <i class="far fa-thumbs-down"></i>
                </b-button>
              </b-col> -->
                                <b-col>
                                    <button v-bind:value="Post.post.postId" v-on:click="comment(Post.post)" class="btn btn-primary">Comment
                                        <i class="fas fa-comment-dots"></i>
                                    </button>
                                </b-col>
                                <b-col>
                                    <b-button variant="primary" v-on:click="share(Post.post.postId)">Share
                                        <i class="fas fa-share-alt"></i>
                                    </b-button>
                                </b-col>
                            </b-row>
                            <div id="comment">
                                <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your comment"
                                    v-model="comment"></b-form-input>
                                <b-button class="btn btn-primary btn-lg pull-right" v-on:click="postComment(Post.post.postId)">Post</b-button>
                            </div>
                            <div v-for="postComments in Post.post.postsComments" :key="postComments">
                                <p>{{postComments.username}}: &nbsp;{{postComments.description}}</p>
                            </div>
                        </b-card>
                    </b-container>
            </div>
        </div>
    </div>
</template>
<style>
    #link {
        padding-left: 70%;
        display: block;

    }

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
    import axios from 'axios'
    export default {
        name: "PostBody",
        data() {
            return {
                counter: 1,
                posts: null,
                commentCounter: 1,
                comment: '',
                followList: [],
                name:JSON.parse(localStorage.getItem('name'))
            };
        },
        mounted() {
            console.log('hello');
            axios.get('http://10.177.7.137:8080/post/userWall/' + this.name.userId)
                .then((response) => {
                    this.posts = response.data.feedsList
                    console.log(this.posts)
                })
                .catch((error) => {
                    console.log(error)
                }),
                fetch("http://10.177.7.124:8081/follow/getFollowDetails/" + this.name.userId).then(response => {
                    return response.json();
                }).then(data => {
                    // Work with JSON data here
                    console.log(data);
                    this.followList = data;

                }).catch(err => {
                    console.log(err)
                });
        },

        methods: {
            like(postid) {
                axios.post('http://10.177.7.137:8080/post/like/1/' + postid)
                    .then(response => {
                        console.log(response);
                        alert("You liked this post");
                    })
            },
            dislike() {
                this.counter = 1;
            },
            postComment(postid) {
                axios.put('http://10.177.7.137:8080/post/addComment/' + postid + '?userId=1&userName=prasad&description=' + this.comment)
                    .then(response => {
                        console.log(response);
                        window.location.reload();
                    })
            },
            share(postid) {
                axios.post('http://10.177.7.137:8080/post/share', {
                    postId: postid,
                    destinationId: "1"
                }).then(response => {
                    console.log(response);
                    alert("you shared this post");
                })
            }
        }
    };
</script>