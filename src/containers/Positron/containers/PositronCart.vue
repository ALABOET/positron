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
      <div class="positron-cart__content content">
        <div class="content__item" v-for="elem in items" :key="elem">
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
      <div class="positron-cart__footer footer">
        <div class="footer__installation">
          <input
            type="checkbox"
            :value="installationIsNeeded"
            @change="updateCheckbox"
          >
          <div class="footer__icon">
            <img src="src/assets/icons/installation.svg" />
          </div>
          <div class="footer__text text">
            <div class="text_install">Установка</div>
            <div class="text_warning">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</div>
          </div>
        </div>
      </div>
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
    ...mapState(['items', 'installationIsNeeded']),
    ...mapGetters(['numberOfItems', 'quantityItemText'])
  },
  methods: {
    ...mapMutations(['deleteItem', 'clearCart', 'addOneItem', 'removeOneItem', 'updateCheckbox']),
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
    &__content {
      .content {
        &__item:not(:last-child) {
          border-bottom: 1px solid #C4C4C4;
        }
      }
    }
    &__footer {
      .footer__installation {
        margin-top: 18px;
        background: #F6F8FA;
        border-radius: 5px;
        height: 102px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .footer__icon {
          background: #FFFFFF;
          width: 50px;
          height: 50px;
          position: relative;
          border-radius: 4px;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
}
</style>