import { createStore } from "vuex";
import cartModule from "./modules/cart";
import productModule from './modules/products';

const store = createStore({
  modules: {
    prods: productModule,
    cart: cartModule
  }
});

export default store;