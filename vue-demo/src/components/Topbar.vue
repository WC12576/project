<template>
  <div id="topbar">
    <div class="logo">
      VueResumer
    </div>
    <div class="actions">
      <div v-show="signinMode">
        <el-button v-on:click="signUpDialogMode=true">注册</el-button>
        <el-button type="primary" v-on:click="signInDialogMode = true">登录</el-button>
      </div>
      <div v-show="signoutMode">
        <!-- <el-button type="primary" v-on:click="signOut">注销</el-button> -->
        <el-button type="primary" @click="dialogVisible = true">注销</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny">
          <span>确认退出</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false" v-on:click="signOut">确 定</el-button>
          </span>
        </el-dialog>
        <el-button type="success" v-on:click="preview">预览</el-button>
      </div>
    </div>
    <MyDialog title="注册" :visible="signUpDialogMode" v-on:close="signUpDialogMode = false">
      <SignUpForm v-on:success="signIn" />
    </MyDialog>
    <MyDialog title="登录" :visible="signInDialogMode" v-on:close="signInDialogMode = false">
      <SignInForm v-on:success="signIn" />
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import AV from '../lib/leancloud'
import SignInForm from './SignInForm'

export default {
  data() {
    return {
      signinMode: true,
      signoutMode: false,
      signUpDialogMode: false,
      signInDialogMode: false,
      previewMode: false,
      dialogVisible: false
    }
  },
  components: {
    MyDialog, SignUpForm, SignInForm
  },
  methods: {
    preview() {
      this.$emit('preview')
    },
    signIn(user) {
      console.log('signIn成功')
      this.signInDialogMode = false
      this.signUpDialogMode = false
      this.signinMode = false
      this.signoutMode = true
    },
    signOut() {
      AV.User.logOut()
      this.signinMode = true
      this.signoutMode = false
    },
  }
}
</script>

<style>
#topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-size: 20px;
}

.signinMode {
  display: none;
}

.signoutMode {
  display: none;
}

.logo {}
</style>
