<template>
    <div>
    <Header></Header>
    <upload></upload>
    <home-post></home-post>
    </div>
</template>


<script>
import HomePost from '@/components/HomePost'
import Upload from '@/components/Upload'
import Header from '@/components/Header'

export default {
    name : "Home",
    components : { 
    Header,
    Upload,
    HomePost
    }
}
</script>
