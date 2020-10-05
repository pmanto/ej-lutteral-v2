<template>
  <v-app>
    <router-view></router-view>
    <v-footer class="text-center">
      Powered by
      <a href="https://www.linkedin.com/in/mantonellapalacios/" target="_blank"
        >Antonella Palacios</a
      >
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
  private last_email !: string;
  private csf_token !: string;
}
</script>