<template>
  <v-container class="corpo">
    <h1 class="text-h4 text-center">Sobre o Projeto</h1>
    <v-img
      class="inicio-imagem mt-4 mb-4"
      src="https://i.ytimg.com/vi/5QIsyuVqbNQ/mqdefault.jpg"
    >
    </v-img>
    <p>
      “Cadê meu Bloco?” Foi um projeto desenvolvido para a 10ª Edição do
      Hackaton Decola - Luna. Aproveitamos a oportunidade que a
      <a href="www.iteris.com.br">Iteris</a>
      nos deu para criar um web app que traz a programação de Blocos de Carnaval
      pelo Brasil, um movimento muito tradicional que fez falta nesses últimos
      anos de pandemia.
    </p>

    <h2 class="text-center mb-5">Conheça os integrantes</h2>
    <v-simple-table>
      <template>
        <tbody>
          <tr v-for="dev of devs" :key="dev.id">
            <td>
              <v-avatar size="62" mb-50 mt-5>
                <img :src="dev.avatar" :alt="dev.nome" />
              </v-avatar>
            </td>
            <td>
              <a :href="dev.link"> {{ dev.nome }}</a>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "AboutCarnival",
  data() {
    return {
      devs: [
        {
          id: 1,
          link: "https://github.com/gamsbumps",
          nome: "Guilherme Augusto C. Costa",
          avatar: "https://avatars.githubusercontent.com/u/46942160?v=4",
        },
        {
          id: 2,
          link: "https://github.com/KeythMarianne",
          nome: "Keyth Marianne",
          avatar: "https://avatars.githubusercontent.com/u/79008868?v=4",
        },
        {
          id: 3,
          link: "https://github.com/mariafreis",
          nome: "Maria Fernanda M. Reis",
          avatar: "https://avatars.githubusercontent.com/u/70169979?v=4",
        },
        {
          id: 4,
          link: "https://github.com/RafaAndreatta",
          nome: "Rafael Andreatta",
          avatar: "https://avatars.githubusercontent.com/u/99933402?v=4",
        },
        {
          id: 5,
          link: "https://github.com/VictorHMM",
          nome: "Victor Medeiros",
          avatar: "https://avatars.githubusercontent.com/u/53574545?v=4",
        },
      ],
    };
  },
};
</script>

<style scoped>
.inicio-imagem {
  border-radius: 4px;
}
a[href] {
  color: orangered;
  text-decoration: none;
}
h1,
h2 {
  color: orangered;
}
</style>