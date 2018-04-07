<template>
  <div class="app">
    <table class="app__table">
      <thead>
        <tr v-for="(header, index) in headers" :key="index">
          <td @click="sort_tasks('task')">{{header.first}}</td>
          <td @click="sort_priority('priority')">{{header.second}}</td>
          <td @click="sort_done('done')">{{header.third}}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(detail, index) in details" :key="index">
          <td>{{detail.task}}</td>
          <td>{{detail.priority}}</td>
          <td>
            <input type="checkbox" name="" :id="index" v-model="detail.done">
            <label :for="index"></label>
          </td>
        </tr>
        <tr class="app__table-control">
          <td colspan="3">Rows per page:
            <select name="" id="" v-model.number="pagination_nr">
              <option selected>5</option>
              <option>10</option>
              <option>15</option>
            </select>
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
  export default {
    name: 'HelloWorld',
    data() {
      return {
        headers: [{
          first: "Task name",
          second: "Priority",
          third: "Done"
        }],
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
        pagination_nr: 5,
        helpers: {
          start_from: 1,
          end_to: 5,
          counter: 2,
          sort_task: false
        }
      }
    },
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
        } else {
          return;
        }

        if (ends + pageNum < this.database.length) {
          this.helpers.end_to = ends + pageNum;
        } else {
          this.helpers.end_to = this.database.length;
        }
        if (starts + pageNum < this.database.length) {
          this.helpers.start_from = starts + pageNum;
        } else {
          return;
        }
      },
      decrement() {

        let pageNum = this.pagination_nr,
          ends = this.helpers.end_to,
          starts = this.helpers.start_from,
          count = this.helpers.counter;

        if (this.helpers.conuter === 6) {
          this.helpers.counter = 4;
        }
        if (this.helpers.counter > 1) {
          this.helpers.counter -= 1;
          this.details = this.database.slice(pageNum * (count - 2), (pageNum * (count - 1)));
        }

        if (ends > pageNum) {
          this.helpers.end_to = ends - pageNum;
        } else {
          this.helpers.end_to = this.pagination_nr;
        }
        if (starts > pageNum) {
          this.helpers.start_from = starts - pageNum;
        } else {
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

        this.database.sort(compare);
      }
    }
  }
</script>

<style scoped lang="scss">
  /* Table of contents
=====================
// 1. Font Faces
// 2. Base
// 3. Layout
// 4. Block + element
// 5. Modifier
// 6. State
// 7. Animations
=====================
*/

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
    width: 670px;
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
