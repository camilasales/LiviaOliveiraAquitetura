<template>
  <div>
    <v-dialog v-model="dialog" width="900" scrollable>
      <v-card color="#111111" class="px-2">
        <v-card-title>
          <div>
            <v-btn
              class="menu-actions"
              absolute
              top
              right
              icon
              @click="dialog = !dialog"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-col class="pl-0 d-flex justify-center pr-10" cols="12">
            <h3 class="menu-actions">
              {{ projectName }}
            </h3>
          </v-col>
        </v-card-title>
        <v-card-text class="px-0">
          <v-col class="d-flex align-center justify-center" v-if="loading">
            <v-progress-circular
              :size="50"
              color="#6c4711"
              indeterminate
            ></v-progress-circular>
          </v-col>
          <v-row
            no-gutters
            v-else
            v-for="(item, key) in project"
            :key="key"
            class="d-flex justify-center align-center"
          >
            <!-- <v-col class="pl-0 d-flex justify-center pr-10" cols="12">
                <p class="menu-actions">
                  {{ item.name }}
                </p>
              </v-col> -->
            <!-- $vuetify.breakpoint.smAndDown -->
            <v-col
              v-for="(image, key) in item.images"
              :key="key"
              class="d-flex justify-center align-center ma-2"
              cols="10"
            >
              <v-img :src="image" aspect-ratio="1">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-card-text>
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
    projectName: {
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
  color: #6c4711 !important;
  font-size: 20px !important;
  letter-spacing: 2px !important;
}
</style>
