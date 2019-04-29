var root = firebase.database().ref();
var userRef = root.child("users/");

$('#submit').click(function() {
    var name = $('#name');
    var username = $('#username');
    var email = $('#email');
    var password = $('#password');
    var repassword = $('#repassword');
    if (name.val() == "" || username.val() == "" || email.val() == "" || password.val() == "" || repassword.val() == "") {
        alert("Please fill up all details")
    }
    else {
        if (password.val() == repassword.val()) {
            writeUserData(name.val(),username.val(),email.val(),password.val());
            name.val("");
            username.val("");
            email.val("");
            password.val("");
            repassword.val("");
            alert("You're signed up. You can log in now");
        }
        else {
            alert("Password mismatch")
        }
    }
})


function writeUserData(name, username, email, password) {
  var id = firebase.database().ref('users/').push().key;
  firebase.database().ref('users/' + id).set({
    fullname: name,
    username: username,
    email : email,
    password : password
  });
}
