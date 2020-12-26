<template>
  <div>
    <v-dialog v-model="dialog" fullscreen>
      <v-card color="#111111">
        <v-card-title>
          <div>
            <v-btn
              class="menu-actions pa-8 "
              absolute
              top
              right
              icon
              @click="dialog = !dialog"
            >
              <a><img :src="require('@/assets/close.png')"/></a>
            </v-btn>
          </div>
        </v-card-title>
        <v-col class="d-flex align-center justify-center" v-if="loading">
          <v-progress-circular
            style="margin-top: 25vh;"
            :size="50"
            color="#d3931e"
            indeterminate
          ></v-progress-circular>
        </v-col>
        <v-row
          v-else
          v-for="(item, key) in project"
          :key="key"
          :class="
            $vuetify.breakpoint.smAndDown
              ? 'd-flex justify-center align-center'
              : ''
          "
        >
          <v-col class="pl-0 d-flex justify-center" cols="12">
            <p class="menu-actions" style="border-bottom: 1px solid  #d3931e;">
              {{ item.name }}
            </p>
          </v-col>
          <!-- $vuetify.breakpoint.smAndDown -->
          <v-col
            v-for="(image, key) in item.images"
            :key="key"
            class="d-flex justify-center align-center"
            cols="12"
            lg="4"
            md="4"
            sm="10"
          >
            <v-img :src="image" aspect-ratio="1">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    projectId: {
      type: String,
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    ...mapGetters({
      project: "projects/selectProject",
    }),
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.$store.dispatch("projects/getProject", this.projectId);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    this.loading = true;
  },
};
</script>
<style scoped>
>>> .menu-actions {
  color: #d3931e !important;
  font-size: 20px !important;
  letter-spacing: 2px !important;
}
</style>
