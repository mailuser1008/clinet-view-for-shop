<template>
  <div>
    <v-row class="ma-0">
      <v-col cols="12" sm="6" md="4" lg="3" class="pb-0 mt-3">
        <v-text-field
          v-model="search_user"
          @click:append="searchUser()"
          @keyup.enter="searchUser()"
          label="Qidirish..."
          outlined
          append-icon="mdi-magnify"
        />
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="all_users"
          disable-sort
          disable-filtering
          disable-pagination
          hide-default-footer
          no-data-text="Ma'lumotlar mavjud emas"
        >
          <template v-slot:item.delete="items">
            <v-btn color="error" icon @click="deleteUserDialog(items)">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-dialog width="350px" v-model="delete_dialog.show" persistent>
      <v-card width="350px" height="100%" class="pa-5 pl-3 pr-3">
        <h4>
          Siz {{ delete_dialog.first_name }} ismli foydalanuvchini
          o'chirmoqchimisiz?
        </h4>
        <v-divider class="mt-5" />
        <v-card-actions>
          <v-btn
            @click="deleteUser(items)"
            class="mt-3"
            color="#59d8f8"
            dark
            depressed
          >
            tasdiqlash
          </v-btn>
          <v-btn
            class="mt-3"
            color="error"
            dark
            depressed
            @click="delete_dialog.show = false"
          >
            bekor qilish
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "../axios";
export default {
  name: "usersDataPage",
  data() {
    return {
      search_user: "",
      user_id: null,
      delete_dialog: {
        show: false,
        first_name: "",
      },
      all_users: [],
      headers: [
        {
          text: "ID",
          value: "id",
          align: "center",
        },
        {
          text: "Ismi",
          value: "first_name",
          align: "center",
        },
        {
          text: "Familyasi",
          value: "last_name",
          align: "center",
        },
        {
          text: "Elektron pochtasi",
          value: "email",
          align: "center",
        },
        {
          text: "O'chirish",
          value: "delete",
          align: "center",
        },
      ],
    };
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    async searchUser() {
      try {
        this.$overlay(true);
        const response = await axios.post("/search-user", {
          email: this.search_user,
        });
        this.all_users = response.data;
      } catch (e) {
        this.$toast.error(
          e.response?.data?.message || "Foydalanuvchi qidirishda xatolik!"
        );
      } finally {
        this.$overlay(false);
      }
    },
    async deleteUser() {
      try {
        this.$overlay(true);
        const response = await axios.delete("/delete-user", {
          params: {
            id: this.user_id,
          },
        });
        this.delete_dialog.show = false;
        this.getAllUsers();
        this.$toast.success(
          response.data.message || "Foydalanuvchi o'chirildi!"
        );
      } catch (e) {
        this.$toast.error(
          e.response?.data?.message || "Foydalanuvchi o'chililmadi!"
        );
      } finally {
        this.$overlay(false);
      }
    },
    deleteUserDialog(items) {
      (this.user_id = items.item.id), (this.delete_dialog.show = true);
      this.delete_dialog.first_name = items.item.first_name;
    },
    async getAllUsers() {
      try {
        this.$overlay(true);
        const response = await axios.get("/get-all-users");
        this.all_users = response.data;
      } catch (e) {
        this.$toast.error(
          e.response?.data?.message || "Foydalanuvchilar yuklab olinmadi"
        );
      } finally {
        this.$overlay(false);
      }
    },
  },
};
</script>

<style scoped></style>
