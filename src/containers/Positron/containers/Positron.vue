<template>
  <div class="app-positron">
    <div class="root">
      <div class="positron-header">
        <div class="positron-header__text text">
          <div class="text__main">Главная</div>
          <img src="src/assets/icons/triangle.svg" />
          <div class="text__cart">Корзина</div>
        </div>
      </div>
      <div class="positron-cart-icon">
        <img src="src/assets/icons/cart.svg">
        <div class="positron-cart-icon__info info">
          <div class="info__text">Ваша корзина</div>
          <div class="info__quantity">3 товара</div>
          <div class="info__price">50 576 р</div>
        </div>
      </div>
      <PositronCart />
    </div>
  </div>
</template>

<script>
import OrderInformation from "./OrderInformation.vue";
import PositronCart from "./PositronCart.vue";
export default {
  name: "Positron",
  components: {PositronCart, OrderInformation }
}
</script>

<style lang="scss" scoped>
.app-positron {
  position: relative;
  .root {
    padding: 80px;
    .positron-header {
      position: absolute;
      top: 126px;
      left: 80px;
      &__text {
        display: flex;
        flex-direction: row;
        gap: 10px;
        .text {
          &__main {
            color: #33374E;
          }
          &__cart {
            color: #797B86;
          }
          &__cart, &__main {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
    }
    .positron-cart-icon {
      position: absolute;
      top: 64px;
      right: 82px;
      display: flex;
      gap: 12px;
      &__info {
        .info {
          &__text {
            font-size: 14px;
            color: #1F2432;
          }
          &__quantity {
            font-size: 12px;
            color: #797B86;
          }
          &__price {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>