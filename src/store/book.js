import axios from 'axios';
import { get, set } from '@/helpers/local';

const DEFAULT_API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const state = () => {
    return {
        books: [],
        search: '',
        cart: [],
    }
}

const getters = {
    getBooks: state => state.books,
    getSearch: state => state.search,
    getCart: state => state.cart,
}

const mutations = {
    setBooks: (state, books) => state.books = books,
    setSearch: (state, search) => state.search = search,
    setCart: (state, cart) => state.cart = cart,
    addCart: (state, cart) => {
        state.cart.push(cart);
    },
    removeCart: (state, cart) => {
        state.cart = state.cart.filter(el => el.id !== cart.id);
    }
}

const actions = {
    async fetchBooks({getters, commit}) {
        try {
            const search = getters['getSearch'];

            const url = DEFAULT_API_URL + search;

            const response = await axios.get(url);

            if (response.status === 200) {
                commit('setBooks', response.data?.items);
            }
        } catch (error) {
            return error;
        }
    },
    addToCart({getters, commit}, book) {
        commit('addCart', book);
        const cart = getters['getCart'];
        set('cart', cart, true);
    },
    getFromLocal({commit}) {
        const cart = get('cart', true);
        commit('setCart', cart);
    },
    deleteCart({commit, getters}, cart) {
        commit('removeCart', cart);
        const newCart = getters['getCart'];
        set('cart', newCart, true);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}