var root = firebase.database().ref();
var userRef = root.child("users/");

$('#submit').click(function() {
    userRef.on("value", onData);
})


function onData(data) {
    var users = data.val();
    var keys = Object.keys(users);

    var username = $('#username');
    var password = $('#password');
    var found = false;
    if (username.val() == "" || password.val() == "") {
        alert("Please fill up all details")
    }
    else {
        for (var i = 0; i < keys.length; ++i) {
            var k = keys[i];
            var usernameCor = users[k].username;
            var passwordCor = users[k].password;
            if (password.val() == passwordCor && username.val() == usernameCor) {
                alert("Welcome, " + username.val());
                found = true;
                username.val("");
                password.val("");                
            }
        }
        if (!found) {
            alert("Wrong username or password");
        }
    }
}
