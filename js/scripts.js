$(document).ready(function() {
  $("form#tracker").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var food = parseInt($("input:radio[name=food]:checked").val());
    var trait = parseInt($("input:radio[name=trait]:checked").val());
    var brain = parseInt($("input:radio[name=brain]:checked").val());
    var truth = parseInt($("input:radio[name=truth]:checked").val());
    var interests = parseInt($("input:radio[name=interests]:checked").val());
    var score = food + trait + brain + truth + interests;

    $("#output").show();
    if (score <=12) {
      $("#css").show();
    } else if (score <=30) {
      $("#php").show();
    } else {
      $("#dunzo").show();
    }

    $("form#tracker").hide();
    $(".name").text(nameInput);
  });
});
