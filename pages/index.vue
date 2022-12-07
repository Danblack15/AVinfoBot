<template>
  <main class="index-page">
    <div class="index-page__general">
      <div class="index-page__general-input">
        <h1 class="index-page__title title">Проверь <span class="bold-text">историю автомобиля</span> перед покупкой</h1>
        <UiInput />
      </div>
      <img :src="greenCar" alt="car" class="index-page__general-car" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      greenCar: require('@/assets/svg/green-car.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
