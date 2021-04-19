<template>
  <div
    :class="$vuetify.breakpoint.mdAndUp ? 'px-12 pt-10' : ''"
    style="background-color: #111111; border-style: none;"
  >
    <v-row no-gutters class="grid" justify="center">
      <v-col cols="10" class="grid-image my-3">
        <v-img
          :max-height="$vuetify.breakpoint.mdAndUp ? '800' : '450'"
          :max-width="$vuetify.breakpoint.mdAndUp ? '500' : '400'"
          :src="require('@/assets/sobreLivia.jpg')"
        ></v-img>
      </v-col>
      <v-col
        cols="10"
        :class="
          $vuetify.breakpoint.mdAndUp
            ? 'text-description d-flex justify-end pr-10'
            : 'text-description d-flex justify-end pr-5'
        "
      >
        <v-col class="text-description-col">
          <p class="title-livia">Livia Oliveira</p>
          <p>
            Com estilo contemporâneo e sofisticado, a arquiteta Livia Oliveira
            comanda o escritório que leva seu nome, atuando nas áreas de
            Arquitetura e Interiores.
          </p>
          <p>
            Tem formação em Arquitetura e Urbanismo, pela FIAM-FAAM, em Designer
            de Interiores pela ETEC Belas Artes e atuou em um escritório de
            engenharia como projetista, comercial e financeiro por 2,5 anos, o
            que foi determinante para o desenvolvimento da sua carreira e início
            do seu escritório.
          </p>
          <p>
            Paixão e propósito definem sua atuação, sempre em busca da
            satisfação do cliente, levando em consideração seus desejos e gostos
            com um design único para cada projeto, buscando excelência e
            inovação.
          </p>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import "@/assets/fonts/Brotherhood_Script.ttf";
export default {};
</script>
<style scoped lang="sass">
@font-face
  font-family: 'Brotherhood_Script'
  src: url('../assets/fonts/Brotherhood_Script.ttf') format('truetype')

@mixin color-gradient-text
  background-image: radial-gradient(circle at 58.46% 50%, #ac8b4a 0, #a27a37 25%, #956521 50%, #885008 75%, #7e3f00 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent

@mixin color-gradient-item
  background-image: radial-gradient(circle at 58.46% 50%, #ac8b4a 0, #a27a37 25%, #956521 50%, #885008 75%, #7e3f00 100%)

p
  @include color-gradient-text

.title-livia
  @include color-gradient-text
  font-family: 'Brotherhood_Script', sans-serif
  font-size: 6em

.grid
  display: grid
  grid-template-columns: auto auto
  justify-items: center

.grid-image
  grid-row: 1/1
  grid-column: 1 / span 2
  /* margin-right: 30px */

.text-description
  border: 1px solid #6c4711 !important
  grid-row: 1/1
  grid-column: 2 / span 2
  font-size: 1.3em
  text-align: justify

.text-description-col
  padding-left: 250px


@media  screen and (max-width: 1024px)
  .grid
    grid-template-columns: 1fr
    grid-gap: 0px


  .grid-image
    grid-column: 2/2

  .text-description
    grid-row: 2/2
    grid-column: 2/2
    font-size: 1.2em

  .text-description-col
    padding-left: 30px

  .title-livia
    font-size: 4.3em
</style>
