import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: ["a", "b", "c"],
    title: "",
    editIdx: -1
  },
  mutations: {
    addTodo(state, title) {
      if (title && title !== "") {
        state.todos.push(title);
        state.title = "";
      }
    },
    updateTitle(state, title) {
      if (title && title !== "") {
        state.title = title;
      }
    },
    editTodo(state, idx) {
      state.title = state.todos[idx];
      state.editIdx = idx;
    },
    deleteTodo(state, idx) {
      state.todos.splice(idx, 1);
    },
    updateTodo(state, title) {
      if (title && title !== "") {
        state.todos[state.editIdx] = title;
        state.title = "";
        state.editIdx = -1;
      }
    }
  }
});
