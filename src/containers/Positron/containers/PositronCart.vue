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
        <div class="content__item" v-for="item in items" :key="item">
          <ItemComponent
            :image="`/src/assets/icons/itemImages/${item.image}.png`"
            :title="item.title"
            :description="item.description"
            :number="item.number"
            :price="item.price"
            :times-ordered="item.timesOrdered"
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
            class="footer__checkbox"
          >
          <div class="footer__options options">
            <div class="options__icon">
              <img src="/src/assets/icons/installation.svg" />
            </div>
            <div class="footer__text text">
              <div class="text__install">Установка</div>
              <div class="text__warning">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</div>
            </div>
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
  margin-top: 207px;
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
          font-family: 'Lato', sans-serif;
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
            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 44px;
            color: #1F2432;
          }
          &__quantity {
            font-family: 'Lato', sans-serif;
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
        .footer__checkbox {
          width: 20px;
          height: 20px;
        }
        .options {
          display: flex;
          gap: 10px;
          align-items: center;
          &__icon {
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
        .text {
          font-family: 'Lato', sans-serif;
          &__install {
            font-weight: 600;
            font-size: 16px;
            color: #1F2432;
          }
          &__warning {
            font-weight: 400;
            font-size: 14px;
            color: #797B86;
          }
        }
      }
    }
  }
}
</style>