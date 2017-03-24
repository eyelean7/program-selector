$(function() {
  $("#whichEndSelect").change(function() {
    var whichEndInput = $("#whichEndSelect").val();
    if (whichEndInput === "choose") {
      alert("Please choose front-end or back-end");
    }
    else if (whichEndInput === "front") {
      $(".layer2").hide();
      $("#front-end").show();
      $("#css-or-design").change(function() {
        var cssDesignInput = $("#css-or-design").val();
        if (cssDesignInput === "choose") {
          alert("Please choose the more appealing option")
        }
        else if (cssDesignInput === "css") {
          $(".outcome").hide();
          $("#cssCourse").show();
        }
        else if (cssDesignInput === "design") {
          $(".outcome").hide();
          $("#designCourse").show();
        }
      });
    }
    else if (whichEndInput === "back") {
      $("layer2").hide();
      $("#back-end").show();
      $("#large-or-small").change(function() {
        var largeOrSmallInput = $("#large-or-small").val();
        if (largeOrSmallInput === "choose") {
          alert("Please choose what size company to work for")
        }
        else if (largeOrSmallInput === "large") {
          alert("You will learn C# or Java")
        }
        else if (largeOrSmallInput === "small") {
          alert("You will learn PHP or Ruby")
        }
      });
    }
  });
});
