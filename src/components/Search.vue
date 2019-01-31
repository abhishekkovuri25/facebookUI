<template>
<header></header>
<div class="container">
  <div v-for ="item in searchresult" :key="item.username" style="margin-top:7%;">
        <b-card style="max-width: 60rem;border:4px solid #D1CACA;" class="mx-auto ">
            <b-row>
                    <div class="col-md-6">
                      <img :src="item.userImageURL" style="width: 30%; border-radius: 50%;border:2px solid black" />
                    </div>
                    <div class="col-md-6" style="text-align: left;">
                      <div>
                        <p> <b> </b>{{item.username}}</p>
                      </div>
                      <div>
                        <router-link :to="'/othersprofile/'+item.userId" class="btn btn-info">View Profile</router-link>
                      </div>
                    </div>
                </b-row>
        </b-card>
    </div>
</div>

</template>


<script>
export default {

  data(){
    return {
      searchresult:null
    }
  },
  mounted(){
    axios.get('http://10.177.7.124:8081/userProfile/getByUserName?username='+this.$route.params.qname)
    .then((response) => {
      console.log(":fdafkdahfidajfpjdapfuda");
      console.log(response);
      this.searchresult=response.data;
      // if(this.searchresult.length==0){
      //   document.getElementById("status").innerHTML="There are no results"
      // }
            })
        .catch(response => {
         alert("dsf");
        })
    }
  }

</script>