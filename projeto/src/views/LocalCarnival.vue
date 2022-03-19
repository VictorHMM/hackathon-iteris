<template>
  <v-container class="LocalCarnival">
    <h1 class="text-h4 text-center mb-4">Escolha um Destino</h1>
    <v-container id="botao">
      <v-btn @click="teste('Olinda - PE')" color="secondary" elevation="5">
        Olinda
      </v-btn>
      <v-btn @click="teste('Tucuruí - PA')" color="secondary" elevation="5">
        Tucuruí
      </v-btn>
      <v-btn @click="teste('Recife - PE')" color="secondary" elevation="5">
        Recife
      </v-btn>
    </v-container>
    <v-container id="botao">
      <v-btn @click="teste('Salvador - BA')" color="secondary" elevation="5">
        Salvador
      </v-btn>
      <v-btn
        @click="teste('Rio de Janeiro - RJ')"
        color="secondary"
        elevation="5"
      >
        Rio de Janeiro
      </v-btn>
    </v-container>

    <v-card
      class="mb-4"
      elevation="6"
      outlined
      shap
      v-for="bloco in arrayCarnival"
      :key="bloco.id"
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
    <v-dialog v-model="compartilhar" max-width="290">
      <v-card>
        <v-card-text>
          <v-form id="em">
            <v-text-field
              v-model="text"
              label="
              https://linkcarnaval.com.br"
            ></v-text-field>
          </v-form>
          Copie esse link para compartilhar com seus amigos
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="compartilhar = false">
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="mais" max-width="400">
      <v-card>
        <v-form id="em">
          <v-text-field v-model="name" label="Seu Nome" required></v-text-field>
          <v-text-field
            type="email"
            v-model="email"
            label="Seu Email"
            required
          ></v-text-field>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="mais = false">
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "LocalCarnival",
  data() {
    return {
      listaApi: [],
      arrayCarnival: [],
      compartilhar: false,
      mais: false,
    };
  },
  created() {},
  methods: {
    teste(variavel) {
      fetch("https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json?")
        .then((resposta) => resposta.json())
        .then((json) => {
          console.log("sgudsh");
          this.listaApi = json;
          console.log(this.listaApi);
          this.arrayCarnival = [];
          this.listaApi.forEach((value) => {
            if (value.address.includes(variavel)) {
              this.arrayCarnival.push(value);
            }
          });
          console.log(this.arrayCarnival);
        });
    },
  },
};
</script>

<style scoped>
#botao {
  display: flex;
  justify-content: space-around;
}
#em {
  padding: 10px;
}
</style>