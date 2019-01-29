<template>
<div>
 <b-card

         style="max-width: 60rem;border: solid"
         class="mx-auto ">
         <b-row>
         <b-col>
     <b-img rounded="circle" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />



   </b-col>

   <b-col>
   <p class="float-left">Name:<br>
     Number:</p>
   <br>
   <b-button  @click="myfunction">Edit profile</b-button>
   </b-col>
   </b-row>
   <div class="invisible" id="image">
   <div class="container" style="padding:2%;">
      <h2>Edit Profile</h2>

      <div class="form-group">
        <label for="Interests">Interests:</label>
        <input
          type="Interests"
          class="form-control"
          id="Interests"
          v-model="Interests"
          placeholder="Enter Interests"
          name="Interests"
        >
      </div>
      <div class="form-group">
        <label for="DOB">DOB</label>
        <br>
        <input
          type="DOB"
          placeholder="Enter DOB"
          name="DOB"
          class="form-control"
          v-model="DOB"
          id="DOB"
          rows="3"
        >
      </div>
      <div class="form-group">
      <input type="file">
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
   methods:{
       myfunction (){
           document.getElementById("image").classList.remove("invisible");
       },
       myFunction1 (){
           document.getElementById("image").classList.add("invisible");
       }
   }
}
</script>

<style>
.invisible {
 display: none;
}
</style>
