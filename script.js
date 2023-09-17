

document.addEventListener("DOMContentLoaded",function() {

    const mainDiv = document.getElementById("mainDiv");
    const colour = document.getElementById("colorS");
    const background = document.getElementById("background");
    const padding = document.getElementById("padding");
    const fontSize = document.getElementById("fontSize");
    const fontWeight = document.getElementById("fontWeight");


  colour.addEventListener("change",function() {
    mainDiv.style.color = this.value;
  });

  background.addEventListener("change",function() {
    mainDiv.style.backgroundColor = this.value;
  });

  padding.addEventListener("change",function() {
    mainDiv.style.padding = this.value;
  });

  fontSize.addEventListener("change",function() {
    mainDiv.style.fontSize = this.value;
  });

  fontWeight.addEventListener("change",function() {
    mainDiv.style.fontWeight = this.value;
  });

   



});