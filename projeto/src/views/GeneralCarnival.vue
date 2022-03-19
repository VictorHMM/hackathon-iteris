<template>
  <v-container>
    <v-card>
    <v-card-title>
      Carnival
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="carnival"
      :search="search"
    ></v-data-table>
  </v-card>
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
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json')
        .then(resposta => resposta.json())
        .then(json => {
            this.carnivalList = json;
        });
    }
    
};
</script>

<style scoped>
</style>