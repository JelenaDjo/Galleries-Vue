<template>
<div class="container">
    <h2> All Galleries</h2>

    <ul v-for="gallery in galleries" :key="gallery.id">
		<li>{{ gallery.id }}</li>
		<li>{{ gallery.name }}</li>
		<li>{{ gallery.description }}</li>
		<li>{{ gallery.user_id }}</li>
	</ul>
    
</div> <!--container -->

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {

    name: 'AllGalleries',
    created(){
        this.getAllGalleries()
    },
    methods: {
        ...mapActions([ 'getAllGalleries' ])
    },
    computed: {
        ...mapGetters({
            galleries: 'getAllGalleries' 
        })
    }


}
</script>

<style>

</style>
