$(function() {
  // first level front or back end
  $("#whichEndSelect").change(function() {
    $(".layer2, .layer3, .outcome").hide();
    var whichEndInput = $("#whichEndSelect").val();
    if (whichEndInput === "choose") {
      alert("Please choose front-end or back-end");
    }
    else if (whichEndInput === "front") {
      $("#front-end").show();
      $("#css-or-design").change(function() {
        $(".outcome").hide();
        var cssDesignInput = $("#css-or-design").val();
        if (cssDesignInput === "choose") {
          alert("Please choose the more appealing option")
        }
        // you win CSS
        else if (cssDesignInput === "css") {
          $("#cssCourse").show();
        }
        // you win Web Design
        else if (cssDesignInput === "design") {
          $("#designCourse").show();
        }
      });
    }
    else if (whichEndInput === "back") {
      $("#back-end").show();
        // third level asks preference
      $("#large-or-small").change(function() {
        $(".layer3, .outcome").hide();
        var largeOrSmallInput = $("#large-or-small").val();
        if (largeOrSmallInput === "choose") {
          alert("Please choose what size company to work for")
        }
        else if (largeOrSmallInput === "large") {
          $("#large-company").show();
          $("#software-or-application").change(function() {
            $(".outcome").hide();
            var softwareOrApplicationInput = $("#software-or-application").val();
            if (softwareOrApplicationInput === "choose") {
              alert("Please choose your preference");
            }
            // you win C#
            else if (softwareOrApplicationInput === "software") {
              $(".outcome").hide();
              $("#cSharpCourse").show();
            }
            // you win Java
            else if (softwareOrApplicationInput === "application") {
              $("#javaCourse").show();
            }
          });
        }
        else if (largeOrSmallInput === "small") {
          $("#small-company").show();
          $("#little-or-lots").change(function() {
            $(".outcome").hide();
            var littleOrLotsInput = $("#little-or-lots").val();
            if (littleOrLotsInput === "choose") {
              alert("Please choose your preference");
            }
            else if (littleOrLotsInput === "little") {
              $("#phpCourse").show();
            }
            else if (littleOrLotsInput === "lots") {
              $("#rubyCourse").show();
            }
          });
        }
      });
    }
  });
});
