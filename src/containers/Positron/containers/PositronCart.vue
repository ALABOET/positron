<template>
  <div class="app-positron-cart">
    <div class="positron-cart">
      <div class="positron-cart__header header">
      <div class="header__items items">
        <div class="items__text">Ваша корзина</div>
        <div class="items__quantity">4 товара</div>
      </div>
      <div class="header__clear-cart">Очистить корзину</div>
    </div>
      <div class="positron-cart__content"></div>
      <div class="positron-cart__footer"></div>
    </div>
    <OrderInformation />
  </div>
</template>

<script>
import OrderInformation from "./OrderInformation.vue";
export default {
  name: "PositronCart",
  components: {OrderInformation}
}
</script>

<style lang="scss" scoped>
.app-positron-cart {
  position: relative;
  top: 207px;
  display: flex;
  gap: 55px;
  .positron-cart {
    width: 60%;
    &__header {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: baseline;
      .header {
        &__clear-cart {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          text-align: right;
          text-decoration-line: underline;
          color: #797B86;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .header__items {
        display: flex;
        gap: 22px;
        align-items: baseline;
        .items {
          &__text {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 44px;
            color: #1F2432;
          }
          &__quantity {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #797B86;
          }
        }
      }
    }
  }
}
</style>