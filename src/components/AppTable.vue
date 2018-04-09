<template>
  <div class="app">
    <table class="app__table">
      <thead>
        <tr v-for="(header, index) in headers" :key="index">
          <td v-if="headers_on.name" @click="sort_tasks('task')">{{header.first}}
            <span v-if="helpers.sort_task">↓</span>
          </td>
          <td v-if="headers_on.priority" @click="sort_priority('priority')">{{header.second}}
            <span v-if="helpers.sort_priority">↓</span>
          </td>
          <td v-if="headers_on.done" @click="sort_done('done')">{{header.third}}
            <span v-if="helpers.sort_done">↓</span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(detail, index) in details" :key="index">
          <td v-if="headers_on.name">{{detail.task}}</td>
          <td v-if="headers_on.priority">{{detail.priority}}</td>
          <td v-if="headers_on.done">
            <input type="checkbox" name="" :id="index" v-model="detail.done">
            <label :for="index"></label>
          </td>
        </tr>
        <tr class="app__table-control">
          <td colspan="3">
            <div class="app__table-select">
              Rows per page:
              <select name="" v-model.number="pagination_nr">
                <option selected>5</option>
                <option>10</option>
                <option>15</option>
              </select>
            </div>
            {{helpers.start_from}} - {{helpers.end_to}} of {{database.length}}
            <span @click="decrement" class="ion-ios-arrow-left"></span>
            <span @click="increment" class="ion-ios-arrow-right"></span>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'AppTable',
    data() {
      return {
        details: [{
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
          }
        ],
        pagination_nr: 5,
        helpers: {
          start_from: 1,
          end_to: 5,
          counter: 2,
          sort_task: false,
          sort_priority: false,
          sort_done: false
        }
      }
    },
    computed: mapState([
      'database',
      'headers',
      'headers_on'
    ]),
    watch: {
      pagination_nr() {
        this.details = this.database.slice(0, this.pagination_nr);
        this.helpers.start_from = 1;
        this.helpers.end_to = this.pagination_nr;
        this.helpers.counter = 2;
      },
      database() {
        this.details = this.database.slice(0, this.pagination_nr);
      }
    },
    created() {
      this.details = this.database.slice(0, this.pagination_nr);
      if (localStorage.getItem("newTask")) {
        let localState = localStorage.getItem("newTask");
        this.$store.commit("build_DataBase", localState);
      }
    },
    methods: {
      increment() {

        let pageNum = this.pagination_nr,
          ends = this.helpers.end_to,
          starts = this.helpers.start_from,
          count = this.helpers.counter;



        this.details = this.database.slice(pageNum * (count - 1), (pageNum * count));




        if (ends + pageNum < this.database.length) {
          this.helpers.counter += 1;
          this.helpers.end_to = ends + pageNum;
          this.helpers.start_from = starts + pageNum;
        } else {
          this.helpers.end_to = this.database.length;
          if (ends + pageNum > this.database.length && ends + pageNum < this.database.length + pageNum) {
            this.helpers.start_from = starts + pageNum;
          }
        };
        console.log(count);
      },
      decrement() {

        let pageNum = this.pagination_nr,
          ends = this.helpers.end_to,
          starts = this.helpers.start_from,
          count = this.helpers.counter - 1,
          first = this.database.length % this.pagination_nr;

        if (count >= 1) {
          this.helpers.counter -= 1;
          this.details = this.database.slice(pageNum * (count - 1), (pageNum * (count)));
        }

        if (this.helpers.counter === 1){
          this.helpers.counter = 2;
        }

        console.log(count);

        if (ends > pageNum) {
          if (this.helpers.end_to % this.pagination_nr != 0) {
            this.helpers.end_to -= first;
            this.helpers.start_from = starts - pageNum;
            return;
          }
          this.helpers.end_to = ends - pageNum;
          this.helpers.start_from = starts - pageNum;
        } else {
          this.helpers.end_to = this.pagination_nr;
          this.helpers.start_from = 1;
        }
      },
      sort_tasks() {

        function compare(a, b) {

          const item1 = a.task.toUpperCase();
          const item2 = b.task.toUpperCase();

          let comparison = 0;
          if (item1 > item2) {
            comparison = 1;
          } else if (item1 < item2) {
            comparison = -1;
          }
          return comparison;
        }


        this.helpers.sort_task = true;
        this.helpers.sort_priority = false;
        this.helpers.sort_done = false;

        this.database.sort(compare);

      },
      sort_priority() {

        function compare(a, b) {

          const item1 = a.priority.toUpperCase();
          const item2 = b.priority.toUpperCase();

          let comparison = 0;
          if (item1 > item2) {
            comparison = 1;
          } else if (item1 < item2) {
            comparison = -1;
          }
          return comparison;
        }

        this.helpers.sort_task = false;
        this.helpers.sort_priority = true;
        this.helpers.sort_done = false;

        this.database.sort(compare);
      },
      sort_done() {
        function compare(a, b) {

          const item1 = a.done;
          const item2 = b.done;

          let comparison = 0;
          if (item1 > item2) {
            comparison = 1;
          } else if (item1 < item2) {
            comparison = -1;
          }
          return comparison;
        }

        this.helpers.sort_task = false;
        this.helpers.sort_priority = false;
        this.helpers.sort_done = true;

        this.database.sort(compare);
      }
    }
  }
