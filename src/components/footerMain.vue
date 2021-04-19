<template>
  <div style="background-color:#111111">
    <div class="mt-10 mb-10 px-10 d-flex">
      <hr width="100%" class="border-line" />
    </div>
    <v-footer color="#111111" style="border-style: none;" class="pt-0">
      <v-row class="data-footer pt-0">
        <div>
          <v-col cols="12">
            <span class="text">MÍDIAS SOCIAIS</span>
          </v-col>
          <v-col cols="12" class="pt-1">
            <v-btn
              v-for="(item, index) in icons"
              :key="index"
              width="40px"
              icon
            >
              <a :href="item.href" target="_blank">
                <img height="45px" width="45px" :src="item.src" />
              </a>
            </v-btn>
          </v-col>
          <v-col :class="$vuetify.breakpoint.mdAndUp ? 'my-2' : ''">
            <v-btn
              outlined
              style="color:#6c4711; padding: 20px 20px 20px 20px"
              class="pa-7"
              href="https://api.whatsapp.com/send?phone=5511951323947"
              target="_blank"
              >entre em contato</v-btn
            >
          </v-col>
          <v-col>
            <span class="text"> Livia de Sousa Oliveira Arquitetura Ltda </span
            ><br />
            <span class="text"> +55 11 95132-3947 </span><br />
            <span class="text"> São Paulo, Brasil </span><br />
            <span class="text">
              CAU-SP 2567695
            </span>
          </v-col>
        </div>
        <div style="margin-right:100px" v-if="$vuetify.breakpoint.smAndUp">
          <v-col>
            <v-btn
              outlined
              style="color:#6c4711; padding: 100px 20px 100px 20px"
            >
              <a href="https://linktr.ee/liviaoliveira_arq" target="_blank">
                <img :src="require('@/assets/qrCode.png')" />
              </a>
            </v-btn>
          </v-col>
        </div>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        {
          src: require("@/assets/img/icons/icon_facebook.png"),
          href: "https://web.facebook.com/liviaoliveiraarq?_rdc=1&_rdr",
        },
        {
          src: require("@/assets/img/icons/icon_instagram.png"),
          href: "https://www.instagram.com/liviaoliveira_arq/",
        },
        {
          src: require("@/assets/img/icons/icon_linkedin.png"),
          href: "https://www.linkedin.com/in/livia-oliveira-48384b1b7/",
        },
        {
          src: require("@/assets/img/icons/icon_pinterest.png"),
          href: "https://br.pinterest.com/liviaoliveira_arq/",
        },
      ],
    };
  },
};
</script>
<style scoped lang="sass">
@mixin color-gradient-text
  background-image: radial-gradient(circle at 58.46% 50%, #ac8b4a 0, #a27a37 25%, #956521 50%, #885008 75%, #7e3f00 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent

@mixin color-gradient-item
  background-image: radial-gradient(circle at 58.46% 50%, #ac8b4a 0, #a27a37 25%, #956521 50%, #885008 75%, #7e3f00 100%)

.text
  @include color-gradient-text
  font-size: 20px
  letter-spacing: 2px

.border-line
  @include color-gradient-item
  height:1px
  border-style: none

.data-footer
  display: flex
  justify-content: space-between
  align-items: center
  padding: 5px 20px 5px 20px

@media  screen and (max-width: 800px)
    .text
       font-size: 17px
</style>
