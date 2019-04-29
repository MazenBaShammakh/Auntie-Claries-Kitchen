var root = firebase.database().ref();
var msgRef = root.child("messages/");

$('#submit').click(function() {
    var name = $('#fname');
    var user = $('#lname');
    var msg = $('#subject');
    if (name.val() == "" || user.val() == "" || msg.val() == "") {
        alert("Please fill up all details")
    }
    else {
        writeUserData(name.val(),user.val(),msg.val());
        name.val("");
        user.val("");
        msg.val("");
        alert("Message has been sent");
    }
})


function writeUserData(name, user, msg) {
  var id = firebase.database().ref('messages/').push().key;
  firebase.database().ref('messages/' + id).set({
    actualname: name,
    username: user,
    message : msg
  });
}
