$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".outcome").hide();
    var endInput = $("input:radio[name=end]:checked").val();
    var brainInput = $("input:radio[name=brain]:checked").val();
    var technologyInput = $("input:radio[name=technology]:checked").val();

    if (endInput && brainInput && technologyInput) {
      if (endInput === "front") {
        $("#cssCourse").show();
        $("body").scrollTo("#cssCourse");
      }
      else if (technologyInput === "app") {
        $("#javaCourse").show();
        $("body").scrollTo("#javaCourse");
      }
      else if (brainInput === "creative") {
        $("#rubyCourse").show();
        $("body").scrollTo("#rubyCourse");
      }
      else {
        $("#cSharpCourse").show();
        $("body").scrollTo("#cSharpCourse");
      }
    }
    else {
      alert("Please fill all fields")
    }
  });
});
