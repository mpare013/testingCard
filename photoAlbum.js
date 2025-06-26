document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const visibleCount = 1;
  
    const photos = [
      "https://images2.imgbox.com/37/76/2DI8SJ4H_o.jpg",
      "https://images2.imgbox.com/57/f6/GEZ6FSxi_o.jpg",
      "https://images2.imgbox.com/d9/d7/QNtTjbkz_o.jpg"
    ];
  
    function renderPhotos() {
      const strip = document.getElementById("photo-strip");
      strip.innerHTML = "";
  
      for (let i = 0; i < visibleCount; i++) {
        const photoIndex = (currentIndex + i) % photos.length;
        const img = document.createElement("img");
        img.src = photos[photoIndex];
        img.className = "album-photo";
        strip.appendChild(img);
      }
    }
  
    window.openAlbum = function () {
      currentIndex = 0;
      document.getElementById("window19").style.display = "block";
      renderPhotos();
      bringWindowToFront(window19);
    };
  
    window.closeAlbum = function () {
      document.getElementById("window19").style.display = "none";
    };
  
    window.nextPhotos = function () {
      currentIndex = (currentIndex + visibleCount) % photos.length;
      renderPhotos();
    };
  
    window.prevPhotos = function () {
      currentIndex = (currentIndex - visibleCount + photos.length) % photos.length;
      renderPhotos();
    };
  });
  