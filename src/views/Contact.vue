<template >
    <div >
    <div class="paralax " >
        <!-- botao entre em contato -->
        <v-row no-gutters style="background-color: #000000d5; height: 70vh;" justify="space-around" class="pa-10">
            <v-col cols="10" md="5" lg="5" class="d-flex flex-column justify-center align-center" >
                <p class="text-contact" style="text-align: center;">Já possui os dados do projeto?</p>   
                <v-btn outlined style="color:#BF8924; padding: 20px 20px 20px 20px" class="pa-7 text">entre em contato</v-btn>
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
                <v-form v-model="valid">
                    <v-container class="pt-14">
                        <v-row>
                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                                color="#111111"
                                v-model="name"
                                :rules="nameRules"
                                label="Nome"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                                color="#111111"
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                                color="#111111"
                                v-model="subject"
                                :rules="subjectRules"
                                label="Assunto"
                                required
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            class="pt-10"
                            >
                                <v-textarea
                                color="#111111"
                                v-model="message"
                                :rules="messageRules"
                                label="Mensagem"
                                ></v-textarea>
                            </v-col>                            
                        </v-row>
                        <v-row justify="center" class="py-12">
                            <v-btn color="#111111" class="button-send">Enviar</v-btn>
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
    data: () => ({
      valid: false,
      name: '',
      subject: '',
      nameRules: [
        v => !!v || 'Por favor, preencha o nome',
        v => v.length >= 10 || 'O nome precisa ter mais de 10 caracteres',
      ],
      subjectRules: [
        v => !!v || 'Por favor, preencha o assunto',
        v => v.length >= 5 || 'Preencha um assunto válido',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Por favor, preencha o e-mail',
        v => /.+@.+/.test(v) || 'O e-mail precisa ser válido',
      ],
      message: '',
      messageRules: [
        v => !!v || 'Por favor, preencha a mensagem',
        v => v.length >= 10 || 'Preencha uma mensagem válida',
      ],
    }),
  }
</script>
<style scoped>
>>> .paralax{
    background-image: url("../assets/liviaContact.jpg") !important;
    /* background-repeat: no-repeat, repeat-y; */
    background-color: #d6d5d5;
    background-position: center top;
    background-attachment: fixed;
}
>>> .text-contact{
    color: #BF8924;
    font-size: 1.3em;
}
>>> .icon-contact{
    background-image: linear-gradient(
    45deg,
    #a96e1f,
    #bf8924,
    #d9a91a
  ) !important;
    padding: 15px;
    border-radius: 30px;
    margin-bottom: 10px;
}
>>> .v-parallax__content{
    padding: 0;
}
>>>.button-send{
    color:#D9A91A !important;
    letter-spacing: 2px;
    padding: 30px 30px 30px 30px !important;
    border-radius: 30px;
}

@media  screen and (max-width: 800px){
    >>> .paralax{
        background-image: url("../assets/liviaContactMobile.jpg") !important;
    }
}
</style>