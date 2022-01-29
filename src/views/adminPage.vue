<template>
  <div>
    <v-row class="ma-0">
      <v-col
        cols="12"
        sm="6"
        v-for="(items, index) of adminPage"
        :key="index"
        class="ma-0 pb-1"
      >
        <div
          style="
            width: 100%;
            height: 10vh;
            box-shadow: 0 0 18px -14px black;
            border-radius: 10px;
            cursor: pointer;
            position: relative;
          "
          class="hover_class"
          @click="goPage(items.id)"
        >
          <div style="position: absolute; top: 25%" class="ml-3">
            <v-icon large class="mr-3"> {{ items.icon }} </v-icon>
            <h3 style="display: inline-block; font-size: 18px">
              {{ items.title }}
            </h3>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "adminPage",
  data() {
    return {
      adminPage: [
        {
          id: 1,
          title: "Tovarlar",
          icon: "mdi-basket-outline",
          color: "#59d8f8",
        },
        {
          id: 2,
          title: "Foydalanuvchilar",
          icon: "mdi-account-group-outline",
          color: "#59d8f8",
        },
        {
          id: 3,
          title: "Buyurtmalar",
          icon: "mdi-store-edit-outline",
          color: "#59d8f8",
        },
        {
          id: 4,
          title: "Bekor qilingan buyurtmalar",
          icon: "mdi-store-off-outline",
          color: "#59d8f8",
        },
      ],
    };
  },

  methods: {
    goPage(id) {
      if (id === 1) {
        this.$router.push("/items-category");
      } else if (id === 2) {
        this.$router.push("/users-data");
      } else if (id === 3) {
        this.$router.push("/orders");
      } else if (id === 4) {
        this.$router.push("/canceled-orders");
      }
    },
  },
};
</script>

<style scoped>
.hover_class:active {
  background-color: rgba(0, 0, 0, 0.15);
}
</style>
