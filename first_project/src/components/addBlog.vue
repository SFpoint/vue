<template>
    <div id="add-blog">
        <h2>add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required/>
            <label>Blog Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
    <label>Ninjas</label>
    <input type="checkbox" value="ninjas" v-model="blog.categories"/>
    <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories"/>
    <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories"/>
    <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories"/>
</div>
<label>Author</label>
<select v-model="blog.author">
    <option v-for="author in authors">{{ author }}</option>
</select>
<button @click.prevent="post"> Add Blog</button>
</form>
<div v-if="submitted">
<h3>Post added</h3>
</div>
        <div id="preview">
            <h3>Prewiev Blog</h3>
            <p>Blog title: {{blog.title}}</p>
            <p>Blog content:{{blog.content}}</p>
            <p> {{blog.content}}</p>
            <p>Blog categories</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>
import { blog } from '../models';

export default {
blog: new blog,
    data () {
        return {
    blog: {},
    authors: ['Thor', 'Iron Man', 'Dare Devil', 'Batman'],
    submitted: false,
        }
    },
                methods: {
    post: function (){
        this.$http.post('https://vue-project-3f835-default-rtdb.europe-west1.firebasedatabase.app/posts.json',this.blog).then(function(data){
            console.log(data);
            this.submitted = true;
        })
    }
}
}
</script>

<style>
#add-blog *{
box-sizing: border-box;
}
#add-blog {
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border:  1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>