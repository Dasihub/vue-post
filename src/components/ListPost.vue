<template>
	<app-loader v-if="loader" />
	<div v-if="posts.length" class="post" v-for="(post, index) in posts" :key="post.id">
		<div>{{ ++index }}</div>
		<div :style="{ 'text-decoration': post.completed ? 'line-through' : '' }">
			<router-link :to="{ path: `/${post.id}` }">
				{{ post.title }}
			</router-link>
		</div>
		<div class="post__btns">
			<input @click="$emit('updatePost', post.id)" v-model="post.completed" type="checkbox" />
			<button @click="$emit('deletePost', post.id)">&times;</button>
		</div>
	</div>
	<h3 v-else class="no_post">Пока нет постов!</h3>
</template>

<script>
export default {
	name: 'list-post',
	emits: ['updatePost'],
	props: {
		posts: {
			type: Array,
			required: true
		},
		loader: Boolean
	}
}
</script>

<style scoped>
.post {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
	color: white;
	font-size: 18px;
	border: 1px solid white;
	margin: 20px auto 0 auto;
	padding: 10px;
	width: 400px;
	border-radius: 10px;
}

.post__btns {
	display: flex;
	align-items: center;
	gap: 10px;
}

.post__btns input {
	width: 16px;
	height: 16px;
	cursor: pointer;
	accent-color: lime;
}

.post__btns button {
	width: 20px;
	height: 20px;
	background-color: red;
	color: black;
	border: none;
	border-radius: 3px;
	font-size: 18px;
	cursor: pointer;
	user-select: none;
}

.no_post {
	text-align: center;
	color: white;
	margin-top: 20px;
}
</style>
