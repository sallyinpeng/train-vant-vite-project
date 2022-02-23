<template>
  <div class="channel-edit">
    <van-cell>
      <template #title>
        <span class="title-text">我的频道</span>
      </template>
      <van-button plain round type="danger" size="small" class="edit-btn">编辑</van-button>
    </van-cell>
    <van-grid :gutter="10" class="my-grid">
      <van-grid-item
          v-for="value in 8"
          :key="value"
          icon="clear"
          text="文字"
          class="my-grid-item"
      />
    </van-grid>
    <van-cell>
      <template #title>
        <span class="title-text">频道推荐</span>
      </template>
    </van-cell>
    <van-grid :gutter="10" class="recommend-grid">
      <van-grid-item
          v-for="value in 8"
          :key="value"
          icon="plus"
          text="文字好"
          class="recommend-grid-item"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "ChannelEdit"
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
