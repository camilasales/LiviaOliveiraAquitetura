<template>
    <div style="background-color: #111111; border-style: none;" class="pa-0">
        <v-row no-gutters justify="start" align="start">

            <!-- projetos -->
            <v-col cols="12" sm="8" md="4" lg="4" class="d-flex flex-column align-center pa-2 px-16">
                <div class="d-flex align-center" :class="$vuetify.breakpoint.smAndDown ? 'my-4' : 'my-12' " >
                <img
                    :height="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                    :width="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                    :src="require('@/assets/img/icons/icon_regua.png')"
                    >
                <span class="title-topics ml-4">PROJETOS</span>
                </div>
                <div @click="openDialog(item.name, item.description)" class="btn-service d-flex align-center justify-space-between"  v-for="(item, index) in projetos" :key="index">
                    <span class="title-text">{{item.name}}</span>
                    <img
                    :src="require('@/assets/img/icons/mais.png')"
                    >
                </div>
            </v-col>
            <!-- fim projetos -->

            <!-- consultorias -->
            <v-col cols="12" sm="8" md="4" lg="4" class="d-flex flex-column align-center pa-2 px-16">
                <div class="d-flex align-center" :class="$vuetify.breakpoint.smAndDown ? 'my-4' : 'my-12' " >
                    <img
                        :height="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                        :width="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                        :src="require('@/assets/img/icons/icon_prancheta.png')"
                        >
                    <span class="title-topics ml-4">CONSULTORIAS</span>
                </div>
                <div @click="openDialog(item.nameInside, item.description)" class="btn-service d-flex align-center justify-space-between" v-for="(item, index) in consultorias" :key="index">
                    <span class="title-text">{{item.name}}</span>
                    <img
                    :src="require('@/assets/img/icons/mais.png')"
                    >
                </div>
            </v-col>
            <!-- fim consultorias -->

            <!-- orcamento -->
            <v-col cols="12" sm="8" md="4" lg="4" class="d-flex flex-column align-center pa-2 px-16">
                <div class="d-flex align-center" :class="$vuetify.breakpoint.smAndDown ? 'my-4' : 'my-12' " >
                    <img

                        :height="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                        :width="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                        :src="require('@/assets/img/icons/icon_arquitetura.png')"
                        >
                    <span class="title-topics ml-4">ORÇAMENTOS</span>
                </div>
                <div @click="openDialog(item.name, item.description)" class="btn-service d-flex align-center justify-space-between" v-for="(item, index) in orcamentos" :key="index">
                    <span class="title-text">{{item.name}}</span>
                    <img
                    :src="require('@/assets/img/icons/mais.png')"
                    >
                </div>
            </v-col>
            <!-- fim orcamento -->

            <!-- obras -->
            <v-col cols="12" sm="8" md="4" lg="4" class="d-flex flex-column align-center pa-2 px-16">
                <div class="d-flex align-center" :class="$vuetify.breakpoint.smAndDown ? 'my-4' : 'my-12' " >
                    <img
                        :height="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                        :width="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                        :src="require('@/assets/img/icons/icon_sketch.png')"
                        >
                    <span class="title-topics ml-4">OBRAS</span>
                </div>
                <div @click="openDialog(item.name, item.description)" class="btn-service d-flex align-center justify-space-between" v-for="(item, index) in obras" :key="index">
                    <span class="title-text">{{item.name}}</span>
                    <img
                    :src="require('@/assets/img/icons/mais.png')"
                    >
                </div>
            </v-col>
            <!-- fim obras -->
            <v-col></v-col>
            <!-- em breve -->
            <v-col cols="12" sm="8" md="4" lg="4" class="d-flex flex-column align-center pa-2 px-16">
                <div class="d-flex align-center" :class="$vuetify.breakpoint.smAndDown ? 'my-4' : 'my-12' " >
                    <img
                        :height="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                        :width="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                        :src="require('@/assets/img/icons/icon_backInTime.png')"
                        >
                    <span class="title-topics ml-4">EM BREVE</span>
                </div>
                <div @click="openDialog(item.name, item.description)" class="btn-service d-flex align-center justify-space-between" v-for="(item, index) in emBreve" :key="index">
                    <span class="title-text">{{item.name}}</span>
                    <img
                    :src="require('@/assets/img/icons/mais.png')"
                    >
                </div>
            </v-col>
            <!-- fim em breve -->
        </v-row>

        <!-- detalhes servicos -->
        <v-dialog
            v-model="dialog"
            width="650"
            persistent
        >
            <v-card style="background-color: #111111;" class="pa-5 pb-10">
                <v-card-title style=" word-break: break-word">
                    <div>
                        <v-btn small absolute top right icon @click="dialog = false">
                            <v-icon style="color:#BF8924">close</v-icon>
                        </v-btn>
                    </div>
                    <h4 class="ml-0 mb-4 title-topics">
                        {{titleDialog}}
                    </h4>
                </v-card-title>

                <v-card-text class="pr-10">
                    <span class="title-text" style="font-size: 16px;">
                        {{textDialog}}
                    </span>
                </v-card-text>
            </v-card>
        </v-dialog>
        <!-- fim detalhes servicos -->

        <!-- calcule -->
        <v-row class="mt-6">
            <v-col class="d-flex flex-column justify-center align-center">
                <span class="title-topics" align="center" justify="center">Ficou com alguma dúvida? <br> Fale comigo</span>
                <v-btn outlined style="color:#6c4711;  border-radius: 20px;" class="pa-7 mt-4" href="https://api.whatsapp.com/send?phone=5511951323947"  target="_blank">
                    <img
                        :height="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                        :width="$vuetify.breakpoint.smAndDown ? '32px' : '45px'"
                        :src="require('@/assets/img/icons/whatsapp.png')"
                        class="mr-4"
                    >
                    Envie uma mensagem
                </v-btn>
            </v-col>
        </v-row>
        <!-- fim calcule -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            textDialog:"",
            titleDialog:"",
            projetos:[
                {
                    name: 'Projeto Arquitetônico (Projeto Executivo de Arquitetura)',
                    description: 'Projeto completo para você realizar sua obra, sendo ela do zero ou uma reforma, nele constam todas as informações e detalhamentos necessários. ',
                },
                {
                    name: 'Projeto de Interiores (Projeto Executivo de Interiores)',
                    description: 'Projeto completo para você realizar sua obra, sendo ela do zero ou uma reforma, nele constam todas as informações e detalhamentos necessários. ',
                },
                {
                    name: 'Projeto para Aprovação na Prefeitura/Condomínio (Projeto Legal)',
                    description: ' Projeto simplificado com todas as informações necessárias para aprovação na prefeitura/condomínio de acordo com as normas vigentes do local da obra. ',
                },
                {
                    name: 'Projeto Básico de Arquitetura',
                    description: 'Projeto simplificado quando o cliente deseja uma orientação técnica com relação à distribuição dos ambientes, posição do sol, predominância dos ventos, declividade do terreno e o imóvel ainda não foi construído.',
                },
                {
                    name: 'Projeto de Marcenaria',
                    description: 'Projeto com todas as informações necessárias para solicitar a execução de um móvel. A vantagem de realizar este tipo de serviço com um arquiteto é que o cliente está livre para orçar o mesmo projeto em mais de um lugar e poder comparar benefícios e custos. OBS: Serviço incluso no projeto executivo.',
                },
                {
                    name: 'Projeto de Marmoraria',
                    description: 'Projeto com todas as informações necessárias para solicitar a execução de uma bancada em pedra/granito/entre outros. A vantagem de realizar este tipo de serviço com um arquiteto é que o cliente está livre para orçar o mesmo projeto em mais de um lugar e poder comparar benefícios e custos. OBS: Serviço incluso no projeto executivo.',
                },
                {
                    name: 'Levantamento Arquitetônico/As Built',
                    description: 'Projeto com o levantamento arquitetônico/interiores do local, ou seja, com as dimensões dos ambientes, posição e tamanho de portas e janelas. O nível de detalhamento e informações pode variar de acordo com a necessidade de cada cliente. Exemplo: Levantamento para posterior projeto no Corpo de Bombeiros. ',
                },
                {
                    name: 'Imagens 3D',
                    description: 'Imagens 3D em alta qualidade quando o cliente já possui um projeto ou pretende fazer uma reforma em um ambiente e já possui as especificações dos materiais e mobiliário. ',
                },
                {
                    name: 'Compatibilização',
                    description: 'Análise técnica das disciplinas complementares (elétrica, hidráulica, estrutura, etc) à edificação, visando reduzir interferências entre as mesmas a fim de evitar prejuízos em obra. Vendido somente quando o projeto arquitetônico é da Livia Oliveira Arquitetura.',
                },
                {
                    name: 'Regularização de imóvel',
                    description: 'Projeto com informações básicas necessárias de imóveis que estão com licença irregular perante os órgãos públicos competentes.  ',
                },
            ],

            consultorias:[
                {
                    name: 'Consultoria Imobiliária',
                    nameInside: 'Consultoria Imobiliária',
                    description: 'Visita técnica de acompanhamento para orientação analisando variantes de um imóvel já existente, como orientação solar, ventos predominantes, possibilidade de reforma para quebra de paredes e programa de necessidades.',
                },
                {
                    name: 'Consultoria Pré-terreno',
                    nameInside: 'Consultoria Pré-terreno',
                    description: 'Orientação técnica, que pode estar acompanhada de visita, quando há dúvidas em qual o melhor terreno para comprar visando todas as suas necessidades e prioridades, analisando as caraterísticas físicas do local como orientação solar, ventos predominantes, programa de necessidades e declives do terreno.',
                },
                {
                    name: 'Consultoria de Interiores',
                    nameInside:'Consultoria de Interiores (Este pacote pode custar até R$600,00)',
                    description: 'Projeto simplificado para uma reforma de um ambiente. Pode estar acompanhado ou não do 3D.',
                },
            ],

            orcamentos:[
                {
                    name: 'Estudo de Viabilidade Financeira',
                    description: 'Planilha estimativa com os custos da obra, ideal para a fase inicial do projeto arquitetônico. Feita com fornecedores e prazos reais de mercado. ',
                },
                {
                    name: 'Planilha Orçamentária Final',
                    description: 'Planilha com todos os custos de obra, feita na etapa final do projeto arquitetônico. Feita com fornecedores e prazos reais de mercado. ',
                },
                {
                    name: 'Orçamento Preliminar',
                    description: 'Planilha estimativa com os custos de obra quando o cliente ainda não possui nenhum projeto. ',
                },
            ],

            obras:[
                {
                    name: 'Visita Técnica em Obra',
                    description: 'Visita para garantir que a execução da obra está de acordo com o projeto. Emitido com relatório fotográfico e documentação de todas as alterações ocorridas no decorrer da obra. Vendido somente quando o projeto arquitetônico é da Livia Oliveira Arquitetura.',
                },
            ],

            emBreve:[
                {
                    name: 'Execução de obras / Acompanhamento de obras',
                    description: 'Execução da obra com cronograma, gestão da equipes, prazos e controle de estoque. Serviço completo para execução da sua obra.',
                },
            ],
        }
    },
    methods: {
        openDialog(title, text){
            this.titleDialog = title;
            this.textDialog = text;
            this.dialog = true;
        }
    },
    
}
</script>
<style scoped lang="sass">
@mixin color-gradient-text
    background-image: radial-gradient(circle at 58.46% 50%, #ac8b4a 0, #a27a37 25%, #956521 50%, #885008 75%, #7e3f00 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

.title-topics
  @include color-gradient-text
  font-size: 20px

.title-text
  color:#ffffff
  /* font-size: 20px */
  padding-right: 20px

.btn-service
    @include color-gradient-text
    padding: 20px 20px 20px 20px
    border: 1px solid #6c4711 !important
    border-radius: 15px
    text-align: start
    margin-bottom: 6vh
    width: 300px


.btn-service:hover
    background-color: #bf892436
    transition: 0.8s ease-in-out
    cursor: pointer

</style>