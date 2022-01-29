<template>
  <div>
    <v-row class="ma-0" v-if="!user_data.user_data.email">
      <v-col cols="12" class="mt-5">
        <div
          style="
            width: 250px;
            padding: 12px;
            border-radius: 5px;
            border: 1px solid #59d8f8;
            margin: auto;
            cursor: pointer;
          "
          class="change_hover"
          @click="goLoginPage()"
        >
          <h2 style="text-align: center; color: #59d8f8">Kirish</h2>
        </div>
      </v-col>
      <v-col cols="12" class="ma-0 pa-0">
        <div style="text-align: center">
          <span style="font-size: 17px; font-weight: 500; color: #6a6a6a">
            yoki
          </span>
        </div>
      </v-col>
      <v-col cols="12">
        <div
          style="
            width: 250px;
            padding: 12px;
            border-radius: 5px;
            border: 1px solid #59d8f8;
            margin: auto;
            cursor: pointer;
          "
          class="change_hover"
          @click="goRegisterPage()"
        >
          <h2 style="text-align: center; color: #59d8f8">Ro'yxatdan o'tish</h2>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="user_data.user_data.email" class="ma-0">
      <v-col cols="12">
        <div
          style="
            width: 330px;
            height: 100%;
            padding: 12px;
            border-radius: 5px;
            border: 1px solid #59d8f8;
            margin: auto;
            cursor: pointer;
          "
          class="mt-1 pb-0"
        >
          <h1 style="text-align: center">Shaxsiy ma'lumotlar</h1>
          <div class="mt-5">
            <span style="font-size: 18px">Ismi: </span>
            <span style="font-weight: 600; font-size: 18px">{{
              user_data.user_data.first_name
            }}</span>
          </div>
          <div class="mt-3">
            <span style="font-size: 18px">Familyasi: </span>
            <span style="font-weight: 600; font-size: 18px">{{
              user_data.user_data.last_name
            }}</span>
          </div>
          <div class="mt-3">
            <span style="font-size: 18px">Elektron pochta: </span>
            <span style="font-weight: 600; font-size: 18px">{{
              user_data.user_data.email
            }}</span>
          </div>
        </div>
        <v-col cols="12" class="ma-0 pa-0 mt-3">
          <div
            style="
              width: 330px;
              padding: 12px;
              border-radius: 5px;
              border: 1px solid #59d8f8;
              margin: auto;
              cursor: pointer;
            "
            class="change_hover"
            @click="logOut()"
          >
            <h2 style="text-align: center; color: #59d8f8">
              Chiqish <v-icon color="#59d8f8" class="">mdi-logout</v-icon>
            </h2>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import user_data from "../store/modules/user_data/user_data";
export default {
  name: "personalAccountPage",
  components: {},
  created() {},
  data() {
    return {
      user_data,
    };
  },
  methods: {
    logOut() {
      window.localStorage.clear();
      window.location.reload();
    },
    goLoginPage() {
      this.$router.push("/login");
    },
    goRegisterPage() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.change_hover:active {
  box-shadow: 0px 0px 18px -13px black;
}
</style>
