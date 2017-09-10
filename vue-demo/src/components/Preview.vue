<template>
  <div id="Preview">
    <section class="infoWrapper">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="info">
        <h3>姓名：{{resumer.profile.name}}</h3>
        <h3>城市：{{resumer.profile.city}}</h3>
        <h3>生日：{{resumer.profile.birth}}</h3>
        <h3>QQ：{{resumer.contacts.qq}}</h3>
        <h3>邮箱：{{resumer.contacts.email}}</h3>
        <h3>Github：{{resumer.contacts.github}}</h3>
        <h3>博客：{{resumer.contacts.blog}}</h3>
        <h3>电话：{{resumer.contacts.phone}}</h3>
      </div>
    </section>
    <section class="main">
      <div class="studyHistory">
        <h2>学习经历</h2>
        <ul>
          <li v-for="studyHistory in resumer.studyHistory">
            <div class="duration">{{studyHistory.duration}}</div>
            <div class="school">{{studyHistory.school}}</div>
            <div class="degree">{{studyHistory.degree}}</div>
          </li>
        </ul>
      </div>
      <div class="awards">
        <h2>获奖经历</h2>
        <ul>
          <li v-for="awards in resumer.awards">
            <div class="duration">{{awards.duration}}</div>
            <div class="siuation">{{awards.siuation}}</div>
          </li>
        </ul>
      </div>
      <div class="workHistory">
        <h2>工作经历</h2>
        <ul>
          <li v-for="workHistory in resumer.workHistory">
            <div class="company">{{workHistory.company}}</div>
            <div class="content">{{workHistory.content}}</div>
          </li>
        </ul>
      </div>
      <div class="project">
        <h2>项目经历</h2>
        <li v-for="project in resumer.projects">
          <div class="name">{{project.name}}</div>
          <div class="mainContent">{{project.mainContent}}</div>
        </li>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['resumer'],
  //methods:{
  //  isEmpty(object){
  //    let empty = true
  //    for(let key in object){
  //      if(object[key]){
  //        empty = false
  //        break
  //      }
  //    }
  //    return empty
  //  },
  //  filter(array){ //找出非空对象
  //    return array.filter(item=> !this.isEmpty(item))
  //  }
  //}
}
</script>

<style>
.preview {
  display: flex;
}

.infoWrapper {
  min-width: 250px;
  background: #999;
}

.infoWrapper .logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.infoWrapper .logo img {
  max-width: 100px;
  max-height: 100px;
  margin: 80px auto;
  border: 1px solid white;
  border-radius: 50%;
}

.infoWrapper .info h3 {
  margin: 10px 10px;
}

.main {
  flex: 1;
  padding: 40px 30px;
}

.main>div {
  padding-bottom: 20px;
}

.main>div h2 {
  padding-bottom: 10px;
  border-bottom: 2px solid #999;
}

.main .studyHistory {
  min-height: 150px;
}

.main .studyHistory li {
  font-size: 20px;
  line-height: 30px;
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.main .studyHistory div {
  font-size: 20px;
  line-height: 30px;
}

.main .studyHistory .duration {
  flex: 1;
}

.main .studyHistory .school {
  flex: 3;
}

.main .studyHistory .degree {
  flex: 2;
}

.main .awards {
  min-height: 150px;
}

.main .awards li {
  font-size: 20px;
  line-height: 30px;
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.main .awards div {
  font-size: 20px;
  line-height: 30px;
}

.main .awards .duration {
  flex: 1;
}

.main .awards .siuation {
  flex: 3;
}

.main .workHistory {
  min-height: 200px;
}

.main .workHistory li {
  font-size: 20px;
  line-height: 30px;
  margin: 5px 0;
}

.main .workHistory .company {
  font-size: 25px;
  line-height: 30px;
  margin: 5px 0;
}

.main .workHistory .content {
  font-size: 18px;
  line-height: 25px;
  margin: 5px 0;
}

.main .project {
  min-height: 200px;
}

.main .project .name {
  font-size: 25px;
  line-height: 30px;
  margin: 5px 0;
}

.main .project .mainContent {
  font-size: 18px;
  line-height: 25px;
  margin: 5px 0;
}
</style>
