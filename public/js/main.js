$(document).ready(init);

function init(){
  $('#submit-text-btn').on('click', submitTextBtn);
}

function submitTextBtn(){
  var markdownInput = $('#input-text').val();
  $.post('/markdowns', {markdowntext:markdownInput})
  .success(function(data) {
    $('#output-text').append($.parseHTML(data));
  }).fail(function(err) {
    alert('something went wrong :(');
  });
}


