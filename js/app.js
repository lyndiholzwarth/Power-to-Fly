$(document).ready(function(){
	// Show directions
  $(".directions").click(function(){
    $(".overlay").fadeIn(1000);
	});

  // Hide directions
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	// clear calculator
  $('.reset').on ('click', function(event){
    $('#list li' ).replaceWith('<li></li>');
  });

	// accept entered numbers, seperated by comma
	$( "form" ).on( 'click', '#addButton', function(event) {
		event.preventDefault();
		entryNumbers = $('#inputNumbers').val();	
		console.log(entryNumbers);
    if (entryNumbers===" "){
       $('#list li').replaceWith(
      '<li>Please enter values to be added</li>'
      );
    };

    integers = entryNumbers.split(/[,+ ]+/);
    makeSum(integers);
  });


testArray1=[1, 2, 3, 4, 5];

testSum(testArray1, 4)

});


// sum function
function makeSum(integers){
  var totalSum=0;
    for(var i=0; i<integers.length; i++){
      evalEntry(integers);
      integers[i]= +integers[i];
      totalSum += integers[i];
    };
    if(isNaN(totalSum)==true){
      console.log("error here");
      // reset to defaults
    }
    else{
       $('#list li').replaceWith(
      '<li>'+totalSum+'</li>'
      );
    };
  $('#inputNumbers').val("");
};

// evaluate for real numbers
function evalEntry(integers){
 for(var i=0; i<integers.length; i++){
    Number(integers[i]);
    if (isNaN(Number(integers[i]))==true){
      $('#list li').replaceWith(
      '<li>Please enter in numeric forms only</li>'
      );
      console.log("here"+Number(integers[i]));
      break;
    }
  };
};

// testing function
function testSum(testArray1, expected) {
  results.total++;
  var result = makeSum(testArray1);
  if (result !== expected) {
      results.bad++;
      console.log("Expected " + expected + ", but was " + result);
  }
}
var results = {
    total: 0,
    bad: 0
};





