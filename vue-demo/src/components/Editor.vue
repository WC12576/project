<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
        <!-- <li v-bind:class="{active: currentTab === 0}" v-on:click="currentTab = 0">
                                                            <svg class="icon" aria-hidden="true">
                                                              <use xlink:href="#icon-Id"></use>
                                                            </svg>
                                                          </li>
                                                          <li v-bind:class="{active: currentTab === 1}" v-on:click="currentTab = 1">
                                                            <svg class="icon" aria-hidden="true">
                                                              <use xlink:href="#icon-work"></use>
                                                            </svg>
                                                          </li>
                                                          <li v-bind:class="{active: currentTab === 2}" v-on:click="currentTab = 2">
                                                            <svg class="icon" aria-hidden="true">
                                                              <use xlink:href="#icon-book"></use>
                                                            </svg>
                                                          </li>
                                                          <li v-bind:class="{active: currentTab === 3}" v-on:click="currentTab = 3">
                                                            <svg class="icon" aria-hidden="true">
                                                              <use xlink:href="#icon-heart"></use>
                                                            </svg>
                                                          </li>
                                                          <li v-bind:class="{active: currentTab === 4}" v-on:click="currentTab = 4">
                                                            <svg class="icon" aria-hidden="true">
                                                              <use xlink:href="#icon-icongroup05"></use>
                                                            </svg>
                                                          </li>
                                                          <li v-bind:class="{active: currentTab === 5}" v-on:click="currentTab = 5">
                                                            <svg class="icon" aria-hidden="true">
                                                              <use xlink:href="#icon-phone"></use>
                                                            </svg>
                                                          </li> -->
      </ol>
    </nav>
    <ol class="panes">
      <li v-bind:class="{active: currentTab === 0}">
        <ProfileEditor v-bind:profile="resumer.profile"></ProfileEditor>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <ArrayEditor v-bind:items="resumer.studyHistory" v-bind:labels="resumer.labels" title="学习经历"></ArrayEditor>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <ArrayEditor v-bind:items="resumer.awards" v-bind:labels="resumer.labels" title="获奖情况"></ArrayEditor>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <ArrayEditor v-bind:items="resumer.workHistory" v-bind:labels="resumer.labels" title="工作经历"></ArrayEditor>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <ArrayEditor v-bind:items="resumer.projects" v-bind:labels="resumer.labels" title="项目经历"></ArrayEditor>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <ContactsEditor v-bind:contacts="resumer.contacts"></ContactsEditor>
      </li>
    </ol>
  </div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
import ArrayEditor from './ArrayEditor'
import ContactsEditor from './ContactsEditor'

export default {
  props: ['resumer'],
  components: { ProfileEditor, ArrayEditor, ContactsEditor },
  data() {
    return {
      currentTab: 0,
      icons: ['Id', 'book', 'icongroup05', 'work', 'heart', 'phone']
    }
  },
}
</script>

<style>
#editor {
  min-height: 100px;
  display: flex;
}

nav {
  background: black;
  width: 80px;
  height: 100%;
  ;
  padding-top: 16px;
}

nav ol li {
  padding: 16px 0;
  text-align: center;
}

nav ol li.active {
  background: white;
}

nav ol li.active .icon {
  fill: black;
}

nav li .icon {
  width: 32px;
  height: 32px;
  fill: white;
}

.panes {
  flex: 1;
}

.panes li {
  display: none;
  width: 100%;
  height: 100%;
  padding: 32px;
  overflow: auto;
}

.panes li.active {
  display: inline-block;
}

.panes li h2 {
  padding-bottom: 16px;
}

.panes li .wrapper {
  position: relative;
}

.el-icon-delete2 {
  position: absolute;
  top: 8px;
  right: 8px;
}

.addWorkHistory {
  margin-top: 16px;
}
</style>
