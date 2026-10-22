function upDate(previewPic) {
  console.log("Sự kiện onmouseover đã được kích hoạt!");
  console.log("Alt:", previewPic.alt);
  console.log("Source:", previewPic.src);

  var imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}