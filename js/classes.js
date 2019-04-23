class User {
    constructor(username, password, email, address, fullName) {
        this.email    = email;
        this.address  = address;
        this.username = username;
        this.password = password;
        this.fullName = fullName;
      
    }
}

class Dish{
    constructor(name, description, price, image) {
        this.name        = name;
        this.price       = price;
        this.image       = image;
        this.description = description;
      }
}

class Order{
    constructor(){
        this.dishes = []; // gets a pair of [Dish, quantity]
        this.username;
        this.status; // in cart, user confirmed, payed, admin confirmed, delivered;
        this.orderTimeStamp; // consists of the time and date

    }
}

class History{
    constructor(){
        this.orders = []; // an array of orders 
    }
}

class Auth{

}