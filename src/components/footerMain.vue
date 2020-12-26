<template>
<div style="background-color:#111111">
  <div class="my-10 px-10 d-flex">
      <hr
        style="height:1px; background-color: #735702; border-style: none;"
        width="100%"
      />
    </div>
  <v-footer
    color="#111111"
    style="border-style: none;"
  >
    <v-row class="data-footer" > 
        <div>
            <v-col cols="12">
                <span class="text" >MÍDIAS SOCIAIS</span>
            </v-col>
            <v-col
                cols="12"
                class="pt-4"
            >
                <v-btn
                v-for="(item, index) in icons"
                :key="index"
                width="40px"
                icon
                >
                <a  :href="item.href" target="_blank" >
                <img
                    height="45px"
                    width="45px"
                    :src="item.src"
                >
                </a>
                </v-btn>
            </v-col>
            <v-col class="my-4">
                <v-btn outlined style="color:#BF8924; padding: 20px 20px 20px 20px" class="pa-7 text">entre em contato</v-btn>
            </v-col>
            <v-col>
                <span class="text">
                    Livia de Sousa Oliveira Arquitetura Ltda
                </span><br>
                <span class="text">
                    +55 11 95132-3947
                </span><br>
                <span class="text">
                    São Paulo, Brasil
                </span><br>
                <span class="text">
                    CAU-SP 2567695
                </span>
            </v-col>
        </div>
        <div style="margin-right:100px" v-if="$vuetify.breakpoint.smAndUp">
            <v-col>
                <v-btn outlined style="color:#BF8924; padding: 100px 20px 100px 20px" >
                    <a href="http://"  target="_blank">
                        <img
                        :src="require('@/assets/qrCode.png')"
                        />
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
                    src:require('@/assets/img/icons/icon_facebook.png'),
                    href:'#'
                },
                {
                    src:require('@/assets/img/icons/icon_instagram.png'),
                    href:'#'
                },
                {
                    src:require('@/assets/img/icons/icon_linkedin.png'),
                    href:'#'
                },
                {
                    src:require('@/assets/img/icons/icon_pinterest.png'),
                    href:'#'
                },
                {
                    src:require('@/assets/img/icons/icon_twitter.png'),
                    href:'#'
                },
                
                
                
                
                
            ],
        }
    },
  }
</script>
<style scoped>
>>>.text{
    color:#BF8924;
    font-size: 20px;
    letter-spacing: 2px;
}
>>>.data-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  5px 20px 5px 20px;

}
</style>