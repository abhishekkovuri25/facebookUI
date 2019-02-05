<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary" fixed="top">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand router-Link to="/home">Scrapbook</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="md" class="mr-md-12" type="text"  placeholder="Search" v-model="query" />
            <b-button size="md" class="my-2 my-md-6"  @click="searchQuery" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item @click="profile">{{name.name}}</b-nav-item>
          <b-nav-item>Notifications <b-badge variant="light">
              0<span class="sr-only">unread messages</span>
            </b-badge>
          </b-nav-item>
          <b-nav-item @click= "logout">logout</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: JSON.parse(localStorage.getItem("name"))
        
      }
    },
    methods: {
      profile: function() {
        this.$router.push(name='profile')
      },
      logout: function() {
        localStorage.clear();
        this.$router.push(name='login');
      },
      searchQuery() {
       this.$router.push({
         name: 'Search',
         params: {
           qname: this.query
         }
      })
    }
  }
}
</script>