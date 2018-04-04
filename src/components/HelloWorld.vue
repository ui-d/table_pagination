<template>
  <div class="app">
    <table class="app__table">
      <thead>
        <tr v-for="(header, index) in headers" :key="index">
          <td>{{header.first}}</td>
          <td>{{header.second}}</td>
          <td>{{header.third}}</td>
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
            <select name="" id="" v-model="pagination_nr">
              <option value="5" selected>5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
           {{start_from}} - {{end_to}} of {{details.length}}
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
        start_from: 1,
        end_to: 5
      }
    },
    watch: {
      pagination_nr() {
        this.details = this.database.slice(0, this.pagination_nr);
      }
    },
    created() {
      this.details = this.database.slice(0, this.pagination_nr);
    },
    methods: {
      increment() {
        this.details = this.database.slice(this.pagination_nr);
        this.start_from += this.pagination_nr;
        this.end_to += this.pagination_nr;
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
      padding-right: 47px;
    }
  }

  select {
    border: none;
    color: $hole-dark;
    font-size: 1rem;
    width: 65px;
  }

  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox]+label {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid $middle-gray;
    cursor: pointer;
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
  }

  input[type="checkbox"]:checked+label:after {
    content: "✓";
    position: absolute;
    color: $pure-white;
    top: -3px;
    left: 2px;
  }

.ion-ios-arrow-left {
  padding-right: 20px;
}

.ion-ios-arrow-left, .ion-ios-arrow-right {
  cursor: pointer;
}
  // 5. Modifier
  // 6. State
  // 7. Animations
</style>
