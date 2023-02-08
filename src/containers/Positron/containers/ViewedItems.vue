<template>
  <div class="app-viewed-items">
    <div class="header">
      <div class="header__text">Просмотренные товары</div>
      <div class="header__controls controls">
        <img
          src="src/assets/icons/previous.svg"
          @click="previousItem"
        />
        <div class="controls__numbers">
          <div class="controls__current">{{currentSlideText}}</div>
          <div class="controls__length">/ {{viewedItems.length}}</div>
        </div>
        <img
          src="src/assets/icons/next.svg"
          @click="nextItem"/>
      </div>
    </div>
    <div class="content">
      <Carousel
        v-model="currentSlide"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide
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
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ViewedItemComponent from "./ViewedItemComponent.vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'ViewedItems',
  components: {ViewedItemComponent, Carousel, Slide, Pagination, Navigation},
  computed: {
    ...mapState(['viewedItems']),
    currentSlideText() {
      return this.currentSlide === this.viewedItems.length ? 1 :  this.currentSlide + 1
    },
  },
  data(){
    return {
      currentSlide: 0,
      settings: {
        itemsToShow: 4,
        wrapAround: true,
        snapAlign: 'center',
      },
      breakpoints: {
        0: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        800: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        1100: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
        1500: {
          itemsToShow: 4,
          snapAlign: 'start',
        }
      },
    }
  },
  methods: {
    nextItem() {
      this.currentSlide++;
    },
    previousItem() {
      this.currentSlide--;
    }
  }
}
</script>

<style lang="scss" scoped>
.app-viewed-items {
  margin-top: 96px;
  .header {
    display: flex;
    justify-content: space-between;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    margin-bottom: 47px;
    &__text {
      font-weight: 600;
      font-size: 30px;
      color: #1F2432;
    }
    &__controls {
      display: flex;
      gap: 12px;
    }
    .controls {
      img {
        &:hover {
          cursor: pointer;
        }
      }
      &__numbers {
        margin-left: 5px;
        display: flex;
        align-items: center;
        gap: 3px;
      }
      &__current {
        color: #212121;
        font-size: 22px;
      }
      &__length {
        color: #797B86;
      }
    }
  }
  .content {
    &__component {
      width: 100%;
    }
  }
}
</style>