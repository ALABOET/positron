<template>
  <div class="app-viewed-item-component">
    <div class="viewed-item">
      <img
        class="viewed-item__image"
        :src="image"
      />
      <div class="viewed-item__text text">
        <div class="text__title">{{title}}</div>
        <div class="text__description">{{description}}</div>
      </div>
      <div class="viewed-item__price price">
        <div class="price__rub">{{rubPrice}}</div>
        <div class="price__euro">{{euroPrice}}</div>
        <button class="viewed-item__button">Подробнее</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewedItemComponent",
  props: {
    image: String,
    title: String,
    description: String,
    rubPrice: String,
    euroPrice: String,
  }
}
</script>

<style lang="scss" scoped>
.app-viewed-item-component {
  width: 305px;
  height: 563px;
  background: #F6F8FA;
  border-radius: 5px;
  .viewed-item {
    padding: 25px;
    &__image {
      display: block;
      margin: 7px auto;
    }
    .text {
      font-family: 'Lato', sans-serif;
      font-style: normal;
      text-align: left;
      height: 116px;
      &__title {
        font-weight: 700;
        font-size: 22px;
        color: #1F2432;
        margin-bottom: 10px;
      }
      &__description {
        font-weight: 400;
        font-size: 14px;
        color: #1F2432;
        line-height: 145%;
      }
    }
    &__price {
      display: flex;
      flex-direction: column;
      text-align: left;
      .price {
        &__rub{
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 22px;
          letter-spacing: 0.005em;
          color: #1F2432;
          margin-bottom: 10px;
        }
        &__euro {
          font-family: 'Lato', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #797B86;
          margin-bottom: 28px;
        }
      }
    }
    &__button {
      background: #0069B4;
      border-radius: 4px;
      color: #FFFFFF;
      width: 100%;
      height: 52px;
      font-family: 'Lato', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      border: none;
      transition: all .5s ease;
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
}
</style>