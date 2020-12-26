<template >
  <v-app id="app" color="#111111">
    <menuTop style="border-style: none;"></menuTop>
    <router-view />
    <footerMain></footerMain>
  </v-app>
</template>
<script>
import menuTop from "@/components/menuTop.vue";
import footerMain from "@/components/footerMain.vue";

export default {
  components:{
    menuTop,
    footerMain
  }
}
</script>
<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
@font-face {
  font-family: 'Brotherhood_Script';
  src: local("Brotherhood_Script"), url('./assets/fonts/Brotherhood_Script.ttf') format('font-truetype');
  
}
#app {
  font-family: 'Raleway', sans-serif;

  margin: 0;
  padding: 0;
}
</style>
