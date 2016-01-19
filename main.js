'use strict';

var ref = new Firebase('https://seahawk-watcher.firebaseio.com/');
var answerRef = ref.child('answer');
var $post, $template, name, answer, answerList;


$(document).ready(function() {
  $('#post').on('click', createPost);
  // $('#modaly').on('click', '#addPost', addContent )
  // $('#getModal').on('click', grabInfo);
});

//create each post after click
function createPost(e) {
  e.preventDefault();
  // console.log('working');
  var post = {
    name: $('#addUsername').val(),
    answer: $('#addAnswer').val()
  };
  answerRef.push(post);
  $('#addUsername').val('');
  $('#addAnswer').val('');
}

//get new post info
// function grabInfo() {
//   var answerList = $('#answerList').val();
//   var postObject = {
//
//   }
// }

function showPost() {
answerRef.on('value', function(snapshot) {
  console.log(snapshot.val());
  var $rows = [];
  snapshot.forEach(function(childSnap) {
    var answer = childSnap.val();
    var thisKey = snapshot.key();
    postRef.child(thisKey);

    // console.log(answer);
    var $template = $('#template');
    var $answerList = $template.clone();
    $answerList.removeAttr('id');
    $answerList.attr("this_id", key);
    $answerList.children('.name').text(post.name);
    $answerList.children('.answer').text(post.answer);
    rows.push($answerList);


    $row.append(rows);
    });
  });
}
