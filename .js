//to make JQuery Work
$(document).ready(function() {
    
//
 $('#name').focus();


//To hide and show the placeholder for other.
 $('#other-title').hide();

 $('#title').change(function(){
    if ($('#title').val() === "other") {
        $('#other-title').show();
    }
    else {
        $('#other-title').hide();
    }
 });





//To hide the design option.
 $('#design option:first-child').hide();
 $('#color option:first-child').hide();
 $('#color option').hide();
 $("#colors-js-puns").hide();


//show colors with category of js puns design
   $('#design').change(function(){

      $("#color option[value='cornflowerblue']").hide();
      $("#color option[value='darkslategrey']").hide();
      $("#color option[value='gold']").hide();
      $("#color option[value='tomato']").hide();
      $("#color option[value='steelblue']").hide();
      $("#color option[value='dimgrey']").hide();


    if($('#design').val() === "js puns") {
      $("#color option[value='cornflowerblue']").show();
      $("#color option[value='darkslategrey']").show();
      $("#color option[value='gold']").show();
      $("#color").val('cornflowerblue');
      $("#colors-js-puns").show();


  } else 

     if($('#design').val() === "heart js") {
      $("#color option[value='tomato']").show();
      $("#color option[value='steelblue']").show();
      $("#color option[value='dimgrey']").show();
      $("#color").val('tomato');
      $("#colors-js-puns").show();

    }
 });


});