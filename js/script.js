//to make JQuery Work
$(document).ready(function () {
  //
  $("#name").focus();

  //To hide and show the placeholder for other.
  $("#other-title").hide();

  $("#title").change(function () {
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
  $("#design").change(function () {
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


 //function used to Select and Deselect the Check Box activities.
const activities = document.querySelector(`.activities`);
const checkbox = activities.querySelectorAll(`input[type="checkbox"]`);
activities.addEventListener("change", () => {
    if (checkbox[1].checked) {
        checkbox[3].parentNode.style.color = 'rgba(0,0,0,.2)';
        checkbox[3].disabled = true;
    }
    
    else {
        checkbox[3].disabled = false;
        checkbox[3].parentNode.style.color = 'rgba(0,0,0,1)';
    }
    if (checkbox[3].checked) {
        checkbox[1].parentNode.style.color = 'rgba(0,0,0,.2)';
        checkbox[1].disabled = true;
    }
    else {
        checkbox[1].disabled = false;
        checkbox[1].parentNode.style.color = 'rgba(0,0,0,1)';
    }
    if (checkbox[2].checked) {
        checkbox[4].parentNode.style.color = 'rgba(0,0,0,.2)';
        checkbox[4].disabled = true;
    }
    else {
        checkbox[4].disabled = false;
        checkbox[4].parentNode.style.color = 'rgba(0,0,0,1)';
    }
    if (checkbox[4].checked) {
        checkbox[2].parentNode.style.color = 'rgba(0,0,0,.2)';
        checkbox[2].disabled = true;
    }
    else {
        checkbox[2].disabled = false;
        checkbox[2].parentNode.style.color = 'rgba(0,0,0,1)';
    }
})
//Takes the price from a specified individual activity.
const price = item => {
    return parseInt(item.substring(item.indexOf('$') + 1));
}
const activitySelected = () => {
    if (totalCost > 0) {
        return true;
        console.log('Activity valid'); 
    } else {
        
        return false;
    }
}
const activityErrorDiv = document.createElement('div');
const activityError = document.createElement('h3');
const activityTitle = document.querySelector('.activities legend');
// Add total cost field to activities form.
let totalCost = 0;
const activitiesCostDiv = document.createElement('div');
const activitiesCost = document.createElement('h3');
activitiesCostDiv.setAttribute('id', 'totalSpend');
activitiesCostDiv.style.display = 'block';
activitiesCostDiv.appendChild(activitiesCost);
activities.appendChild(activitiesCostDiv);
// Calculate total cost of activities and show the price.
activities.addEventListener("change", e => {
    let item = e.target.parentNode.textContent;
    if (e.target.checked == true) {
        // If error message is present, remove error once activity is selected.
        if (activityError) {
            activityTitle.style.color = ""; 
            activityError.remove();
        }
      totalCost += price(item);
      activitiesCost.innerHTML = 'Total: $' + totalCost;
    } else if (e.target.checked == false) {
      totalCost -= price(item);
    }
    activitiesCost.textContent = "Total: $" + totalCost;
})


//Payment section of my project.
/** Select Payment Method */  

$("select#payment option[value='credit card']").attr("selected", "selected"); 
// shows as default
$(".credit-card").val();
$("#payment option:first").hide();
$("p:contains(PayPal)").hide();
$("p:contains(Bitcoin)").hide();
// hide and show the credit card information
$('#payment').on("change", function () {
if ($(this).val() == 'credit card') { 
$(".credit-card").show();
} else {
$(".credit-card").hide(); 
}

if ($(this).val() == 'paypal') { 
$("p:contains(PayPal)").show()
} else {
$("p:contains(PayPal)").hide()
}

if ($(this).val() == 'bitcoin') { 
$("p:contains(Bitcoin)").show()
} else {
$("p:contains(Bitcoin)").hide() 
}

});


//Validation for my form

  //validate name function
  const validateName = () => {
    //remove any previous error messages
    $('.nameVal').remove();
    //get the input value for the name
    let nameVal = $('#name').val();
    if ( nameVal === "") {
        $('#name').css('border-color', 'red').attr('placeholder', 'Please Enter Your Name');
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    } else if ( !isNaN(nameVal) ) {
        $('#name').css('border-color', 'red');
        $('#name').after('<p class="nameVal">Please enter a name using letters.</p>');
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    //if the value is text then make sure the border is the correct color and make button accessible
    } else if ( isNaN(nameVal) ) {
        $('#name').css('border-color', '#5e97b0');
        $('button').prop('disabled', false).css('cursor', 'default');
    }
}

$('#name').keyup(validateName).focusout(validateName);

//validate email function
const validateEmail = () => {
    $('.emailVal').remove();
    //get the email input value
    let emailVal = $('#mail').val();
    let test = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( emailVal === '') {
        $('#mail').css('border-color', 'red').attr('placeholder', 'Please Enter Your Email');
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    }
    else if ( test.test(emailVal) ) {
        $('#mail').css('border-color', '#5e97b0');
        $('button').prop('disabled', false).css('cursor', 'default');
    
    } else if ( !test.test(emailVal) ){
        $('#mail').css('border-color', 'red');
        $('#mail').after('<p class="emailVal">Please enter a valid email.</p>');
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    }
}

$('#mail').keyup(validateEmail).focusout(validateEmail);

//must choose at least one event validation
const validateEvents = () => {
    
    $('.eventsVal').remove();
  
    let checkedEvents = [];
    
    $('.activities input:checked').each(() => {
        checkedEvents.push($(this).text());
    });
    
    if (checkedEvents.length < 1) {
        $('.activities legend').css('color', 'red');
        $('.activities').after('<p class="eventsVal">Please choose at least one event.</p>');
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    
    } else {
        $('button').prop('disabled', false).css('cursor', 'default');
        $('.activities legend').css('color', '#184f68');
    }
}
//call validation on change
$('.activities').change(() => {
    validateEvents();
});

//credit card validation
//credit card number - must be numbers - must be between 13 & 16 numbers long
const validateCC = () => {
    //remove any previous error messages
    $('.ccVal').remove();
    
    $('#cc-num').css('border-color', '#5e97b0');
    
    $('button').prop('disabled', false).css('cursor', 'default');
    
    let ccVal = $('#cc-num').val();
    
    if (!isNaN(ccVal) && ccVal != ''){
      
        let numbers = ccVal.split('');
        if ( numbers.length < 13 || numbers.length > 16) {
            $('#cc-num').css('border-color', 'red');
            $('#cc-num').after(`<p class="ccVal">Credit Card must have at least 13 numbers and no more than 16 numbers.</p>`);
            $('button').prop('disabled', true).css('cursor', 'not-allowed');
        }
    //if there is no numbers
    } else if (ccVal === '') {
        $('#cc-num').css('border-color', 'red');
        $('#cc-num').after(`<p class="ccVal">Please enter a credit card number.</p>`);
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    } else {
        $('#cc-num').css('border-color', 'red');
        $('#cc-num').after(`<p class="ccVal">Please enter only numbers.</p>`);
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    }
}
//call the validate function
$('#cc-num').keyup(validateCC).focusout(validateCC)
const validateZip = () => {
    
    $('.zipVal').remove();
    
    $('#zip').css('border-color', '#5e97b0');
    
    $('button').prop('disabled', false).css('cursor', 'default');
    
    let zipVal = $('#zip').val();
    
    if (!isNaN(zipVal) && zipVal != ''){
        let numbers = zipVal.split('');
      
        if ( numbers.length != 5) {
            $('#zip').css('border-color', 'red');
            $('#zip').after(`<p class="zipVal">Zip Code must be 5 numbers long.</p>`);
            $('button').prop('disabled', true).css('cursor', 'not-allowed');
        }
    
    } else if (zipVal === ''){
        $('#zip').css('border-color', 'red');
        $('#zip').after(`<p class="zipVal">Please enter a zip code.</p>`);
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    } else {
        $('#zip').css('border-color', 'red');
        $('#zip').after(`<p class="zipVal">Please enter only numbers.</p>`);
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    }
}
$('#zip').keyup(validateZip).focusout(validateZip);


const validateCVV = () => {
    
    $('.cvvVal').remove();
    
    $('#cvv').css('border-color', '#5e97b0');
    $('button').prop('disabled', false).css('cursor', 'default');
    
    let cvvVal = $('#cvv').val();
    if (!isNaN(cvvVal) && cvvVal != ''){
       
        let numbers = cvvVal.split('');
      
        if ( numbers.length != 3) {
            $('#cvv').css('border-color', 'red');
            $('#cvv').after(`<p class="cvvVal">CVV must be 3 numbers long.</p>`);
            $('button').prop('disabled', true).css('cursor', 'not-allowed');
        }
    
    } else if (cvvVal === ''){
        $('#cvv').css('border-color', 'red');
        $('#cvv').after(`<p class="cvvVal">Please enter a CVV.</p>`);
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    } else {
        $('#cvv').css('border-color', 'red');
        $('#cvv').after(`<p class="cvvVal">Please enter only numbers.</p>`);
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    }
}

$('#cvv').keyup(validateCVV).focusout(validateCVV);

//make sure all the form is filled out before submitting form
$('button').click(() => {
    validateName();
    validateEmail();
    validateEvents();
    let selected = $('#payment option:selected').text();
    if (selected === "Credit Card" ) {
        validateCC();
        validateZip();
        validateCVV();
    }
});
; 
 

  