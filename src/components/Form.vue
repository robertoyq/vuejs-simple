<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 mx-auto">
        <form action @submit.prevent="createItem">
          <div class="form-header justify-content-between d-flex">
            <span class="text-header">Monte aqui o seu cardápio. O que está esperando?</span>
            <span class="text-switch">
              Comida
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round" @click="changeType"></span>
              </label>
              Bebida
            </span>
          </div>
          <div class="form-body">
            <div class="row">
              <div class="col-md-5">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Título do pedido"
                    required
                    minlength="3"
                    maxlength="60"
                    v-model="form.name"
                  />
                </div>
              </div>
              <div class="col-md-5">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="sabor"
                    placeholder="Sabor"
                    required
                    minlength="3"
                    maxlength="60"
                    v-model="form.flavor"
                  />
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    name="description"
                    placeholder="R$"
                    required
                    v-model="form.price"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                style="height: 100px"
                placeholder="Descrição"
                maxlength="550"
                v-model="form.description"
              />
            </div>
            <div class="form-group">
              <div class="helper"></div>
              <div class="drop display-inline align-center" @dragover.prevent @drop="onDrop">
                <div class="helper"></div>
                <label class="btn-select display-inline">
                  <img src="../assets/img/icon-drop.png" alt class="icon-img" />
                  <div>Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta</div>
                  <input
                    type="file"
                    name="image"
                    class="img-select"
                    @change="onChange"
                    accept="image/jpeg, image/png"
                  />
                </label>
              </div>
            </div>
            <div class="form-group d-flex">
              <div class="p-1">
                <div class="img-wrapper">
                  <img :src="form.image" alt width="150px" />
                  <button class="btn btn-danger" @click="deleteImage" v-if="form.image !== ''">X</button>
                </div>
              </div>
            </div>
            <div class="form-btns">
              <button class="btn btn-custom primary" type="button" @click="resetForm()">Limpar</button>
              <button class="btn btn-custom secondary" type="submit">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: 0,
        name: "",
        price: "",
        type: "",
        flavor: "",
        description: "",
        image: ""
      },
      items: [],
      type: false,
      id: 0
    };
  },

  methods: {
    orderItems() {
      return (this.items = this.items.sort((prev, curr) =>
        prev.id > curr.id ? -1 : 1
      ));
    },

    createItem() {
      this.form.id = this.id;

      if (!this.type) {
        this.form.type = "comida";
      } else {
        this.form.type = "bebida";
      }
      if (this.form.image == "" || this.form.image == null) {
        if (!this.type) {
          this.form.image = require("../assets/img/pastel-img.png");
        } else {
          this.form.image = require("../assets/img/bebida-img.png");
        }
      }
      this.items.push(this.form);

      this.orderItems();

      toast.fire({
        type: "success",
        title: "Item adicionado ao cardápio!"
      });

      this.form = {
        name: "",
        price: "",
        type: "",
        flavor: "",
        description: "",
        image: ""
      };
      this.id += 1;

      this.$emit("updated", this.items);
    },

    resetForm() {
      this.form = {
        name: "",
        price: "",
        type: "",
        flavor: "",
        description: "",
        image: ""
      };
    },

    onDrop: function(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.uploadImage(files[0]);
    },

    onChange(e) {
      var files = e.target.files;
      this.uploadImage(files[0]);
    },

    uploadImage(file) {
      var fileName = file.name;
      var index = fileName.lastIndexOf(".") + 1;
      var extFile = fileName.substr(index, fileName.length).toLowerCase();
      if (extFile == "jpg" || extFile == "png") {
        var img = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = function(e) {
          vm.form.image = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert("Apenas jpg/png imagens são aceitas.");
      }
    },

    deleteImage() {
      this.form.image = "";
    },

    changeType() {
      this.type = !this.type;
    }
  }
};
</script>

<style>
form {
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 30px #740b0b45;
  overflow: hidden;
}

form .form-header {
  background: #ffca00 0% 0% no-repeat padding-box;
  display: flex;
  height: 93px;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding: 25px;
}

form .form-body {
  margin-top: -40px;
  padding: 20px 20px 0;
}

.form-control {
  border: 1px solid #e43636;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  z-index: 5;
  position: relative;
}
::placeholder {
  color: #a03400 !important;
}

form .text-header {
  text-align: center;
  font: Bold Italic 20px Helvetica;
  letter-spacing: 0;
  color: #a03400;
  float: left;
  margin-left: 30px;
}

.form-btns {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: -23px;
  text-align: center;
}

.btn-custom {
  border-radius: 30px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  height: 45px;
  width: 150px;
  font-weight: bold;
}

.primary {
  background: #e43636 0% 0% no-repeat padding-box;
  color: #ffffff;
}
.primary:hover {
  color: #ffffff;
}

.drop {
  background-color: #f2f2f2;
  border: 1px solid #e43636;
  background-color: #fff;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  text-align: center;
}

.img-select {
  visibility: hidden;
}

.icon-img {
  margin-top: 15px;
  max-width: 50px;
}

.btn-select {
  border: 0;
  color: #a03400;
  cursor: pointer;
  display: inline-block;
  padding: 15px 35px;
  width: 100%;
}

.secondary {
  background: #ffca00 0% 0% no-repeat padding-box;
  color: #a03400;
  margin-left: 20px;
}
.secondary:hover {
  color: #a03400;
}
@media only screen and (max-width: 767px) {
  .form-header {
    height: 170px !important;
    display: block !important;
    text-align: center;
  }
  .text-header {
    font-size: 12px;
    float: none !important;
    display: block !important;
    margin-bottom: 10px !important;
  }
  .form-btns {
    margin-top: -18px;
  }

  .btn-custom {
    height: 35px;
    width: 110px;
  }

  .secondary {
    margin-left: 5px;
  }

  .btn-select {
    display: block;
  }
}

/* Btn Switch */

.text-switch {
  color: #a03400;
}
.switch {
  position: relative;
  display: inline-block;
  height: 15px;
  width: 45px;
  top: 3px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  background: #fff;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 0px;
  top: -3px;
  bottom: 4px;
  background-color: #e33535;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>