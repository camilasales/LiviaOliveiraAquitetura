<template >
    <div >
    <div class="paralax " >
        <!-- botao entre em contato -->
        <v-row no-gutters style="background-color: #000000d5; height: 70vh;" justify="space-around" class="pa-10">
            <v-col cols="10" md="5" lg="5" class="d-flex flex-column justify-center align-center" >
                <p class="text-contact" style="text-align: center;">Já possui os dados do projeto?</p>   
                <v-btn 
                    outlined 
                    style="color:#6c4711; padding: 20px 20px 20px 20px" 
                    class="pa-7 text" href="https://api.whatsapp.com/send?phone=5511951323947"
                    target="_blank"
                >
                    entre em contato
                </v-btn>
            </v-col>
        </v-row>

        <!-- dados contato -->
        <v-row no-gutters style="background-color: #111111;" justify="space-around" class="pa-10">
            <div class="d-flex flex-column justify-center align-center">
                <p class="text-contact" style="font-size: 1.5em">
                    <span style="font-weight: bold;">Quer falar conosco</span> ou <br> tem alguma dúvida?
                </p>
            </div>
            <div class="d-flex flex-column justify-center align-center">
                <img
                    class="icon-contact"
                    :src="require('@/assets/img/icons/icon_phone.png')"
                >
                <span class="text-contact">Telefone</span>
                <span class="text-contact">(11)111111-1111</span>
            </div>
            <div class="d-flex flex-column justify-center align-center">
                <img
                    class="icon-contact"
                    :src="require('@/assets/img/icons/icon_email.png')"
                >
                <span class="text-contact">E-mail</span>
                <span class="text-contact">email@email.com</span>
            </div>
        </v-row>

        <!-- formulario mensagem -->
        <v-row no-gutters style="background-color: #ffffff9f; height:auto" justify="space-around" align="center" class="pa-10">
            <v-col>
                <v-form  ref="form">
                    <v-container class="pt-14">
                        <v-row>
                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                                color="#111111"
                                v-model="form.name"
                                :rules="rules.nameRules"
                                label="Nome"
                                required
                                validate-on-blur
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                                color="#111111"
                                v-model="form.email"
                                :rules="rules.emailRules"
                                label="E-mail"
                                required
                                validate-on-blur
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                                color="#111111"
                                v-model="form.subject"
                                :rules="rules.subjectRules"
                                label="Assunto"
                                required
                                validate-on-blur
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            class="pt-10"
                            >
                                <v-textarea
                                color="#111111"
                                v-model="form.message"
                                :rules="rules.messageRules"
                                label="Mensagem"
                                validate-on-blur
                                ></v-textarea>
                            </v-col>                            
                        </v-row>
                        <v-row justify="center" class="py-12">
                            <v-btn color="#111111" class="button-send" @click="sendEmail()" :loading="loading">Enviar</v-btn>
                        </v-row>
                    </v-container>
                </v-form>
            </v-col>
        </v-row>
    </div>
    </div>
</template>
<script>
  export default {
    data() {
        return {
            loading: false,
            form: {
                name: '',
                subject: '',
                email: '',
                message: ''
            },
            rules:{
                nameRules: [
                    v => !!v || 'Por favor, preencha o nome',
                    v => v.length >= 10 || 'O nome precisa ter mais de 10 caracteres',
                ],
                subjectRules: [
                    v => !!v || 'Por favor, preencha o assunto',
                    v => v.length >= 5 || 'Preencha um assunto válido',
                ],
                
                emailRules: [
                    v => !!v || 'Por favor, preencha o e-mail',
                    v => /.+@.+/.test(v) || 'O e-mail precisa ser válido',
                ],
                messageRules: [
                    v => !!v || 'Por favor, preencha a mensagem',
                    v => v.length >= 10 || 'Preencha uma mensagem válida',
                ],
            }
        }
    },
    methods: {
        sendEmail(){
            if (this.$refs.form.validate()) {
                this.loading = true;
                this.$store.dispatch("sendMail/sendMessage", this.form).then(() => {
                    this.clear();
                    this.loading = false;
                });
            }
        },
        clear() {
            this.form = {
                name: '',
                subject: '',
                email: '',
                message: '',
            };
        },
    },
  }
</script>
<style scoped lang="sass">
@mixin color-gradient-text
  background-image: radial-gradient(circle at 58.46% 50%, #ac8b4a 0, #a27a37 25%, #956521 50%, #885008 75%, #7e3f00 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent

@mixin color-gradient-item
  background-image: radial-gradient(circle at 58.46% 50%, #ac8b4a 0, #a27a37 25%, #956521 50%, #885008 75%, #7e3f00 100%)

.paralax
    background-image: url("../assets/liviaContact.jpg") !important
    background-color: #d6d5d5
    background-position: center top
    background-attachment: fixed

.text-contact
    @include color-gradient-text
    font-size: 1.3em

.icon-contact
    @include color-gradient-item
    padding: 15px
    border-radius: 30px
    margin-bottom: 10px

.v-parallax__content
    padding: 0

.button-send
    color:#D9A91A !important
    letter-spacing: 2px
    padding: 30px 30px 30px 30px !important
    border-radius: 30px


@media  screen and (max-width: 800px)
    .paralax
        background-image: url("../assets/liviaContactMobile.jpg") !important
    

</style>