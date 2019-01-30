<template>
<div>
<!-- <b-navbar toggleable="md" type="dark" variant="info">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand>Facebook</b-navbar-brand>
  <b-collapse>
    <b-navbar-nav>
  <b-nav-form>
      <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
      <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
  </b-nav-form>
  <b-nav-item>Durgaprasad</b-nav-item>
  <b-nav-item>Notifications</b-nav-item>
  <b-nav-item>logout</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar> -->
<b-navbar toggleable="md" type="dark" variant="primary" fixed="top">

<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

<b-navbar-brand href="#">facebook</b-navbar-brand>

<b-collapse is-nav id="nav_collapse">
  <b-navbar-nav class="ml-auto">

    <b-nav-form>
      <b-form-input size="md" class="mr-md-12" type="text" placeholder="Search"/>
      <b-button size="md" class="my-2 my-md-6" type="submit">Search</b-button>
    </b-nav-form>
    <b-nav-item>Durgaprasad</b-nav-item>
    <b-nav-item>Notifications <b-badge variant="light">
  0<span class="sr-only">unread messages</span>
  </b-badge></b-nav-item>
    <b-nav-item>logout</b-nav-item>
  </b-navbar-nav>

</b-collapse>
</b-navbar>
</div>
</template>
