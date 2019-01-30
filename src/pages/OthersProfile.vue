<template>
    <div>
    <Header></Header>
    <others-profile-body></others-profile-body>
    </div>
</template>


<script>
import OthersProfileBody from '@/components/OthersProfileBody'
import Header from '@/components/Header'

export default {
    name : "OthersProfile",
    components : { 
    Header,
    OthersProfileBody
    }
}
</script>
