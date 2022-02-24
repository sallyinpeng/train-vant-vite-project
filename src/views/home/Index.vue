<template>
  <div class="home-container">
    <van-nav-bar class="page-nav-bar" fixed>
      <template #right>
        <van-button
            class="search-button"
            icon="search"
            type="info"
            round
            size="small">
          搜索
        </van-button>
      </template>
    </van-nav-bar>
    <van-tabs class="channels-tabs" v-model:active="active">
      <!--      <van-tab title="推荐"><ArticleList :channel="channel"/></van-tab>-->
      <van-tab title="推荐">
        <ArticleList/>
      </van-tab>
      <van-tab title="Vue">
        <ArticleList/>
      </van-tab>
      <van-tab title="React">
        <ArticleList/>
      </van-tab>
      <van-tab title="JQuery">
        <ArticleList/>
      </van-tab>
      <van-tab title="Ant Design">
        <ArticleList/>
      </van-tab>
      <van-tab title="MongoDB">
        <ArticleList/>
      </van-tab>
      <van-tab title="Docker">
        <ArticleList/>
      </van-tab>
      <template #nav-right>
        <i class="placeholder"></i>
        <van-icon
            name="wap-nav"
            class="nav-btn"
            @click="showPopup"></van-icon>
      </template>
    </van-tabs>
    <van-popup
        closeable
        v-model:show="isChannelEditShow"
        position="top"
        close-icon-position="top-left"
        :style="{ height: '100%' }"
    >
      <Channel-edit :active="active"></Channel-edit>
    </van-popup>
  </div>
</template>

<script>
import {ref} from 'vue';
import ArticleList from "./ArticleList.vue";
import ChannelEdit from "./ChannelEdit.vue";
// import {ref, reactive, onMounted, toRefs} from 'vue';
// import {getUserChannels} from '../../api/user'

// function useChannels() {
//   const state = reactive({
//     channels: []
//   })
//   const loadChannels = () => {
//     getUserChannels().then((res) => {
//       state.channels = res.data
//     })
//   }
//   onMounted(() => {
//     loadChannels()
//   })
//   return {
//     state
//   }
// }

export default {
  name: "Index",
  components: {ArticleList, ChannelEdit},
  setup() {
    const active = ref(0);
    const isChannelEditShow = ref(false);
    const showPopup = () => {
      isChannelEditShow.value = true;
    };
    // const {state} = useChannels()
    // return {active, ...toRefs(state)};
    return {active, isChannelEditShow, showPopup};
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding-bottom: 50px;

  .page-nav-bar {
    :deep(.van-nav-bar__text) {
      color: #f6f6f6;
    }

    .search-button {
      width: 300px;
      height: 30px;
      background-color: #5babfb;
      border: none;
      font-size: 18px;
      color: #fff;

      :deep(.van-button__icon) {
        color: #fff;
      }
    }
  }

  :deep(.van-tabs__wrap) {
    position: fixed;
    top: 46px;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .channels-tabs {


    :deep(.van-tab) {
      width: 120px;
      border-right: 1px solid #f5f5f5;
      font-size: 16px;
    }

    :deep(.van-tab--active) {
      color: dimgrey;
      font-weight: bold;
    }

    :deep(.van-tabs__line) {
      width: 50px;
      height: 2px;
      background-color: #5babfb;
    }

    :deep(.nav-btn) {
      position: fixed;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66px;
      height: 32px;
      background-color: #fff;
      opacity: 0.902;
      font-size: 23px;
    }

    :deep(.placeholder) {
      flex-shrink: 0; // 占位符让标签6完整可显示
      width: 66px;
      height: 32px;
    }
  }
}
</style>
