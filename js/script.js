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
   // $('#color option:first-child').hide();
   // $('#color option').hide();
   $("#colors-js-puns").hide();


   //show colors with category of js puns design
   $('#color').prepend('<option selected value="">Please Select A T-Shirt Theme</option>')
   $('#design').change(function(){

      $("#color option").hide();
      
      if($('#design').val() === "js puns") {
         $("#color option[value='cornflowerblue']").show();
         $("#color option[value='darkslategrey']").show();
         $("#color option[value='gold']").show();
         $("#color").val('');
         $("#colors-js-puns").show();
      } else if($('#design').val() === "heart js") {
         $("#color option[value='tomato']").show();
         $("#color option[value='steelblue']").show();
         $("#color option[value='dimgrey']").show();
         $("#color").val('');
         $("#colors-js-puns").show();
      }
   });


});
//This is the function to select workshops and make conflicting options disable.

