<template>
  <div class="app-viewed-items">
    <div class="header">
      <div class="header__text">Просмотренные товары</div>
      <div class="header__controls">controls</div>
    </div>
    <div class="content">
      <div
        v-for="item in viewedItems"
        :key="item"
        class="content__component"
      >
        <viewed-item-component
          :image="`src/assets/icons/itemImages/${item.image}.png`"
          :title="item.title"
          :description="item.description"
          :rub-price="item.rubPrice"
          :euro-price="item.euroPrice"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ViewedItemComponent from "./ViewedItemComponent.vue";

export default {
  name: "ViewedItems",
  components: {ViewedItemComponent},
  computed: {
    ...mapState(['viewedItems']),
  },
}
</script>

<style lang="scss" scoped>
.app-viewed-items {
  margin-top: 96px;
  .header {
    display: flex;
    justify-content: space-between;
    font-family: 'Lato';
    font-style: normal;
    margin-bottom: 47px;
    &__text {
      font-weight: 600;
      font-size: 30px;
      color: #1F2432;
    }
  }
  .content {
    display: flex;
    gap: 45px;
    &__component {

    }
  }
}
</style>