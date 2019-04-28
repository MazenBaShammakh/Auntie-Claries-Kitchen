class Order {
    constructor(dish, price, quantity) {
        this.dish = dish;
        this.price = price;
        this.quantity = quantity;
    }
}

// array that stores all orders
var orders = [
    [
        "username1",
        // new Order(getDishName(), getDishPrice(), getQuantity
        new Order("Nasi Goreng Kunyit", 8, 2),
        new Order("Mi Goreng", 10, 1),
        new Date(2019, 4, 6)
    ],
    [
        "username2",
        new Order("Nasi Goreng Ayam", 3.2, 2),
        new Order("Mi Goreng", 5, 3),
        new Date(2019, 4, 7)
    ],
    [
        "username3",
        new Order("Nasi Goreng Ayam", 7.35, 2),
        new Order("Mi Goreng", 4, 1),
        new Date(2019,5,5)
    ]
]

function getDishName() {
    // get dish name from this card
}

function getDishPrice() {
    // get dish price from this card
}

// automatically generating today's sales
let x = 1;
let today = new Date(2019,5,5);
let todaysales = [];
for (let i = 0; i < orders.length; i++)
    if (orders[i][orders[i].length-1].getTime() === today.getTime())
        for (let j = 1; j < orders[i].length-1; ++j){
            todaysales.push("<tr><td>"+x+"</td><td>"+orders[i][j]['dish']+"</td><td>"+orders[i][j]['price']+"</td></tr>");
            x++;
        }
// $("#todaybtn").click (function() {
    todaysales.forEach(function(item) {
        console.log(item);
        $(".tbody").append(item);
    })
// })


// click view sales of weekly - day and month
$(".weeklyView").click(function(){
    var day = $("#weday").val();
    var month = $("#wemon").val();
    // var sales =
    $(".weeklySales").text(getOrderPriceW(day,month) +" RM Sold");
});

function getOrderPriceW(day,month) {
    let price = 0.0;
    let weekStart = new Date(2019,parseInt(month),parseInt(day));
    let weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    console.log(weekStart.getDate());
    console.log(weekEnd.getDate());
    for (let i = 0; i < orders.length; i++)
        if (orders[i][orders[i].length-1] >= weekStart && orders[i][orders[i].length-1] <= weekEnd)
            for (let j = 1; j < orders[i].length-1; ++j)
                price += orders[i][j]['price'] * orders[i][j]['quantity'];
    $("#weekend").text("To "+weekEnd.getDate() + "/"+(weekEnd.getMonth()+1)+"/"+weekEnd.getFullYear());
    // $("#dayend").text(weekEnd.getDate());
    // $("#monthend").text(weekEnd.getMonth() + 1);
    return price;
}

// click view sales of monthly - month
$(".monthlyView").click(function(){
    var month = $('#monthsel').val();
    // var sales =
    $(".monthlySales").text(getOrderPrice(month) + " RM Sold");
});

function getOrderPrice(month) {
    let price = 0.0;
    for (let i = 0; i < orders.length; i++)
        if (orders[i][orders[i].length-1].getMonth() == month)
            for (let j = 1; j < orders[i].length-1; ++j)
                price += orders[i][j]['price'] * orders[i][j]['quantity'];
    return price;
}
