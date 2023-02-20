<template>
	<h1 class="title">Пост с id: {{ $route.params.id }}</h1>
</template>

<script>
export default {
	name: 'post-id'
}
</script>

<style scoped>
.title {
	color: white;
	text-align: center;
}
</style>
