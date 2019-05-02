var dishesDiv = $(".dishes");
var root = firebase.database().ref();
var dishesRef = root.child("Dishes");

$("#add").click(function() {
    var name = prompt("Enter dish name: ");
    var desc = prompt("Enter dish description: ");
    var price = prompt("Enter dish price: ");
    var img = prompt("Enter image reference: ");
    if (name == "" || desc == "" || price == "" || img == "") {
        alert("Please fill up all details")
    }
    else {
        writeDishData(name,desc,price,img);
        alert("Dish has been added");
    }
})

function writeDishData(name, desc, price, img) {
  var id = firebase.database().ref('Dishes/').push().key;
  firebase.database().ref('Dishes/' + id).set({
    Name: name,
    Description: desc,
    Price: price,
    Image: img
  });
}

dishesRef.on("value", onData);

function onData(data) {
    dishesDiv.empty();
    var dishes = data.val();
    var keys = Object.keys(dishes);
    for (var i = 0; i < keys.length; ++i) {
        var k = keys[i];
        var name = " " + dishes[k].Name;
       var description = " " + dishes[k].Description;
       var price = " " + dishes[k].Price;
       var image = dishes[k].Image;
       // console.log(name + description + price + image);
       var dishDiv = document.createElement('div');
       dishDiv.classList.add('dish');
       dishDiv.id = dishes[k].Name + " div";
       var foodDiv = document.createElement('div');
       foodDiv.classList.add('img');
       var img = document.createElement('img');
       img.classList.add('food');
       img.id = image;
       $(img).attr("src",'images/' + image + '.jpg');
       foodDiv.append(img);
       dishDiv.append(foodDiv);

       var textDiv = document.createElement('div');
       textDiv.classList.add('text');
       dishDiv.append(textDiv);
       var pname = document.createElement('p');
       var pdesc = document.createElement('p');
       var pprice = document.createElement('p');
       var sname = document.createElement('span');
       sname.classList.add('title');
       sname.innerText = "Name:";
       pname.append(sname);
       pname.append(name);
       var sdesc = document.createElement('span');
       sdesc.classList.add('title');
       sdesc.innerText = "Description:";
       pdesc.append(sdesc);
       pdesc.append(description);
       var sprice = document.createElement('span');
       sprice.classList.add('title');
       sprice.innerText = "Price:";
       pprice.append(sprice);
       pprice.append(price);
        var pdis = document.createElement('p');
        var sdis = document.createElement('span');
        sdis.classList.add('title');
        sdis.innerText = "Discount for 3 dishes:";
        pdis.append(sdis);
        pdis.append(" 10%");
       textDiv.append(pname);
       textDiv.append(pdesc);
       textDiv.append(pprice);
       textDiv.append(pdis);



       // dishDiv.append()


       dishesDiv.append(dishDiv);
       // dishesDiv.append(name + description + price + image)
    }
}
