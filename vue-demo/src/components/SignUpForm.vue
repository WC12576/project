<template>
  <div>
    <form v-on:submit.prevent="signUp">
      <div class="row">
        <label>用户名</label>
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="row">
        <label >密&nbsp&nbsp&nbsp&nbsp码</label>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="提交" class="btn">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
  name: "SignUpForm",
  data(){
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  created(){

  },
  methods: {
    signUp(){
      console.log(2)
      let {username, password} = this.formData
      var user = new AV.User()
      user.setUsername(username)
      user.setPassword(password)
      user.signUp().then(()=>{
        console.log('signUp成功')
        this.$emit('success', getAVUser())
        console.log('emit成功')
      },(error)=>{
        this.errorMessage = getErrorMessage(error)
      })
    }
  }
}


</script>
<style>
.row {
  display: flex;
  justify-content: space-between;
}

.row input {
  margin-bottom: 20px;
  height: 30px;
  width: 16em;
  border: none;
  background: white;
}

.row label {
  line-height: 30px;
  padding-right: 16px;
}

.actions input {
  display: block;
  width: 60px;
  height: 25px;
  background-color: #f6556c;
  color: white;
  border-radius: 3px;
  border: none;
  margin: 0 auto;
  cursor: pointer;
}
</style>

