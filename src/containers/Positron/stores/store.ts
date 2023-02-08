import { createStore } from 'vuex'
import axios from 'axios'
interface itemsData {
  image: string,
  title: string,
  description: string,
  number: string,
  price: string,
  timesOrdered: number,
}

const store = createStore({
  state () {
    return {
      totalCost: 0,
      installationIsNeeded: false,
      items:  [
        { image: 'item1', title: 'Вытяжное устройство G2H', description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия', number: 'G2H1065', price: '12 644', timesOrdered: 1},
        { image: 'item2', title: 'Вытяжное устройство ВХС', description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия', number: 'G2H1065', price: '12 644', timesOrdered: 2},
        { image: 'item3', title: 'Вытяжное устройство GHN', description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия', number: 'G2H1065', price: '12 644', timesOrdered: 1},
      ],
      viewedItems: [
        { image: 'viewedItem1', title: 'BXC', description: 'Вытяжное устройство для механической системы вентиляции', rubPrice: '6 848 ₽ – 56 584 ₽', euroPrice: '77.60 € – 643.86 €'},
        { image: 'viewedItem2', title: 'G2H', description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции', rubPrice: '6 848 ₽ – 56 584 ₽', euroPrice: '77.60 € – 643.86 €'},
        { image: 'viewedItem3', title: 'GHN', description: 'Вытяжное устройство с датчиком присутствия', rubPrice: '6 848 ₽ – 56 584 ₽', euroPrice: '77.60 € – 643.86 €'},
        { image: 'viewedItem4', title: 'TDA', description: 'Вытяжное устройство с датчиком присутствия', rubPrice: '6 848 ₽ – 56 584 ₽', euroPrice: '77.60 € – 643.86 €'},
        { image: 'viewedItem1', title: 'BBG', description: 'Вытяжное устройство для механической системы вентиляции', rubPrice: '6 848 ₽ – 56 584 ₽', euroPrice: '77.60 € – 643.86 €'},
      ]
    }
  },
    getters: {
      currentPrice(state) {
        return state.items.reduce((prev, curr) => prev + Number(curr.price.replace(' ', '')) * curr.timesOrdered, 0)
      },
      numberOfItems(state) {
        return state.items.reduce((prev, curr) => prev + curr.timesOrdered, 0)
      },
      quantityItemText(state) {
        if (state.items.length === 0) return 'В корзине пусто'
        if (state.items.length === 1) return 'товар'
        if (state.items.length > 1) return 'товара(ов)'
      },
      installationIsNeededText(state) {
        return state.installationIsNeeded ? 'Да' : 'Нет'
      }
    },
    mutations: {
      deleteItem(state,  name: string): void {
        let index = state.items.findIndex((elem) => elem.title === name)
        state.items.splice(index, 1)
      },
      addOneItem(state, name: string): void {
        let index = state.items.findIndex((elem) => elem.title === name)
        state.items[index].timesOrdered++
      },
      removeOneItem(state, name: string): void {
        let index = state.items.findIndex((elem) => elem.title === name)
        state.items[index].timesOrdered--
        if (state.items[index].timesOrdered === 0) {
          state.items.splice(index, 1)
        }
      },
      clearCart(state): void {
        state.items.length = 0
      },
      updateCheckbox(state): void {
        state.installationIsNeeded = !state.installationIsNeeded
      }
    },
    actions: {
      purchaseItems({state, commit, getters }) {
        axios.post('https://eo44idpmzji1e5k.m.pipedream.net',
          { orders: state.items, price: getters.currentPrice, installationIsNeeded: state.installationIsNeeded, numberOfItems: getters.numberOfItems})
            .then((res) => console.log(res.data))
            .then(() => commit('clearCart'))
      },
    }
})
export default store