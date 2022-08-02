<template>
    <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/> 
    <div v-for="blog in filteredBlogs" class="single-blog">
<router-link :to="/blog/ + blog.id">   
<h2 v-rainbow>{{blog.title |to-uppercase}}</h2>
</router-link>
<p>{{blog.content |snippet}}</p>
    </div>
</div>
</template>

<script>
import searchmixin from '../mixins/searchmixin';


export default {
    data () {
        return {
            blogs: [],
            search:''
        }
    },
    methods: {

    },
    created() {
        this.$http.get('https://vue-project-3f835-default-rtdb.europe-west1.firebasedatabase.app/posts.json').then(function(data){
            return data.json();}).then(function(data){
                var blogsArray =[];
                for (let key in data){
                    data[key].id=key
                    blogsArray.push(data[key]);

                }
            this.blogs = blogsArray;
            })
    },
    computed:{},
    filters:{
        'to-uppercase':function(value){
return value.toUpperCase();
    }
},
directives:{
    'rainbow': {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
}
},
mixins: [searchmixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>