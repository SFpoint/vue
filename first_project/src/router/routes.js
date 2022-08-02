import ShowBlogs from "../components/ShowBlogs.vue";
import AddBlog from "../components/addBlog.vue";
import singleBlog from "../components/singleBlog.vue";

export default [
  { path: "/home", component: ShowBlogs },
  { path: "/add", component: AddBlog },
  { path: "/blog/:id", component: singleBlog },
];
