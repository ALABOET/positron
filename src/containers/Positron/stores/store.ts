import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      totalItems: 0,
      totalCost: 0,
      items: [
        { image: 'item1', title: 'Вытяжное устройство G2H', description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия', number: 'G2H1065', price: '12 644', timesOrdered: 1},
        { image: 'item2', title: 'Вытяжное устройство ВХС', description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия', number: 'G2H1065', price: '12 644', timesOrdered: 2},
        { image: 'item3', title: 'Вытяжное устройство GHN', description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия', number: 'G2H1065', price: '12 644', timesOrdered: 1},
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
    },
    mutations: {
      deleteItem(state,  name) {
        let index = state.items.findIndex((elem) => elem.title === name)
        state.items.splice(index, 1)
      },
      addOneItem(state, name) {
        let index = state.items.findIndex((elem) => elem.title === name)
        state.items[index].timesOrdered++
      },
      removeOneItem(state, name) {
        let index = state.items.findIndex((elem) => elem.title === name)
        state.items[index].timesOrdered--
        if (state.items[index].timesOrdered === 0) {
          state.items.splice(index, 1)
        }
      },
      clearCart(state) {
        state.items.length = 0
      }
    },
    actions: {

    }
})
export default store