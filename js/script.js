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
$('#paypal, #bitcoin').hide();

//Set credit card as default method
$('#payment').val("credit card");

$('#payment').change(function(){
	if ($('#payment option:selected').val() === "paypal") {
		$('#credit-card, #bitcoin').hide();
		$('#paypal').show();
	} else if ($('#payment option:selected').val() === "bitcoin") {
		$('#credit-card, #paypal').hide();
		$('#bitcoin').show();
	} else {
		$('#credit-card').show();
		$('#paypal, #bitcoin').hide();
	}
});





function checkName(){
  let nameField=$('#name').val();
  let nameRegex=/^[a-zA-Z]+$/;
  let Errname = false;
  if (nameField == '' || !nameRegex.test(name))
  namefield.after('<p id="nameError" class="error">Please  Enter Valid Name !!</p>');
  else {
    $('#nameError').remove();
  }
}

function checkMail(){
  let nameField=$('#mail').val();
  let nameRegex=/^[a-zA-Z]+$/;
  let Errname = false;
  if (nameField == '' || !nameRegex.test(name))
  namefield.after('<p id="nameError" class="error">Please  Enter Valid Name !!</p>');
  else {
    $('#nameError').remove();
  }
}

function checkCredit(){
  let nameField=$('#name').val();
  let nameRegex=/^[a-zA-Z]+$/;
  let Errname = false;
  if (nameField == '' || !nameRegex.test(name))
  namefield.after('<p id="nameError" class="error">Please  Enter Valid Name !!</p>');
  else {
    $('#nameError').remove();
  }
}

function checkNameZip(){
  let nameField=$('#name').val();
  let nameRegex=/^[a-zA-Z]+$/;
  let Errname = false;
  if (nameField == '' || !nameRegex.test(name))
  namefield.after('<p id="nameError" class="error">Please  Enter Valid Name !!</p>');
  else {
    $('#nameError').remove();
  }
}

function checkCVV(){
  let nameField=$('#name').val();
  let nameRegex=/^[a-zA-Z]+$/;
  let Errname = false;
  if (nameField == '' || !nameRegex.test(name))
  namefield.after('<p id="nameError" class="error">Please  Enter Valid Name !!</p>');
  else {
    $('#nameError').remove();
  }
}