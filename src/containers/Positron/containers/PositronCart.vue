<template>
  <div class="app-positron-cart">
    <div class="positron-cart">
      <div class="positron-cart__header header">
      <div class="header__items items">
        <div class="items__text">Ваша корзина</div>
        <div class="items__quantity">{{numberOfItems > 0 ? numberOfItems : ''}} {{quantityItemText}}</div>
      </div>
      <div
        class="header__clear-cart"
        @click="clearCart"
      >Очистить корзину</div>
    </div>
      <div class="positron-cart__content">
        <div v-for="elem in items" :key="elem">
          <ItemComponent
            :image="`src/assets/icons/itemImages/${elem.image}.png`"
            :title="elem.title"
            :description="elem.description"
            :number="elem.number"
            :price="elem.price"
            :times-ordered="elem.timesOrdered"
            @on-delete="deleteItem"
            @on-add-item="addOneItem"
            @on-remove-item="removeOneItem"
          />
        </div>
      </div>
      <div class="positron-cart__footer"></div>
    </div>
    <OrderInformation />
  </div>
</template>

<script>
import OrderInformation from "./OrderInformation.vue";
import ItemComponent from "./ItemComponent.vue";
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: "PositronCart",
  components: {ItemComponent, OrderInformation},
  computed: {
    ...mapState(['items']),
    ...mapGetters(['numberOfItems', 'quantityItemText'])
  },
  methods: {
    ...mapMutations(['deleteItem', 'clearCart', 'addOneItem', 'removeOneItem']),
  }
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