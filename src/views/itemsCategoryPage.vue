<template>
  <div>
    <div>
      <div class="ma-3 mb-0">
        <v-text-field
          outlined
          label="Qidirish..."
          style="width: 270px; display: inline-block"
        />
        <v-btn
          class="ml-3"
          icon
          large
          style="background-color: #59d8f8; display: inline-block"
          @click="showDialog()"
        >
          <v-icon color="#fff"> mdi-plus </v-icon>
        </v-btn>
      </div>
      <v-data-table
        :headers="headers"
        no-data-text="Ma'lumotlar mavjud emas"
        disable-sort
        disable-filtering
        disable-pagination
        hide-default-footer
      ></v-data-table>
    </div>
    <v-dialog width="500px" v-model="add_dialog" persistent>
      <v-card width="500px" height="100%">
        <v-form lazy-validation ref="form" v-model="form">
          <h2 style="text-align: center" class="pt-2">Yangi tovar qo'shish</h2>
          <v-text-field
            v-model="add_dialog_data.item_title"
            :rules="[(v) => !!v || 'Iltimos tovar nomini kiriting!']"
            outlined
            label="Tovar nomi"
            class="pa-5 pb-0"
          />
          <v-text-field
            outlined
            label="Tovar narxi"
            class="pa-5 pt-0"
            type="number"
            placeholder="Iltimos tovar narxini so'mda kiriting!"
            v-mask="'############'"
            v-model="add_dialog_data.item_price"
            :rules="[(v) => !!v || 'Iltimos tovar summasini kiriting!']"
          />
          <v-file-input
            v-model="add_dialog_data.item_image"
            accept="image/*"
            outlined
            class="pa-5 pt-0"
            label="Tovar rasmini yuklang!"
          />
          <v-textarea
            v-model="add_dialog_data.item_additional"
            class="pa-5 pt-0 pb-0"
            outlined
            label="Tovar qo'shimcha ma'lumoti"
            :rules="[
              (v) => !!v || 'Iltimos tovar qo\'shimcha ma\'lumotini kiriting!',
            ]"
          />
          <v-card-actions class="pb-5 pl-5">
            <v-btn color="primary" depressed dark @click="sendForm()">
              saqlash
            </v-btn>
            <v-btn @click="add_dialog = false" color="error" depressed dark>
              bekor qilish
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "../axios";
export default {
  name: "itemsCategoryPage",
  data() {
    return {
      form: true,
      add_dialog_data: {
        item_title: "",
        item_additional: "",
        item_price: "",
        item_image: [],
      },
      add_dialog: false,
      headers: [
        {
          text: "ID",
          value: "id",
          align: "center",
        },
        {
          text: "Tovar nomi",
          value: "item_title",
          align: "center",
        },
        {
          text: "Qo'shimcha ma'lumot",
          value: "additional_data",
          align: "center",
        },
        {
          text: "Tovar narxi",
          value: "item_price",
          align: "center",
        },
      ],
    };
  },
  methods: {
    async sendForm() {
      console.log(this.add_dialog_data.item_image);
      try {
        this.$overlay(true);
        const response = await axios.post("/create-item", {
          item_title: this.add_dialog_data.item_title,
          item_price: this.add_dialog_data.item_price,
          item_image: this.add_dialog_data.item_image,
          item_additional: this.add_dialog_data.item_additional,
        });
        this.$toast.success(response.data.message || "Yangi tovar qo'shildi!");
      } catch (e) {
        this.$toast.error(
          e.response.data.message || "Tovar yuklashda xatolik!"
        );
      } finally {
        this.$overlay(false);
      }
    },
    showDialog() {
      this.add_dialog = true;
      this.add_dialog_data.item_image = [];
      this.add_dialog_data.item_price = "";
      this.add_dialog_data.item_additional = "";
      this.add_dialog_data.item_title = "";
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped></style>
