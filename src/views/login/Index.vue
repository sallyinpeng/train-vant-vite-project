<template>
  <van-nav-bar class="page-nav-bar"
               title="登录"
               left-text="返回"
               left-arrow
               @click-left="this.$router.push('/my')"
  />
  <van-form @submit="onSubmit">
    <van-field
        name="username"
        placeholder="请输入用户名"
        left-icon="manager"
        v-model="username"
        :rules="formRules.username"
    />
    <van-field
        type="password"
        name="password"
        placeholder="请输入密码"
        left-icon="lock"
        v-model="password"
        :rules="formRules.password"
    />
    <div style="margin: 16px;">
      <van-button block type="primary" native-type="submit" >
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script>
// 构建登录请求
// 获取用户名和密码发送到服务器
import {reactive, toRefs} from "vue";
import {login} from '../../api/user';
import {Toast} from 'vant';
import {useStore} from 'vuex'
import router from '../../router'

const userSubmit = (user) => {
  const store = useStore()
  // const onSubmit = async function (){
  const onSubmit = async () => {
    Toast.loading({
      message: '登录中...',
      forbidClick: true,
    });
    const res = await login(user);
    if (res.data.code === 0) {
      store.commit('setUser', res.data.token) // 服务端返回的数据存储到vuex中
      // console.log('用户登录成功')
      Toast.success('用户登录成功');
      router.push('./my')
    } else {
      // console.log('用户名或密码错误')
      Toast.fail('用户名或密码错误');
    }
  };
  // 定义表单校验规则
  const formRules = {
    username: [{required: true, message: '请填写用户名'}],
    password: [
      {required: true, message: '请填写密码'},
      {pattern: /^\d{6,22}$/, message: '密码格式错误'}]
  };
  return {
    onSubmit,
    formRules,
  }
}

export default {
  name: "Login",
  setup() {
    // const onClickLeft = () => history.back();
    const user = reactive({
      username: '',
      password: '',
    })
    return {
      // onClickLeft,
      ...toRefs(user),
      ...userSubmit(user)
    };
  },
}
</script>

<style lang="less" scoped>
.page-nav-bar {
  :deep(.van-nav-bar__text) {
    color: #f6f6f6;
  }

  :deep(.van-icon) {
    color: #f6f6f6;
  }
}
</style>
