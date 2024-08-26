document.getElementById("toggleGallery").addEventListener("click", function () {
  const gallery = document.getElementById("gallery");
  if (gallery.style.display === "none") {
    gallery.style.display = "block";
  } else {
    gallery.style.display = "none";
  }
});
