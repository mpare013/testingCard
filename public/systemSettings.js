document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById('colorPicker');
    let selectedColor = null;
  
    colorPicker.addEventListener('input', function () {
      selectedColor = this.value;
      document.getElementById('preview').style.backgroundColor = selectedColor;
    });
  
    window.selectColor = function (element) {
      selectedColor = window.getComputedStyle(element).backgroundColor;
      document.getElementById('preview').style.backgroundColor = selectedColor;
    };
  
    window.applyColor = function () {
      if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
      }
    };
  
    window.cancelColor = function () {
      document.getElementById('preview').style.backgroundColor = "transparent";
      selectedColor = null;
    };
  });