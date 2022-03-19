<template>
<v-container>
    <v-app-bar
      app
      color="#fcb69f"
      dark
      short
      src="../../assets/fita.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-app-bar-title>
        <span id="title">Cadê meu bloco? 🎉</span>
        </v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="grey--text text--accent-4"
        >
        <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/general">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-party-popper</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bloquinhos</v-list-item-title>
          </v-list-item>
          </router-link>

        <router-link to="/local">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-city-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bloquinhos por cidade</v-list-item-title>
          </v-list-item>
        </router-link>

          <router-link to="/login">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-login-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/signUp">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-plus-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cadastre-se</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/about">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sobre Nós</v-list-item-title>
          </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
  data: () => ({
      drawer: false,
      group: null,
    }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#title {
  text-shadow: 2px 2px black;
}
</style>