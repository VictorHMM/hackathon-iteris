<template>
  <v-container class="LocalCarnival">
    <v-container id="botao">
      <v-btn @click="teste('Salvador - BA')" color="secondary" elevation="5">
        Salvador
      </v-btn>
      <v-btn @click="teste('Tucuruí - PA')" color="secondary" elevation="5">
        Tucuruí
      </v-btn>
      <v-btn @click="teste('Recife - PE')" color="secondary" elevation="5">
        Recife
      </v-btn>
    </v-container>
    <v-container id="botao">
      <v-btn @click="teste('Olinda - PE')" color="secondary" elevation="5">
        Olinda
      </v-btn>
      <v-btn
        @click="teste('Rio de Janeiro - RJ')"
        color="secondary"
        elevation="5"
      >
        Rio de Janeiro
      </v-btn>
    </v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Carnavais</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bloco in arrayCarnival" :key="bloco.id">
            <td>{{ bloco.nome }}</td>
            <td>
              <v-avatar>
                <img :src="bloco.foto" />
              </v-avatar>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "LocalCarnival",
  data() {
    return {
      listaApi: [],
      arrayTeste: [],
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
          this.listaApi.forEach((value) => {
            if (value.adress.includes(variavel)) {
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
</style>