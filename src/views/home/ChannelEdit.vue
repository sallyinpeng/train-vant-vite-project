<template>
  <div class="channel-edit">
    <van-cell>
      <template #title>
        <span class="title-text">我的频道</span>
      </template>
      <template #value>
        <van-button plain round type="danger" size="small" class="edit-btn" @click="isEdit=!isEdit">编辑</van-button>
      </template>
    </van-cell>
    <van-grid :gutter="10" class="my-grid">
      <van-grid-item
          v-for="(item,index) in myChannels"
          :key="item.name"

          class="my-grid-item"
      >
        <template #default>
          <van-icon name="clear" v-show="isEdit"></van-icon>
          <span
              class="text"
              :class="{active:index===active}"
          >
          {{ item.name }}
        </span>
        </template>
      </van-grid-item>
    </van-grid>
    <van-cell>
      <template #title>
        <span class="title-text">频道推荐</span>
      </template>
    </van-cell>
    <van-grid :gutter="10" class="recommend-grid">
      <van-grid-item
          v-for="item in moreChannels"
          :key="item.name"
          icon="plus"
          :text="item.name"
          class="recommend-grid-item"
      />
    </van-grid>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "ChannelEdit",
  props: {
    // myChannels:{
    //   type:Array,
    //   required:true,
    // }
    active: {
      type: Number,
      required: true
    }
  },
  setup() {
    const state = reactive({
      isEdit: false,
    })
    return {
      ...toRefs(state)
    }
  },
  data() {
    return {
      myChannels: [
        {name: '推荐'},
        {name: 'Vue'},
        {name: 'React'},
        {name: 'JQuery'},
        {name: 'Ant Design'},
        {name: 'MongoDB'},
        {name: 'Docker'},
        {name: 'Koa'}
      ],
      moreChannels: [
        {name: 'Net Core'},
        {name: 'Java'},
        {name: 'C++'},
        {name: 'Go'},
        {name: 'Jscript'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.channel-edit {
  padding-top: 80px;

  :deep(.van-cell__title) {
    margin-top: 8px;
  }

  .title-text {
    font-size: 18px;
    color: #333;
    margin-top: 10px;
  }

  .edit-btn {
    width: 80px;
    height: 30px;
    font-size: 16px;
  }

  .my-grid-item {
    width: 88px;
    height: 66px;
    background-color: #f4f5f6;

    :deep(.van-icon-clear) {
      position: absolute;
      font-size: 16px;
      top: -5px;
      right: -5px;
      z-index: 2;
      color: #cacaca;
    }

    .text {
      font-size: 16px;
      color: #222;
      margin-top: 0;

      &.active {
        color: red;
      }
    }
  }

  .recommend-grid-item {
    width: 88px;
    height: 66px;
    background-color: #f4f5f6;
  }

  :deep(.van-grid-item__text) {
    font-size: 16px;
    color: #222;
    margin-top: 0;
  }

  :deep(.van-grid-item__content) {
    flex-direction: row;
    white-space: nowrap;
  }

  :deep(.van-icon) {
    margin-right: 5px;
    font-size: 16px;
    padding-bottom: 5px;
  }

  .recommend-item {
    display: flex;

  }
}
</style>
