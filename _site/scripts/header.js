$(function() {
    $("#menuDropdown").click( function() {
      $(".menu").toggleClass("open");
      $("#dropdownIcon").toggleClass("fa-caret-down");
      $("#dropdownIcon").toggleClass("fa-close");
    });
});
