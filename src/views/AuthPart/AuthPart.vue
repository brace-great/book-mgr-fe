<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title">
      <img
        class="logo"
        src="https://ncstatic.clewm.net/rsrc/2020/1016/02/4757e4910cb527fc040d019a93ded74f.png?x-oss-process=image/resize,w_750/format,gif/sharpen,100/quality,Q_80/interlace,1/auto-orient,1"
        alt=""
        style="user-select: auto"
      />
      <h2 class="title-text">图书管理系统后台</h2>
    </div>
    <div class="form">
      <a-tabs defaultActiveKey="1" onChange="{callback}">
        <a-tabPane tab="登入" key="1">
          <div class="item">
            <a-input size="large" placeholder="账户" />
          </div>
          <div class="item"><a-input size="large" placeholder="密码" /></div>
          <div class="item left"><a href="">忘记密码</a></div>
          <div class="item">
            <a-button size="large" type="primary">登入</a-button>
          </div>
        </a-tabPane>
        <a-tabPane tab="注册" key="2">
          <div class="item">
            <a-input size="large" placeholder="账户" />
          </div>
          <div class="item"><a-input size="large" placeholder="密码" /></div>
          <div class="item"><a-input size="large" placeholder="邀请码" /></div>

          <div class="item">
            <a-button size="large" type="primary">注册</a-button>
          </div>
        </a-tabPane>
      </a-tabs>
    </div>
  </div>
</template>

<script></script>

<style lang="sass" scoped>
@import './AuthPart.sass'
</style>
