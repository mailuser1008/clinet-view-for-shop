<template>
  <div>
    <v-navigation-drawer
      left
      width="300px"
      height="100%"
      v-model="data.show"
      app
    >
      <v-card style="height: 100%" class="elevation-0">
        <v-card-actions>
          <div
            style="
              box-shadow: 0px 0px 18px -14px black;
              width: 100%;
              border-radius: 10px;
              cursor: pointer;
              text-align: center;
            "
            class="pa-2 pl-1 clicked"
            @click="goGomePage()"
          >
            <span
              style="font-weight: 700; font-size: 30px; color: #59d8f8"
              class="ma-3 ml-0"
              >Store</span
            >
            <v-icon style="font-size: 45px; color: #59d8f8" class="mb-3"
              >mdi-store-check</v-icon
            >
          </div>
          <v-spacer />
        </v-card-actions>
        <v-list v-for="(items, index) of itemList" :key="index">
          <v-list-item :to="items.to">
            <v-list-item-icon>
              <v-icon> {{ items.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> {{ items.title }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "navBarMenu",
  props: ["data"],

  data() {
    return {
      itemList: [
        {
          title: "Bosh sahifa",
          icon: "mdi-home",
          to: "/",
        },
        {
          title: "Online do'kon",
          icon: "mdi-store-outline",
          to: "/shop",
        },
        {
          title: "Savat",
          icon: "mdi-cart-arrow-down",
          to: "/add-to-card",
        },
        {
          title: "Admin bo'limi",
          icon: "mdi-shield-account-outline",
          to: "/admin",
        },
      ],
    };
  },
  methods: {
    goGomePage() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.clicked:active {
  background-color: rgba(0, 0, 0, 0.07);
}
</style>
