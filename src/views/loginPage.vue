<template>
  <div>
    <div class="pa-3" style="width: 330px; margin: auto">
      <v-form ref="form" lazy-validation v-model="form_validation">
        <v-row>
          <v-col style="text-align: center">
            <h1>Kirish</h1>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-text-field
              label="Elektron pochta"
              outlined
              clearable
              :rules="[(v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Elektron pochtangizni kiriting kiriting']"
              v-model="form.email"
            />
          </v-col>
          <v-col cols="12" class="pt-0 pb-0">
            <v-text-field
              label="Parol"
              outlined
              :rules="[(v) => !!v || 'Parolni kiriting']"
              type="text"
              :append-icon="hideEye"
              v-if="show_password"
              @click:append="hidePassword()"
              v-model="form.password"
            />
            <v-text-field label="Parol" outlined :rules="[(v) => !!v || 'Parolni kiriting']" type="password" :append-icon="eye" @click:append="showPassword()" v-else v-model="form.password" />
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-btn depressed block style="background-color: #59d8f8; color: #fff; box-shadow: 0px 0px 18px 0px rgba(89, 216, 248, 0.58)" class="pa-7" @click="sendForm()">
              <h2>Kirish</h2>
              <v-icon class="ml-3"> mdi-login </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "loginPage",

  computed: {
    ...mapGetters({ user_data: "login/user_data" }),
  },
  data() {
    return {
      show_password: false,
      eye: "mdi-eye-off",
      hideEye: "mdi-eye",
      form: {
        email: "",
        password: "",
      },
      form_validation: true,
    };
  },
  methods: {
    ...mapActions("login", ["sendForm"]),
    showPassword() {
      this.show_password = true;
    },
    hidePassword() {
      this.show_password = false;
    },
    async sendForm() {
      if (this.form.email && this.form.password && this.form_validation) {
        if (this.form.password.length >= 8) {
          try {
            await this.$store.dispatch("login/sendForm", {
              email: this.form.email,
              password: this.form.password,
            });
            this.$router.push("/personal-data");
            await window.location.reload();
          } catch (e) {
            console.log(e);
            this.$toast.error(e.response?.data?.message || "Ma'lumotlar yuborilmadi");
          }
        } else {
          this.$toast.warning("Parolingiz kamida 8ta yoki undan katta bo'lishi kerak");
        }
      } else {
        this.$toast.warning("Ma'lumotlarni to'liq kiriting!");
      }
    },
  },
};
</script>

<style scoped></style>
