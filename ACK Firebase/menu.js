var dishesDiv = $(".dishes");
var root = firebase.database().ref();
var dishesRef = root.child("Dishes");

dishesRef.on("value", onData);

function onData(data) {
    dishesDiv.empty();
    var dishes = data.val();
    var keys = Object.keys(dishes);
    for (var i = 0; i < keys.length; ++i) {
        var k = keys[i];
        var name = dishes[k].Name;
       var description = dishes[k].Description;
       var price = dishes[k].Price;
       var image = dishes[k].Image;
       console.log(name + description + price + image);
       var dishDiv = document.createElement('div');
       dishDiv.classList.add('dish');
       dishDiv.id = dishes[k].Name + " div";
       var foodDiv = document.createElement('div');
       foodDiv.classList.add('fooddiv');
       var subtitleDiv = document.createElement('div');
       subtitleDiv.classList.add('subtitle');
       dishDiv.append(foodDiv);
       dishDiv.append(subtitleDiv);

       var img = document.createElement('img');
       img.classList.add('food');
       img.id = image;
       foodDiv.append(img);
       $(img).attr("src",'images/' + image + '.jpg');

       var table = document.createElement('table');
       table.classList.add('details');
       subtitleDiv.append(table);

       var tr1 = document.createElement('tr');
       var tdTitle1 = document.createElement('td');
       tdTitle1.classList.add('title');
       tdTitle1.innerText = "Dish Name:";
       var td1 = document.createElement('td');
       td1.innerText = name;
       td1.id = name;
       tr1.append(tdTitle1);
       tr1.append(td1);
       table.append(tr1);

       var tr2 = document.createElement('tr');
       var tdTitle2 = document.createElement('td');
       tdTitle2.classList.add('title');
       tdTitle2.innerText = "Description:";
       var td2 = document.createElement('td');
       td2.innerText = description;
       td2.id = description;
       tr2.append(tdTitle2);
       tr2.append(td2);
       table.append(tr2);

       var tr3 = document.createElement('tr');
       var tdTitle3 = document.createElement('td');
       tdTitle3.classList.add('title');
       tdTitle3.innerText = "Price:";
       var td3 = document.createElement('td');
       td3.innerText = price;
       td3.id = price;
       tr3.append(tdTitle3);
       tr3.append(td3);
       table.append(tr3);

       var tr4 = document.createElement('tr');
       var tdQnt = document.createElement('td');
       tdQnt.classList.add('qnttd');
       var input = document.createElement('input');
       input.type = 'number';
       input.placeholder = 'Quantity';
       input.id = 'qnt';
       tdQnt.append(input);
       var tdBtn = document.createElement('td');
       var btn = document.createElement('button');
       btn.classList.add('cart');
       btn.type = 'button';
       btn.innerText = 'Add to Cart';
       var br = document.createElement('br');
       tdBtn.append(btn);
       tdBtn.append(br);
       tr4.append(tdQnt);
       tr4.append(tdBtn);


       table.append(tr4);

       dishesDiv.append(dishDiv);
       // dishesDiv.append(name + description + price + image)
    }
}

// dishesRef.on("child_added", addData);
//
// function addData(data) {
//
//     var dish = data.val();
//     // console.log(keys);
//     var name = dish.Name;
//     var description = dish.Description;
//     var price = dish.Price;
//     var image = dish.Image;
//
//     var dishDiv = document.createElement('div');
//     dishDiv.classList.add('dish');
//     dishDiv.id = dish.Name + " div";
//     var foodDiv = document.createElement('div');
//     foodDiv.classList.add('fooddiv');
//     var subtitleDiv = document.createElement('div');
//     subtitleDiv.classList.add('subtitle');
//     dishDiv.append(foodDiv);
//     dishDiv.append(subtitleDiv);
//
//     var img = document.createElement('img');
//     img.classList.add('food');
//     img.id = image;
//     foodDiv.append(img);
//     $(img).attr("src",'images/' + image + '.jpg');
//
//     var table = document.createElement('table');
//     table.classList.add('details');
//     subtitleDiv.append(table);
//
//     var tr1 = document.createElement('tr');
//     var tdTitle1 = document.createElement('td');
//     tdTitle1.classList.add('title');
//     tdTitle1.innerText = "Dish Name:";
//     var td1 = document.createElement('td');
//     td1.innerText = name;
//     td1.id = name;
//     tr1.append(tdTitle1);
//     tr1.append(td1);
//     table.append(tr1);
//
//     var tr2 = document.createElement('tr');
//     var tdTitle2 = document.createElement('td');
//     tdTitle2.classList.add('title');
//     tdTitle2.innerText = "Description:";
//     var td2 = document.createElement('td');
//     td2.innerText = description;
//     td2.id = description;
//     tr2.append(tdTitle2);
//     tr2.append(td2);
//     table.append(tr2);
//
//     var tr3 = document.createElement('tr');
//     var tdTitle3 = document.createElement('td');
//     tdTitle3.classList.add('title');
//     tdTitle3.innerText = "Price:";
//     var td3 = document.createElement('td');
//     td3.innerText = price;
//     td3.id = price;
//     tr3.append(tdTitle3);
//     tr3.append(td3);
//     table.append(tr3);
//
//     var tr4 = document.createElement('tr');
//     var tdQnt = document.createElement('td');
//     tdQnt.classList.add('qnttd');
//     var input = document.createElement('input');
//     input.type = 'number';
//     input.placeholder = 'Quantity';
//     input.id = 'qnt';
//     tdQnt.append(input);
//     var tdBtn = document.createElement('td');
//     var btn = document.createElement('button');
//     btn.classList.add('cart');
//     btn.type = 'button';
//     btn.innerText = 'Add to Cart';
//     var br = document.createElement('br');
//     tdBtn.append(btn);
//     tdBtn.append(br);
//     tr4.append(tdQnt);
//     tr4.append(tdBtn);
//
//
//     table.append(tr4);
//
//     menu.append(dishDiv);
// }
//
// dishesRef.on("child_changed", changeData);
//
// function changeData(data) {
//     var dish = data.val();
//     var name = dish.Name;
//     var description = dish.Description;
//     var price = dish.Price;
//     var image = dish.Image;
//     var tdName = $('#' + name);
//     tdName.innerText = name;
//     var tdDescription = $("#" + description);
//     tdDescription.innerText = description;
//     var tdPrice = $('#' + price);
//     tdPrice.innerText = price;
//     var tdPrice = $('#' + image);
//     tdPrice.innerText = price;
//
// }
//
// dishesRef.on("child_removed", removeData);
//
// function removeData(data) {
//     var dish = $("#" + data.Name + " div");
//     dish.remove();
//
//     // var dish = data.val();
//     // var name = dish.Name;
//     // var price = dish.Price;
//     // alert(name + ": " + price + " is removed");
// }
