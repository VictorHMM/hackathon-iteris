<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Blocos Carnaval</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Local</th>
            <th>Bloco</th>
            <th class="text-right">Fotos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lista in carnivalList" :key="lista.id">
            <td>{{ lista.address }}</td>
            <td>{{ lista.name }}</td>
            <td class="text-right">
              <v-avatar size="25">
                <img :src="lista.photo" :alt="fotos - lista" />
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
  name: "GeneralCarnival",
  data() {
    return {
      carnivalList: [],
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.carnivalList = json;
      });
  },
};
</script>

<style scoped>
</style>