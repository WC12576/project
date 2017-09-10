<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar" v-on:preview="preview"></Topbar>
    <main>
      <Editor class="editor" v-bind:resumer="resumer"></Editor>
      <Preview class="preview" v-bind:resumer="resumer"></Preview>
    </main>
    <el-button class="exit" type="success" v-on:click="exitPreview">取消预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'


export default {
  name: 'app',
  components: {
    Topbar, Editor, Preview
  },
  data() {
    return {
      previewMode: false,
      resumer: {
        profile: { name: '', city: '', birth: '' },
        workHistory: [{ company: '', content: '' }],
        studyHistory: [{ school: '', duration: '', degree: '' }],
        projects: [{ name: '', mainContent: '' }],
        awards: [{ duration: '', siuation: '' }],
        contacts: { qq: '', email: '', github: '', blog: '', phone: '' },
        labels: { company: '公司名称', content: '工作内容', school: '学校', duration: '时间', degree: '学位', name: '项目名称', mainContent: '项目内容', siuation: '奖项' }
      }
    }
  },
  methods: {
    preview() {
      this.previewMode = true
    },
    exitPreview() {
      this.previewMode = false
    }
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.topbar {
  box-shadow: 0 0 4px;
  position: relative;
  z-index: 1;
}

main {
  display: flex;
  height: 93%;
  background: #ddd;
}

main .editor {
  min-width: 40em;
  margin: 16px;
  margin-right: 8px;
  background: white;
  border-radius: 4px;
  overflow: hidden;
}

main .preview {
  flex: 1;
  margin: 16px;
  margin-left: 8px;
  background: white;
  border-radius: 4px;
  overflow: auto;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.exit{
  display: none;
}
.previewMode #topbar,
.previewMode #editor{
  display: none;
}
.previewMode main{
  height: 100%;
}
.previewMode #Preview{
  max-width: 1000px;
  margin: 32px auto;
}
.previewMode .exit{
  display: block;
  position: fixed;
  bottom: 32px;
  right: 32px;
}
.v-modal {
        z-index: 0 !important;
    }
</style>

