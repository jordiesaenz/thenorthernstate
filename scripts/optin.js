$( document ).ready(function() {
    $("#optin-close").click(function() {
      $(".optin-overlay").slideToggle("fast");
    });
    $("#optin-open").click(function() {
      $(".optin-overlay").slideToggle("fast");
    });
    jQuery.fn.shake = function() {
      this.each(function(i) {
        $(this).css({ "position" : "relative" });
        for (var x = 1; x <= 3; x++) {
          $(this).animate({ left: -50 }, 50).animate({ left: 0 }, 50).animate({ left: 50 }, 50).animate({ left: 0 }, 50);
        }
      });
      return this;
    }
    setInterval(function(){
      $('#optin-open').shake();
    },5000);
});
