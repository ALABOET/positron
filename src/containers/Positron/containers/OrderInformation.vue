<template>
  <div class="app-order-information">
    <div class="root">
      <div class="order-header">Итого</div>
      <div class="order-information">
        <div class="order-information__row row"><div class="row__text">Сумма заказа</div><div class="row__info">50 576р</div></div>
        <div class="order-information__row row"><div class="row__text">Количество</div><div class="row__info">4 шт</div></div>
        <div class="order-information__row row"><div class="row__text">Установка</div><div class="row__info">Нет</div></div>
      </div>
      <div class="order-price">
        <div class="order-price__text">Стоимость товаров</div>
        <div class="order-price__price">50 576р</div>
      </div>
      <div class="order-buttons">
        <button class="order-buttons__button button-order">Оформить заказ</button>
        <button class="order-buttons__button button-buy">Купить в 1 клик</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderInformation"
}
</script>

<style lang="scss" scoped>
.app-order-information {
  width: 37%;
  height: 468px;
  background: #F6F8FA;
  border-radius: 5px;
  color: #1F2432;
  .root {
    padding: 35px 30px;
    .order-header {
      font-size: 24px;
      margin-bottom: 31px;
      font-weight: 600;
    }
    .order-information {
      display: flex;
      flex-direction: column;
      gap: 18px;
      border-bottom: 1px solid #AEB0B6;
      padding-bottom: 29px;
      &__row {
        display: flex;
        justify-content: space-between;
        .row {
          &__text {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 145%;
          }
          &__info {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 145%;
          }
        }
      }
    }
    .order-price {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      &__text {
        font-family: 'Lato';
        font-weight: 600;
        font-size: 18px;
      }
      &__price {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
      }
    }
    .order-buttons {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      &__button {
        height: 54px;
        border: none;
        &:hover {
          cursor: pointer;
          opacity: 0.9;
        }
      }
      .button-order {
        background: #0069B4;
        border-radius: 4px;
        color: #FFFFFF;
      }
      .button-buy {
        background: #FFFFFF;
        border: 1px solid #0069B4;
        border-radius: 4px;
      }
    }
  }
}
</style>