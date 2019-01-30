<template>
<div style="margin-top:7%;">
 <b-card

         style="max-width: 60rem;border:4px solid #D1CACA;"
         class="mx-auto ">
         <b-row>
     <!-- <b-img  v-if="url" :src="url" rounded="circle" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" /> -->
     <div class="col-md-6">
     <img v-if="url" :src="url" style="width: 80%; border-radius: 50%;border:2px solid black"/>
      </div>
      <div class="col-md-6" style="text-align: left;" >
          <div>
            <p> <b> name </b></p>
          </div>
          <div>
            <p> <b> Email: </b>email</p>
          </div>
          <div>
            <p> <b>Phone No: </b> phoneNo</p>
          </div>
          <div>
            <p> <b> Interests:  </b> Interests</p>
          </div>
          <div>
              <p> <b> DOB : </b> DOB </p>
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
      <button @click="myFunction1" id="save" type="submit" class="btn btn-info">Save</button>
    </div>
   </div>
   <b-dd-divider></b-dd-divider>
   <b-row>
       <b-col>Posts <span class="badge badge-light">0</span></b-col>
        <b-col>Followers <span class="badge badge-light">0</span></b-col>
         <b-col>Following <span class="badge badge-light">0</span></b-col>
   </b-row>
 </b-card>
</div>
</template>

<script>
export default {
  name:"MyProfileBody",
  data(){
    return {
      val:0,
      url:''
      
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
       myFunction1 (){
           var x=document.getElementById("image")
           x.style.display="none";
       },
       onImageChange(e){
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file);
        
       }
   }
}
</script>

<style>
.invisible {
 display: none;
}
</style>
