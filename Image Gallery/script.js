let images = document.querySelectorAll(".img-container img")
let lightBox = document.getElementById("lightbox");
let closeBtn = document.getElementById("closeBtn");
let lightboxImg = document.getElementById("lightboxImg");

images.forEach((img)=>{
    img.addEventListener("click",()=>{
        lightBox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click",()=>{
    lightBox.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});