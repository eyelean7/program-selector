$(function() {
  // first level will send an error or generate one of the two subsequent question options
  $("#whichEndSelect").change(function() {
    $(".layer2, .layer3, .layer4, .outcome").hide();
    var whichEndInput = $("#whichEndSelect").val();
    if (whichEndInput === "choose") {
      alert("Please choose front-end or back-end");
    }
    // second level that leads you down path of front-end development
    else if (whichEndInput === "front") {
      $("#front-end").show();
      $("#css-or-design").change(function() {
        $(".outcome").hide();
        var cssDesignInput = $("#css-or-design").val();
        if (cssDesignInput === "choose") {
          alert("Please choose the more appealing option")
        }
        // you should learn CSS
        else if (cssDesignInput === "css") {
          $("#cssCourse").show();
        }
        // you should learn web design
        else if (cssDesignInput === "design") {
          $("#designCourse").show();
        }
      });
    }
    // second level that leads you down the path of back-end development
    else if (whichEndInput === "back") {
      $("#back-end").show();
      $("#large-or-small").change(function() {
        $(".layer3, .layer4, .outcome").hide();
        var largeOrSmallInput = $("#large-or-small").val();
        // error message
        if (largeOrSmallInput === "choose") {
          alert("Please choose what size company to work for")
        }
        // third level asks preference
        else if (largeOrSmallInput === "large") {
          $(".layer3").hide();
          $("#large-company").show();
          $("#software-or-application").change(function() {
            var softwareOrApplicationInput = $("#software-or-application").val();
            // error
            if (softwareOrApplicationInput === "choose") {
              alert("Please choose your preference");
            }
            // fourth level determines outcome
            else if (softwareOrApplicationInput === "software") {
              $(".outcome").hide();
              $("#cSharpCourse").show();
            }
            else if (softwareOrApplicationInput === "application") {
              $("#javaCourse").show();
            }
          });
        }
        else if (largeOrSmallInput === "small") {
          alert("You will learn PHP or Ruby")
        }
      });
    }
  });
});
