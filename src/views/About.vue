<template>
  <div class="input">
    <div class="form-wrap">
      <form class="form">

        <div class="input__box">
          <input v-model="task" type="text" id="name" aria-describedby="" placeholder="Task to do" aria-required="true" maxlength="30" autocomplete="off"
            autocorrect="off" name="username" value="" required>
        </div>

        <div class="input__box">
          <input v-model="priority" type="text" name="password" id="password" placeholder="Priority" aria-describedby="" maxlength="30" aria-required="true"
            autocapitalize="off" autocorrect="off" required>
        </div>

        <span class="button-wrap">
          <button class="btn" type="submit" name="submit">Add Task</button>
        </span>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'about',
  data() {
    return {
      task: "",
      priority: ""
    }
  }
}
</script>


<style>

  .form {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    -moz-box-direction: normal;
    -webkit-box-direction: normal;
    max-width: 80%;
    margin: 50px auto;
  }

  .input__box {
    margin: 10px 40px;
  }

  input {
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
</style>
