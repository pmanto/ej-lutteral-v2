<template>
  <v-card width="500px">
    <v-form
      ref="form"
      v-model="valid"
      method="post"
      v-on:submit.prevent="sendLogin"
    >
      <v-card-title>Login</v-card-title>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required, rules.email]"
              label="Email"
              prepend-inner-icon="perm_identity"
              v-model="email"
              name="email"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="password"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              :rules="[rules.required]"
              :type="show ? 'text' : 'password'"
              name="password"
              label="Contraseña"
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
          <input type="hidden" name="_csf_token" v-model="csf_token" />
        </v-row>
      </v-container>
      <v-card-actions class="text-right">
        <v-row class="text-right">
          <v-col align-self="end">
            <v-btn rounded color="primary" type="submit" dark> Login </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-alert v-if="isError" color="red" type="error">{{
        errorMessage
      }}</v-alert>
    </v-form>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { LoginState } from "../store/login/types";

@Component
export default class LoginForm extends Vue {
  @Prop(String) readonly csf_token!: string;
  @Prop(String) readonly last_email!: string;
  @State("login") hotel!: LoginState;
  @Action("loginAction", { namespace: "login" }) loginAction: any;
  @Getter("errorMessage", { namespace: "login" }) errorMessage: string = "";
  @Getter("isError", { namespace: "login" }) isError: boolean = false;
  @Getter("isAuthenticated", { namespace: "login" })
  isAuthenticated: boolean = false;
  private email: string = "";
  private password: string = "";
  private show: boolean = false;
  private rules = {
    required: (value: string) => !!value || "Requerido.",
    email: (value: string) => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || "E-mail inválido.";
    },
  };
  public sendLogin(): void {
    console.log("Send login form");
    this.loginAction({
      email: this.email,
      password: this.password,
      _csf_token: this.csf_token,
    });
  }
  created() {
    if (this.last_email !== "undefined") {
      this.email = this.last_email;
    }

    if (this.isAuthenticated) {
      this.$router.push("/admin-dashboard");
    }
  }
}
</script>