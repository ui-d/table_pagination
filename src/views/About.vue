<template>
  <div class="input">
    <img src="../assets/logo.png">
    <p class="is--correct" v-if="success">Success!<p/>
    <p class="is--incorrect" v-if="failure">Please, fill form correctly<p/>
    <div class="form-wrap">
      <form class="form">

        <div class="input__box">
          <label for="name">add new task</label>
          <input v-model="task.task" type="text" id="name" aria-describedby="" placeholder="Task name" aria-required="true" maxlength="30"
            autocomplete="off" autocorrect="off" name="username" value="" required>
        </div>

        <div class="input__box">
          <label for="name">set priority for task</label>
            <select v-model="task.priority" name="" id="">
              <option selected>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
        </div>
        <h2>Choose columns to display:</h2>
        <div class="input__checkbox">
          <input v-model="headers_on.name" type="checkbox" name="" id="task">
          <label for="task">Task name</label>
          <input v-model="headers_on.priority" type="checkbox" name="" id="priority">
          <label for="priority">Priority</label>
          <input v-model="headers_on.done" type="checkbox" name="" id="done">
          <label for="done">Done</label>
        </div>

        <span class="button-wrap">
          <button @click.prevent="new_task" class="btn" type="submit" name="submit">Add Task</button>
        </span>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'about',
    data() {
      return {
        task: {
          task: "",
          priority: "Medium",
          done: false
        },
        success: false,
        failure: false
      }
    },
    computed: mapState([
      'headers_on'
    ]),
    methods: {
      new_task() {
        this.success = false;
        this.failure = false;
        if(this.task.task != ""){
        this.$store.commit("new_task", this.task);
        this.success = true;
        }else {
          this.failure = true;
        }
      }
    }
  }
</script>


<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    -moz-box-direction: normal;
    -webkit-box-direction: normal;
    max-width: 99%;
    @media screen and (min-width: 700px){
    max-width: 60%;
    }
    margin: 0 auto;
    text-align: left;
  }

  h2 {
    text-align: center;
  }

  label {
    font-size: .9rem;
    color: #9b9b9b;
  }

  .input__box {
    @media screen and (min-width: 420px){
      margin: 10px 40px;
    }
  }

  .input__checkbox {
    display: flex;
    align-items: center;
    @media screen and (min-width: 420px){
      margin: 10px 40px;
    }
  }

input[type=checkbox] {
  display: flex;
  margin-left: 0;
}



  input, select {
    height: 36px;
    border: 1px solid #efefef;
    border-radius: 3px;
    background-color: #fafafa;
    width: 100%;
    font-size: 12px;
    padding: 9px 0 7px 8px;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
    margin: 10px 0 10px 0;
  }

  input#name:focus,
  input#password:focus {
    border-color: #bbb;
  }

  .button-wrap {
    display: block;
    position: relative;
    margin: 8px 40px;
  }

  .btn {
    cursor: pointer;
    width: 100%;
    padding: 0 8px;
    background: #3897f0;
    border: 1px solid #3897f0;
    color: #fff;
    border-radius: 3px;
    font-weight: 600;
    font-size: 14px;
    height: 35px;
    line-height: 26px;
    outline: none;
    white-space: nowrap;
  }

  .is--incorrect {
    color: #f44242;
  }

 .is--correct {
    color: #41f48c;
  }
</style>
