import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headers: [{
      first: "Task name",
      second: "Priority",
      third: "Done"
    }],
    headers_on: {
      name: true,
      priority: true,
      done: true
    },
    database: [{
      task: "Take out the trash",
      priority: "Medium",
      done: false
    },
    {
      task: "Feed the dog",
      priority: "High",
      done: true
    },
    {
      task: "Order lunch",
      priority: "High",
      done: false
    },
    {
      task: "Send email to Peter",
      priority: "Low",
      done: true
    },
    {
      task: "Buy groceries",
      priority: "Medium",
      done: false
    },
    {
      task: "Take out the trash 2",
      priority: "Medium",
      done: false
    },
    {
      task: "Feed the dog 2",
      priority: "High",
      done: true
    },
    {
      task: "Order lunch 2",
      priority: "High",
      done: false
    },
    {
      task: "Send email to Peter 2",
      priority: "Low",
      done: true
    },
    {
      task: "Buy groceries 2",
      priority: "Medium",
      done: false
    },
    {
      task: "Take out the trash 3",
      priority: "Medium",
      done: false
    },
    {
      task: "Feed the dog 3",
      priority: "High",
      done: true
    },
    {
      task: "Order lunch 3",
      priority: "High",
      done: false
    },
    {
      task: "Send email to Peter 3",
      priority: "Low",
      done: true
    },
    {
      task: "Buy groceries 3",
      priority: "Medium",
      done: false
    },
    {
      task: "Take out the trash 4",
      priority: "Medium",
      done: false
    },
    {
      task: "Feed the dog 4",
      priority: "High",
      done: true
    },
    {
      task: "Order lunch 4",
      priority: "High",
      done: false
    },
    {
      task: "Send email to Peter 4",
      priority: "Low",
      done: true
    },
    {
      task: "Buy groceries 4",
      priority: "Medium",
      done: false
    },
    {
      task: "Take out the trash 5",
      priority: "Medium",
      done: false
    },
    {
      task: "Feed the dog 5",
      priority: "High",
      done: true
    },
    {
      task: "Order lunch 5",
      priority: "High",
      done: false
    },
    {
      task: "Send email to Peter 5",
      priority: "Low",
      done: true
    },
    {
      task: "Buy groceries 5",
      priority: "Medium",
      done: false
    }
  ],
  },
  mutations: {
      new_task(state, n) {
        state.database.unshift(n);
        localStorage.setItem(`newTask`, JSON.stringify(n));
      },
      build_DataBase(state, n) {
          state.database.unshift(JSON.parse(n));
      }
  },
  actions: {

  }
})
