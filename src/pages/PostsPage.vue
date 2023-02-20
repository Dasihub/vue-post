<template>
	<div>
		<form-post @createPost="createPost" />
		<list-post :loader="loader" :posts="posts" @updatePost="updatePost" @deletePost="deletePost" />
	</div>
</template>

<script>
export default {
	name: 'post-page',
	data() {
		return {
			posts: [],
			loader: false
		}
	},
	methods: {
		createPost(title) {
			this.posts.push({ id: Date.now(), title, completed: false })
		},
		updatePost(id) {
			this.posts = this.posts.map(post => (post.id === id ? { ...post, completed: !post.completed } : post))
		},
		deletePost(id) {
			this.posts = this.posts.filter(post => post.id !== id)
		},
		async getPosts() {
			try {
				this.loader = true
				const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
				const data = await res.json()
				this.posts = data
				this.loader = false
			} catch (e) {
				console.log(e)
			}
		}
	},
	mounted() {
		this.getPosts()
	}
}
</script>

<style scoped></style>
