<template>
  <div class="slider">
    <div id="demo" class="carousel slide" data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://wallpaperaccess.com/full/639877.jpg" alt="Los Angeles" width="100%" height="650">
          <div class="carousel-caption">
            <h3 class="text-light">Los Angeles</h3>
            <p>We had such a great time in LA!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://cdn.wallpapersafari.com/57/20/8Wuslm.jpg" alt="Chicago" width="100%" height="650">
          <div class="carousel-caption">
            <h3 class="text-light">Chicago</h3>
            <p>Thank you, Chicago!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://wallpaperaccess.com/full/639877.jpg" alt="New York" width="100%" height="650">
          <div class="carousel-caption">
            <h3 class="text-light">New York</h3>
            <p>We love the Big Apple!</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
};
</script>

<style scoped>
  .slider img{
    height: 750px !important;
  }
</style>
