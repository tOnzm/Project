<!-- eslint-disable no-console -->
<!-- eslint-disable vue/valid-v-slot -->
<!-- eslint-disable vue/v-slot-style -->
<template>
  <div>
    <v-card max-width="400" flat>
      <!-- กล่องค้นหา -->
      <v-text-field
        v-model="search"
        label="ค้นหาได้"
        variant="underlined"
        single-line
        density="compact"
        hide-details
        clearable
        placeholder="ค้นหาสินค้าที่ต้องการ"
        prepend-icon="mdi-magnify"
      ></v-text-field>
    </v-card>

    <v-data-table :headers="headers" :items="pokeData" :search="search">
      <!-- รูปภาพ -->
      <template v-slot:item.thumbnail="{ item }">
        <v-img :src="item.thumbnail" width="100" height="100"></v-img>
      </template>
      <!-- ราคา -->
      <template v-slot:item.price="{ item }"> {{ item.price }} บาท </template>
      <template v-slot:item.stock="{ item }"> {{ item.stock }} ชิ้น </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>ข้อมูลสินค้า</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <!-- ช่องว่าง -->
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px">
            <!-- ปุ่มเพิ่มข้อมูล -->
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                เพิ่มข้อมูล
              </v-btn>
            </template>
            <!-- สิ้นสุด ปุ่มเพิ่มข้อมูล -->

            <!-- กล่อง เพิ่มและแก้ไขข้อมูล -->
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.id"
                        label="รหัสสินค้า"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.title"
                        label="ชื่อสินค้า"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.price"
                        label="ราคา"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.stock"
                        label="จำนวนสินค้า"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.brand"
                        label="แบรนด์"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-file-input
                        v-model="editedItem.thumbnail"
                        label="รูปภาพ"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">ยกเลิก</v-btn>
                <v-btn color="blue darken-1" text @click="save">บันทึก</v-btn>
              </v-card-actions>
            </v-card>
            <!-- สิ้นสุด กล่องเพื่มและแก้ไขข้อมูล -->
          </v-dialog>
          <!-- กล่องตอบโต้ ยืนยันการลบ -->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">ลบจริงหรอ</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >ยกเลิก</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >ตกลง</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- สิ้นสุด กล่องตอบโต้ยืนยันการลบ -->
        </v-toolbar>
      </template>
      <!-- ปุ่ม Edit กับ delete -->
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <!-- สิ้นสุด ปุ่ม edit กับ delete-->
      <!-- ปุ่ม Reset -->
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> รีเซ็ต </v-btn>
      </template>
      <!-- สิ้นสุด ปุ่ม Reset -->
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Tutorials009',

   async asyncData({ $axios }) {
    try {
      const response = await $axios.$get('https://dummyjson.com/products')
      const pokeData = response.products
      console.log(pokeData)
      return { pokeData }
    } catch (error) {
      return { pokeData: ['error'] }
    }
  },
 
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      search: '',
      pokeData: [],
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'ภาพ', value: 'thumbnail' },
        { text: 'ชื่อสินค้า', value: 'title' },
        { text: 'ราคา', value: 'price' },
        { text: 'สินค้าในสต๊อก', value: 'stock' },
        { text: 'แบนด์', value: 'brand' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        title: '',
        price: 0,
        stock: 0,
        brand: 0,
        thumbnail: '',
      },
      defaultItem: {
        title: '',
        price: 0,
        stock: 0,
        brand: 0,
        thumbnail: '',
      },
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'เพิ่มข้อมูลสินค้า' : 'แก้ไขข้อมูล'
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  methods: {
   
    initialize() {
      this.pokeData = []
    },
    /* ปุ่มแก้ไขจะเปิด dialog แก้ไขข้อมูลสินค้า */
    editItem(item) {
      this.editedIndex = this.pokeData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    /* ปุ่มลบ */
    deleteItem(item) {
      this.editedIndex = this.pokeData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    /* ยืนยันว่าลบ */
    deleteItemConfirm() {
      this.pokeData.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    /* ปิดหน้าแก้ไข */
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    /* ปิดหน้าลบ */
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    /* ปุ่มบันทึก */
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.pokeData[this.editedIndex], this.editedItem)
      } else {
        this.pokeData.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style lang="scss" scoped>
.v-text-field {
  padding: 1rem;
  width: 500px;
}
</style>
