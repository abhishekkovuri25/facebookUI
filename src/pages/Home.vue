<template>
    <div>
    <Header></Header>
    <upload></upload>
    <post-body></post-body>
    </div>
</template>


<script>
import PostBody from '@/components/PostBody'
import Upload from '@/components/Upload'
import Header from '@/components/Header'

export default {
    name : "Home",
    components : { 
    Header,
    Upload,
    PostBody
    }
}
</script>
