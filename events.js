// Need event listeners for:
  // Any section
    // Output section text
  // H1
    // On hover, output message
    // On not hovering any more, output message
  // Input field
    // On keyup, output text
  // Each of the buttons
    // Add class for whatever
    // (optional) change name of button
    // (optional) remove the whatever on next button press

$('section').click( function(clickEvt) {
  var text = clickEvt.target.innerText
  $('#output-target').html(text)
})

$('h1').mouseover( function() {
  $('#output-target').html("You moved your mouse over the header.")
})

$('h1').mouseleave( function() {
  $('#output-target').html("You left me!!")
})

$('#keypress-input').keyup( function(keyEvt) {
  if(keyEvt.key === "Enter") {
    $('#keypress-input').val('')
  }
  var inputVal = $('#keypress-input').val()
  $('#output-target').html(inputVal)
})

$('#add-color').click( function() {
  if($('#add-color').html() === "Add color") {
    $('#guinea-pig').addClass('blue')
    $(this).html('Remove color')
  }
  else if ($('#add-color').html() === "Remove color"){
    $('#guinea-pig').removeClass('blue')
    $(this).html('Add color')
  }
})

$('#make-large').click( function() {
  if($('#make-large').html() === "Hulkify") {
    $('#guinea-pig').addClass('large')
    $(this).html('Unhulkify')
  }
  else if ($('#make-large').html() === "Unhulkify"){
    $('#guinea-pig').removeClass('large')
    $(this).html('Hulkify')
  }
})

$('#add-border').click( function() {
  if($('#add-border').html() === "Capture it") {
    $('#guinea-pig').addClass('border')
    $(this).html('Free it')
  }
  else if ($('#add-border').html() === "Free it"){
    $('#guinea-pig').removeClass('border')
    $(this).html('Capture it')
  }
})

$('#add-rounding').click( function() {
  if($('#add-rounding').html() === "Rounded") {
    $('#guinea-pig').addClass('rounded')
    $(this).html('Squared')
  }
  else if ($('#add-rounding').html() === "Squared"){
    $('#guinea-pig').removeClass('rounded')
    $(this).html('Rounded')
  }
})






