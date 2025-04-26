/* import { createApp } from "vue";
import { createStore } from "vuex"; */

const DEFAULT_API_URL = "https://www.googleapis.com/books/v1/volumes?";

export const state = () => ({
  books: [],
});

export const getters = {
  getBooks: (state) => state.books,
};

export const mutations = {
  setBooks: (state, books) => (state.books = books),
};

export const actions = {
  async fetchBooks({ commit }) {
    try {
      const url = DEFAULT_API_URL + "q=hulk";
      const response = await fetch(url, {
        method: "GET",
      });
      const result = await response.json();

      commit("setBooks", result.items);
    } catch (error) {
      return error;
    }
  },
};
