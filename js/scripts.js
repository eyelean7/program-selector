$(function() {
  $("#whichEndSelect").change(function() {
    var whichEndInput = $("#whichEndSelect").val();
    if (whichEndInput === "choose") {
      alert("Please choose front-end or back-end");
    }
    else if (whichEndInput === "front") {
      $("#front-end").show();
      $("#css-or-design").change(function() {
        var cssDesignInput = $("#css-or-design").val();
        if (cssDesignInput === "choose") {
          alert("Please choose the more appealing option")
        }
        else if (cssDesignInput === "css") {
          $("#cssCourse").show();
        }
      });
    }
  });
});
