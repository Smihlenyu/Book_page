import { defineStore } from "pinia";
import axios from "axios";

export const useBooksStore = defineStore("books", {
  state: () => ({
    books: [],
    loading: false,
    error: null,
  }),
  actions: {
    async searchBooks(query) {
      this.loading = true;
      this.error = null;
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDvUiXAG4XW7u1b1Xv4Xv4Xv4Xv4Xv4Xv4`
        );
        this.books = res.data.items || [];
      } catch (err) {
        this.error = "Ошибка загрузки";
      } finally {
        this.loading = false;
      }
    },
  },
});
