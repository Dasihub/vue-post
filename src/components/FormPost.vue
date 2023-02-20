<template>
	<form class="form" @submit.prevent>
		<input @input="value = $event.target.value" :value="value" maxlength="100" />
		<button @click.prevent="createPost">Добавить</button>
	</form>
</template>

<script>
export default {
	name: 'form-post',
	emits: ['createPost'],
	data() {
		return {
			value: ''
		}
	},
	methods: {
		createPost() {
			if (this.value.length) {
				this.$emit('createPost', this.value)
				this.value = ''
			}
		}
	}
}
</script>

<style scoped>
.form {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-top: 20px;
}

.form input {
	width: 300px;
	height: 30px;
	outline-color: lime;
	border-radius: 10px;
	accent-color: lime;
	border: none;
	padding-left: 5px;
}

.form button {
	padding: 0 10px;
	height: 30px;
	background-color: lime;
	border-radius: 10px;
	color: white;
	cursor: pointer;
	border: none;
}
</style>
