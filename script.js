// Staggered animation for words (splits any element with class "staggered" into spans)
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.staggered').forEach(function(el) {
      const words = el.innerText.split(" ");
      el.innerHTML = words
        .map((word, index) => `<span style="animation-delay: ${index * 0.3}s">${word} </span>`)
        .join(" ");
    });
  });
  
  // Photo carousel logic
  const images = [
    "https://raw.githubusercontent.com/khatirak/film/main/images/img_1.jpg",
    "https://raw.githubusercontent.com/khatirak/film/main/images/img_2.jpg",
    "https://raw.githubusercontent.com/khatirak/film/main/images/img_3.jpg"
  ];
  let currentImage = 0;
  const carouselImage = document.getElementById("carousel-image");
  
  document.querySelector(".carousel-btn.left").addEventListener("click", function() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    carouselImage.src = images[currentImage];
  });
  
  document.querySelector(".carousel-btn.right").addEventListener("click", function() {
    currentImage = (currentImage + 1) % images.length;
    carouselImage.src = images[currentImage];
  });
  
  // Replace the video placeholder with a YouTube iframe when clicked.
  function loadVideo(placeholder) {
    const videoId = placeholder.getAttribute("data-video-id");
    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    placeholder.parentNode.replaceChild(iframe, placeholder);
  }
