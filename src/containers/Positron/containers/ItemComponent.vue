<template>
  <div class="app-item-component">
    <img
      class="app-item-component__close-button"
      src="src/assets/icons/close.svg"
      @click="$emit('onDelete', title)"
    >
    <div class="item">
      <img :src="image"/>
      <div class="item__text text">
        <div class="text__title">{{ title }}</div>
        <div class="text__description">{{ description }}</div>
        <div class="text__number">Артикул: {{number}}</div>
      </div>
      <div class="item__buttons">
        <div class="buttons">
          <div
            class="buttons__button"
            @click="$emit('onRemoveItem', title)"
          >
            -
          </div>
          <div class="buttons__button">{{ timesOrdered }}</div>
          <div
            class="buttons__button"
            @click="$emit('onAddItem', title)"
          >
            +
          </div>
        </div>
        <div
          v-if="timesOrdered > 1"
          class="item-price"
        >
          {{price}} ₽/шт.
        </div>
      </div>
      <div class="item__price">{{timesOrdered*+price.replace(' ', '')}} ₽</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemComponent",
  props: {
    image: String,
    title: String,
    description: String,
    number: String,
    price: String,
    timesOrdered: Number,
  }
}
</script>

<style lang="scss" scoped>
  .app-item-component {
    position: relative;
    height: 118px;
    margin-top: 29px;
    &__close-button {
      position: absolute;
      right: 0;
      top: 0;
      &:hover {
        cursor: pointer;
      }
    }
    .item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      &__text {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }
      &__price {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #1F2432;
      }
      .text {
        font-family: 'Lato', sans-serif;
        flex-basis: 263px;
        &__title {
          font-weight: 600;
          font-size: 16px;
          color: #1F2432;
        }
        &__description {
          font-weight: 400;
          font-size: 12px;
          color: #2C3242;
        }
        &__number {
          font-weight: 400;
          font-size: 14px;
          color: #797B86;
        }
      }
      &__buttons {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        .item-price{
          align-items: center;
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          position: absolute;
          color: #1F2432;
          top: 80px;
        }
      }
      .buttons {
        display: flex;
        gap: 2px;
        text-align: center;
        line-height: 30px;
        &__button {
          width: 32px;
          height: 32px;
          background: #F6F8FA;
          border-radius: 4px;
          font-family: 'Lato', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          color: #1F2432;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>