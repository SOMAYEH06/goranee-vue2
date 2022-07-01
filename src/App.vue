<template>
  <v-app dir="rtl">
    <v-app-bar app color="white" dark rounded="lg t-0" flat="true">
      <v-row align="center" justify="center">
        <v-btn class="mx-1" color="blue-grey lighten-4" rounded="xl" depressed to="/"> صفحه اصلی </v-btn>
        <v-btn class="mx-1" color="blue-grey lighten-4" rounded="xl" depressed to="/artists"> هنرمندان </v-btn>
      </v-row>
    </v-app-bar>

    <v-main class="bg-gray">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">
.bg-gray {
  background-color: #edf2f7;
}
::v-deep .v-btn__content {
  color: rgb(25,91,255);
}
</style>
