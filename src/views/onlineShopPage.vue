<template>
  <div>
    <v-row class="ma-1">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(item, index) of test"
        :key="index"
        class="ma-0 pb-1"
      >
        <div
          style="
            position: relative;
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.26);
            border-radius: 10px;
            width: 320px;
            height: 400px;
            margin: auto;
          "
        >
          <div
            style="
              position: absolute;
              box-shadow: 0 0 18px -10px black;
              border-radius: 10px;
              width: 290px;
              margin-right: auto;
              margin-left: auto;
              left: 0;
              right: 0;
              top: 10px;
              height: 280px;
            "
          >
            <v-img
              :src="item.image_url"
              style="border-radius: 10px"
              width="100%"
              height="100%"
            />
          </div>
          <div
            style="
              position: absolute;
              bottom: 18px;
              background-color: #fff;
              box-shadow: 0 0 18px -14px black;
              border-radius: 10px;
              width: 290px;
              height: 80px;
              margin-left: auto;
              margin-right: auto;
              left: 0;
              right: 0;
              padding: 10px;
            "
          >
            <span style="font-weight: 600" class="">{{ item.item_title }}</span>
            <br />
            <span style="font-weight: 800; font-size: 25px; color: #59d8f8">
              {{ item.item_price }} so'm
            </span>
            <v-btn
              large
              style="
                position: absolute;
                background-color: #59d8f8;
                color: #fff;
                box-shadow: 0px 0px 18px 0px #59d8f8;
                margin: auto;
                right: 0;
                top: 0;
                bottom: 0;
              "
              class="mr-3"
              icon
            >
              <v-icon> mdi-cart-plus </v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "onlineShopPage",
  data() {
    return {
      test: [
        {
          item_id: 56,
          item_title: "iPhone8 plus",
          item_price: "522 000",
          image_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dO770Kh7iMX_hP9DZuWyX9HaYcVCsV2Mug&usqp=CAU",
          desscution:
            "loejvouiejhuiovjeruijevuerjeuvuervuerhvuierhvuyevuy8hevheuevhuierev",
        },
        {
          item_id: 45,
          item_title: "Samsung galaxy A10",
          item_price: "150 000",
          image_url:
            "data:image/jpeg;base64,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",
          desscution:
            "sjkdncvsjkdnvojksdnvosdvnoisdvnoisdvjnsdoivjnsodivjnsodivjsdiovjsiodvjsiodvjiosdvjs90dvujsd90vjsd90visd90ivs90dv0s9div09isdvjids",
        },
        {
          item_id: 51,
          item_title: "Google android",
          item_price: "3 000 000",
          image_url:
            "data:image/jpeg;base64,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",
          desscution: "sljkdviowejgovijwei0gjiwo0ejgio0weg",
        },
        {
          item_id: 58,
          item_title: "Xao Mi 8A",
          item_price: "254 000 000",
          image_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7SXyyAjcPwduPy4YqYzJanwCeBWn-TUySQ&usqp=CAU",
          desscution:
            "lsdrkvgoperkgvroropekrgvjvoisdjvijuifvjwnerjwegnwjengweguiwejguiowejguiwejgiuwejguiwejgiuwerjg",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({ items: "items/items" }),
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions("items", ["getItems"]),
    getData() {
      try {
        this.$overlay(true);
        this.$store.dispatch("items/getItems");
      } catch (e) {
        this.$toast.error(e || "Ma'lumotlar yuklanmadi");
      } finally {
        this.$overlay(false);
      }
    },
  },
};
</script>

<style scoped></style>
