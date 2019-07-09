//to make JQuery Work
$(document).ready(function() {
  //
  $("#name").focus();

  //To hide and show the placeholder for other.
  $("#other-title").hide();

  $("#title").change(function() {
    if ($("#title").val() === "other") {
      $("#other-title").show();
    } else {
      $("#other-title").hide();
    }
  });

  //To hide the design option.
  $("#design option:first-child").hide();
  // $('#color option:first-child').hide();
  // $('#color option').hide();
  $("#colors-js-puns").hide();

  //show colors with category of js puns design
  $("#color").prepend(
    '<option selected value="">Please Select A T-Shirt Theme</option>'
  );
  $("#design").change(function() {
    $("#color option").hide();

    if ($("#design").val() === "js puns") {
      $("#color option[value='cornflowerblue']").show();
      $("#color option[value='darkslategrey']").show();
      $("#color option[value='gold']").show();
      $("#color").val("");
      $("#colors-js-puns").show();
    } else if ($("#design").val() === "heart js") {
      $("#color option[value='tomato']").show();
      $("#color option[value='steelblue']").show();
      $("#color option[value='dimgrey']").show();
      $("#color").val("");
      $("#colors-js-puns").show();
    }
  });
});


//This is the function to select workshops and make conflicting options disable.
$(".activities > label").each(function() {
  if (($(this).text().indexOf("Tuesday 9am-12pm") >= 0 ) ||
      ($(this).text().indexOf("Wednesday 9am-12pm") >= 0)) {
    $(this).children().attr("id", "morningBox");

  } else if(($(this).text().indexOf("Tuesday 1pm-4pm") >= 0) ||  
            ($(this).text().indexOf("Wednesday 1pm-4pm") >= 0)){
    $(this).children().attr("id", "afternoonBox");
    
  } else {
    $(this).children().attr("id", "wholeDayBox");
  }
});


var totalCost = 0;


$(".activities").find("input:checkbox").change(function() {
    $("#p2").remove();

    //when you Select a checkbox for morning classes
    if ($(this).prop("checked")) {
      if ($(this).attr("id") == "morningBox") {
        $(".activities > label").each(function() {
          if ($(this).find("input").attr("id") == "morningBox") {
            $(this).find("input:not(:checked)").attr("disabled", "disabled");

            $(this).find("input:not(:checked)").parent().append();
            // cost goes up by $100
          }
        });
        totalCost += 100;
      } else if ($(this).attr("id") == "afternoonBox") {
        $(".activities > label").each(function() {
          if ($(this).children().attr("id") === "afternoonBox") {
            $(this).find("input:not(:checked)").attr("disabled", "disabled");

            $(this).find("input:not(:checked)").parent().append();
          }
        });
        totalCost += 100;
      } else if ($(this).attr("id") == "wholeDayBox") {
        //Main Conference
        totalCost += 200;
      }
    } else if (!$(this).prop("checked")) {
      if ($(this).attr("id") == "morningBox") {
        $(".activities > label").each(function() {
          if ($(this).find("input").attr("id") == "morningBox") {
            $(this).find("input:not(:checked)").prop("disabled", false);
            $(this).find("#Booked").remove();
          }
        });
        //cost goes down $100
        totalCost -= 100;
      }
      // if the checkbox related to a afternoon classes is unchecked
      else if ($(this).attr("id") == "afternoonBox") {
        $(".activities > label").each(function() {
          if ($(this).children().attr("id") === "afternoonBox") {
            $(this).find("input:not(:checked)").prop("disabled", false);
            $(this).children("#Booked").remove();
          }
        });
        // cost goes down $100
        totalCost -= 100;
      } else if ($(this).attr("id") == "wholeDayBox") {
        // remaining box is for the conference
        totalCost -= 200;
      }
    }
    //update total cost
    $(".activities").append("<p id='p2'>Total Cost Will Be: $" + totalCost + "</p>");
  });
