<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle">changeTitle</button>
        <hr>
        <input type="text" v-model="searchItem">
        <div v-for="post in filteredPosts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <h2>{{ post.body | snippet}}</h2>

        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
    
        name: 'Blogs',
        data() {
            return {
                blogTitle: 'Blogs',
                searchItem: '',
                posts: [

                ],
            }
        },
        methods: {
            changeTitle() {
                this.blogTitle = 'Amazing Blog Site'
            },

        },
        computed: {
            filteredPosts() {
                return this.posts.filter(post => {
                    return post.title.match(this.searchItem)
                })
            }
        },
        created() {
            axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(Response => {
                console.log(Response)
                this.posts = Response.data
            }).catch(err => {
                console.log(err )
            })
        }
    }
</script>