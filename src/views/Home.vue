<template >
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
    <v-spacer></v-spacer>
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
