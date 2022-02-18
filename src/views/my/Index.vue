<template>
  <div class="container">
    <!--  //  未登录页面-->
      <div v-if="!userState" class="container-login">
        <div class="header-not-login" @click="this.$router.push('/login')">
          <van-image
              class="login-img"
              round
              width="10rem"
              height="10rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <span class="login-text">注册/登录</span>
        </div>
    </div>
<!--    // 已登录页面-->
    <div  v-else class="container-login">

        <div class="header-login">
          <van-image
              class="login-img"
              round
              width="10rem"
              height="10rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="login-title">
            <span class="login-text">博学谷头条号</span>
          </div>
          <div class="login-edit">
            <van-button round size="small" type="primary">编辑资料</van-button>
          </div>
        </div>
        <div class="bottom-login">
          <div class="bottom-item">
            <span class="item-num">10</span>
            <span class="item-text">头条</span>
          </div>
          <div class="bottom-item">
            <span class="item-num">10</span>
            <span class="item-text">关注</span>
          </div>
          <div class="bottom-item">
            <span class="item-num">10</span>
            <span class="item-text">粉丝</span>
          </div>
          <div class="bottom-item">
            <span class="item-num">10</span>
            <span class="item-text">获赞</span>
          </div>
        </div>
    </div>
      <van-grid :column-num="2" clickable>
        <van-grid-item icon="star-o" text="收藏"/>
        <van-grid-item icon="clock-o" text="历史"/>
      </van-grid>
      <van-cell-group>
        <van-cell title="消息通知" is-link/>
        <van-cell title="小智同学" is-link/>
      </van-cell-group>
      <van-button @click="this.$router.push('/login')" v-if="userState" class="logout" type="default">退出登录</van-button>

  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  name: "Index",
  setup() {
    const store = useStore()
    const userState = computed(() => store.state.user)
    return {
      userState
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding-bottom: 15%;

  .container-login {
    height: 321px;
    background-color: #a1c7ed;
    opacity: 0.85;
    background-size: cover;

    .header-not-login {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 20%;

        .login-text {
          color: #f6f6f6;
          margin-top: 10px;
          text-align: center;


      }
    }

    .header-login {
      display: flex;
      align-items: center;
      padding: 15px 10px;

      .login-title {
        color: #f6f6f6;
        margin-left: 8px;
        margin-right: 8px;
      }

      .login-edit {
        :deep( .van-button--primary) {
          background-color: #fff;
          border: #fff;
          color: black;
        }
      }
    }

    .bottom-login {
      display: flex;
      align-items: center;
      color: #ffffff;

      .bottom-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 23.3%;
        padding: 10px 15px;

        .item-text {
          font-size: 18px;
        }
      }
    }
  }

  :deep(.van-grid-item__icon) {
    color: #eb5253;
  }

  .logout {
    margin-left: 38%;

  }

  :deep(.van-button--default) {
    border: none;
    margin-top: 9px;
    color: #d86262;
  }

}
</style>
