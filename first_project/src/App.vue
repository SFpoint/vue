<template>
    <div>
      <app-header></app-header>
      <router-view></router-view>
    </div>
</template>

<script>
import AddBlog from './components/addBlog.vue'
import ShowBlog from './components/ShowBlogs.vue'
import ListBlog from './components/listBlogs.vue'
import header from './components/header.vue';
export default {
  components:{
            'add-blog':AddBlog,
            'show-blog':ShowBlog,
            'list-blog':ListBlog,
            'app-header': header
  },

    data () {
        return {

        }
    },
    
}
</script>

<style>

</style>
