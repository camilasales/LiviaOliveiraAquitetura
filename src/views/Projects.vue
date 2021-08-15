<template>
  <div style="background-color: #111111; border-style: none;" class="pa-0">
    <v-item-group>
      <v-row no-gutters>
        <v-col
          v-for="(item, key) in projects"
          :key="key"
          class=" my-2"
          cols="12"
          lg="4"
          md="4"
          sm="12"
        >
          <v-hover v-slot="{ hover }">
            <div class="on-hover">
              <v-img class="img" :src="item" aspect-ratio="1">
                <div
                  @click="setDialog(item.id, item.name)"
                  v-if="$vuetify.breakpoint.mdAndUp"
                  :class="{ 'show-btns': hover }"
                  :style="hover ? 'opacity: 100%' : 'opacity: 0.0'"
                >
                  <v-row align="center" justify="center">
                    <span>{{ item.name }} </span>
                  </v-row>
                  <div class="mx-3" align="center" justify="center">
                    <span class="body-1">Ver mais</span>
                  </div>
                </div>
                <div
                  @click="setDialog(item.id, item.name)"
                  v-else
                  style="background-color: #000000a1; height:100%; opacity: 100%"
                  class="justify-center align-center"
                >
                  <v-row align="center" justify="center">
                    <span>{{ item.name }} </span>
                  </v-row>
                  <div class="mx-3" align="center" justify="center">
                    <span class="body-1">Ver mais</span>
                  </div>
                </div>
              </v-img>
            </div>
          </v-hover>
          <detailProjects
            v-model="openDetailProject"
            v-if="openDetailProject"
            :projectId="projectId"
            :projectName="projectName"
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
      projectName: "",
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
    setDialog(id, name) {
      this.openDetailProject = true;
      this.projectId = id;
      this.projectName = name;
    },
  },
};
</script>
<style scoped>
.on-hover {
  overflow: hidden;
}
.on-hover .img {
  max-width: 100%;
  -moz-transition: all 0.8s;
  -webkit-transition: all 0.8s;
  transition: all 0.8s;
}
.on-hover:hover .img {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.2);
  transition: 0.8s ease-in-out;
}

.show-btns {
  transition: opacity 0.5s ease-in-out;
  background-color: #000000d5;
  height: 100%;
  cursor: pointer;
}
span {
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
