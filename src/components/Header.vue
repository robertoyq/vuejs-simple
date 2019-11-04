<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <img src="../assets/img/Logo.svg" alt class="card-img-top logo-img" />
          <div class="top-left">
            <img src="../assets/img/pastel-paralax.png" alt class="card-img-top" />
          </div>
          <div class="top-right">
            <img src="../assets/img/pasteis-img.png" alt class="card-img-top" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  padding: 30px 0 15px;
  display: flex;
  justify-content: center;
}
.logo-img {
  margin: 0 auto;
  text-align: center;
  margin-left: 125px;
  display: flex;
  width: 62%;
}
.top-left {
  position: absolute;
  top: -50px;
  left: -245px;
  z-index: 2;
  width: 50%;
}
.top-right {
  right: 15px;
  position: absolute;
  top: 105px;
  max-width: 30%;
}
.top-left:hover {
  transform: translateX(-30px);
  transition: all 0.5s ease-in-out;
}

@media only screen and (max-width: 1200px) {
  .logo-img {
    margin-left: 100px;
  }
  .top-left {
    left: -200px;
  }
  .top-right {
    top: 90px;
  }
}
@media only screen and (max-width: 991px) {
  .logo-img {
    margin-left: 75px;
  }
  .top-left {
    left: -150px;
  }
  .top-right {
    top: 70px;
  }
}
@media only screen and (max-width: 767px) {
  .logo-img {
    margin: 0 auto;
  }
}
</style>