<template>
  <div style="background-color: #111111; border-style: none;" class="pa-0">
    <v-item-group>
      <v-row no-gutters>
        <v-col
          v-for="(item, key) in projects"
          :key="key"
          class="d-flex child-flex fadeIn my-3"
          cols="12"
          lg="4"
          md="4"
          sm="12"
        >
          <v-hover v-slot="{ hover }">
            <div :class="{ 'on-hover': hover }">
              <v-img :src="item" aspect-ratio="1" class="grey lighten-2 ">
                <div
                  @click="setDialog(item.id)"
                  v-if="$vuetify.breakpoint.mdAndUp"
                  :class="{ 'show-btns': hover }"
                  :style="hover ? 'opacity: 100%' : 'opacity: 0.0'"
                  class="justify-center align-center"
                >
                  <v-row class="d-flex flex-column mx-3">
                    <span
                      class="d-flex flex-column justify-center align-center"
                      >{{ item.name }}</span
                    >
                  </v-row>
                </div>
                <div
                  @click="setDialog(item.id)"
                  v-else
                  style="background-color: #000000a1; height:100%"
                  class="justify-center align-center"
                >
                  <v-row class="d-flex flex-column mx-3">
                    <span
                      class="d-flex flex-column justify-center align-center"
                      >{{ item.name }}</span
                    >
                  </v-row>
                </div>
              </v-img>
            </div>
          </v-hover>
          <detailProjects
            v-model="openDetailProject"
            v-if="openDetailProject"
            :projectId="projectId"
          ></detailProjects>
        </v-col>
      </v-row>
    </v-item-group>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import detailProjects from "@/components/detailProjects.vue";
export default {
  components: {
    detailProjects,
  },
  data() {
    return {
      value: "recent",
      id: 1,
      openDetailProject: false,
      projectId: null,
    };
  },
  computed: {
    ...mapGetters({
      projects: "projects/listProjects",
    }),
  },
  mounted() {
    this.$store.dispatch("projects/getAllProjects");
  },
  methods: {
    setDialog(id) {
      this.openDetailProject = true;
      this.projectId = id;
    },
  },
};
</script>
<style scoped>
>>> .on-hover {
  transform: scale(1.1);
  transition: 0.5s ease-in-out;
}

>>> .show-btns {
  transition: opacity 0.5s ease-in-out;
  background-color: #000000d5;
  height: 100%;
  cursor: pointer;
}
>>> span {
  letter-spacing: 2px;
  font-size: calc(20px + 1vw);
  background-image: linear-gradient(
    45deg,
    #a96e1f,
    #bf8924,
    #d9a91a
  ) !important;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-top: 25vh;
}
</style>
