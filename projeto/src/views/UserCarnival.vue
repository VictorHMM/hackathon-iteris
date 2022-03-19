<template>
  <v-container>
    <h2>Favorito</h2>

    <v-card
      class="mb-4"
      elevation="6"
      outlined
      shap
      v-for="bloco in carnival"
      :key="bloco.name"
    >
      <v-card-title>{{ bloco.name }}</v-card-title>
      <v-card-subtitle>{{ bloco.address }}</v-card-subtitle>
      <v-img :src="bloco.photo" />
      <v-card-text>{{ bloco.description }}</v-card-text>
      <v-card-actions
        ><v-btn
          @click="compartilhar = true"
          color="primary"
          elevation="9"
          raised
          small
          >Compartilhar</v-btn
        ><v-btn @click="mais = true" color="primary" elevation="9" raised small
          >Quero receber novidades!</v-btn
        ></v-card-actions
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      carnival: [
        {
          address: "Salvador - BA",
          description:
            "Considerado um dos mais antigos blocos de Salvador, o bloco Mudança do Garcia existe há 82 anos e sai de um dos circuitos oficiais do carnaval, o Circuito Osmar. A agremiação se destaca pelos protestos realizados pelos foliões durante o cortejo. Com faixas, cartazes e fantasias tratando de assuntos como política, educação e saúde os foliões saem pelas ruas do Campo Grande dançando, fazendo brincadeiras e gritando palavras de ordem.",
          name: "Mudança do Garcia",
          photo:
            "https://www.correio24horas.com.br/fileadmin/_processed_/2/d/csm_faixa_carnaval_de1dfb906e.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
