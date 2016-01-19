'use strict';

var ref = new Firebase('https://seahawk-watcher.firebaseio.com/');
var answerRef = ref.child('answer');
var $post;
// var $template;
var answerList;

$(document).ready(function(e) {
  // e.preventDefault();
  $('#post').on('click', createPost);
});

function createPost() {
  console.log('working');
  answerRef.push({
    name: $('#addUsername').val(),
    answer: $('#addAnswer').val()
  });
  $('#addUsername').val('');
  $('#addAnswer').val('');
}

answerRef.on('child_added', function(snapshot) {
  console.log(snapshot.val());
  var $rows = [];
  snapshot.forEach(function(answerSnap) {
    var key = answerSnap.key();

    var comment = $('div').attr('id', key);
    console.log(comment);
    // console.log(answer);
    // var $template = $('#template');
    // var $tr = $template.clone();
    // // $.remove('id');
    // $tr.children('.name').text(post.name);
    // $tr.children('.answer').text(post.answer);
    //$('#postAnswer1').text(post.name).attr(key);
    //$('#postAnswer2').text(post.answer).attr(key);

    // $row.append($tr);
  });
})
