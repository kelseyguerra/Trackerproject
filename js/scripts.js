$(document).ready(function() {
  $("form#tracker").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var frontback = parseInt($("input:radio[name=frontback]:checked").val());
    var trait = parseInt($("input:radio[name=trait]:checked").val());
    var brain = parseInt($("input:radio[name=brain]:checked").val());
    var truth = parseInt($("input:radio[name=truth]:checked").val());
    var interests = parseInt($("input:radio[name=interests]:checked").val());
    var score = frontback + brain + truth + interests;

    $("#output").show();
    if (score <=10) {
      $("#css").show();
    } else if (score <=20) {
      $("#php").show();
    } else {
      $("#dunzo").show();
    }

    $("form#tracker").hide();
    $(".name").text(nameInput);
  });
});
