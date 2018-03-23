$(document).ready(function() {
  $("form#tracker").submit(function(event) {
    event.preventDefault();
    var frontback = parseInt($("input:radio[name=frontback]:checked").val());
    var trait = parseInt($("input:radio[name=trait]:checked").val());
    var brain = parseInt($("input:radio[name=brain]:checked").val());
    var truth = parseInt($("input:radio[name=truth]:checked").val());
    var interests = parseInt($("input:radio[name=interests]:checked").val());
    var score = frontback + brain + truth + interests;

    $("#output").show();
    if (score <=3) {
      $("#harry").show();
    } else if (score <=6) {
      $("#ron").show();
    } else {
      $("#hermione").show();
    }

    $("form#tracker").hide();
  });
});
