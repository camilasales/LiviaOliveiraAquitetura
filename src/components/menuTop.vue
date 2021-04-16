<template>
  <div>
    <v-toolbar height="120px" color="#111111">
      <v-toolbar-title v-if="$vuetify.breakpoint.smAndDown">
        <img :src="require('@/assets/logoMobile.png')" alt="" />
      </v-toolbar-title>
      <v-toolbar-title v-else>
        <img :src="require('@/assets/logo.png')" alt="" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="#d3931e"
        icon
        @click="dialog = true"
        :class="$vuetify.breakpoint.smAndUp ? 'mr-10' : 'mr-0'"
      >
        <a><img :src="require('@/assets/img/icons/icon_menu.png')"/></a>
      </v-btn>
    </v-toolbar>
    <v-dialog v-model="dialog" fullscreen>
      <v-card color="#000000" style="opacity: 0.9;">
        <v-card-title>
          <div>
            <v-btn
              class="menu-actions mt-10 mr-10"
              absolute
              top
              right
              icon
              @click="dialog = !dialog"
            >
              <a><img :src="require('@/assets/img/icons/icon_close.png')"/></a>
            </v-btn>
          </div>
        </v-card-title>

        <v-card-text class="mt-16">
          <v-col class="pl-0 d-flex justify-center" cols="12">
            <p class="menu-actions" style="border-bottom: 1px solid  #6c4711;">
              MENU
            </p>
          </v-col>
          <div class="text-center">
            <div class="my-2">
              <v-btn
                @click="changePage('Home')"
                color="#d3931e"
                dark
                text
                class="menu-actions"
              >
                inicio
              </v-btn>
            </div>
            <div class="my-2">
              <v-btn
                @click="changePage('Projetos')"
                dark
                text
                class="menu-actions"
              >
                projetos
              </v-btn>
            </div>
            <div class="my-2">
              <v-btn
                @click="changePage('Servicos')"
                dark
                text
                class="menu-actions"
              >
                serviços
              </v-btn>
            </div>
            <div class="my-2">
              <v-btn
                @click="changePage('Sobre')"
                dark
                text
                class="menu-actions"
              >
                sobre
              </v-btn>
            </div>
            <div class="my-2">
              <v-btn
                dark
                @click="changePage('Contato')"
                text
                class="menu-actions"
              >
                contato
              </v-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    changePage(routerName) {
      this.$router
        .push({
          path: routerName,
          name: routerName,
        })
        .catch(() => {});
      this.dialog = false;
    },
  },
};
</script>
<style scoped lang="sass">
.menu-actions
  color: #946319 !important
  font-size: 20px !important
  letter-spacing: 2px !important
</style>
