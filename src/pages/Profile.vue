<template>
    <div>
    <Header></Header>
    <my-profile-body></my-profile-body>
    </div>
</template>


<script>
import MyProfileBody from '@/components/MyProfileBody'
import Header from '@/components/Header'

export default {
    name : "Profile",
    components : { 
    Header,
    MyProfileBody
    }
}
</script>
