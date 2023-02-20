<template>
	<div style="display: flex; justify-content: center">
		<div class="lds-dual-ring"></div>
	</div>
</template>

<script>
export default {
	name: 'app-loader'
}
</script>

<style scoped>
.lds-dual-ring {
	display: inline-block;
	width: 23px;
	height: 23px;
}
.lds-dual-ring:after {
	content: ' ';
	display: block;
	width: 23px;
	height: 23px;
	margin: 8px;
	border-radius: 50%;
	border: 3px solid #fff;
	border-color: #fff transparent #fff transparent;
	animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
