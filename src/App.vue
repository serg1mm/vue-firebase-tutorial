<template>
  <div id="app">
          <transition name="component-fade" mode="out-in">
            <router-view></router-view>
          </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.card--hover {
  cursor:default!important;
}
body{margin:0;padding:0;overflow:hidden;background: #eee!important;}
.application.theme--light {
  background: #eee!important;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: all .5s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
  transform: translateY(25%);
}
</style>
