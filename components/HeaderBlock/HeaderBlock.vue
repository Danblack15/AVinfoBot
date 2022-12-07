<template>
	<header class="header">
		<img :src="logo" alt="logo" class="header__logo" />
	</header>
</template>

<script>
export default {
	data() {
		return {
			logo: require('@/assets/svg/logo.svg')
		}
	}
}
</script>

<style lang="scss" scoped>
@import './HeaderBlock.scss';
</style>