<template>
  <div class="home">
    <h2>Home</h2>
    <div>
      <input type="text" :value="title" @input="updateTitle($event.target.value)">
      <button @click="addTodo(title)" v-if="editIdx < 0">Add Todo</button>
      <button @click="updateTodo(title,editIdx)" v-if="editIdx >= 0">Update Todo</button>
    </div>

    <ul>
      <li v-for="(todo,idx) in todos" :key="idx">
        {{todo}}
        <button @click="editTodo(idx)">Edit</button>|
        |
        <button @click="deleteTodo(idx)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  name: "home",
  computed: mapState(['todos','title', 'editIdx']),
  methods: mapMutations(['addTodo','editTodo','deleteTodo','updateTodo','updateTitle'])
};
</script>

<style>

</style>

