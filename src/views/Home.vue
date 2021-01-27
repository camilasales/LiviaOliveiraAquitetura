<template >
  <div style="background-color: #111111;" >
    <div class="home grid-information" >
      <v-img
        :src="require('@/assets/liviaOliveira.jpg')"
        jumbotron
        id="imgHome"
      ></v-img>
      <!-- quadrado de information e explication -->
      <div class="d-flex information fadeIn">
        <v-col class="font-information">
          <p>
            Fundado em 2020, localizado na cidade de São Paulo, 
            o L.O. Arquitetura é focado em projeto arquitetônico e 
            de interiores no segmento residencial, comercial e corporativo.
          </p>
          <br>
          <p>
            Com um design contemporâneo, sofisticação e um atendimento altamente 
            personalizado, o objetivo é transformar a vida dos clientes proporcionando experiências únicas.
          </p>
        </v-col>
      </div>
    </div>
    <!-- serviços -->
    <v-row no-gutters class="pl-12 py-10">
      <v-col cols="12" md="4" lg="4" sm="4" class="d-flex flex-column pa-2">
        <img
          v-if="$vuetify.breakpoint.smAndUp"
          height="45px"
          width="45px"
          :src="require('@/assets/img/icons/icon_regua.png')"
        >
        <span class="title-topics">PROJETO DE INTERIORES (Projeto Executivo de Interiores)</span>
        <span class="title-text">
          Projeto completo para você realizar sua obra, sendo ela do zero ou uma reforma, 
          nele constam todas as informações e detalhamentos necessários. <br>
          <span class="title-topics px-2 mt-2" style="background-color:#BF8924; color:#111111">MAIS PEDIDO</span>
        </span>
      </v-col>
      <v-col cols="12" md="4" lg="4" sm="4" class="d-flex flex-column pa-2">
        <img
          v-if="$vuetify.breakpoint.smAndUp"
          height="45px"
          width="45px"
          :src="require('@/assets/img/icons/icon_prancheta.png')"
        >
        <span class="title-topics">PROJETO ARQUITETÔNICO (Projeto Executivo de Arquitetura)</span>
        <span class="title-text">
          Projeto completo para você realizar sua obra, sendo ela do zero ou uma reforma, 
          nele constam todas as informações e detalhamentos necessários. <br>
          <span class="title-topics px-2 mt-2" style="background-color:#BF8924; color:#111111">MAIS PEDIDO</span>
        </span>
      </v-col>
      <v-col cols="12" md="4" lg="4" sm="4" class="d-flex flex-column pa-2">
        <img
          v-if="$vuetify.breakpoint.smAndUp"
          height="45px"
          width="45px"
          :src="require('@/assets/img/icons/icon_luminaria.png')"
        >
        <span class="title-topics">
          CONSULTORIA DE INTERIORES
        </span>
        <span class="title-text">
          Projeto simplificado para uma reforma de um ambiente. Pode estar acompanhado ou não do 3D.
        </span>
      </v-col>
      <v-col cols="12" class="mt-14">
          <v-btn @click="$router.push({name: 'Servicos'})" outlined style="color:#BF8924; padding: 20px 20px 20px 20px" class="pa-7 text">Saiba Mais</v-btn>
      </v-col>
    </v-row>

    <!-- COMENTARIOS -->
    <v-row no-gutters class="pl-12 py-10">
      <v-col class="d-flex flex-column justify-center align-center pa-2 mb-4 coments-people">
        <img
          height="45px"
          width="45px"
          :src="require('@/assets/img/icons/icon_comentario.png')"
        >
        <span style="color:#ffffff; text-align: center;" class=" pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam officia esse, enim, ad accusantium tempora rerum a laborum 
          similique voluptatibus iusto delectus iure reiciendis commodi autem. 
          Cumque quod repellendus a.</span>
        <div class="my-8 px-10 d-flex">
            <hr
                style="height:1px; background-color: #735702; border-style: none;"
                width="100px"
            />
        </div>
        <v-avatar>
          <img
            :src="require('@/assets/img/coments/coments_foto.png')"
            alt="John"
          >
        </v-avatar>
        <span style="color:#ffffff;">Cliente Legal</span>
      </v-col>
      <v-col class="d-flex flex-column justify-center align-center pa-2 mb-4 coments-people">
        <img
          height="45px"
          width="45px"
          :src="require('@/assets/img/icons/icon_comentario.png')"
        >
        <span style="color:#ffffff; text-align: center;" class=" pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam officia esse, enim, ad accusantium tempora rerum a laborum 
          similique voluptatibus iusto delectus iure reiciendis commodi autem. 
          Cumque quod repellendus a.</span>
        <div class="my-8 px-10 d-flex">
            <hr
                style="height:1px; background-color: #735702; border-style: none;"
                width="100px"
            />
        </div>
        <v-avatar>
          <img
            :src="require('@/assets/img/coments/coments_foto.png')"
            alt="John"
          >
        </v-avatar>
        <span style="color:#ffffff;">Cliente Legal</span>
      </v-col>
      <v-col class="d-flex flex-column justify-center align-center pa-2 mb-4 coments-people">
        <img
          height="45px"
          width="45px"
          :src="require('@/assets/img/icons/icon_comentario.png')"
        >
        <span style="color:#ffffff; text-align: center;" class=" pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ullam officia esse, enim, ad accusantium tempora rerum a laborum 
          similique voluptatibus iusto delectus iure reiciendis commodi autem. 
          Cumque quod repellendus a.</span>
        <div class="my-8 px-10 d-flex">
            <hr
                style="height:1px; background-color: #735702; border-style: none;"
                width="100px"
            />
        </div>
        <v-avatar class="d-flex flex-column justify-center align-center ">
          <img
            :src="require('@/assets/img/coments/coments_foto.png')"
            alt="John"
          >
        </v-avatar>
        <span style="color:#ffffff;">Cliente Legal</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
