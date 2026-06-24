---
layout: home
---

Welcome to the lncRNA lab!

![Lab group photo]({{ site.baseurl }}/assets/photos/photo1.jpg)


<style>
.carousel {
  position: relative;
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.carousel-image {
  display: none;
  width: 100%;
  height: auto;
}

.carousel-image.active {
  display: block;
}
</style>

<div class="carousel">
  <img src="{{ site.baseurl }}/assets/photos/slide1.jpg" class="carousel-image active">
  <img src="{{ site.baseurl }}/assets/photos/slide2.jpg" class="carousel-image">
  <img src="{{ site.baseurl }}/assets/photos/slide3.jpg" class="carousel-image">
  <img src="{{ site.baseurl }}/assets/photos/slide4.jpg" class="carousel-image">
</div>

<script>
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-image");

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 3000);
</script>

<p>If you see one image that changes every 3 seconds, the carousel works.</p>