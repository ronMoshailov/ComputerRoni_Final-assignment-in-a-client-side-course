// Modals
  // Generate modals for PC_1 to PC_18
  for (var i = 1; i <= 18; i++) {
    var modalId = "PC_" + i;
    var imageSrc = "../assets/PC_" + i + ".jpg";
    document.write(
      '<div class="hiddenImageSize modal fade" id="' + modalId + '">' +
      '  <div class="modal-dialog">' +
      '    <div class="modal-content">' +
      '      <img class="sizeForHiddenImage" src="' + imageSrc + '">' +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }