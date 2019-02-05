<template>
    <div class="row">
        <div class="col-md-3" style="border:2px solid black; display:block; border-bottom-style: none;">
            <h1>Followers</h1><p>{{followerList.length}}</p>
            <div v-for="(follow,index) in followerList" v-bind:key="index">
                <router-link :to="'/othersprofile/'+follow.userId">{{follow.username}}</router-link>
                <br />
            </div>
             <h1>Following</h1>
            <div v-for="(follow,index) in followList" v-bind:key="index">
                <b-img rounded="circle" :src="follow.userImageURL" height="30" width="30"></b-img>
                <router-link :to="'/othersprofile/'+follow.userId">{{follow.username}}</router-link>
                <br />
            </div>
        </div>
        <!-- <div class='col-md-3'></div> -->
        <div class="col-md-6 body">
            <div v-for="(Post,index) in posts" v-bind:key="index">
                <b-container class="text-center" v-if="Post.post.type=='image'|| Post.post.type=='Image'">
                    <b-card border-variant="primary" :img-src="Post.post.url" img-alt="Image" img-top tag="article"
                        header-border-variant="primary" style="max-width: 40rem;" class="mx-auto">
                        <!-- <img :src="Post.post.url"></img> -->
                        <!-- <b-dd-divider></b-dd-divider> -->
                        <h4 class="float-left"><b-img rounded="circle" :src="Post.image" width="30" height="30"></b-img>{{Post.username}}</h4>
                        <br>
                        <br>
                        <p class="card-text">{{Post.post.description}}</p>

                        <b-dd-divider></b-dd-divider>
                        <b-row>
                            <b-col>
                                <b-button v-on:click="like(Post.post.postId)" variant="primary">Like
                                    {{Post.post.postLikes.length}}<i class="fas fa-thumbs-up"></i>
                                </b-button>
                            </b-col>
                            <!-- <b-col v-else>
            <b-button @click="dislike" variant="primary">Like
              <i class="far fa-thumbs-down"></i>
            </b-button>
          </b-col> -->
                            <b-col>
                                <button v-bind:value="Post.post.postId" v-on:click="comment(Post.post.postId)" class="btn btn-primary">Comment
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
                <b-container class="text-center" v-if="Post.post.type=='video'||Post.post.type=='Video'">
                    <b-card border-variant="primary" header-border-variant="primary" style="max-width: 40rem" class="mx-auto">
                        <b-embed type="iframe" aspect="16by9" :src="Post.post.url" allowfullscreen></b-embed>
                        <!-- <img :src="Post.post.url"></img> -->
                        <h4 class="float-left"><b-img rounded="circle" :src="Post.image" width="30" height="30"></b-img>{{Post.username}}</h4>
                        <!-- <b-dd-divider></b-dd-divider> -->
                        <br>
                        <br>
                        <p class="card-text">{{Post.post.description}}</p>


                        <b-dd-divider></b-dd-divider>
                        <b-row>
                            <b-col>
                                <b-button v-on:click="like(Post.post.postId)" variant="primary">Like
                                        {{Post.post.postLikes.length}}<i class="fas fa-thumbs-up"></i>
                                </b-button>
                            </b-col>
                            <!-- <b-col v-else>
            <b-button @click="dislike" variant="primary">Like
              <i class="far fa-thumbs-down"></i>
            </b-button>
          </b-col> -->
                            <b-col>
                                <button v-bind:value="Post.post.postId" v-on:click="comment(Post.post.postId)" class="btn btn-primary">Comment
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
                            <h4 class="float-left"><b-img rounded="circle" :src="Post.image" width="30" height="30"></b-img>{{Post.username}}</h4>
                            <!-- <b-dd-divider></b-dd-divider> -->
                            <br>
                            <br>
                            <p class="card-text">{{Post.post.description}}</p>
    
    
                            <b-dd-divider></b-dd-divider>
                            <b-row>
                                <b-col>
                                    <b-button v-on:click="like(Post.post.postId)" variant="primary">Like
                                            {{Post.post.postLikes.length}}<i class="fas fa-thumbs-up"></i>
                                    </b-button>
                                </b-col>
                                <!-- <b-col v-else>
                <b-button @click="dislike" variant="primary">Like
                  <i class="far fa-thumbs-down"></i>
                </b-button>
              </b-col> -->
                                <b-col>
                                    <button v-bind:value="Post.post.postId" v-on:click="comment(Post.post.postId)" class="btn btn-primary">Comment
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
        <div class="col-md-3" style="border: 2px solid black;  border-bottom-style: none;">
                <!-- <h1>Following</h1>
            <div v-for="(follow,index) in followList" v-bind:key="index">
                <router-link :to="'/othersprofile/'+follow.userId">{{follow.username}}</router-link>
                <br />
            </div> -->
            <h1>Advertisements</h1>
            <div v-for="(advertList,index) in advert" v-bind:key="index">
                <p>{{advertList.advertisementName}}<br>{{advertList.advertisementDescription}}</p>
                <b-img  :src="advertList.imageURL" width="200%"></b-img>
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
                followerList: [],
                name:JSON.parse(localStorage.getItem('name')),
                advert:[]
            };
        },
        mounted() {
            console.log('hello'+this.name.userId);
            axios.get('http://10.177.7.137:8080/post/userWall/' + this.name.userId)
                .then((response) => {
                    this.posts = response.data.feedsList
                    console.log(this.posts)
                })
                .catch((error) => {
                    console.log(error)
                }),
                fetch("http://10.177.7.124:8081/follow/getFollowerDetails/" + this.name.userId).then(response => {
                    return response.json();
                }).then(data => {
                    // Work with JSON data here
                    console.log(data);
                    this.followerList = data;

                }).catch(err => {
                    console.log(err)
                });
                fetch("http://10.177.7.124:8081/follow/getFollowDetails/" + this.name.userId).then(response => {
                    return response.json();
                }).then(data => {
                    // Work with JSON data here
                    console.log(data);
                    this.followList = data;

                }).catch(err => {
                    console.log(err)
                });
                fetch("http://10.177.7.88:10000/advertisement/bulk/" + this.name.userId+"/10").then(response => {
                    return response.json();
                }).then(data => {
                    // Work with JSON data here
                    console.log(data.response);
                    this.advert = data.response;

                }).catch(err => {
                    console.log(err)
                })
        },

        methods: {
            like(postid) {
                axios.post('http://10.177.7.137:8080/post/like/'+ postid+'/' +this.name.userId)
                    .then(response => {
                        console.log(response);
                        window.location.reload();
                        alert("You liked this post");
                    }).catch(err => {
                    console.log(err)
                });
            },
            dislike() {
                this.counter = 1;
            },
            postComment(postid) {
                axios.put('http://10.177.7.137:8080/post/addComment/' + postid + '?userId='+this.name.userId+'&userName='+this.name.name+'&description=' + this.comment+'&userImage=""')
                    .then(response => {
                        console.log(response);
                        window.location.reload();
                    }).catch(err => {
                    console.log(err)
                });
                  
            },
            share(postid) {
                axios.post('http://10.177.7.137:8080/post/share', {
                    postId: postid,
                    destinationId: this.name.userId
                }).then(response => {
                    console.log(response);
                    alert("you shared this post");
                    window.location.reload();
                }).catch(err => {
                    console.log(err)
                });
            }
        }
    };
</script>