</script>

<style scoped lang="scss">
  /* Table of contents
=====================
// 1. Variables
// 2. Base
// 3. Layout
// 4. Block + element
// 5. Modifier
// 6. State
// 7. Animations
=====================
*/

  // 1. Variables
  $pure-white: #ffffff;
  $wood-brown: #494430;
  $sweet-orange: #F79933;
  $hole-dark: #525252;
  $light-gray: #EEEEF0;
  $middle-gray: #d6d6d6;
  $hell-dark: #1D1D1D; // 1. Font Faces
  // 2. Base
  .app {
    min-width: 100%;
    background: $pure-white;
    font-size: 62.5%;
    color: $hole-dark;
    user-select: none;
  } // 3. Layout
  // 4. Block + element
  .app__table {
    width: 100%;
    max-width: 670px;
    min-width: 290px;
    margin: 0 auto 100px auto;
    font-size: 1rem;
    text-align: left;
    border: 1px solid $middle-gray;
    box-shadow: 0 0 0 7px $light-gray;
    border-collapse: collapse;
  }

  thead {
    background: $wood-brown;
    color: $pure-white;
    td {
      border: none;
      cursor: pointer;
    }
  }

  td {
    height: 47px;
    padding-left: 15px;
  }

  tbody {
    td {
      border-bottom: 1px solid $middle-gray;
    }
  }

  .app__table-control {
    text-align: right;
    td {
      padding-right: 30px;
    }
  }

  .app__table-select {
    display: none;
    @media screen and (min-width: 420px) {
      display: inline-block;
    }
  }

  select {
    border: none;
    color: $hole-dark;
    font-size: 1rem;
    width: 75px;
    margin-right: 32px;
    padding-left: 5px;
  }

  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox]+label {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 2px solid $middle-gray;
    cursor: pointer;
    transition: background .3s;
  }

  input[type="checkbox"]:checked+label {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background: $sweet-orange;
    cursor: pointer;
    position: relative;
    border: 1px solid $sweet-orange;
    transition: background .3s;
  }

  input[type="checkbox"]:checked+label:after {
    content: "✓";
    position: absolute;
    color: $pure-white;
    top: -3px;
    left: 2px;
  }

  .ion-ios-arrow-left {
    padding-right: 10px;
    padding-left: 5px;
  }

  .ion-ios-arrow-right {
    padding-right: 10px;
    padding-left: 5px;
  }

  .ion-ios-arrow-left,
  .ion-ios-arrow-right {
    cursor: pointer;
  } // 5. Modifier
  // 6. State
  // 7. Animations
</style>
