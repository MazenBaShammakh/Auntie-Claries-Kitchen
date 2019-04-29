var root = firebase.database().ref();
var msgRef = root.child("messages/");
var container = $('.container');

msgRef.on("value", valueData);

function valueData(data) {
    container.empty();
    var msgs = data.val();
    var keys = Object.keys(msgs);
    for (var i = 0; i < keys.length; ++i) {
        var k = keys[i];
        var name = msgs[k].actualname;
        var user = msgs[k].username;
        var msg = msgs[k].message;
        // console.log(name + user + msg);
        var li = document.createElement('li');
        li.innerText = "From " + name + ", ";
        var em = document.createElement('em');
        em.innerText = user;
        li.append(em);
        var p = document.createElement('p');
        var strong = document.createElement('strong');
        strong.innerText = msg;
        p.append(strong);
        var lbl = document.createElement('label');
        lbl.for = 'subject';
        lbl.innerText = 'Reply';
        var text = document.createElement('textarea');
        text.id = 'subject';
        text.placeholder = 'Reply to ' + user +  '...';
        text.style.height = '50px';
        var subdiv = document.createElement('div');
        subdiv.classList.add('subdiv');
        var submit = document.createElement('input');
        submit.type = 'submit';
        subdiv.append(submit);
        var msgDiv = document.createElement('div');
        msgDiv.classList.add('msg');
        msgDiv.append(li,p,lbl,text,subdiv);
        container.append(msgDiv);
        // <!-- <input type="submit" value="Submit"> -->
    }
}
