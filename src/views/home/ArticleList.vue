<template>
  <div class="article-list">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
<!--        <van-cell v-for="item in list" :key="item" :title="item"/>-->
<!--        <ArticleItem v-for="article in list" :key="article.id"></ArticleItem>-->
        <ArticleItem v-for="item in list" :key="item" :title="item" class="van-cell"></ArticleItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import {ref} from 'vue';
import ArticleItem from "../../components/ArticleItem.vue";

export default {
  name: "ArticleList",
  components:{
    ArticleItem
  },
  setup() {
    const list = ref([]);
    const error = ref(false);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {

        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };
    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };
    return {
      list,
      error,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing
    };
  },
  // props: {
  //   channel: {
  //     type: Object,
  //     required: true
  //   }
  // }
}
</script>

<style lang="less" scoped>
.article-list {
  margin-top: 80px;
  height: 560px;
  overflow-y: auto;
}
</style>
