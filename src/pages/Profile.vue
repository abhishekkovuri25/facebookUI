<template>
    <div>
    <Header></Header>
    <my-profile-body></my-profile-body>
    <post-body></post-body>
    </div>
</template>


<script>
import MyProfileBody from '@/components/MyProfileBody'
import Header from '@/components/Header'
import PostBody from '@/components/PostBody'

export default {
    name : "Profile",
    components : { 
    Header,
    MyProfileBody,
    PostBody
    }
}
</script>
