<template>
  <div>
    <div class="divider" v-if="items.length > 0">
      <div class="divider-text">Items adicionados</div>
    </div>

    <div class="container">
      <div class="row my-5">
        <div class="col-10 mx-auto" v-for="item in items" :key="item.id">
          <div class="items">
            <div class="row">
              <div class="col-md-1">
                <div class="card-item-img">
                  <img :src="item.image" alt class="card-img-top" />
                </div>
              </div>
              <div class="col-md-11">
                <div class="card card-item">
                  <div class="card-header">
                    <div class="card-text d-flex justify-content-between">
                      <div class="card-name">"{{item.name}}"</div>
                      <div class="card-price text-right">{{item.price | currency('R$', 2, { decimalSeparator: ',' })}}</div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="card-text">
                    <div class="card-flavor"><span class="font-weight-bold mr-1" style="font-style: italic">Sabor:</span> {{item.flavor}}</div>
                    <div class="card-description"><span class="font-weight-bold mr-1" style="font-style: italic">Descrição:</span> {{item.description}}</div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {};
  }
};
</script>

<style>
/* Divider */

.divider {
  border-top: 1px solid #a03400 !important;
  margin-top: 70px;
  margin-bottom: 50px;
  color: #a03400;
  text-align: center;
}

.divider-text {
  background: #fff;
  width: 210px;
  margin: 0 auto;
  margin-top: -10px;
  font-weight: bold;
  font-style: italic;
}

/* Emd Of Divider */

/* Card Item */

.card {
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 30px #740b0b45;
  overflow: hidden;
}

.card-text {
  margin-left: 70px;
  width: 100%;
}

.card-item-img {
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-right: -120px;
  background: #fff;
}

.card-item-img img {
  z-index: 10;
}

.card .card-header {
  background: #e43636 0% 0% no-repeat padding-box;
  height: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
}

.card-item .card-name {
  color: #ffca00;
}

.card-item .card-price {
  float: right;
  color: #fff;
}

.card-item .card-body {
  color: #a03400;
}

@media only screen and (max-width: 767px) {

  .card-item {
    margin-top: -45px;
  }
  
  .card-item-img {
    width: 100%;
    margin: 0 auto;
    height: auto;
  }
  img {
    width: 70%;
  }

  .card-text {
    margin-left: 0;
  }
}

/* End Of Card Item */
</style>