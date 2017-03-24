$(function() {
  $("form").submit(function() {
    var endInput = $("input:radio[name=end]:checked").val();
    var brainInput = $("input:radio[name=brain]:checked").val();
    var technologyInput = $("input:radio[name=technology]:checked").val();

    if (endInput && brainInput && technologyInput) {
      
    }
    else {
      alert("Please fill all fields")
    }
  });
});
