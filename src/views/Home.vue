<template>
  <div style="background-color: #111111;">
    <div class="home grid-information">
      <v-img
        :src="require('@/assets/liviaOliveira.jpg')"
        jumbotron
        id="imgHome"
      ></v-img>
      <!-- quadrado de information e explication -->
      <div class="d-flex information fadeIn">
        <v-col class="font-information">
          <p>
            Fundado em 2020, localizado na cidade de São Paulo, o L.O.
            Arquitetura é focado em projeto arquitetônico e de interiores no
            segmento residencial, comercial e corporativo.
          </p>
          <br />
          <p>
            Com um design contemporâneo, sofisticação e um atendimento altamente
            personalizado, o objetivo é transformar a vida dos clientes
            proporcionando experiências únicas.
          </p>
        </v-col>
      </div>
    </div>

    <!-- servicos -->
    <v-row no-gutters class="pl-12 py-10">
      <v-col cols="12" md="4" lg="4" sm="4" class="d-flex flex-column pa-2">
        <img
          v-if="$vuetify.breakpoint.smAndUp"
          height="45px"
          width="45px"
          :src="require('@/assets/img/icons/icon_regua.png')"
        />
        <span class="title-topics"
          >PROJETO DE INTERIORES (Projeto Executivo de Interiores)</span
        >
        <span class="title-text">
          Projeto completo para você realizar sua obra, sendo ela do zero ou uma
          reforma, nele constam todas as informações e detalhamentos
          necessários. <br />
          <span
            class="px-2 mt-2"
            style="background-color:#6c4711; color:#111111; font-size: 20px; margin-top:15px; margin-bottom:15px;"
            >MAIS PEDIDO</span
          >
        </span>
      </v-col>
      <v-col cols="12" md="4" lg="4" sm="4" class="d-flex flex-column pa-2">
        <img
          v-if="$vuetify.breakpoint.smAndUp"
          height="45px"
          width="45px"
          :src="require('@/assets/img/icons/icon_prancheta.png')"
        />
        <span class="title-topics"
          >PROJETO ARQUITETÔNICO (Projeto Executivo de Arquitetura)</span
        >
        <span class="title-text">
          Projeto completo para você realizar sua obra, sendo ela do zero ou uma
          reforma, nele constam todas as informações e detalhamentos
          necessários. <br />
          <span
            class="px-2 mt-2"
            style="background-color:#6c4711; color:#111111; font-size: 20px; margin-top:15px; margin-bottom:15px;"
          >
            MAIS PEDIDO</span
          >
        </span>
      </v-col>
      <v-col cols="12" md="4" lg="4" sm="4" class="d-flex flex-column pa-2">
        <img
          v-if="$vuetify.breakpoint.smAndUp"
          height="45px"
          width="45px"
          :src="require('@/assets/img/icons/icon_luminaria.png')"
        />
        <span class="title-topics">
          CONSULTORIA DE INTERIORES
        </span>
        <span class="title-text">
          Projeto simplificado para uma reforma de um ambiente. Pode estar
          acompanhado ou não do 3D.
        </span>
      </v-col>
      <v-col cols="12" class="mt-14">
        <v-btn
          @click="$router.push({ name: 'Servicos' })"
          outlined
          style="color:#6c4711; padding: 20px 20px 20px 20px"
          class="pa-7"
          >Saiba Mais</v-btn
        >
      </v-col>
    </v-row>
    <!-- fim servicos -->

    <!-- projetos -->
    <v-row no-gutters class="px-10 my-1 mt-6" justify="space-between">
      <v-col cols="12">
        <p
          style="color:#6c4711; font-size: 30px; margin-top:15px; margin-bottom:15px;"
        >
          PROJETOS
        </p>
      </v-col>
    </v-row>
    <v-row no-gutters class="px-10 list" justify="space-between">
      <v-col cols="12" sm="12" lg="4" md="4" class="pr-4 mb-4 item-list">
        <v-img
          class="img"
          aspect-ratio="1"
          :src="
            require('@/assets/img/projects/laranjalPaulista/laranjal_paulista_1.jpg')
          "
        >
          <span>Laranjal Paulista</span>
        </v-img>
      </v-col>

      <v-col cols="12" sm="12" lg="4" md="4" class="pr-4 mb-4 item-list">
        <v-img
          class="img"
          aspect-ratio="1"
          :src="require('@/assets/img/projects/ap1135/ap1135_1.jpeg')"
        >
          <span>Apartamento 1135</span>
        </v-img>
      </v-col>

      <v-col cols="12" sm="12" lg="4" md="4" class="pr-4 mb-4 item-list">
        <v-img
          class="img"
          aspect-ratio="1"
          :src="
            require('@/assets/img/projects/residencial50/residencial50_1.jpg')
          "
        >
          <span>Residencial 50</span>
        </v-img>
      </v-col>
      <v-col cols="10" class="mt-4 mb-12">
        <v-btn
          @click="$router.push({ name: 'Projetos' })"
          outlined
          style="color:#6c4711;"
          class="pa-7"
          >Ver todos os projetos</v-btn
        >
      </v-col>
    </v-row>
    <!-- fim projetos -->

    <!-- comentarios -->
    <v-row no-gutters class="px-10 py-10 ">
      <v-col
        v-for="(item, index) in coments"
        :key="index"
        cols="12"
        sm="12"
        lg="4"
        md="4"
        class="d-flex flex-row justify-space-between"
      >
        <v-col
          class="d-flex flex-column justify-space-between align-center pa-2 mb-4 coments-people"
        >
          <img
            height="45px"
            width="45px"
            :src="require('@/assets/img/icons/icon_comentario.png')"
          />
          <span style="color:#ffffff; text-align: center;" class="px-3 pt-8">
            {{ item.text }}
          </span>
          <div class="mt-8 px-2 d-flex flex-column align-center justify-center">
            <hr
              style="height:1px; background-color: #6c4711; border-style: none;"
              width="100px"
            />
            <span style="color:#ffffff;" class="mt-4">{{ item.name }}</span>
            <span style="color:#ffffff;" class="mb-2">{{ item.project }}</span>
          </div>
          <!-- <v-avatar>
            <img
              :src="require('@/assets/img/coments/coments_foto.png')"
              alt="John"
            >
          </v-avatar> -->
        </v-col>
      </v-col>
    </v-row>
    <!-- fim comentarios -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      coments: [
        {
          name: "Alex Beijos e Larissa Perdomo",
          project: "Projeto de Interiores",
          text:
            "Foi a primeira vez que contratamos uma Arquiteta e foi uma excelente experiência, só temos elogios. Passamos por alguns momentos de mudanças nas nossas vidas durante o projeto e a Lívia sempre esteve lá entendendo tudo e nos ajudando.\n Excelente profissional, soube captar o que queríamos e transformou os nossos sonhos e idéias em um lindo apartamento.",
          urlPicture: null,
        },
        {
          name: "Maryanna",
          project: "Projeto de Interiores",
          text:
            "Foi e está sendo uma excelente experiência. Eu já tive várias ideias para o quarto das meninas, porém, o projeto me fez visualizar o mesmo, encontrar os itens... Foi determinante, com certeza. Ajudou muito no planejamento, pois já estava dentro do orçamento e com os itens que queríamos. Achei a eperiência maravilhosa, como já comentei... E sinceramente, se tivesse condições financeiras, faria projeto com mais cômodos do apartamento.",
          urlPicture: null,
        },
        {
          name: "Milanezi",
          project: "Engenharia e Construção",
          text:
            "Gostei muito do atendimento e profissionalismo do escritório! Profisionais sempre prontos para atender as demandas.",
          urlPicture: null,
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

.list
  list-style: none
  margin: 0
  padding: 0
  display: flex

.list .item-list
  flex: 1

.list .item-list span
  display: block
  background: rgba(0, 0, 0, 0.685)
  padding: 1.7rem
  font-size: 22px
  margin-top: 25rem
  color: #BF8924


@media (hover: hover)
  .list .item-list span
    transform: translateY(100px)
    transition: 0.2s

  .list:hover span
    transform: translateY(0)

  .list .item-list:nth-child(1) span
    transition-delay: 0.0s

  .list .item-list:nth-child(2) span
    transition-delay: 0.05s

  .list .item-list:nth-child(3) span
    transition-delay: 0.1s

  .list .item-list:nth-child(4) span
    transition-delay: 0.15s

  .list .item-list:nth-child(5) span
    transition-delay: 0.2s

  .list .item-list:nth-child(6) span
    transition-delay: 0.25s



#imgHome
  grid-column: 1/ span 2
  grid-row: 1/ span 3
  z-index: 1

.grid-information
  display: grid
  grid-template-columns: 50fr 45fr
  grid-template-rows: 30vh auto 20vh
  justify-content: center

.information
  margin-right: 40px
  background-color: #000000
  opacity: 0.8
  grid-row: 2/3
  grid-column: 2/2
  z-index: 2
  padding: 20px

.font-information
  text-align: start
  color: #ffffff
  opacity: 1
  font-size: calc(12px + 1vw)

.title-topics
  @include color-gradient-text
  font-size: 20px
  margin-top: 15px
  margin-bottom: 15px

.title-text
  color:#ffffff
  padding-right: 20px

.text
  color:#6c4711
  font-size: 20px
  letter-spacing: 2px

.coments-people
  border: 1px solid #6c4711 !important
  margin-right: 20px
  padding: 20px


@keyframes fadeIn
  opacity: 0
  opacity: 0.8

.fadeIn
  -webkit-animation: fadeIn 3s ease-in-out
  -moz-animation: fadeIn 3s ease-in-out
  -o-animation: fadeIn 3s ease-in-out
  animation: fadeIn 3s ease-in-out


@media  screen and (max-width: 1024px)
  .grid-information
    grid-template-columns: 30fr 35fr


@media  screen and (max-width: 768px)
  .grid-information
    grid-template-columns: 10fr 25fr


@media  screen and (max-width: 360px)
  .grid-information
      grid-template-rows: 20vh auto 15vh auto

  .information
    margin-right: 10px
     padding: 10px
</style>
