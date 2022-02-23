<template>
  <!--  <div class="article-item">-->
  <!--    文章列表组件-->
  <!--  </div>-->
  <van-cell>
    <!-- 使用 title 插槽来自定义标题 -->
    <template #title>
      <span class="van-multi-ellipsis--l2">想做以STEAM为核心的乐高机器人创客少儿编程教育培训机构，如何规划？需要着重考虑和解决哪些问题？</span>
    </template>
    <template #label>
      <span>sjehfohgdo</span>&nbsp
      <span>1202条评论</span>&nbsp
      <span>{{ dayjs().to(dayjs('2022/02/23')) }}</span>
<!--      <span>{{ dayjs().fromNow() }}</span>-->
    </template>
    <template #right-icon>
      <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    </template>
  </van-cell>
</template>

<script>
import dayjs from '../utils/day.js';

export default {
  name: "ArticleItem",
  // data(){
  // return{
  //   time:'dayjs().format()'
  // }
  // }
  // props: {
  //   article: {
  //     type: Object,
  //     required: true
  //   }
  // },
  setup() {
    return {dayjs}
  }
}
</script>

<style scoped>

</style>
