<template>
  <v-app>
    <div style="width: 80%" class="login">
      <div class="login-form">
        <h2>Login</h2>
      </div>

      <v-form>
        <v-text-field
          v-model="name_id"
          label="Seu nome"
          required
        ></v-text-field>
        <v-text-field
          type="email"
          v-model="email"
          label="Seu Email"
          required
        ></v-text-field>
      </v-form>

      <div class="botoes">
        <router-link to="/user">
          <v-btn
            @click="logar"
            color="green"
            elevation="2"
            medium
            outlined
            rounded
            >Login
          </v-btn>
        </router-link>

        <router-link to="/signUp">
          <v-btn color="green" elevation="2" medium outlined rounded
            >Cadastrar-se</v-btn
          >
        </router-link>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "LoginCarnival",
  data() {
    return {
      login_id: "",
      login_pass: "",
    };
  },
};
</script>

<style>
.login {
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
}
.login-box {
  max-width: 100%;
}
.botoes a {
  text-decoration: none;
}
</style>
