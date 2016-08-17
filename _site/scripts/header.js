$(function() {
    $("#menuDropdown").click( function() {
      console.log("CLICK");
      $(".menu").toggleClass("open");
      $("#dropdownIcon").toggleClass("fa-caret-down");
      $("#dropdownIcon").toggleClass("fa-close");
    });
});
