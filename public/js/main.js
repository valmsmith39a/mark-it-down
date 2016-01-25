$(document).ready(init);

function init(){
  $('#submit-text-btn').on('click', submitTextBtn);
  $( "#input-text" ).on('keyup', debounce(submitTextBtn, 250));
}

function submitTextBtn(){	  	
	$('#output-text').empty();
  var markdownInput = $('#input-text').val();
  $.post('/markdowns', {markdowntext:markdownInput})
  .success(function(data) {
    $('#output-text').append($.parseHTML(data));
  }).fail(function(err) {
    alert('something went wrong :(');
  });
}

function debounce(func, delay) {
	var timeout; 
	return function() {
		var later = () => {
			timeout = null; 
			// arguments is an object of arguments passed in. not an array. 
			func.apply(this, arguments);
		};
		clearTimeout(timeout);
		// reference to the timer set 
		timeout = setTimeout(later, delay);
	};
}
