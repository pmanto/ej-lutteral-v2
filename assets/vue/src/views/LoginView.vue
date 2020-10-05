<template>
  <div class="container">
    <LoginForm :csf_token="csf_token" :last_email="last_email" />
  </div>
</template>

<script lang="ts">
import LoginForm from "../components/LoginForm.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
    LoginForm,
  },
})
export default class LoginView extends Vue {
  @Prop(String) readonly csf_token!: string;
  @Prop(String) readonly last_email!: string;
}
</script>