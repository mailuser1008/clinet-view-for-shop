<template>
  <div>
    <div class="pa-3" style="width: 330px; margin: auto">
      <v-form ref="form" lazy-validation v-model="form_validation">
        <v-row>
          <v-col style="text-align: center">
            <h1>Ro'yxatdan o'tish</h1>
          </v-col>
          <v-col cols="12" class="pb-0">
            <v-text-field label="Ism" outlined clearable :rules="[(v) => !!v || 'Ismingizni kiriting']" v-model="form.first_name" />
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-text-field label="Familya" outlined style="" clearable :rules="[(v) => !!v || 'Familyangizni kiriting']" v-model="form.last_name" />
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
          <v-col co ls="12" class="pt-0 pb-0">
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
            <v-text-field
              label="Parolni tasdiqlang"
              outlined
              :rules="[(v) => !!v || 'Parolni tasdiqlang']"
              type="text"
              :append-icon="hideEye"
              v-if="show_password_two"
              @click:append="hideConfirmPassword()"
              v-model="form.confirm_password"
            />
            <v-text-field
              label="Parolni tasdiqlang"
              outlined
              :rules="[(v) => !!v || 'Parolni tasdiqlang']"
              type="password"
              :append-icon="eye"
              @click:append="showConfirmPassword()"
              v-else
              v-model="form.confirm_password"
            />
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-btn depressed block style="background-color: #59d8f8; color: #fff; box-shadow: 0px 0px 18px 0px rgba(89, 216, 248, 0.58)" class="pa-7" @click="sendData()">
              <h2>Ro'yxatdan o'tish</h2>
              <v-icon class="ml-3"> mdi-send </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
// import axios from "../axios";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "registerPage",
  components: {},
  data() {
    return {
      form_validation: true,
      show_password: false,
      show_password_two: false,
      eye: "mdi-eye-off",
      hideEye: "mdi-eye",
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  computed: {
    ...mapGetters({ message: "registration/message" }),
  },
  methods: {
    ...mapActions("registration", ["sendRegister"]),
    showPassword() {
      this.show_password = true;
    },
    showConfirmPassword() {
      this.show_password_two = true;
    },
    hidePassword() {
      this.show_password = false;
    },
    hideConfirmPassword() {
      this.show_password_two = false;
    },
    async sendData() {
      if (this.form.first_name && this.form.last_name && this.form.email && this.form.password && this.form.confirm_password && this.form_validation) {
        if (this.form.password === this.form.confirm_password) {
          if (this.form.password.length >= 8 && this.form.confirm_password.length >= 8) {
            try {
              this.$overlay(true);
              await this.$store.dispatch("registration/sendRegister", {
                first_name: this.form.first_name,
                last_name: this.form.last_name,
                email: this.form.email,
                password: this.form.password,
              });
              this.$toast.success(this.$store.state.registration.message || "Foydalanuvchi yaratildi");
              this.form.first_name = "";
              this.form.last_name = "";
              this.form.email = "";
              this.form.password = "";
              this.form.confirm_password = "";
              this.show_password = false;
              this.show_password_two = false;
              this.$refs.form.resetValidation();
            } catch (e) {
              this.$toast.error(e.response?.data?.message || "Serverda xatolik yoki bunday foydalanuvchi mavjud iltimos pochtangizni o'zgartirib qaytadan urinib koring!");
            } finally {
              this.$overlay(false);
            }
          } else {
            this.$toast.warning("Parolingiz kamida 8ta yoki undan katta bo'lishi kerak");
          }
        } else {
          this.$toast.error("Parolingizni tekshiring");
        }
      } else {
        this.$toast.warning("Ma'lumotlarni to'liq kiriting!");
      }
    },
  },
};
</script>

<style scoped></style>