<style >
#imgHome{
  /* background: url('../assets/liviaOliveira.jpg') no-repeat bottom center scroll;
  background-position: 30% 45%;
  background-size: cover;
  height: 100fr; */
  grid-column: 1/ span 2;
  grid-row: 1/ span 3;
  z-index: 1;
}
.grid-information{
  display: grid;
  grid-template-columns: 50fr 45fr;
  grid-template-rows: 30vh auto 20vh;
  justify-content: center;
}
.information{
  margin-right: 40px;
  background-color: #000000;
  opacity: 0.8;
  grid-row: 2/3;
  grid-column: 2/2;
  z-index: 2;
  padding: 20px;
  /* position: relative; */
}
.font-information{
  text-align: start;
  color: #ffffff;
  opacity: 1;
  font-size: calc(12px + 1vw);
}
.title-topics{
  color:#BF8924;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.title-text{
  color:#ffffff;
  /* font-size: 20px; */
  padding-right: 20px;
}
.text{
    color:#BF8924;
    font-size: 20px;
    letter-spacing: 2px;
}
.coments-people{
  border: 1px solid #bf8924 !important;
  margin-right: 20px;
  padding: 20px;
}

@keyframes fadeIn {
0% { opacity: 0; }
100% { opacity: 0.8; }
}
.fadeIn {
-webkit-animation: fadeIn 3s ease-in-out;
-moz-animation: fadeIn 3s ease-in-out;
-o-animation: fadeIn 3s ease-in-out;
animation: fadeIn 3s ease-in-out;
}

@media  screen and (max-width: 1024px) {
  .grid-information{
    grid-template-columns: 30fr 35fr;
  }
}
@media  screen and (max-width: 768px) {
  .grid-information{
    grid-template-columns: 10fr 25fr;
  }
}
@media  screen and (max-width: 360px) {
  .grid-information{
      grid-template-rows: 20vh auto 15vh auto;
  }
  .information{
    margin-right: 10px;
     padding: 10px;
  }
}
</style>
