<template>
  <div id="footer">
    <div style="width: 100%;">
      {{ msg }}&nbsp;&nbsp;
      <router-link :to="link">{{ linkText }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['msg', 'link', 'linkText'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  line-height: 56px;
  width: 100%;
  border-top: 1px solid #eeeeee;
  font-size: 13px;
}
a {
  color: #00c4c4;
}
p {
 width: 100%;
}
</style>
