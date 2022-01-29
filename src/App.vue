<template>
  <v-app>
    <v-app-bar
      style="background-color: #fff; box-shadow: 0px 0px 18px -14px black"
      app
      fixed
    >
      <div class="d-flex align-center">
        <v-btn
          icon
          @click="
            navBarData.show
              ? (navBarData.show = false)
              : (navBarData.show = true)
          "
        >
          <v-icon> mdi-menu </v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn text icon to="/personal-data">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <div
      style="
        width: 100%;
        height: 83px;
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 18px -14px black;
        background-color: #fff;
        position: sticky;
        bottom: 0;
      "
    >
      <v-row style="text-align: center" class="ma-0 pa-0">
        <v-col cols="4">
          <v-btn icon large to="/shop">
            <v-icon> mdi-store-outline </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn
            to="/"
            icon
            x-large
            style="
              background-color: #59d8f8;
              color: #fff;
              box-shadow: 0px 0px 18px 0px #59d8f8;
            "
          >
            <v-icon> mdi-home </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn icon large to="/add-to-card">
            <v-icon> mdi-cart-arrow-down </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <navBar :data="navBarData" />
  </v-app>
</template>

<script>
import navBar from "./components/navBarMenu";
export default {
  name: "App",
  components: { navBar },

  data: () => ({
    navBarData: {
      show: false,
    },
  }),
};
</script>
